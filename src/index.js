import "./style.css";
import homeButtonImage from "./homeButton.jpg";

import { displayLocallyStoredCourses, addCourse } from "./courseAddition.js";
import { cancelAddTask, addTask } from "./taskAddition.js";
import { Task, addTaskListeners } from "./task";

import { Course, addCourseTabListener } from "./course.js";
import { addCoursePromptOnClick, cancelAddCourse } from "./DOM.js";
export {
  courseArray,
  updateLocalStorageFromArray,
  updateCourseArrayFromLocalStorage,
  displayTask,
  displayCourse,
};

const homeButton = new Image();
homeButton.src = homeButtonImage;
homeButton.setAttribute("id", "homeButtonButton");
document.getElementById("homeButton").appendChild(homeButton);

const courseArray = [];

const updateCourseArrayFromLocalStorage = () => {
  //for all locally stored courses
  for (let courseIndex = 0; courseIndex < 50; courseIndex++) {
    //While a course still exists at this courseIndex,
    while (localStorage.getItem(`course${courseIndex}Name`) != null) {
      //Build and add locally stored courses to the array
      let courseName = localStorage.getItem(`course${courseIndex}Name`);
      let courseCredit = localStorage.getItem(`course${courseIndex}Credit`);
      let course = Course(courseName, courseCredit);
      //Replace the current course with the updated one
      courseArray[courseIndex] = course;
      //for all of this course's tasks
      for (let taskIndex = 0; taskIndex < 200; taskIndex++) {
        //While a task still exists at this courseIndex and at this taskIndex
        while (
          localStorage.getItem(`course${courseIndex}Task${taskIndex}Name`) !=
          null
        ) {
          //Build and add locally stored tasks to the appropriate course in the array
          let name = localStorage.getItem(
            `course${courseIndex}Task${taskIndex}Name`
          );
          let dueDate = localStorage.getItem(
            `course${courseIndex}Task${taskIndex}DueDate`
          );
          let weight = localStorage.getItem(
            `course${courseIndex}Task${taskIndex}Weight`
          );
          let mark = localStorage.getItem(
            `course${courseIndex}Task${taskIndex}Mark`
          );
          let priority = localStorage.getItem(
            `course${courseIndex}Task${taskIndex}Priority`
          );
          let completion = localStorage.getItem(
            `course${courseIndex}Task${taskIndex}Completion`
          );
          let task = Task(name, dueDate, weight, mark, priority, completion);
          courseArray[courseIndex].taskArray.push(task);
          taskIndex++;
        }
        //From course.js, listen for click and run functions that display the right page.
      }
      courseIndex++;
    }
  }
};

const updateLocalStorageFromArray = () => {
  courseArray.forEach((course, courseIndex) => {
    localStorage.setItem(`course${courseIndex}Name`, `${course.courseName}`);
    localStorage.setItem(
      `course${courseIndex}Credit`,
      `${course.courseCredit}`
    );
    course.taskArray.forEach((task, taskIndex) => {
      localStorage.setItem(
        `course${courseIndex}Task${taskIndex}Name`,
        `${task.taskName}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${taskIndex}DueDate`,
        `${task.taskDueDate}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${taskIndex}Weight`,
        `${task.taskWeight}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${taskIndex}Mark`,
        `${task.taskMark}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${taskIndex}Priority`,
        `${task.taskPriority}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${taskIndex}Completion`,
        `${task.taskCompletion}`
      );
    });
  });
};

const displayCourse = (course) => {
  const courseList = document.getElementById("courseList");
  const courseElement = document.createElement("button");
  courseElement.classList.add("course");
  courseElement.innerHTML = `${course.courseName}`;
  courseList.appendChild(courseElement);

  return courseElement;
};

const displayTask = (task) => {
  const taskList = document.getElementById("taskList");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskCheckbox = document.createElement("button");
  taskCheckbox.classList.add("taskCheckbox");
  taskDiv.append(taskCheckbox);

  if (task.taskPriority == "high") {
    taskCheckbox.classList.add("highPriority");
  } else if (task.taskPriority == "medium") {
    taskCheckbox.classList.add("mediumPriority");
  } else if (task.taskPriority == "low") {
    taskCheckbox.classList.add("lowPriority");
  } else {
  }
  if (task.taskCompletion == "true") {
    taskCheckbox.classList.add("checked");
  } else if (
    task.taskCompletion == "false" &&
    taskCheckbox.classList.contains("checked")
  ) {
    taskCheckbox.remove("checked");
  } else {
  }

  const taskName = document.createElement("p");
  taskName.classList.add("taskName");
  taskName.innerHTML = `${task.taskName}`;
  taskDiv.append(taskName);

  const taskDueDate = document.createElement("p");
  taskDueDate.classList.add("taskDueDate");
  taskDueDate.innerHTML = `${task.taskDueDate}`;
  taskDiv.append(taskDueDate);

  const taskWeight = document.createElement("p");
  taskWeight.classList.add("taskWeight");
  taskWeight.innerHTML = `${task.taskWeight}%`;
  taskDiv.append(taskWeight);

  const taskMark = document.createElement("p");
  taskMark.classList.add("taskMark");
  taskMark.innerHTML = `${task.taskMark}%`;
  taskDiv.append(taskMark);

  const taskDeleteButton = document.createElement("button");
  taskDeleteButton.classList.add("taskDeleteButton");
  taskDeleteButton.innerText = `X`;
  taskDiv.append(taskDeleteButton);

  taskList.append(taskDiv);

  return { taskCheckbox, taskDeleteButton };
};

