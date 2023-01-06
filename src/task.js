import {
  courseArray,
  updateLocalStorageFromArray,
  updateCourseArrayFromLocalStorage,
} from "./index.js";
export { Task, addTaskListeners };

const Task = (
  taskName,
  taskDueDate,
  taskWeight,
  taskMark,
  taskPriority,
  taskCompletion = "false"
) => {
  return {
    taskName,
    taskDueDate,
    taskWeight,
    taskMark,
    taskPriority,
    taskCompletion,
  };
};

const addTaskListeners = (elements) => {
  if (elements.taskCheckbox != undefined) {
    elements.taskCheckbox.addEventListener("click", (e) => {
      //find the taskName and CourseName
      let taskName = e.target.nextSibling.innerText;
      let courseName =
        e.target.parentElement.parentElement.parentElement.firstChild.firstChild
          .innerText;

      //toggle the checked status
      elements.taskCheckbox.classList.toggle("checked");

      //find the right course and task#, then change its complation value
      for (let i = 0; i < courseArray.length; i++) {
        if (localStorage.getItem(`course${i}Name`) == courseName) {
          for (let j = 0; j < courseArray[i].taskArray.length; j++) {
            if (localStorage.getItem(`course${i}Task${j}Name`) == taskName) {
              if (
                localStorage.getItem(`course${i}Task${j}Completion`) == `false`
              ) {
                localStorage.setItem(`course${i}Task${j}Completion`, `true`);
              } else {
                localStorage.setItem(`course${i}Task${j}Completion`, `false`);
              }
              updateCourseArrayFromLocalStorage();
            }
          }
        }
      }
    });
  }

  if (elements.taskDeleteButton != undefined) {
    elements.taskDeleteButton.addEventListener("click", (e) => {
      //find the taskName and CourseName
      let taskName =
        e.target.parentElement.firstChild.nextElementSibling.innerText;
      let courseName =
        e.target.parentElement.parentElement.parentElement.firstChild.firstChild
          .innerText;

      let courseIndex = 0;
      for (let i = 0; i < courseArray.length; i++) {
        if (courseName == courseArray[i].courseName) {
          courseIndex = i;
        }
      }

      let taskIndex = 0;
      for (let i = 0; i < courseArray[courseIndex].taskArray.length; i++) {
        if (taskName == courseArray[courseIndex].taskArray[i].taskName) {
          taskIndex = i;
        }
      }

      console.log(courseIndex, taskIndex);
      //delete from localStorage
      localStorage.removeItem(`course${courseIndex}Task${taskIndex}Name`);
      localStorage.removeItem(`course${courseIndex}Task${taskIndex}DueDate`);
      localStorage.removeItem(`course${courseIndex}Task${taskIndex}Weight`);
      localStorage.removeItem(`course${courseIndex}Task${taskIndex}Mark`);
      localStorage.removeItem(`course${courseIndex}Task${taskIndex}Priority`);
      localStorage.removeItem(`course${courseIndex}Task${taskIndex}Completion`);
      for (
        let j = taskIndex;
        j < courseArray[courseIndex].taskArray.length;
        j++
      ) {
        if (
          localStorage.getItem(`course${courseIndex}Task${j + 1}Name`) !=
          undefined
        ) {
          console.log(
            localStorage.getItem(`course${courseIndex}Task${j + 1}Name`)
          );
          console.log("hello");
          localStorage.setItem(
            `course${courseIndex}Task${j}Name`,
            localStorage.getItem(`course${courseIndex}Task${j + 1}Name`)
          );
          localStorage.setItem(
            `course${courseIndex}Task${j}DueDate`,
            localStorage.getItem(`course${courseIndex}Task${j + 1}DueDate`)
          );
          localStorage.setItem(
            `course${courseIndex}Task${j}Weight`,
            localStorage.getItem(`course${courseIndex}Task${j + 1}Weight`)
          );
          localStorage.setItem(
            `course${courseIndex}Task${j}Mark`,
            localStorage.getItem(`course${courseIndex}Task${j + 1}Mark`)
          );
          localStorage.setItem(
            `course${courseIndex}Task${j}Priority`,
            localStorage.getItem(`course${courseIndex}Task${j + 1}Priority`)
          );
          localStorage.setItem(
            `course${courseIndex}Task${j}Completion`,
            localStorage.getItem(`course${courseIndex}Task${j + 1}Completion`)
          );
        } else {
          localStorage.removeItem(`course${courseIndex}Task${j}Name`);
          localStorage.removeItem(`course${courseIndex}Task${j}DueDate`);
          localStorage.removeItem(`course${courseIndex}Task${j}Weight`);
          localStorage.removeItem(`course${courseIndex}Task${j}Mark`);
          localStorage.removeItem(`course${courseIndex}Task${j}Priority`);
          localStorage.removeItem(`course${courseIndex}Task${j}Completion`);
        }
      }

      // delete task from array
      updateCourseArrayFromLocalStorage();

      //delete course from nav
      let taskList = Array.from(document.getElementsByClassName("task"));
      taskList.forEach((task) => {
        if (task.firstElementChild.nextElementSibling.innerText == taskName) {
          task.remove();
        }
      });
    });
  }
};
