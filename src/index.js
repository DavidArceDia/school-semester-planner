import "./style.css";
import homeButtonImage from "./homeButton.jpg";
import { Course } from "./course.js";
import { revealAddCourseForm, hideAddCoursePrompt } from "./DOM.js";

const homeButton = new Image();
homeButton.src = homeButtonImage;

document.getElementById("homeButton").appendChild(homeButton);

const addCourseButton = document.getElementById("addCoursePrompt");
addCourseButton.addEventListener("click", () => {
  revealAddCourseForm();
  hideAddCoursePrompt();
});
