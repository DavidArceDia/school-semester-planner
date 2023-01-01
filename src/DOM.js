import { Course, courseTabController } from "./course.js";
import { Task } from "./task.js";
export { courseAdditionController, courseArray, taskAdditionController };

const courseArray = [];

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

    document.getElementById("addCourseForm").reset();
  };

  const displayLocallyStoredCourses = () => {
    const courseList = document.getElementById("courseList");
    for (let i = 0; i < 50; i++) {
      while (localStorage.getItem(`course${i}Name`) != null) {
        //Build locally stored courses on the DOM
        const courseElement = document.createElement("button");
        courseElement.classList.add("course");
        courseElement.innerHTML = `${localStorage.getItem(`course${i}Name`)}`;
        courseList.appendChild(courseElement);

        //Add locally stored courses to the array
        let courseName = localStorage.getItem(`course${i}Name`);
        let courseCredit = localStorage.getItem(`course${i}Credit`);
        let course = Course(courseName, courseCredit);
        courseArray.push(course);

        //From course.js, listen for click and run functions that display the right page.
        courseTabController.courseTabListener(courseElement);
        i++;
      }
    }
  };

  //Building a course
  const buildCourse = () => {
    let courseName = document.getElementById("courseName").value;
    let courseCredit = document.getElementById("courseCredit").value;
    let course = Course(courseName, courseCredit);

    return course;
  };

  //Displaying a new course. Course tab event listener is added here from course.js
  const displayCourse = (course) => {
    const courseList = document.getElementById("courseList");
    const courseElement = document.createElement("button");
    courseElement.classList.add("course");
    courseElement.innerHTML = `${course.getCourseName()}`;
    courseList.appendChild(courseElement);

    //From course.js, listen for click and run functions that display the right page.
    courseTabController.courseTabListener(courseElement);
  };

  //Adding a course
  const addCourse = () => {
    const addCourseButton = document.getElementById("addCourseButton");
    addCourseButton.addEventListener("click", (event) => {
      event.preventDefault();

      let course = buildCourse();
      courseArray.push(course);
      displayCourse(course);

      courseArray.forEach((course, index) => {
        localStorage.setItem(`course${index}Name`, `${course.getCourseName()}`);
        localStorage.setItem(
          `course${index}Credit`,
          `${course.getCourseCredit()}`
        );
      });

      toggleAddCourseForm();
      toggleAddCoursePrompt();

      document.getElementById("addCourseForm").reset();
    });
  };

  return {
    addCoursePromptOnClick,
    cancelAddCoursePromptOnClick,
    displayLocallyStoredCourses,
    addCourse,
  };
})();

const toggleAddCourseForm = () => {
  const addCourseForm = document.getElementById("addCourseForm");
  addCourseForm.classList.toggle("active");
};

const toggleAddCoursePrompt = () => {
  const addCoursePrompt = document.getElementById("addCoursePrompt");
  addCoursePrompt.classList.toggle("active");
};

const courseEditAndDeleteController = (() => {
  const courseOnHover = (course) => {
    let courseInnerHtml = course.innerHTML;

    course.addEventListener("mouseenter", () => {
      //course.innerHTML = "Edit or Delete";
      course.classList.toggle("hover");
    });

    course.addEventListener("mouseleave", () => {
      //course.innerHTML = courseInnerHtml;
      course.classList.toggle("hover");
    });
  };

  return { courseOnHover };
})();

const taskAdditionController = (() => {
  const addTaskPromptOnClick = () => {
    const addTaskPrompt = document.getElementById("addTaskPrompt");
    addTaskPrompt.addEventListener("click", () => {
      toggleAddTaskForm();
      toggleAddTaskModal();
    });
  };

  const cancelAddTask = () => {
    const cancelAddTaskButton = document.getElementById("cancelAddTaskButton");

    cancelAddTaskButton.addEventListener("click", () => {
      toggleAddTaskForm();
      toggleAddTaskModal();
    });

    document.getElementById("addTaskForm").reset();
  };

  const buildTask = () => {
    let taskName = document.getElementById("taskName").value;
    let taskDueDate = document.getElementById("taskDueDate").value;
    let taskWeight = document.getElementById("taskWeight").value;
    let taskMark = document.getElementById("taskMark").value;
    let task = Task(taskName, taskDueDate, taskWeight, taskMark);

    return task;
  };

  const determineCourse = () => {
    for (
      let courseIndex = 0;
      courseIndex <= courseArray.length;
      courseIndex++
    ) {
      if (
        document.getElementById("courseTitle").innerHTML ==
        localStorage.getItem(`course${courseIndex}Name`)
      ) {
        return courseIndex;
      }
    }
  };

  const displayTask = (courseIndex, task) => {
    const courseList = document.getElementById("courseList");

    const course = document.createElement("div");
    course.classList.add("course");

    const courseCheckbox = document.createElement("button");
    courseCheckbox.classList.add("courseCheckbox");

    const courseTitle = document.createElement("p");
    courseTitle.classList.add("courseTitle");

    const courseDueDate = document.createElement("p");
    courseDueDate.classList.add("courseDueDate");

    const courseWeight = document.createElement("p");
    courseWeight.classList.add("courseWeight");

    const courseMark = document.createElement("p");
    courseMark.classList.add("courseMark");
  };

  const addTask = () => {
    const addTaskButton = document.getElementById("addTaskButton");

    addTaskButton.addEventListener("click", (event) => {
      event.preventDefault();

      let task = buildTask();

      let courseIndex = determineCourse();
      courseArray[courseIndex].taskArray.push(task);

      displayTask(courseIndex, task);

      toggleAddTaskForm();
      toggleAddTaskModal();
    });
  };

  return {
    addTaskPromptOnClick,
    cancelAddTask,
    addTask,
  };
})();

const toggleAddTaskForm = () => {
  const addTaskForm = document.getElementById("addTaskForm");
  addTaskForm.classList.toggle("active");
};

const toggleAddTaskModal = () => {
  const addTaskModal = document.getElementById("addTaskModal");
  addTaskModal.classList.toggle("active");

  const addTaskForm = document.getElementById("addTaskForm");
  addTaskForm.classList.toggle("active");

  const overlay = document.getElementById("overlay");
  overlay.classList.toggle("active");
};
