import { Course, buildCourseFromForm, addCourseTabListener } from "./course.js";
import {
  toggleAddCourseForm,
  toggleAddCoursePrompt,
  buildLocallyStoredCourses,
} from "./DOM.js";
import { courseArray } from "./index.js";
export { displayLocallyStoredCourses, addCourse };

const displayLocallyStoredCourses = () => {
  for (let courseIndex = 0; courseIndex < 50; courseIndex++) {
    while (localStorage.getItem(`course${courseIndex}Name`) != null) {
      let courseElement = buildLocallyStoredCourses(courseIndex);

      //Add locally stored courses to the array
      let courseName = localStorage.getItem(`course${courseIndex}Name`);
      let courseCredit = localStorage.getItem(`course${courseIndex}Credit`);
      let course = Course(courseName, courseCredit);
      courseArray.push(course);

      //From course.js, listen for click and run functions that display the right page.
      addCourseTabListener(courseElement);
      courseIndex++;
    }
  }
};

//Displaying a new course. Course tab event listener is added here from course.js
const displayCourse = (course) => {
  const courseList = document.getElementById("courseList");
  const courseElement = document.createElement("button");
  courseElement.classList.add("course");
  courseElement.innerHTML = `${course.getCourseName()}`;
  courseList.appendChild(courseElement);

  return courseElement;
};

const updateCoursesLocalStorage = () => {
  courseArray.forEach((course, index) => {
    localStorage.setItem(`course${index}Name`, `${course.getCourseName()}`);
    localStorage.setItem(`course${index}Credit`, `${course.getCourseCredit()}`);
  });
};

const doesCourseAlreadyExist = (courseName) => {
  for (let i = 0; i < courseArray.length; i++) {
    if (courseArray[i].getCourseName() == courseName) {
      return true;
    }
  }
};

//Adding a course
const addCourse = () => {
  const addCourseButton = document.getElementById("addCourseButton");
  addCourseButton.addEventListener("click", (event) => {
    event.preventDefault();

    const courseName = document.getElementById("courseName");
    const courseCredit = document.getElementById("courseCredit");

    //The following if statements are the form validation, checking for input as well as no courseName duplicates.
    if (
      courseName.validity.valueMissing &&
      courseCredit.validity.valueMissing
    ) {
      courseName.setAttribute("placeholder", "*This input is required");
      courseCredit.setAttribute("placeholder", "*This input is required");
    } else if (courseName.validity.valueMissing) {
      courseName.setAttribute("placeholder", "*This input is required");
    } else if (courseCredit.validity.valueMissing) {
      courseCredit.setAttribute("placeholder", "*This input is required");
      if (doesCourseAlreadyExist(courseName.value) == true) {
        console.log(courseName.value);
        courseName.value = "";
        courseName.setAttribute("placeholder", "*This course already exists");
      }
    } else if (
      !courseName.validity.valueMissing &&
      !courseCredit.validity.valueMissing
    ) {
      if (doesCourseAlreadyExist(courseName.value) == true) {
        console.log(courseName.value);
        courseName.value = "";
        courseName.setAttribute("placeholder", "*This course already exists");
      }
    } else {
      courseName.setAttribute("placeholder", "");
      courseCredit.setAttribute("placeholder", "");

      let course = buildCourseFromForm();
      courseArray.push(course);
      let courseElement = displayCourse(course);

      //adds the tab functionality to the newly build and displayed course.
      //CourseElement (from displayCourse) is the nav element.
      addCourseTabListener(courseElement);

      //Iterates through courseArray and updates localstorage.
      updateCoursesLocalStorage();

      toggleAddCourseForm();
      toggleAddCoursePrompt();

      document.getElementById("addCourseForm").reset();
    }
  });
};
