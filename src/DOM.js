export {
  addCoursePromptOnClick,
  cancelAddCoursePromptOnClick,
  buildNewTab,
  buildLocallyStoredCourses,
  toggleAddCourseForm,
  toggleAddCoursePrompt,
};

// Course Addition //

const toggleAddCourseForm = () => {
  const addCourseForm = document.getElementById("addCourseForm");
  addCourseForm.classList.toggle("active");
};
const toggleAddCoursePrompt = () => {
  const addCoursePrompt = document.getElementById("addCoursePrompt");
  addCoursePrompt.classList.toggle("active");
};

//addCoursePrompt event listener
const addCoursePromptOnClick = () => {
  const addCoursePrompt = document.getElementById("addCoursePrompt");
  addCoursePrompt.addEventListener("click", () => {
    toggleAddCourseForm();
    toggleAddCoursePrompt();
  });
};

//Cancel adding a course
const cancelAddCoursePromptOnClick = () => {
  const cancelAddCourseButton = document.getElementById(
    "cancelAddCourseButton"
  );

  cancelAddCourseButton.addEventListener("click", () => {
    toggleAddCourseForm();
    toggleAddCoursePrompt();
  });

  document.getElementById("addCourseForm").reset();
};

//Build locally stored courses on the DOM
const buildLocallyStoredCourses = (courseIndex) => {
  const courseList = document.getElementById("courseList");

  const courseElement = document.createElement("button");
  courseElement.classList.add("course");
  courseElement.innerHTML = `${localStorage.getItem(
    `course${courseIndex}Name`
  )}`;
  courseList.appendChild(courseElement);

  return courseElement;
};

//Displays title, addTaskPrompt, and taskList div for course tabs
const buildNewTab = (target) => {
  const contentDiv = document.getElementById("content");

  //Title
  const courseTitle = document.createElement("h");
  courseTitle.setAttribute("id", "courseTitle");
  courseTitle.innerHTML = target.innerHTML;
  contentDiv.append(courseTitle);

  //DeleteCourseButton
  const deleteCourseButton = document.createElement("button");
  deleteCourseButton.setAttribute("id", "deleteCourseButton");
  deleteCourseButton.innerHTML = "Delete";
  courseTitle.append(deleteCourseButton);

  //Add Task Button
  const addTaskPrompt = document.createElement("button");
  addTaskPrompt.setAttribute("id", "addTaskPrompt");
  addTaskPrompt.classList.add("active");
  addTaskPrompt.innerHTML = "+ Add Task";
  contentDiv.append(addTaskPrompt);

  //Tasklist
  const taskList = document.createElement("div");
  taskList.setAttribute("id", "taskList");
  contentDiv.append(taskList);
};
