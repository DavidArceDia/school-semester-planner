import { Course, buildCourseFromForm, addCourseTabListener } from "./course.js";
import {
  toggleAddCourseForm,
  toggleAddCoursePrompt,
  buildLocallyStoredCourses,
} from "./DOM.js";
import {
  courseArray,
  updateLocalStorageFromArray,
  displayCourse,
} from "./index.js";
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

const doesCourseAlreadyExist = (courseName) => {
  for (let i = 0; i < courseArray.length; i++) {
    if (localStorage.getItem(`course${i}Name`) == courseName) {
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
        courseName.value = "";
        courseName.setAttribute("placeholder", "*This course already exists");
      }
    } else {
      if (doesCourseAlreadyExist(courseName.value) == true) {
        courseName.value = "";
        courseName.setAttribute("placeholder", "*This course already exists");
      } else {
        courseName.setAttribute("placeholder", "");
        courseCredit.setAttribute("placeholder", "");

        let course = buildCourseFromForm();

        //Pushes course to array, iterates through array and updates localStorage
        courseArray.push(course);
        updateLocalStorageFromArray();

        //deletes everything in the courseList and builds it all again
        document.getElementById("courseList").innerHTML = "";
        for (
          let courseIndex = 0;
          courseIndex < courseArray.length;
          courseIndex++
        ) {
          let courseElement = displayCourse(courseArray[courseIndex]);

          //adds the tab functionality to the newly build and displayed course.
          //CourseElement (from displayCourse) is the nav element.
          addCourseTabListener(courseElement);
        }

        toggleAddCourseForm();
        toggleAddCoursePrompt();

        document.getElementById("addCourseForm").reset();
      }
    }
  });
};
