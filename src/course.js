import {
  addTaskPromptOnClick,
  displayLocallyStoredTasks,
} from "./taskAddition";
import { addDeleteCourseOnClick } from "./courseDeletion.js";
import { buildNewTab } from "./DOM.js";
export { Course, addCourseTabListener, buildCourseFromForm };

const Course = (courseName, courseCredit) => {
  const getCourseName = () => courseName;
  const getCourseCredit = () => courseCredit;
  const taskArray = [];
  const getTaskArray = () => taskArray;
  return { getCourseName, getCourseCredit, taskArray };
};

//Building a course from form
const buildCourseFromForm = () => {
  let courseName = document.getElementById("courseName").value;
  let courseCredit = document.getElementById("courseCredit").value;
  let course = Course(courseName, courseCredit);

  return course;
};

const contentDiv = document.getElementById("content");

const changeTabs = (e) => {
  let target = e.target;

  buildNewTab(target);

  //add Event listener to the deleteCourse Button
  addDeleteCourseOnClick();

  //Add Event listener to the addTask Button
  addTaskPromptOnClick();

  //Build all the courses stored in localstorage.
  displayLocallyStoredTasks();
};

const addCourseTabListener = (course) => {
  if (course != undefined) {
    course.addEventListener("click", (e) => {
      contentDiv.innerHTML = "";
      changeTabs(e);
    });
  }
};
