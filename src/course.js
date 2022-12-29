/*
Adding a course
- Name, Weight

Editing a course

Deleting a course

*/

const Course = (courseName, weight) => {
  const getName = () => {
    return courseName;
  };
  const getWeight = () => {
    return weight;
  };
};

const Controller = () => {
  console.log("fart");
};

const courseDOM = () => {
  const addCourseButton = document.getElementById("addCourseButton");
  return { addCourseButton };
};
