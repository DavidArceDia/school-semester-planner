import { Task, addTaskListeners } from "./task.js";
import {
  courseArray,
  updateLocalStorageFromArray,
  displayTask,
} from "./index.js";
import { determineCourseIndex } from "./course.js";
export { cancelAddTask, addTask, addTaskPromptOnClick };

const toggleAddTaskForm = () => {
  const addTaskForm = document.getElementById("addTaskForm");
  addTaskForm.classList.toggle("active");
};
const toggleAddTaskModal = () => {
  const addTaskModal = document.getElementById("addTaskModal");
  addTaskModal.classList.toggle("active");

  const addTaskForm = document.getElementById("addTaskForm");
  addTaskForm.classList.toggle("active");

  const overlay = document.getElementById("overlay");
  overlay.classList.toggle("active");
};
const addTaskPromptOnClick = () => {
  const addTaskPrompt = document.getElementById("addTaskPrompt");
  addTaskPrompt.addEventListener("click", () => {
    toggleAddTaskForm();
    toggleAddTaskModal();
  });
};
const cancelAddTask = () => {
  const cancelAddTaskButton = document.getElementById("cancelAddTaskButton");

  cancelAddTaskButton.addEventListener("click", () => {
    toggleAddTaskForm();
    toggleAddTaskModal();

    document.getElementById("addTaskForm").reset();
    document.getElementById("taskName").setAttribute("placeholder", "");
  });
};
const buildTaskFromForm = () => {
  let taskName = document.getElementById("taskName").value;
  let taskDueDate = document.getElementById("taskDueDate").value;
  let taskWeight = document.getElementById("taskWeight").value;
  let taskMark = document.getElementById("taskMark").value;
  let taskPriority = document.getElementById("taskPriority").value;
  let task = Task(taskName, taskDueDate, taskWeight, taskMark, taskPriority);

  return task;
};
const doesTaskAlreadyExist = (taskName, event) => {
  let courseName =
    event.target.parentElement.parentElement.parentElement.parentElement
      .parentElement.firstElementChild.nextElementSibling.firstElementChild
      .firstElementChild.innerText;

  console.log(courseName);

  for (let i = 0; i < courseArray.length; i++) {
    if (localStorage.getItem(`course${i}Name`) == courseName) {
      for (let j = 0; j < courseArray[i].taskArray.length; j++) {
        if (localStorage.getItem(`course${i}Task${j}Name`) == taskName) {
          return true;
        }
      }
    }
  }
};

const addTask = () => {
  const addTaskButton = document.getElementById("addTaskButton");

  addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    const taskName = document.getElementById("taskName");

    if (taskName.validity.valueMissing) {
      taskName.setAttribute("placeholder", "This input is required");
    }
    if (doesTaskAlreadyExist(taskName.value, event) == true) {
      taskName.value = "";
      taskName.setAttribute("placeholder", "*This task already exists");
    } else {
      taskName.setAttribute("placeholder", "");

      let task = buildTaskFromForm();
      let courseIndex = determineCourseIndex();

      //Pushes task to the correct course's task array.
      courseArray[courseIndex].taskArray.push(task);

      updateLocalStorageFromArray();

      //deletes everything in the taskList and builds it all again
      document.getElementById("taskList").innerHTML = "";
      for (
        let taskIndex = 0;
        taskIndex < courseArray[courseIndex].taskArray.length;
        taskIndex++
      ) {
        let taskElements = displayTask(
          courseArray[courseIndex].taskArray[taskIndex]
        );
        //adds the tab functionality to the newly build and displayed task.
        //taskElements (from displaytask) is the nav element.
        addTaskListeners(taskElements);
      }

      toggleAddTaskForm();
      toggleAddTaskModal();

      document.getElementById("addTaskForm").reset();
    }
  });
};
