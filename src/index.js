import "./style.css";
import homeButtonImage from "./homeButton.jpg";

const homeButton = new Image();
homeButton.src = homeButtonImage;

document.getElementById("homeButton").appendChild(homeButton);
