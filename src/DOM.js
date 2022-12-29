const revealAddCourseForm = () => {
  const addCourseForm = document.getElementById("addCourseForm");
  addCourseForm.classList.toggle("active");
};

const hideAddCoursePrompt = () => {
  const addCoursePrompt = document.getElementById("addCoursePrompt");
  addCoursePrompt.classList.toggle("active");
  console.log("hello");
};

export { revealAddCourseForm, hideAddCoursePrompt };
