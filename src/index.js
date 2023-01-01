import "./style.css";
import homeButtonImage from "./homeButton.jpg";
import {
  courseAdditionController,
  taskAdditionController,
  courseArray,
} from "./DOM.js";
import { courseTabController } from "./course.js";

const homeButton = new Image();
homeButton.src = homeButtonImage;

document.getElementById("homeButton").appendChild(homeButton);

courseAdditionController.addCoursePromptOnClick();

courseAdditionController.cancelAddCoursePromptOnClick();

courseAdditionController.displayLocallyStoredCourses();

courseAdditionController.addCourse();

courseTabController.courseTabListener();

taskAdditionController.cancelAddTask();

taskAdditionController.addTask();

console.log(courseArray[0].taskArray);
