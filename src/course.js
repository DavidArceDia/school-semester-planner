import { taskAdditionController } from "./DOM.js";
export { Course, courseTabController };

const Course = (courseName, courseCredit) => {
  const getCourseName = () => courseName;
  const getCourseCredit = () => courseCredit;
  const taskArray = [];
  const getTaskArray = () => taskArray;
  return { getCourseName, getCourseCredit, taskArray };
};

const courseTabController = (() => {
  const contentDiv = document.getElementById("content");

  const changeTabs = (e) => {
    let target = e.target;
    //Add Task Button
    const addTaskPrompt = document.createElement("button");
    addTaskPrompt.setAttribute("id", "addTaskPrompt");
    addTaskPrompt.classList.add("active");
    addTaskPrompt.innerHTML = "+ Add Task";
    contentDiv.prepend(addTaskPrompt);

    //Title
    const courseTitle = document.createElement("h");
    courseTitle.setAttribute("id", "courseTitle");
    courseTitle.innerHTML = target.innerHTML;
    contentDiv.prepend(courseTitle);

    //Tasklist
    const taskList = document.createElement("div");
    taskList.setAttribute("id", "taskList");
    contentDiv.append(taskList);

    //Add Event listener to the Task Button
    taskAdditionController.addTaskPromptOnClick();

    //Build all the courses stored in localstorage.
    taskAdditionController.displayLocallyStoredTasks(courseTitle.innerHTML);
  };

  const courseTabListener = (course) => {
    if (course != undefined) {
      course.addEventListener("click", (e) => {
        contentDiv.innerHTML = "";
        changeTabs(e);
      });
    }
  };
  return { courseTabListener };
})();
