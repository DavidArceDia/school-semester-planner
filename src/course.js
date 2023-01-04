import { addTaskPromptOnClick } from "./taskAddition";
import { addDeleteCourseOnClick } from "./courseDeletion.js";
import {} from "./DOM.js";
import { addTaskListeners } from "./task.js";
import { courseArray, displayTask } from "./index";
export {
  Course,
  addCourseTabListener,
  buildCourseFromForm,
  determineCourseIndex,
};

const Course = (courseName, courseCredit) => {
  const taskArray = [];

  // const getCourseName = () => courseName;
  // const getCourseCredit = () => courseCredit;

  return {
    courseName,
    courseCredit,
    taskArray,
    // getCourseName,
    // getCourseCredit,
    // taskArray,
  };
};

const determineCourseIndex = () => {
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

//Building a course from form
const buildCourseFromForm = () => {
  let courseName = document.getElementById("courseName").value;
  let courseCredit = document.getElementById("courseCredit").value;
  let course = Course(courseName, courseCredit);

  return course;
};

const displayNewTab = (target) => {
  const contentDiv = document.getElementById("content");

  const courseTitleDiv = document.createElement("div");
  courseTitleDiv.setAttribute("id", "courseTitleDiv");

  //Title
  const courseTitle = document.createElement("h");
  courseTitle.setAttribute("id", "courseTitle");
  courseTitle.innerHTML = target.innerHTML;
  courseTitleDiv.append(courseTitle);

  //DeleteCourseButton
  const deleteCourseButton = document.createElement("button");
  deleteCourseButton.setAttribute("id", "deleteCourseButton");
  deleteCourseButton.innerHTML = "Delete";
  courseTitleDiv.append(deleteCourseButton);

  contentDiv.append(courseTitleDiv);

  //Add Task Button
  const addTaskPrompt = document.createElement("button");
  addTaskPrompt.setAttribute("id", "addTaskPrompt");
  addTaskPrompt.classList.add("active");
  addTaskPrompt.innerHTML = "+ Add Task";
  contentDiv.append(addTaskPrompt);

  //Tasklist
  const taskList = document.createElement("div");
  taskList.setAttribute("id", "taskList");
  contentDiv.append(taskList);
};

const contentDiv = document.getElementById("content");

const changeTabs = (e) => {
  let target = e.target;

  //Displays title, addTaskPrompt, and taskList div for course tabs
  displayNewTab(target);

  //add Event listener to the deleteCourse Button
  addDeleteCourseOnClick();

  //Add Event listener to the addTask Button
  addTaskPromptOnClick();

  let courseIndex = determineCourseIndex();

  for (
    let taskIndex = 0;
    taskIndex < courseArray[courseIndex].taskArray.length;
    taskIndex++
  ) {
    let taskElements = displayTask(
      courseArray[courseIndex].taskArray[taskIndex]
    );
    addTaskListeners(taskElements);
  }
};

const addCourseTabListener = (course) => {
  if (course != undefined) {
    course.addEventListener("click", (e) => {
      contentDiv.innerHTML = "";
      changeTabs(e);
    });
  }
};
