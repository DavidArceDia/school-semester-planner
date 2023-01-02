import { courseArray } from "./index.js";

export { addDeleteCourseOnClick };

const deleteCourse = (event) => {
  let title = event.target.parentNode.firstChild.innerText;

  //Finding the course Index
  let courseIndex = 0;
  for (let i = 0; i < courseArray.length; i++) {
    if (title == courseArray[i].getCourseName()) {
      courseIndex = i;
    }
  }

  //delete course from local storage
  localStorage.removeItem(`course${courseIndex}Name`);
  localStorage.removeItem(`course${courseIndex}Credit`);
  for (let i = 0; i < courseArray[courseIndex].taskArray.length; i++) {
    localStorage.removeItem(`course${courseIndex}Task${i}Name`);
    localStorage.removeItem(`course${courseIndex}Task${i}DueDate`);
    localStorage.removeItem(`course${courseIndex}Task${i}Weight`);
    localStorage.removeItem(`course${courseIndex}Task${i}Mark`);
  }
  //shift localstorage
  for (let i = courseIndex; i < courseArray.length + 1; i++) {
    if (localStorage.getItem(`course${i + 1}Name`) != undefined) {
      console.log("hello");

      localStorage.setItem(
        `course${i}Name`,
        localStorage.getItem(`course${i + 1}Name`)
      );

      localStorage.setItem(
        `course${i}Credit`,
        localStorage.getItem(`course${i + 1}Credit`)
      );

      for (let j = 0; j < courseArray[i + 1].taskArray.length; j++) {
        localStorage.setItem(
          `course${i}Task${j}Name`,
          localStorage.getItem(`course${i + 1}Task${j}Name`)
        );
        localStorage.setItem(
          `course${i}Task${j}DueDate`,
          localStorage.getItem(`course${i + 1}Task${j}DueDate`)
        );
        localStorage.setItem(
          `course${i}Task${j}Weight`,
          localStorage.getItem(`course${i + 1}Task${j}Weight`)
        );
        localStorage.setItem(
          `course${i}Task${j}Mark`,
          localStorage.getItem(`course${i + 1}Task${j}Mark`)
        );
      }
    } else {
      //delete course from local storage
      localStorage.removeItem(`course${i}Name`);
      localStorage.removeItem(`course${i}Credit`);
      for (let j = 0; j < courseArray[courseIndex].taskArray.length; j++) {
        localStorage.removeItem(`course${i}Task${j}Name`);
        localStorage.removeItem(`course${i}Task${j}DueDate`);
        localStorage.removeItem(`course${i}Task${j}Weight`);
        localStorage.removeItem(`course${i}Task${j}Mark`);
      }
    }
  }

  // //determine the last course in local storage's index
  // let lastCourseIndex = 0;
  // while (localStorage.getItem(`course${lastCourseIndex}Name` != undefined)) {
  //   lastCourseIndex++;
  // }

  // //delete course from local storage
  // localStorage.removeItem(`course${lastCourseIndex}Name`);
  // localStorage.removeItem(`course${lastCourseIndex}Credit`);
  // for (let i = 0; i < courseArray[lastCourseIndex].taskArray.length; i++) {
  //   localStorage.removeItem(`course${lastCourseIndex}Task${i}Name`);
  //   localStorage.removeItem(`course${lastCourseIndex}Task${i}DueDate`);
  //   localStorage.removeItem(`course${lastCourseIndex}Task${i}Weight`);
  //   localStorage.removeItem(`course${lastCourseIndex}Task${i}Mark`);
  // }

  // delete course from array
  let tempCourseIndex = courseIndex;
  while (tempCourseIndex < courseArray.length) {
    if (courseArray[tempCourseIndex + 1] != undefined) {
      courseArray[tempCourseIndex] = courseArray[tempCourseIndex + 1];
      tempCourseIndex++;
    } else {
      courseArray.pop();
    }
    tempCourseIndex++;
  }
  // for (let i = 0; i < courseArray.length; i++) {
  //   console.log(
  //     courseArray.length,
  //     courseArray[i].getCourseName(),
  //     courseArray[i].getCourseCredit()
  //   );
  // }

  //delete course from nav
  let courseList = Array.from(document.getElementsByClassName("course"));
  courseList.forEach((course) => {
    if (course.innerText == title) {
      course.remove();
    }
  });

  location.reload();
};

const addDeleteCourseOnClick = () => {
  const deleteCourseButton = document.getElementById("deleteCourseButton");
  deleteCourseButton.addEventListener("click", (event) => {
    deleteCourse(event);
  });
};
