//LocalStorage is either empty or not. Begin by updating the empty courseArray to match.

const displayLocallyStoredCourses = () => {
  for (let courseIndex = 0; courseIndex < 50; courseIndex++) {
    while (localStorage.getItem(`course${courseIndex}Name`) != null) {
      let courseElement = buildLocallyStoredCourses(courseIndex);

      //Add locally stored courses to the array
      let courseName = localStorage.getItem(`course${courseIndex}Name`);
      let courseCredit = localStorage.getItem(`course${courseIndex}Credit`);
      let course = Course(courseName, courseCredit);
      courseArray.push(course);

      //From course.js, listen for click and run functions that display the right page.
      addCourseTabListener(courseElement);
      courseIndex++;
    }
  }
};
