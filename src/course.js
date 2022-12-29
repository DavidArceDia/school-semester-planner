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
  return { getName, getWeight };
};

// const Controller = () => {
//   console.log("fart");
// };

// const courseDOM = () => {
//   const addCourseButton = document.getElementById("addCourseButton");
//   return { addCourseButton };
// };

// const sayHello = () => {
//   console.log("hello");
// };

const course = Course("Name", 0.5);

export { Course };
