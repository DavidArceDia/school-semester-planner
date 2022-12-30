export { courseAdditionController, courseEditAndDeleteController };

const courseAdditionController = (() => {
  //Add a course prompt
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
  };

  //Adding a course
  const addCourse = () => {
    const addCourseButton = document.getElementById("addCourseButton");
    addCourseButton.addEventListener("click", (event) => {
      event.preventDefault();

      let courseName = document.getElementById("courseName").value;
      let courseCredit = document.getElementById("courseCredit").value;
      let course = Course(courseName, courseCredit);

      const courseList = document.getElementById("courseList");
      const courseElement = document.createElement("button");
      courseElement.classList.add("course");
      courseElement.innerHTML = `${course.getCourseName()}`;

      courseList.appendChild(courseElement);

      toggleAddCourseForm();
      toggleAddCoursePrompt();

      courseEditAndDeleteController.courseOnHover();
      document.getElementById("addCourseForm").reset();
    });
  };

  return { addCoursePromptOnClick, cancelAddCoursePromptOnClick, addCourse };
})();

const toggleAddCourseForm = () => {
  const addCourseForm = document.getElementById("addCourseForm");
  addCourseForm.classList.toggle("active");
};

const toggleAddCoursePrompt = () => {
  const addCoursePrompt = document.getElementById("addCoursePrompt");
  addCoursePrompt.classList.toggle("active");
};

const Course = (courseName, courseCredit) => {
  const getCourseName = () => courseName;
  const getCourseCredit = () => courseCredit;
  return { getCourseName, getCourseCredit };
};

const courseEditAndDeleteController = (() => {
  const courseOnHover = () => {
    let courses = Array.from(document.getElementsByClassName("course"));

    let coursesInnerHtml = [];

    courses.forEach((element, index) => {
      coursesInnerHtml[index] = element.innerHTML;
    });

    console.log(coursesInnerHtml);

    courses.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.innerHTML = "Edit or Delete";
        element.classList.toggle("hover");
      });
    });

    courses.forEach((element, index) => {
      element.addEventListener("mouseleave", () => {
        element.innerHTML = coursesInnerHtml[index];
        element.classList.toggle("hover");
      });
    });
  };
  return { courseOnHover };
})();
