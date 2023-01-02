import { Task } from "./task.js";
import { courseArray } from "./index.js";
export {
  cancelAddTask,
  addTask,
  addTaskPromptOnClick,
  displayLocallyStoredTasks,
};

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
  });
};

const buildTask = () => {
  let taskName = document.getElementById("taskName").value;
  let taskDueDate = document.getElementById("taskDueDate").value;
  let taskWeight = document.getElementById("taskWeight").value;
  let taskMark = document.getElementById("taskMark").value;
  let task = Task(taskName, taskDueDate, taskWeight, taskMark);

  return task;
};

const determineCourse = () => {
  for (let courseIndex = 0; courseIndex <= courseArray.length; courseIndex++) {
    if (document.getElementById("courseTitle") == null) {
      return;
    }
    if (
      document.getElementById("courseTitle").innerHTML ==
      localStorage.getItem(`course${courseIndex}Name`)
    ) {
      return courseIndex;
    }
  }
};

const displayLocallyStoredTasks = () => {
  let courseTitle = document.getElementById("courseTitle").innerText;
  //finding the course's index
  let courseIndex = 0;
  for (let i = 0; i < courseArray.length; i++) {
    if (courseArray[i].getCourseName() == courseTitle) {
      courseIndex = i;
    }
  }

  for (let i = 0; i < 50; i++) {
    while (localStorage.getItem(`course${courseIndex}Task${i}Name`) != null) {
      // Build locally stored courses on the DOM
      const taskList = document.getElementById("taskList");
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");

      const taskCheckbox = document.createElement("button");
      taskCheckbox.classList.add("taskCheckbox");
      taskDiv.append(taskCheckbox);

      const taskName = document.createElement("p");
      taskName.classList.add("taskName");
      taskName.innerHTML = `${localStorage.getItem(
        `course${courseIndex}Task${i}Name`
      )}`;
      taskDiv.append(taskName);

      const taskDueDate = document.createElement("p");
      taskDueDate.classList.add("taskDueDate");
      taskDueDate.innerHTML = `${localStorage.getItem(
        `course${courseIndex}Task${i}DueDate`
      )}`;
      taskDiv.append(taskDueDate);

      const taskWeight = document.createElement("p");
      taskWeight.classList.add("taskWeight");
      taskWeight.innerHTML = `${localStorage.getItem(
        `course${courseIndex}Task${i}Weight`
      )}%`;
      taskDiv.append(taskWeight);

      const taskMark = document.createElement("p");
      taskMark.classList.add("taskMark");
      taskMark.innerHTML = `${localStorage.getItem(
        `course${courseIndex}Task${i}Mark`
      )}%`;
      taskDiv.append(taskMark);

      taskList.append(taskDiv);

      // //Add locally stored tasks to the array
      let taskN = localStorage.getItem(`course${courseIndex}Task${i}Name`);
      let taskD = localStorage.getItem(`course${courseIndex}Task${i}DueDate`);
      let taskW = localStorage.getItem(`course${courseIndex}Task${i}Weight`);
      let taskM = localStorage.getItem(`course${courseIndex}Task${i}Mark`);
      let task = Task(taskN, taskD, taskW, taskM);
      courseArray[courseIndex].taskArray.push(task);

      i++;
    }
  }
};

const displayTask = (task) => {
  const taskList = document.getElementById("taskList");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskCheckbox = document.createElement("button");
  taskCheckbox.classList.add("taskCheckbox");
  taskDiv.append(taskCheckbox);

  const taskName = document.createElement("p");
  taskName.classList.add("taskName");
  taskName.innerHTML = `${task.getTaskName()}`;
  taskDiv.append(taskName);

  const taskDueDate = document.createElement("p");
  taskDueDate.classList.add("taskDueDate");
  taskDueDate.innerHTML = `${task.getTaskDueDate()}`;
  taskDiv.append(taskDueDate);

  const taskWeight = document.createElement("p");
  taskWeight.classList.add("taskWeight");
  taskWeight.innerHTML = `${task.getTaskWeight()}%`;
  taskDiv.append(taskWeight);

  const taskMark = document.createElement("p");
  taskMark.classList.add("taskMark");
  taskMark.innerHTML = `${task.getTaskMark()}%`;
  taskDiv.append(taskMark);

  taskList.append(taskDiv);
};

const addTask = () => {
  const addTaskButton = document.getElementById("addTaskButton");

  addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();

    let task = buildTask();

    let courseIndex = determineCourse();

    //Pushes task to the correct course's task array.
    courseArray[courseIndex].taskArray.push(task);
    //Now add to local storage:
    courseArray[courseIndex].taskArray.forEach((task, index) => {
      localStorage.setItem(
        `course${courseIndex}Task${index}Name`,
        `${task.getTaskName()}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${index}DueDate`,
        `${task.getTaskDueDate()}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${index}Weight`,
        `${task.getTaskWeight()}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${index}Mark`,
        `${task.getTaskMark()}`
      );
    });

    displayTask(task);

    // //First clear the taskList, then display all the tasks.
    // document.getElementById("taskList").innerHTML = "";

    // for (
    //   let taskIndex = 0;
    //   taskIndex < courseArray[courseIndex].taskArray.length;
    //   taskIndex++
    // ) {
    //   displayTask(courseIndex, taskIndex);
    // }

    toggleAddTaskForm();
    toggleAddTaskModal();

    document.getElementById("addTaskForm").reset();
  });
};