const displayHomePage = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const courseTitleDiv = document.createElement("div");
  courseTitleDiv.setAttribute("id", "courseTitleDiv");

  //Title
  const title = document.createElement("h");
  title.setAttribute("id", "semesterTitle");
  title.innerHTML = "3 Week Overview";
  courseTitleDiv.append(title);

  contentDiv.prepend(courseTitleDiv);

  //Tasklist
  const taskList = document.createElement("div");
  taskList.setAttribute("id", "taskList");
  contentDiv.append(taskList);

  //today's date + 3 weeks (number)
  let maxDate = new Date().getTime() + 1814400000;
  for (let i = 0; i < courseArray.length; i++) {
    for (let j = 0; j < courseArray[i].taskArray.length; j++) {
      let taskDate = new Date(
        courseArray[i].taskArray[j].taskDueDate
      ).getTime();
      console.log(maxDate, taskDate);
      if (taskDate < maxDate) {
        displayTask(courseArray[i].taskArray[j]);
        let deleteButtons = Array.from(
          document.getElementsByClassName("taskDeleteButton")
        );
        deleteButtons.forEach((item) => {
          item.remove();
        });
        let checkBoxes = Array.from(
          document.getElementsByClassName("taskCheckbox")
        );
        checkBoxes.forEach((item) => {
          item.classList.add("taskCheckbox-homepage");
        });
      }
    }
  }
};
//

//If there are any elements in localStorage, they get copied onto the array.
updateCourseArrayFromLocalStorage();

/*Now that both the array and the LocalStorage are synched, 
display each course in the nav, and for each displayed 
element, add it's tab functionality.*/

for (let courseIndex = 0; courseIndex < courseArray.length; courseIndex++) {
  let courseElement = displayCourse(courseArray[courseIndex]);
  addCourseTabListener(courseElement);
}

displayHomePage();
homeButton.addEventListener("click", displayHomePage);

/*Locally stored courses are now displayed on the nav. addCourseTabListener listens for
a click. It deletes everything in the content div, then calls changeTabs, which will:
- call displayNewTab (displays course title, addTaskPrompt, and taskList div)
- call addDeleteCourseOnClick (deletes and shifts from localStorage and the courseArray)
- call addTaskPromptOnClick (toggles the addTaskModal and addTaskPrompt),
- and finally, it will display the tasks associated with the course. */

/*Everything is finally displayed. Now adding function. */

//Toggles the addCoursePrompt and addCourseForm
addCoursePromptOnClick();

/*Attaches an event listener to the addCourseButton, 
- handles form validation, 
- builds a new Course from form input, 
- pushes it to the array and copies it to localStorage,
- re-displays all courses to the courseList, adds event listeners to each, then toggles form and prompt. */
addCourse();

cancelAddCourse();

/*Attaches an event listener to the addTaskButton, 
- handles form validation, 
- builds a new task from form input, 
- pushes it to the array and copies it to localStorage,
- re-displays all tasks to the taskList, adds event listeners to each, then toggles form and prompt. */
addTask();

cancelAddTask();

console.log(courseArray);

// console.log(courseArray[0].taskArray[0].taskDueDate);
// // console.log(courseArray[0].taskArray[1].taskDueDate);
// // console.log(
// //   courseArray[0].taskArray[0].taskDueDate >
// //     courseArray[0].taskArray[0].taskDueDate
// // );
// let date = new Date();
// console.log(date);
// console.log(date.getTime());

// console.log(date.getTime() + 1814400000);

// date = new Date(1814400000);
// console.log(date);

// console.log(courseArray[0].taskArray[0].taskDueDate > date);

// let date = new Date(courseArray[0].taskArray[0].taskDueDate);
// console.log(date);
// console.log(date.getTime());

// let maxDate = new Date().getTime() + 1814400000;
// // console.log(Date(maxDate + 1814400000));
// console.log(maxDate);
// console.log(new Date(1674849807730));
