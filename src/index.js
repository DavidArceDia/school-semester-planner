import "./style.css";
import homeButtonImage from "./homeButton.jpg";
import { Course } from "./course.js";
import {
  courseAdditionController,
  courseEditAndDeleteController,
} from "./DOM.js";

const homeButton = new Image();
homeButton.src = homeButtonImage;

document.getElementById("homeButton").appendChild(homeButton);

courseAdditionController.addCoursePromptOnClick();

courseAdditionController.cancelAddCoursePromptOnClick();

courseAdditionController.addCourse();
