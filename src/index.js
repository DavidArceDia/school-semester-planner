import "./style.css";
import homeButtonImage from "./homeButton.jpg";

import { displayLocallyStoredCourses, addCourse } from "./courseAddition.js";
import { cancelAddTask, addTask } from "./taskAddition.js";
import {} from "./course.js";
import { addCoursePromptOnClick, cancelAddCoursePromptOnClick } from "./DOM.js";
export { courseArray };

const homeButton = new Image();
homeButton.src = homeButtonImage;

document.getElementById("homeButton").appendChild(homeButton);

const courseArray = [];

//courseAddition
addCoursePromptOnClick();
cancelAddCoursePromptOnClick();
displayLocallyStoredCourses();
addCourse();

cancelAddTask();
addTask();
