import { courseArray } from "./index.js";
export { Task, addTaskListeners };

const Task = (taskName, taskDueDate, taskWeight, taskMark, taskPriority) => {
  return {
    taskName,
    taskDueDate,
    taskWeight,
    taskMark,
    taskPriority,
  };
};

const addTaskListeners = (elements) => {
  if (elements.taskCheckbox != undefined) {
    elements.taskCheckbox.addEventListener("click", () => {
      elements.taskCheckbox.classList.toggle("checked");
    });
  }
};
