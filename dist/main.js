/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  margin: 0;\n  display: flex;\n\n  font-family: Arial, Helvetica, sans-serif;\n  height: 100%;\n  min-height: 100vh;\n}\n\n/* NAV */\n\n#nav {\n  flex-grow: 1;\n  max-width: 35%;\n  min-height: 100vh;\n  background-color: #e5e9ec;\n  display: flex;\n  flex-direction: column;\n}\n\n#homeButton {\n  border: none;\n  background-color: transparent;\n  margin: 2rem 1rem 2rem 1rem;\n}\n\n#homeButton > img {\n  height: 4rem;\n}\n\n/* COURSE LIST*/\n\n#courseList {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.course {\n  font-size: 1rem;\n  width: 90%;\n  padding: 0.75rem;\n\n  border: none;\n  border-radius: 2rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n  background-color: #e6a715;\n  color: white;\n\n  transition: 0.25s;\n}\n\n.course:hover {\n  background-color: #efc86c;\n  color: #fff8e7;\n}\n\n/* ADD COURSE FORM */\n\n#addCoursePrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addCoursePrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 1.75rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #e6a715;\n  margin: 2rem 1rem;\n}\n\n#addCoursePrompt:hover {\n  color: #efc86c;\n  transition: 0.25s;\n}\n\n#addCoursePrompt:hover,\n#homeButton {\n  cursor: pointer;\n}\n\n#addCourseForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addCourseForm.active {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addCourseFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 90%;\n}\n\n#addCourseFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addCourseFormWrapper > .formRow > input {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addCourseFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #e6a715;\n}\n\n#addCourseSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addCourseButton {\n  font-size: 1.2rem;\n\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddCourseButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addCourseButton:hover,\n#cancelAddCourseButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addCourseButton:hover {\n  color: #e6a715;\n}\n\n/* CONTENT */\n\n#content {\n  max-width: 60%;\n\n  flex-grow: 3;\n  min-height: 50vh;\n\n  padding: 1.5rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#courseTitleDiv {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#courseTitle {\n  font-size: 1.75rem;\n  font-weight: bold;\n  color: black;\n}\n\n#deleteCourseButton {\n  margin: 1rem;\n  padding: 0.25rem 1rem;\n  font-size: 1.2rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #ff8787;\n  color: white;\n\n  transition: 0.25s;\n}\n\n#deleteCourseButton:hover {\n  background-color: transparent;\n  color: #ff8787;\n}\n\n#addTaskPrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addTaskPrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 1.75rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #9a7aa0;\n  margin: 1.5rem 0rem;\n  padding: 0;\n\n  transition: 0.25s;\n}\n\n#addTaskPrompt:hover {\n  color: #d4c1d7;\n}\n\n/* ADD TASK MODAL */\n\n#addTaskModal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n\n  background-color: #e5e9ec;\n  border-radius: 1rem;\n\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n  width: 35rem;\n\n  transition: 0.25s ease-in-out;\n  pointer-events: none;\n}\n\n#addTaskModal.active {\n  transform: translate(-50%, -50%) scale(1);\n  pointer-events: all;\n}\n\n#addTaskForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addTaskForm.active {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addTaskFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 100%;\n}\n\n#addTaskFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addTaskFormWrapper > .formRow > input,\n#addTaskFormWrapper > .formRow > select {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addTaskFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #9a7aa0;\n}\n\n#addTaskSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addTaskButton:hover,\n#cancelAddTaskButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addTaskButton:hover {\n  color: #9a7aa0;\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #ff8787;\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #ff8787;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #ff8787;\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n\n  transition: 0.25s ease-in-out;\n}\n\n#overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n\n/* TASKS */\n\n#taskList {\n  width: 100%;\n}\n\n.task {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: bold;\n  gap: 0.75rem;\n}\n\n.taskCheckbox {\n  width: 1.5rem;\n  height: 1.5rem;\n\n  background-color: white;\n  border: 0.35rem solid #23967f;\n  border-radius: 50%;\n  transition: 0.5s;\n  cursor: pointer;\n}\n\n.taskCheckbox.lowPriority {\n  border: 0.35rem solid #23967f;\n}\n.taskCheckbox.lowPriority:hover {\n  background-color: rgba(35, 150, 127, 0.5);\n}\n.taskCheckbox.lowPriority.checked {\n  background-color: #23967f;\n  border: 0.35rem solid #23967f;\n  border-radius: 50%;\n}\n.taskCheckbox.mediumPriority {\n  border: 0.35rem solid #e6a715;\n}\n.taskCheckbox.mediumPriority:hover {\n  background-color: #e5a61580;\n}\n.taskCheckbox.mediumPriority.checked {\n  background-color: #e6a715;\n  border: 0.35rem solid #e6a715;\n  border-radius: 50%;\n}\n.taskCheckbox.highPriority {\n  border: 0.35rem solid #ff8787;\n}\n.taskCheckbox.highPriority:hover {\n  background-color: #ff878780;\n}\n.taskCheckbox.highPriority.checked {\n  background-color: #ff8787;\n  border: 0.35rem solid #ff8787;\n  border-radius: 50%;\n}\n\n.taskName {\n  width: 40%;\n}\n\n.taskDueDate {\n  width: 20%;\n}\n\n.taskWeight {\n  width: 5%;\n}\n\n.taskMark {\n  width: 5%;\n}\n\n.taskDeleteButton {\n  cursor: pointer;\n  padding: 0;\n  min-width: 1rem;\n  min-height: 1rem;\n  font-size: 1.25rem;\n  font-weight: bold;\n  background-color: transparent;\n  color: #ff8787;\n  border: none;\n  transition: 0.25s;\n}\n\n.taskDeleteButton:hover {\n  color: #ffbdbd;\n}\n\n.taskCrossOut {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  display: flex;\n  margin: 0;\n  display: flex;\n\n  font-family: Arial, Helvetica, sans-serif;\n  height: 100%;\n  min-height: 100vh;\n}\n\n/* NAV */\n\n#nav {\n  flex-grow: 1;\n  max-width: 35%;\n  min-height: 100vh;\n  background-color: #e5e9ec;\n  display: flex;\n  flex-direction: column;\n}\n\n#homeButton {\n  border: none;\n  background-color: transparent;\n  margin: 2rem 1rem 2rem 1rem;\n}\n\n#homeButton > img {\n  height: 4rem;\n}\n\n/* COURSE LIST*/\n\n#courseList {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.course {\n  font-size: 1rem;\n  width: 90%;\n  padding: 0.75rem;\n\n  border: none;\n  border-radius: 2rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n  background-color: #e6a715;\n  color: white;\n\n  transition: 0.25s;\n}\n\n.course:hover {\n  background-color: #efc86c;\n  color: #fff8e7;\n}\n\n/* ADD COURSE FORM */\n\n#addCoursePrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addCoursePrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 1.75rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #e6a715;\n  margin: 2rem 1rem;\n}\n\n#addCoursePrompt:hover {\n  color: #efc86c;\n  transition: 0.25s;\n}\n\n#addCoursePrompt:hover,\n#homeButton {\n  cursor: pointer;\n}\n\n#addCourseForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addCourseForm.active {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addCourseFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 90%;\n}\n\n#addCourseFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addCourseFormWrapper > .formRow > input {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addCourseFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #e6a715;\n}\n\n#addCourseSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addCourseButton {\n  font-size: 1.2rem;\n\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddCourseButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addCourseButton:hover,\n#cancelAddCourseButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addCourseButton:hover {\n  color: #e6a715;\n}\n\n/* CONTENT */\n\n#content {\n  max-width: 60%;\n\n  flex-grow: 3;\n  min-height: 50vh;\n\n  padding: 1.5rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#courseTitleDiv {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#courseTitle {\n  font-size: 1.75rem;\n  font-weight: bold;\n  color: black;\n}\n\n#deleteCourseButton {\n  margin: 1rem;\n  padding: 0.25rem 1rem;\n  font-size: 1.2rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #ff8787;\n  color: white;\n\n  transition: 0.25s;\n}\n\n#deleteCourseButton:hover {\n  background-color: transparent;\n  color: #ff8787;\n}\n\n#addTaskPrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addTaskPrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 1.75rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #9a7aa0;\n  margin: 1.5rem 0rem;\n  padding: 0;\n\n  transition: 0.25s;\n}\n\n#addTaskPrompt:hover {\n  color: #d4c1d7;\n}\n\n/* ADD TASK MODAL */\n\n#addTaskModal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n\n  background-color: #e5e9ec;\n  border-radius: 1rem;\n\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n  width: 35rem;\n\n  transition: 0.25s ease-in-out;\n  pointer-events: none;\n}\n\n#addTaskModal.active {\n  transform: translate(-50%, -50%) scale(1);\n  pointer-events: all;\n}\n\n#addTaskForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addTaskForm.active {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addTaskFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 100%;\n}\n\n#addTaskFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addTaskFormWrapper > .formRow > input,\n#addTaskFormWrapper > .formRow > select {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addTaskFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #9a7aa0;\n}\n\n#addTaskSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addTaskButton:hover,\n#cancelAddTaskButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addTaskButton:hover {\n  color: #9a7aa0;\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #ff8787;\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #ff8787;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #ff8787;\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n\n  transition: 0.25s ease-in-out;\n}\n\n#overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n\n/* TASKS */\n\n#taskList {\n  width: 100%;\n}\n\n.task {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: bold;\n  gap: 0.75rem;\n}\n\n.taskCheckbox {\n  width: 1.5rem;\n  height: 1.5rem;\n\n  background-color: white;\n  border: 0.35rem solid #23967f;\n  border-radius: 50%;\n  transition: 0.5s;\n  cursor: pointer;\n}\n\n.taskCheckbox.lowPriority {\n  border: 0.35rem solid #23967f;\n}\n.taskCheckbox.lowPriority:hover {\n  background-color: rgba(35, 150, 127, 0.5);\n}\n.taskCheckbox.lowPriority.checked {\n  background-color: #23967f;\n  border: 0.35rem solid #23967f;\n  border-radius: 50%;\n}\n.taskCheckbox.mediumPriority {\n  border: 0.35rem solid #e6a715;\n}\n.taskCheckbox.mediumPriority:hover {\n  background-color: #e5a61580;\n}\n.taskCheckbox.mediumPriority.checked {\n  background-color: #e6a715;\n  border: 0.35rem solid #e6a715;\n  border-radius: 50%;\n}\n.taskCheckbox.highPriority {\n  border: 0.35rem solid #ff8787;\n}\n.taskCheckbox.highPriority:hover {\n  background-color: #ff878780;\n}\n.taskCheckbox.highPriority.checked {\n  background-color: #ff8787;\n  border: 0.35rem solid #ff8787;\n  border-radius: 50%;\n}\n\n.taskName {\n  width: 40%;\n}\n\n.taskDueDate {\n  width: 20%;\n}\n\n.taskWeight {\n  width: 5%;\n}\n\n.taskMark {\n  width: 5%;\n}\n\n.taskDeleteButton {\n  cursor: pointer;\n  padding: 0;\n  min-width: 1rem;\n  min-height: 1rem;\n  font-size: 1.25rem;\n  font-weight: bold;\n  background-color: transparent;\n  color: #ff8787;\n  border: none;\n  transition: 0.25s;\n}\n\n.taskDeleteButton:hover {\n  color: #ffbdbd;\n}\n\n.taskCrossOut {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCoursePromptOnClick": () => (/* binding */ addCoursePromptOnClick),
/* harmony export */   "buildLocallyStoredCourses": () => (/* binding */ buildLocallyStoredCourses),
/* harmony export */   "cancelAddCourse": () => (/* binding */ cancelAddCourse),
/* harmony export */   "toggleAddCourseForm": () => (/* binding */ toggleAddCourseForm),
/* harmony export */   "toggleAddCoursePrompt": () => (/* binding */ toggleAddCoursePrompt)
/* harmony export */ });


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
const cancelAddCourse = () => {
  const cancelAddCourseButton = document.getElementById(
    "cancelAddCourseButton"
  );

  cancelAddCourseButton.addEventListener("click", () => {
    toggleAddCourseForm();
    toggleAddCoursePrompt();

    //reset form inputs, placeholders
    document.getElementById("addCourseForm").reset();

    const courseName = document.getElementById("courseName");
    const courseCredit = document.getElementById("courseCredit");

    courseName.setAttribute("placeholder", "");
    courseCredit.setAttribute("placeholder", "");
  });
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


/***/ }),

/***/ "./src/course.js":
/*!***********************!*\
  !*** ./src/course.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Course": () => (/* binding */ Course),
/* harmony export */   "addCourseTabListener": () => (/* binding */ addCourseTabListener),
/* harmony export */   "buildCourseFromForm": () => (/* binding */ buildCourseFromForm),
/* harmony export */   "determineCourseIndex": () => (/* binding */ determineCourseIndex)
/* harmony export */ });
/* harmony import */ var _taskAddition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskAddition */ "./src/taskAddition.js");
/* harmony import */ var _courseDeletion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courseDeletion.js */ "./src/courseDeletion.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/index.js");







const Course = (courseName, courseCredit) => {
  const taskArray = [];

  // const getCourseName = () => courseName;
  // const getCourseCredit = () => courseCredit;

  return {
    courseName,
    courseCredit,
    taskArray,
    // getCourseName,
    // getCourseCredit,
    // taskArray,
  };
};

const determineCourseIndex = () => {
  for (let courseIndex = 0; courseIndex <= _index__WEBPACK_IMPORTED_MODULE_4__.courseArray.length; courseIndex++) {
    if (document.getElementById("courseTitle") == null) {
      return;
    }
    if (
      document.getElementById("courseTitle").innerHTML ==
      localStorage.getItem(`course${courseIndex}Name`)
    ) {
      return courseIndex;
    }
  }
};

//Building a course from form
const buildCourseFromForm = () => {
  let courseName = document.getElementById("courseName").value;
  let courseCredit = document.getElementById("courseCredit").value;
  let course = Course(courseName, courseCredit);

  return course;
};

const displayNewTab = (target) => {
  const contentDiv = document.getElementById("content");

  const courseTitleDiv = document.createElement("div");
  courseTitleDiv.setAttribute("id", "courseTitleDiv");

  //Title
  const courseTitle = document.createElement("h");
  courseTitle.setAttribute("id", "courseTitle");
  courseTitle.innerHTML = target.innerHTML;
  courseTitleDiv.append(courseTitle);

  //DeleteCourseButton
  const deleteCourseButton = document.createElement("button");
  deleteCourseButton.setAttribute("id", "deleteCourseButton");
  deleteCourseButton.innerHTML = "Delete";
  courseTitleDiv.append(deleteCourseButton);

  contentDiv.append(courseTitleDiv);

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

const contentDiv = document.getElementById("content");

const changeTabs = (e) => {
  let target = e.target;

  //Displays title, addTaskPrompt, and taskList div for course tabs
  displayNewTab(target);

  //add Event listener to the deleteCourse Button
  (0,_courseDeletion_js__WEBPACK_IMPORTED_MODULE_1__.addDeleteCourseOnClick)();

  //Add Event listener to the addTask Button
  (0,_taskAddition__WEBPACK_IMPORTED_MODULE_0__.addTaskPromptOnClick)();

  let courseIndex = determineCourseIndex();

  for (
    let taskIndex = 0;
    taskIndex < _index__WEBPACK_IMPORTED_MODULE_4__.courseArray[courseIndex].taskArray.length;
    taskIndex++
  ) {
    let taskElements = (0,_index__WEBPACK_IMPORTED_MODULE_4__.displayTask)(
      _index__WEBPACK_IMPORTED_MODULE_4__.courseArray[courseIndex].taskArray[taskIndex]
    );
    (0,_task_js__WEBPACK_IMPORTED_MODULE_3__.addTaskListeners)(taskElements);
  }
};

const addCourseTabListener = (course) => {
  if (course != undefined) {
    course.addEventListener("click", (e) => {
      contentDiv.innerHTML = "";
      changeTabs(e);
    });
  }
};


/***/ }),

/***/ "./src/courseAddition.js":
/*!*******************************!*\
  !*** ./src/courseAddition.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCourse": () => (/* binding */ addCourse),
/* harmony export */   "displayLocallyStoredCourses": () => (/* binding */ displayLocallyStoredCourses)
/* harmony export */ });
/* harmony import */ var _course_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course.js */ "./src/course.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");





const displayLocallyStoredCourses = () => {
  for (let courseIndex = 0; courseIndex < 50; courseIndex++) {
    while (localStorage.getItem(`course${courseIndex}Name`) != null) {
      let courseElement = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.buildLocallyStoredCourses)(courseIndex);

      //Add locally stored courses to the array
      let courseName = localStorage.getItem(`course${courseIndex}Name`);
      let courseCredit = localStorage.getItem(`course${courseIndex}Credit`);
      let course = (0,_course_js__WEBPACK_IMPORTED_MODULE_0__.Course)(courseName, courseCredit);
      _index_js__WEBPACK_IMPORTED_MODULE_2__.courseArray.push(course);

      //From course.js, listen for click and run functions that display the right page.
      (0,_course_js__WEBPACK_IMPORTED_MODULE_0__.addCourseTabListener)(courseElement);
      courseIndex++;
    }
  }
};
const doesCourseAlreadyExist = (courseName) => {
  for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_2__.courseArray.length; i++) {
    if (localStorage.getItem(`course${i}Name`) == courseName) {
      return true;
    }
  }
};

//Adding a course
const addCourse = () => {
  const addCourseButton = document.getElementById("addCourseButton");
  addCourseButton.addEventListener("click", (event) => {
    event.preventDefault();

    const courseName = document.getElementById("courseName");
    const courseCredit = document.getElementById("courseCredit");

    //The following if statements are the form validation, checking for input as well as no courseName duplicates.
    if (
      courseName.validity.valueMissing &&
      courseCredit.validity.valueMissing
    ) {
      courseName.setAttribute("placeholder", "*This input is required");
      courseCredit.setAttribute("placeholder", "*This input is required");
    } else if (courseName.validity.valueMissing) {
      courseName.setAttribute("placeholder", "*This input is required");
    } else if (courseCredit.validity.valueMissing) {
      courseCredit.setAttribute("placeholder", "*This input is required");
      if (doesCourseAlreadyExist(courseName.value) == true) {
        courseName.value = "";
        courseName.setAttribute("placeholder", "*This course already exists");
      }
    } else {
      if (doesCourseAlreadyExist(courseName.value) == true) {
        courseName.value = "";
        courseName.setAttribute("placeholder", "*This course already exists");
      } else {
        courseName.setAttribute("placeholder", "");
        courseCredit.setAttribute("placeholder", "");

        let course = (0,_course_js__WEBPACK_IMPORTED_MODULE_0__.buildCourseFromForm)();

        //Pushes course to array, iterates through array and updates localStorage
        _index_js__WEBPACK_IMPORTED_MODULE_2__.courseArray.push(course);
        (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorageFromArray)();

        //deletes everything in the courseList and builds it all again
        document.getElementById("courseList").innerHTML = "";
        for (
          let courseIndex = 0;
          courseIndex < _index_js__WEBPACK_IMPORTED_MODULE_2__.courseArray.length;
          courseIndex++
        ) {
          let courseElement = (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.displayCourse)(_index_js__WEBPACK_IMPORTED_MODULE_2__.courseArray[courseIndex]);

          //adds the tab functionality to the newly build and displayed course.
          //CourseElement (from displayCourse) is the nav element.
          (0,_course_js__WEBPACK_IMPORTED_MODULE_0__.addCourseTabListener)(courseElement);
        }

        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.toggleAddCourseForm)();
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.toggleAddCoursePrompt)();

        document.getElementById("addCourseForm").reset();
      }
    }
  });
};


/***/ }),

/***/ "./src/courseDeletion.js":
/*!*******************************!*\
  !*** ./src/courseDeletion.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDeleteCourseOnClick": () => (/* binding */ addDeleteCourseOnClick)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



const addDeleteCourseOnClick = () => {
  const deleteCourseButton = document.getElementById("deleteCourseButton");
  deleteCourseButton.addEventListener("click", (event) => {
    let title = event.target.parentNode.firstChild.innerText;

    //Finding the course Index
    let courseIndex = 0;
    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray.length; i++) {
      if (title == _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray[i].courseName) {
        courseIndex = i;
      }
    }

    //delete course from local storage
    localStorage.removeItem(`course${courseIndex}Name`);
    localStorage.removeItem(`course${courseIndex}Credit`);
    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray[courseIndex].taskArray.length; i++) {
      localStorage.removeItem(`course${courseIndex}Task${i}Name`);
      localStorage.removeItem(`course${courseIndex}Task${i}DueDate`);
      localStorage.removeItem(`course${courseIndex}Task${i}Weight`);
      localStorage.removeItem(`course${courseIndex}Task${i}Mark`);
      localStorage.removeItem(`course${courseIndex}Task${i}Priority`);
      localStorage.removeItem(`course${courseIndex}Task${i}Completion`);
    }
    //shift localstorage
    for (let i = courseIndex; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray.length + 1; i++) {
      if (localStorage.getItem(`course${i + 1}Name`) != undefined) {
        localStorage.setItem(
          `course${i}Name`,
          localStorage.getItem(`course${i + 1}Name`)
        );

        localStorage.setItem(
          `course${i}Credit`,
          localStorage.getItem(`course${i + 1}Credit`)
        );

        for (let j = 0; j < _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray[i + 1].taskArray.length; j++) {
          localStorage.setItem(
            `course${i}Task${j}Name`,
            localStorage.getItem(`course${i + 1}Task${j}Name`)
          );
          localStorage.setItem(
            `course${i}Task${j}DueDate`,
            localStorage.getItem(`course${i + 1}Task${j}DueDate`)
          );
          localStorage.setItem(
            `course${i}Task${j}Weight`,
            localStorage.getItem(`course${i + 1}Task${j}Weight`)
          );
          localStorage.setItem(
            `course${i}Task${j}Mark`,
            localStorage.getItem(`course${i + 1}Task${j}Mark`)
          );
          localStorage.setItem(
            `course${i}Task${j}Priority`,
            localStorage.getItem(`course${i + 1}Task${j}Priority`)
          );
          localStorage.setItem(
            `course${i}Task${j}Completion`,
            localStorage.getItem(`course${i + 1}Task${j}Completion`)
          );
        }
      } else {
        //delete course from local storage
        localStorage.removeItem(`course${i}Name`);
        localStorage.removeItem(`course${i}Credit`);
        for (let j = 0; j < _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray[courseIndex].taskArray.length; j++) {
          localStorage.removeItem(`course${i}Task${j}Name`);
          localStorage.removeItem(`course${i}Task${j}DueDate`);
          localStorage.removeItem(`course${i}Task${j}Weight`);
          localStorage.removeItem(`course${i}Task${j}Mark`);
          localStorage.removeItem(`course${i}Task${j}Priority`);
          localStorage.removeItem(`course${i}Task${j}Completion`);
        }
      }
    }

    // delete course from array
    let tempCourseIndex = courseIndex;
    while (tempCourseIndex < _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray.length) {
      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray[tempCourseIndex + 1] != undefined) {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray[tempCourseIndex] = _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray[tempCourseIndex + 1];
        tempCourseIndex++;
      } else {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray.pop();
      }
      tempCourseIndex++;
    }

    //delete course from nav
    let courseList = Array.from(document.getElementsByClassName("course"));
    courseList.forEach((course) => {
      if (course.innerText == title) {
        course.remove();
      }
    });

    location.reload();
  });
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "courseArray": () => (/* binding */ courseArray),
/* harmony export */   "displayCourse": () => (/* binding */ displayCourse),
/* harmony export */   "displayTask": () => (/* binding */ displayTask),
/* harmony export */   "updateCourseArrayFromLocalStorage": () => (/* binding */ updateCourseArrayFromLocalStorage),
/* harmony export */   "updateLocalStorageFromArray": () => (/* binding */ updateLocalStorageFromArray)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homeButton_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeButton.jpg */ "./src/homeButton.jpg");
/* harmony import */ var _courseAddition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courseAddition.js */ "./src/courseAddition.js");
/* harmony import */ var _taskAddition_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskAddition.js */ "./src/taskAddition.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _course_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course.js */ "./src/course.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");










const homeButton = new Image();
homeButton.src = _homeButton_jpg__WEBPACK_IMPORTED_MODULE_1__;
document.getElementById("homeButton").appendChild(homeButton);

const courseArray = [];

const updateCourseArrayFromLocalStorage = () => {
  //for all locally stored courses
  for (let courseIndex = 0; courseIndex < 50; courseIndex++) {
    //While a course still exists at this courseIndex,
    while (localStorage.getItem(`course${courseIndex}Name`) != null) {
      console.log(courseIndex);
      //Build and add locally stored courses to the array
      let courseName = localStorage.getItem(`course${courseIndex}Name`);
      let courseCredit = localStorage.getItem(`course${courseIndex}Credit`);
      let course = (0,_course_js__WEBPACK_IMPORTED_MODULE_5__.Course)(courseName, courseCredit);
      //Replace the current course with the updated one
      courseArray[courseIndex] = course;
      //for all of this course's tasks
      for (let taskIndex = 0; taskIndex < 200; taskIndex++) {
        //While a task still exists at this courseIndex and at this taskIndex
        while (
          localStorage.getItem(`course${courseIndex}Task${taskIndex}Name`) !=
          null
        ) {
          console.log(courseIndex, taskIndex);
          //Build and add locally stored tasks to the appropriate course in the array
          let name = localStorage.getItem(
            `course${courseIndex}Task${taskIndex}Name`
          );
          let dueDate = localStorage.getItem(
            `course${courseIndex}Task${taskIndex}DueDate`
          );
          let weight = localStorage.getItem(
            `course${courseIndex}Task${taskIndex}Weight`
          );
          let mark = localStorage.getItem(
            `course${courseIndex}Task${taskIndex}Mark`
          );
          let priority = localStorage.getItem(
            `course${courseIndex}Task${taskIndex}Priority`
          );
          let completion = localStorage.getItem(
            `course${courseIndex}Task${taskIndex}Completion`
          );
          let task = (0,_task__WEBPACK_IMPORTED_MODULE_4__.Task)(name, dueDate, weight, mark, priority, completion);
          courseArray[courseIndex].taskArray.push(task);
          taskIndex++;
        }
        //From course.js, listen for click and run functions that display the right page.
      }
      courseIndex++;
    }
  }
};

const updateLocalStorageFromArray = () => {
  courseArray.forEach((course, courseIndex) => {
    localStorage.setItem(`course${courseIndex}Name`, `${course.courseName}`);
    localStorage.setItem(
      `course${courseIndex}Credit`,
      `${course.courseCredit}`
    );
    course.taskArray.forEach((task, taskIndex) => {
      localStorage.setItem(
        `course${courseIndex}Task${taskIndex}Name`,
        `${task.taskName}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${taskIndex}DueDate`,
        `${task.taskDueDate}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${taskIndex}Weight`,
        `${task.taskWeight}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${taskIndex}Mark`,
        `${task.taskMark}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${taskIndex}Priority`,
        `${task.taskPriority}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${taskIndex}Completion`,
        `${task.taskCompletion}`
      );
    });
  });
};

// const displayLocallyStoredCoursesInNav = (courseIndex) => {
//   const courseList = document.getElementById("courseList");

//   const courseElement = document.createElement("button");
//   courseElement.classList.add("course");
//   courseElement.innerHTML = `${localStorage.getItem(
//     `course${courseIndex}Name`
//   )}`;
//   courseList.appendChild(courseElement);

//   return courseElement;
// };

const displayCourse = (course) => {
  const courseList = document.getElementById("courseList");
  const courseElement = document.createElement("button");
  courseElement.classList.add("course");
  courseElement.innerHTML = `${course.courseName}`;
  courseList.appendChild(courseElement);

  return courseElement;
};

const displayTask = (task) => {
  const taskList = document.getElementById("taskList");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskCheckbox = document.createElement("button");
  taskCheckbox.classList.add("taskCheckbox");
  taskDiv.append(taskCheckbox);

  if (task.taskPriority == "high") {
    taskCheckbox.classList.add("highPriority");
  } else if (task.taskPriority == "medium") {
    taskCheckbox.classList.add("mediumPriority");
  } else if (task.taskPriority == "low") {
    taskCheckbox.classList.add("lowPriority");
  } else {
  }
  if (task.taskCompletion == "true") {
    taskCheckbox.classList.add("checked");
  } else if (
    task.taskCompletion == "false" &&
    taskCheckbox.classList.contains("checked")
  ) {
    taskCheckbox.remove("checked");
  } else {
  }

  const taskName = document.createElement("p");
  taskName.classList.add("taskName");
  taskName.innerHTML = `${task.taskName}`;
  taskDiv.append(taskName);

  const taskDueDate = document.createElement("p");
  taskDueDate.classList.add("taskDueDate");
  taskDueDate.innerHTML = `${task.taskDueDate}`;
  taskDiv.append(taskDueDate);

  const taskWeight = document.createElement("p");
  taskWeight.classList.add("taskWeight");
  taskWeight.innerHTML = `${task.taskWeight}%`;
  taskDiv.append(taskWeight);

  const taskMark = document.createElement("p");
  taskMark.classList.add("taskMark");
  taskMark.innerHTML = `${task.taskMark}%`;
  taskDiv.append(taskMark);

  const taskDeleteButton = document.createElement("button");
  taskDeleteButton.classList.add("taskDeleteButton");
  taskDeleteButton.innerText = `X`;
  taskDiv.append(taskDeleteButton);

  taskList.append(taskDiv);

  return { taskCheckbox, taskDeleteButton };
};

//

//If there are any elements in localStorage, they get copied onto the array.
updateCourseArrayFromLocalStorage();

/*Now that both the array and the LocalStorage are synched, 
display each course in the nav, and for each displayed 
element, add it's tab functionality.*/

for (let courseIndex = 0; courseIndex < courseArray.length; courseIndex++) {
  let courseElement = displayCourse(courseArray[courseIndex]);
  (0,_course_js__WEBPACK_IMPORTED_MODULE_5__.addCourseTabListener)(courseElement);
}

/*Locally stored courses are now displayed on the nav. addCourseTabListener listens for
a click. It deletes everything in the content div, then calls changeTabs, which will:
- call displayNewTab (displays course title, addTaskPrompt, and taskList div)
- call addDeleteCourseOnClick (deletes and shifts from localStorage and the courseArray)
- call addTaskPromptOnClick (toggles the addTaskModal and addTaskPrompt),
- and finally, it will display the tasks associated with the course. */

/*Everything is finally displayed. Now adding function. */

//Toggles the addCoursePrompt and addCourseForm
(0,_DOM_js__WEBPACK_IMPORTED_MODULE_6__.addCoursePromptOnClick)();

/*Attaches an event listener to the addCourseButton, 
- handles form validation, 
- builds a new Course from form input, 
- pushes it to the array and copies it to localStorage,
- re-displays all courses to the courseList, adds event listeners to each, then toggles form and prompt. */
(0,_courseAddition_js__WEBPACK_IMPORTED_MODULE_2__.addCourse)();

(0,_DOM_js__WEBPACK_IMPORTED_MODULE_6__.cancelAddCourse)();

/*Attaches an event listener to the addTaskButton, 
- handles form validation, 
- builds a new task from form input, 
- pushes it to the array and copies it to localStorage,
- re-displays all tasks to the taskList, adds event listeners to each, then toggles form and prompt. */
(0,_taskAddition_js__WEBPACK_IMPORTED_MODULE_3__.addTask)();

(0,_taskAddition_js__WEBPACK_IMPORTED_MODULE_3__.cancelAddTask)();

console.log(courseArray);


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addTaskListeners": () => (/* binding */ addTaskListeners)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



const Task = (
  taskName,
  taskDueDate,
  taskWeight,
  taskMark,
  taskPriority,
  taskCompletion = "false"
) => {
  return {
    taskName,
    taskDueDate,
    taskWeight,
    taskMark,
    taskPriority,
    taskCompletion,
  };
};

const addTaskListeners = (elements) => {
  if (elements.taskCheckbox != undefined) {
    elements.taskCheckbox.addEventListener("click", (e) => {
      //find the taskName and CourseName
      let taskName = e.target.nextSibling.innerText;
      let courseName =
        e.target.parentElement.parentElement.parentElement.firstChild.firstChild
          .innerText;

      //toggle the checked status
      elements.taskCheckbox.classList.toggle("checked");

      //find the right course and task#, then change its complation value
      for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray.length; i++) {
        if (localStorage.getItem(`course${i}Name`) == courseName) {
          for (let j = 0; j < _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray[i].taskArray.length; j++) {
            if (localStorage.getItem(`course${i}Task${j}Name`) == taskName) {
              if (
                localStorage.getItem(`course${i}Task${j}Completion`) == `false`
              ) {
                localStorage.setItem(`course${i}Task${j}Completion`, `true`);
              } else {
                localStorage.setItem(`course${i}Task${j}Completion`, `false`);
              }
              (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateCourseArrayFromLocalStorage)();
            }
          }
        }
      }
    });
  }

  if (elements.taskDeleteButton != undefined) {
    elements.taskDeleteButton.addEventListener("click", (e) => {
      //find the taskName and CourseName
      let taskName =
        e.target.parentElement.firstChild.nextElementSibling.innerText;
      let courseName =
        e.target.parentElement.parentElement.parentElement.firstChild.firstChild
          .innerText;

      let courseIndex = 0;
      for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray.length; i++) {
        if (courseName == _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray[i].courseName) {
          courseIndex = i;
        }
      }

      let taskIndex = 0;
      for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray[courseIndex].taskArray.length; i++) {
        if (taskName == _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray[courseIndex].taskArray[i].taskName) {
          taskIndex = i;
        }
      }

      console.log(courseIndex, taskIndex);
      //delete from localStorage
      localStorage.removeItem(`course${courseIndex}Task${taskIndex}Name`);
      localStorage.removeItem(`course${courseIndex}Task${taskIndex}DueDate`);
      localStorage.removeItem(`course${courseIndex}Task${taskIndex}Weight`);
      localStorage.removeItem(`course${courseIndex}Task${taskIndex}Mark`);
      localStorage.removeItem(`course${courseIndex}Task${taskIndex}Priority`);
      localStorage.removeItem(`course${courseIndex}Task${taskIndex}Completion`);
      for (
        let j = taskIndex;
        j < _index_js__WEBPACK_IMPORTED_MODULE_0__.courseArray[courseIndex].taskArray.length;
        j++
      ) {
        if (
          localStorage.getItem(`course${courseIndex}Task${j + 1}Name`) !=
          undefined
        ) {
          console.log(
            localStorage.getItem(`course${courseIndex}Task${j + 1}Name`)
          );
          console.log("hello");
          localStorage.setItem(
            `course${courseIndex}Task${j}Name`,
            localStorage.getItem(`course${courseIndex}Task${j + 1}Name`)
          );
          localStorage.setItem(
            `course${courseIndex}Task${j}DueDate`,
            localStorage.getItem(`course${courseIndex}Task${j + 1}DueDate`)
          );
          localStorage.setItem(
            `course${courseIndex}Task${j}Weight`,
            localStorage.getItem(`course${courseIndex}Task${j + 1}Weight`)
          );
          localStorage.setItem(
            `course${courseIndex}Task${j}Mark`,
            localStorage.getItem(`course${courseIndex}Task${j + 1}Mark`)
          );
          localStorage.setItem(
            `course${courseIndex}Task${j}Priority`,
            localStorage.getItem(`course${courseIndex}Task${j + 1}Priority`)
          );
          localStorage.setItem(
            `course${courseIndex}Task${j}Completion`,
            localStorage.getItem(`course${courseIndex}Task${j + 1}Completion`)
          );
        } else {
          localStorage.removeItem(`course${courseIndex}Task${j}Name`);
          localStorage.removeItem(`course${courseIndex}Task${j}DueDate`);
          localStorage.removeItem(`course${courseIndex}Task${j}Weight`);
          localStorage.removeItem(`course${courseIndex}Task${j}Mark`);
          localStorage.removeItem(`course${courseIndex}Task${j}Priority`);
          localStorage.removeItem(`course${courseIndex}Task${j}Completion`);
        }
      }

      // delete task from array
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateCourseArrayFromLocalStorage)();

      //delete course from nav
      let taskList = Array.from(document.getElementsByClassName("task"));
      taskList.forEach((task) => {
        if (task.firstElementChild.nextElementSibling.innerText == taskName) {
          task.remove();
        }
      });
    });
  }
};


/***/ }),

/***/ "./src/taskAddition.js":
/*!*****************************!*\
  !*** ./src/taskAddition.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "addTaskPromptOnClick": () => (/* binding */ addTaskPromptOnClick),
/* harmony export */   "cancelAddTask": () => (/* binding */ cancelAddTask)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _course_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course.js */ "./src/course.js");





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

    document.getElementById("addTaskForm").reset();
    document.getElementById("taskName").setAttribute("placeholder", "");
  });
};
const buildTaskFromForm = () => {
  let taskName = document.getElementById("taskName").value;
  let taskDueDate = document.getElementById("taskDueDate").value;
  let taskWeight = document.getElementById("taskWeight").value;
  let taskMark = document.getElementById("taskMark").value;
  let taskPriority = document.getElementById("taskPriority").value;
  let task = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(taskName, taskDueDate, taskWeight, taskMark, taskPriority);

  return task;
};
const doesTaskAlreadyExist = (taskName, event) => {
  let courseName =
    event.target.parentElement.parentElement.parentElement.parentElement
      .parentElement.firstElementChild.nextElementSibling.firstElementChild
      .firstElementChild.innerText;

  console.log(courseName);

  for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_1__.courseArray.length; i++) {
    if (localStorage.getItem(`course${i}Name`) == courseName) {
      for (let j = 0; j < _index_js__WEBPACK_IMPORTED_MODULE_1__.courseArray[i].taskArray.length; j++) {
        if (localStorage.getItem(`course${i}Task${j}Name`) == taskName) {
          return true;
        }
      }
    }
  }
};

const addTask = () => {
  const addTaskButton = document.getElementById("addTaskButton");

  addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    const taskName = document.getElementById("taskName");

    if (taskName.validity.valueMissing) {
      taskName.setAttribute("placeholder", "This input is required");
    }
    if (doesTaskAlreadyExist(taskName.value, event) == true) {
      taskName.value = "";
      taskName.setAttribute("placeholder", "*This task already exists");
    } else {
      taskName.setAttribute("placeholder", "");

      let task = buildTaskFromForm();
      let courseIndex = (0,_course_js__WEBPACK_IMPORTED_MODULE_2__.determineCourseIndex)();

      //Pushes task to the correct course's task array.
      _index_js__WEBPACK_IMPORTED_MODULE_1__.courseArray[courseIndex].taskArray.push(task);

      (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorageFromArray)();

      //deletes everything in the taskList and builds it all again
      document.getElementById("taskList").innerHTML = "";
      for (
        let taskIndex = 0;
        taskIndex < _index_js__WEBPACK_IMPORTED_MODULE_1__.courseArray[courseIndex].taskArray.length;
        taskIndex++
      ) {
        let taskElements = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.displayTask)(
          _index_js__WEBPACK_IMPORTED_MODULE_1__.courseArray[courseIndex].taskArray[taskIndex]
        );
        //adds the tab functionality to the newly build and displayed task.
        //taskElements (from displaytask) is the nav element.
        (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.addTaskListeners)(taskElements);
      }

      toggleAddTaskForm();
      toggleAddTaskModal();

      document.getElementById("addTaskForm").reset();
    }
  });
};


/***/ }),

/***/ "./src/homeButton.jpg":
/*!****************************!*\
  !*** ./src/homeButton.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9094b155843438bb7325.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxnQkFBZ0IsR0FBRyxTQUFTLGdGQUFnRixVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFdBQVcsVUFBVSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxhQUFhLGFBQWEsY0FBYyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLG9CQUFvQixPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFL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Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9zcmMvY291cnNlLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vc3JjL2NvdXJzZUFkZGl0aW9uLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vc3JjL2NvdXJzZURlbGV0aW9uLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9zcmMvdGFza0FkZGl0aW9uLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIE5BViAqL1xcblxcbiNuYXYge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWF4LXdpZHRoOiAzNSU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU5ZWM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hvbWVCdXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtYXJnaW46IDJyZW0gMXJlbSAycmVtIDFyZW07XFxufVxcblxcbiNob21lQnV0dG9uID4gaW1nIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuLyogQ09VUlNFIExJU1QqL1xcblxcbiNjb3Vyc2VMaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY291cnNlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2YTcxNTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4uY291cnNlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmM4NmM7XFxuICBjb2xvcjogI2ZmZjhlNztcXG59XFxuXFxuLyogQUREIENPVVJTRSBGT1JNICovXFxuXFxuI2FkZENvdXJzZVByb21wdCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNhZGRDb3Vyc2VQcm9tcHQuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZTZhNzE1O1xcbiAgbWFyZ2luOiAycmVtIDFyZW07XFxufVxcblxcbiNhZGRDb3Vyc2VQcm9tcHQ6aG92ZXIge1xcbiAgY29sb3I6ICNlZmM4NmM7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZENvdXJzZVByb21wdDpob3ZlcixcXG4jaG9tZUJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZENvdXJzZUZvcm0uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybVdyYXBwZXIge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMXJlbSwgMHJlbTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtV3JhcHBlciA+IC5mb3JtUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gaW5wdXQge1xcbiAgYWxsOiB1bnNldDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMzVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNXJlbTtcXG4gIGZsZXg6IDQ7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI2FkZENvdXJzZUZvcm1XcmFwcGVyID4gLmZvcm1Sb3cgPiBsYWJlbCB7XFxuICBtaW4td2lkdGg6IDMuNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiAjZTZhNzE1O1xcbn1cXG5cXG4jYWRkQ291cnNlU3VibWl0Rm9ybVJvdyB7XFxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jYWRkQ291cnNlQnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jY2FuY2VsQWRkQ291cnNlQnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jYWRkQ291cnNlQnV0dG9uOmhvdmVyLFxcbiNjYW5jZWxBZGRDb3Vyc2VCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuI2FkZENvdXJzZUJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2U2YTcxNTtcXG59XFxuXFxuLyogQ09OVEVOVCAqL1xcblxcbiNjb250ZW50IHtcXG4gIG1heC13aWR0aDogNjAlO1xcblxcbiAgZmxleC1ncm93OiAzO1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG5cXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNjb3Vyc2VUaXRsZURpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jY291cnNlVGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNkZWxldGVDb3Vyc2VCdXR0b24ge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4Nzg3O1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNkZWxldGVDb3Vyc2VCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmODc4NztcXG59XFxuXFxuI2FkZFRhc2tQcm9tcHQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkVGFza1Byb21wdC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICM5YTdhYTA7XFxuICBtYXJnaW46IDEuNXJlbSAwcmVtO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jYWRkVGFza1Byb21wdDpob3ZlciB7XFxuICBjb2xvcjogI2Q0YzFkNztcXG59XFxuXFxuLyogQUREIFRBU0sgTU9EQUwgKi9cXG5cXG4jYWRkVGFza01vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlOWVjO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG5cXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICB3aWR0aDogMzVyZW07XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkVGFza01vZGFsLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbiNhZGRUYXNrRm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNhZGRUYXNrRm9ybS5hY3RpdmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuI2FkZFRhc2tGb3JtV3JhcHBlciB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAxcmVtLCAwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhZGRUYXNrRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm1XcmFwcGVyID4gLmZvcm1Sb3cgPiBpbnB1dCxcXG4jYWRkVGFza0Zvcm1XcmFwcGVyID4gLmZvcm1Sb3cgPiBzZWxlY3Qge1xcbiAgYWxsOiB1bnNldDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMzVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNXJlbTtcXG4gIGZsZXg6IDQ7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI2FkZFRhc2tGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gbGFiZWwge1xcbiAgbWluLXdpZHRoOiAzLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogIzlhN2FhMDtcXG59XFxuXFxuI2FkZFRhc2tTdWJtaXRGb3JtUm93IHtcXG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jY2FuY2VsQWRkVGFza0J1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZFRhc2tCdXR0b246aG92ZXIsXFxuI2NhbmNlbEFkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICM5YTdhYTA7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXFxuICBjb2xvcjogI2ZmODc4NztcXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xcbiAgY29sb3I6ICNmZjg3ODc7XFxufVxcblxcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXFxuICBjb2xvcjogI2ZmODc4NztcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNvdmVybGF5LmFjdGl2ZSB7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogVEFTS1MgKi9cXG5cXG4jdGFza0xpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGdhcDogMC43NXJlbTtcXG59XFxuXFxuLnRhc2tDaGVja2JveCB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMC4zNXJlbSBzb2xpZCAjMjM5NjdmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tDaGVja2JveC5sb3dQcmlvcml0eSB7XFxuICBib3JkZXI6IDAuMzVyZW0gc29saWQgIzIzOTY3ZjtcXG59XFxuLnRhc2tDaGVja2JveC5sb3dQcmlvcml0eTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCAxNTAsIDEyNywgMC41KTtcXG59XFxuLnRhc2tDaGVja2JveC5sb3dQcmlvcml0eS5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk2N2Y7XFxuICBib3JkZXI6IDAuMzVyZW0gc29saWQgIzIzOTY3ZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnRhc2tDaGVja2JveC5tZWRpdW1Qcmlvcml0eSB7XFxuICBib3JkZXI6IDAuMzVyZW0gc29saWQgI2U2YTcxNTtcXG59XFxuLnRhc2tDaGVja2JveC5tZWRpdW1Qcmlvcml0eTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVhNjE1ODA7XFxufVxcbi50YXNrQ2hlY2tib3gubWVkaXVtUHJpb3JpdHkuY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZhNzE1O1xcbiAgYm9yZGVyOiAwLjM1cmVtIHNvbGlkICNlNmE3MTU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50YXNrQ2hlY2tib3guaGlnaFByaW9yaXR5IHtcXG4gIGJvcmRlcjogMC4zNXJlbSBzb2xpZCAjZmY4Nzg3O1xcbn1cXG4udGFza0NoZWNrYm94LmhpZ2hQcmlvcml0eTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4Nzg3ODA7XFxufVxcbi50YXNrQ2hlY2tib3guaGlnaFByaW9yaXR5LmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODc4NztcXG4gIGJvcmRlcjogMC4zNXJlbSBzb2xpZCAjZmY4Nzg3O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFza05hbWUge1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnRhc2tEdWVEYXRlIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbi50YXNrV2VpZ2h0IHtcXG4gIHdpZHRoOiA1JTtcXG59XFxuXFxuLnRhc2tNYXJrIHtcXG4gIHdpZHRoOiA1JTtcXG59XFxuXFxuLnRhc2tEZWxldGVCdXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIG1pbi13aWR0aDogMXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDFyZW07XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmZjg3ODc7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLnRhc2tEZWxldGVCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNmZmJkYmQ7XFxufVxcblxcbi50YXNrQ3Jvc3NPdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsYUFBYTs7RUFFYix5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQSxRQUFROztBQUVSO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsYUFBYTtFQUNi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O0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBOQVYgKi9cXG5cXG4jbmF2IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogMzUlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlOWVjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNob21lQnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAycmVtIDFyZW0gMnJlbSAxcmVtO1xcbn1cXG5cXG4jaG9tZUJ1dHRvbiA+IGltZyB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi8qIENPVVJTRSBMSVNUKi9cXG5cXG4jY291cnNlTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvdXJzZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmE3MTU7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLmNvdXJzZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZjODZjO1xcbiAgY29sb3I6ICNmZmY4ZTc7XFxufVxcblxcbi8qIEFERCBDT1VSU0UgRk9STSAqL1xcblxcbiNhZGRDb3Vyc2VQcm9tcHQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkQ291cnNlUHJvbXB0LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2U2YTcxNTtcXG4gIG1hcmdpbjogMnJlbSAxcmVtO1xcbn1cXG5cXG4jYWRkQ291cnNlUHJvbXB0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZWZjODZjO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNhZGRDb3Vyc2VQcm9tcHQ6aG92ZXIsXFxuI2hvbWVCdXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuI2FkZENvdXJzZUZvcm1XcmFwcGVyIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDFyZW0sIDByZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyA+IGlucHV0IHtcXG4gIGFsbDogdW5zZXQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjM1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDVyZW07XFxuICBmbGV4OiA0O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gbGFiZWwge1xcbiAgbWluLXdpZHRoOiAzLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogI2U2YTcxNTtcXG59XFxuXFxuI2FkZENvdXJzZVN1Ym1pdEZvcm1Sb3cge1xcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2FkZENvdXJzZUJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2NhbmNlbEFkZENvdXJzZUJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZENvdXJzZUJ1dHRvbjpob3ZlcixcXG4jY2FuY2VsQWRkQ291cnNlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbiNhZGRDb3Vyc2VCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNlNmE3MTU7XFxufVxcblxcbi8qIENPTlRFTlQgKi9cXG5cXG4jY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDYwJTtcXG5cXG4gIGZsZXgtZ3JvdzogMztcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxuXFxuICBwYWRkaW5nOiAxLjVyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY291cnNlVGl0bGVEaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2NvdXJzZVRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jZGVsZXRlQ291cnNlQnV0dG9uIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODc4NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jZGVsZXRlQ291cnNlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmZjg3ODc7XFxufVxcblxcbiNhZGRUYXNrUHJvbXB0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2tQcm9tcHQuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjOWE3YWEwO1xcbiAgbWFyZ2luOiAxLjVyZW0gMHJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZFRhc2tQcm9tcHQ6aG92ZXIge1xcbiAgY29sb3I6ICNkNGMxZDc7XFxufVxcblxcbi8qIEFERCBUQVNLIE1PREFMICovXFxuXFxuI2FkZFRhc2tNb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTllYztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgd2lkdGg6IDM1cmVtO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2tNb2RhbC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm0uYWN0aXZlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbiNhZGRUYXNrRm9ybVdyYXBwZXIge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMXJlbSwgMHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm1XcmFwcGVyID4gLmZvcm1Sb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuI2FkZFRhc2tGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gaW5wdXQsXFxuI2FkZFRhc2tGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gc2VsZWN0IHtcXG4gIGFsbDogdW5zZXQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjM1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDVyZW07XFxuICBmbGV4OiA0O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiNhZGRUYXNrRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyA+IGxhYmVsIHtcXG4gIG1pbi13aWR0aDogMy41cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6ICM5YTdhYTA7XFxufVxcblxcbiNhZGRUYXNrU3VibWl0Rm9ybVJvdyB7XFxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2NhbmNlbEFkZFRhc2tCdXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyLFxcbiNjYW5jZWxBZGRUYXNrQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjOWE3YWEwO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xcbiAgY29sb3I6ICNmZjg3ODc7XFxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cXG4gIGNvbG9yOiAjZmY4Nzg3O1xcbn1cXG5cXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xcbiAgY29sb3I6ICNmZjg3ODc7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIFRBU0tTICovXFxuXFxuI3Rhc2tMaXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBnYXA6IDAuNzVyZW07XFxufVxcblxcbi50YXNrQ2hlY2tib3gge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDAuMzVyZW0gc29saWQgIzIzOTY3ZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrQ2hlY2tib3gubG93UHJpb3JpdHkge1xcbiAgYm9yZGVyOiAwLjM1cmVtIHNvbGlkICMyMzk2N2Y7XFxufVxcbi50YXNrQ2hlY2tib3gubG93UHJpb3JpdHk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwgMTUwLCAxMjcsIDAuNSk7XFxufVxcbi50YXNrQ2hlY2tib3gubG93UHJpb3JpdHkuY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NjdmO1xcbiAgYm9yZGVyOiAwLjM1cmVtIHNvbGlkICMyMzk2N2Y7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50YXNrQ2hlY2tib3gubWVkaXVtUHJpb3JpdHkge1xcbiAgYm9yZGVyOiAwLjM1cmVtIHNvbGlkICNlNmE3MTU7XFxufVxcbi50YXNrQ2hlY2tib3gubWVkaXVtUHJpb3JpdHk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1YTYxNTgwO1xcbn1cXG4udGFza0NoZWNrYm94Lm1lZGl1bVByaW9yaXR5LmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2YTcxNTtcXG4gIGJvcmRlcjogMC4zNXJlbSBzb2xpZCAjZTZhNzE1O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4udGFza0NoZWNrYm94LmhpZ2hQcmlvcml0eSB7XFxuICBib3JkZXI6IDAuMzVyZW0gc29saWQgI2ZmODc4NztcXG59XFxuLnRhc2tDaGVja2JveC5oaWdoUHJpb3JpdHk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODc4NzgwO1xcbn1cXG4udGFza0NoZWNrYm94LmhpZ2hQcmlvcml0eS5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjg3ODc7XFxuICBib3JkZXI6IDAuMzVyZW0gc29saWQgI2ZmODc4NztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2tOYW1lIHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbi50YXNrRHVlRGF0ZSB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG5cXG4udGFza1dlaWdodCB7XFxuICB3aWR0aDogNSU7XFxufVxcblxcbi50YXNrTWFyayB7XFxuICB3aWR0aDogNSU7XFxufVxcblxcbi50YXNrRGVsZXRlQnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICBtaW4td2lkdGg6IDFyZW07XFxuICBtaW4taGVpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZmY4Nzg3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbi50YXNrRGVsZXRlQnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZiZGJkO1xcbn1cXG5cXG4udGFza0Nyb3NzT3V0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7XG4gIGFkZENvdXJzZVByb21wdE9uQ2xpY2ssXG4gIGNhbmNlbEFkZENvdXJzZSxcbiAgYnVpbGRMb2NhbGx5U3RvcmVkQ291cnNlcyxcbiAgdG9nZ2xlQWRkQ291cnNlRm9ybSxcbiAgdG9nZ2xlQWRkQ291cnNlUHJvbXB0LFxufTtcblxuLy8gQ291cnNlIEFkZGl0aW9uIC8vXG5cbmNvbnN0IHRvZ2dsZUFkZENvdXJzZUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGFkZENvdXJzZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZENvdXJzZUZvcm1cIik7XG4gIGFkZENvdXJzZUZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn07XG5jb25zdCB0b2dnbGVBZGRDb3Vyc2VQcm9tcHQgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZENvdXJzZVByb21wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQ291cnNlUHJvbXB0XCIpO1xuICBhZGRDb3Vyc2VQcm9tcHQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn07XG5cbi8vYWRkQ291cnNlUHJvbXB0IGV2ZW50IGxpc3RlbmVyXG5jb25zdCBhZGRDb3Vyc2VQcm9tcHRPbkNsaWNrID0gKCkgPT4ge1xuICBjb25zdCBhZGRDb3Vyc2VQcm9tcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZENvdXJzZVByb21wdFwiKTtcbiAgYWRkQ291cnNlUHJvbXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlQWRkQ291cnNlRm9ybSgpO1xuICAgIHRvZ2dsZUFkZENvdXJzZVByb21wdCgpO1xuICB9KTtcbn07XG5cbi8vQ2FuY2VsIGFkZGluZyBhIGNvdXJzZVxuY29uc3QgY2FuY2VsQWRkQ291cnNlID0gKCkgPT4ge1xuICBjb25zdCBjYW5jZWxBZGRDb3Vyc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImNhbmNlbEFkZENvdXJzZUJ1dHRvblwiXG4gICk7XG5cbiAgY2FuY2VsQWRkQ291cnNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlQWRkQ291cnNlRm9ybSgpO1xuICAgIHRvZ2dsZUFkZENvdXJzZVByb21wdCgpO1xuXG4gICAgLy9yZXNldCBmb3JtIGlucHV0cywgcGxhY2Vob2xkZXJzXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRDb3Vyc2VGb3JtXCIpLnJlc2V0KCk7XG5cbiAgICBjb25zdCBjb3Vyc2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VOYW1lXCIpO1xuICAgIGNvbnN0IGNvdXJzZUNyZWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cnNlQ3JlZGl0XCIpO1xuXG4gICAgY291cnNlTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlwiKTtcbiAgICBjb3Vyc2VDcmVkaXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJcIik7XG4gIH0pO1xufTtcblxuLy9CdWlsZCBsb2NhbGx5IHN0b3JlZCBjb3Vyc2VzIG9uIHRoZSBET01cbmNvbnN0IGJ1aWxkTG9jYWxseVN0b3JlZENvdXJzZXMgPSAoY291cnNlSW5kZXgpID0+IHtcbiAgY29uc3QgY291cnNlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cnNlTGlzdFwiKTtcblxuICBjb25zdCBjb3Vyc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY291cnNlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY291cnNlXCIpO1xuICBjb3Vyc2VFbGVtZW50LmlubmVySFRNTCA9IGAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fU5hbWVgXG4gICl9YDtcbiAgY291cnNlTGlzdC5hcHBlbmRDaGlsZChjb3Vyc2VFbGVtZW50KTtcblxuICByZXR1cm4gY291cnNlRWxlbWVudDtcbn07XG4iLCJpbXBvcnQgeyBhZGRUYXNrUHJvbXB0T25DbGljayB9IGZyb20gXCIuL3Rhc2tBZGRpdGlvblwiO1xuaW1wb3J0IHsgYWRkRGVsZXRlQ291cnNlT25DbGljayB9IGZyb20gXCIuL2NvdXJzZURlbGV0aW9uLmpzXCI7XG5pbXBvcnQge30gZnJvbSBcIi4vRE9NLmpzXCI7XG5pbXBvcnQgeyBhZGRUYXNrTGlzdGVuZXJzIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgY291cnNlQXJyYXksIGRpc3BsYXlUYXNrIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmV4cG9ydCB7XG4gIENvdXJzZSxcbiAgYWRkQ291cnNlVGFiTGlzdGVuZXIsXG4gIGJ1aWxkQ291cnNlRnJvbUZvcm0sXG4gIGRldGVybWluZUNvdXJzZUluZGV4LFxufTtcblxuY29uc3QgQ291cnNlID0gKGNvdXJzZU5hbWUsIGNvdXJzZUNyZWRpdCkgPT4ge1xuICBjb25zdCB0YXNrQXJyYXkgPSBbXTtcblxuICAvLyBjb25zdCBnZXRDb3Vyc2VOYW1lID0gKCkgPT4gY291cnNlTmFtZTtcbiAgLy8gY29uc3QgZ2V0Q291cnNlQ3JlZGl0ID0gKCkgPT4gY291cnNlQ3JlZGl0O1xuXG4gIHJldHVybiB7XG4gICAgY291cnNlTmFtZSxcbiAgICBjb3Vyc2VDcmVkaXQsXG4gICAgdGFza0FycmF5LFxuICAgIC8vIGdldENvdXJzZU5hbWUsXG4gICAgLy8gZ2V0Q291cnNlQ3JlZGl0LFxuICAgIC8vIHRhc2tBcnJheSxcbiAgfTtcbn07XG5cbmNvbnN0IGRldGVybWluZUNvdXJzZUluZGV4ID0gKCkgPT4ge1xuICBmb3IgKGxldCBjb3Vyc2VJbmRleCA9IDA7IGNvdXJzZUluZGV4IDw9IGNvdXJzZUFycmF5Lmxlbmd0aDsgY291cnNlSW5kZXgrKykge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZVRpdGxlXCIpID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VUaXRsZVwiKS5pbm5lckhUTUwgPT1cbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fU5hbWVgKVxuICAgICkge1xuICAgICAgcmV0dXJuIGNvdXJzZUluZGV4O1xuICAgIH1cbiAgfVxufTtcblxuLy9CdWlsZGluZyBhIGNvdXJzZSBmcm9tIGZvcm1cbmNvbnN0IGJ1aWxkQ291cnNlRnJvbUZvcm0gPSAoKSA9PiB7XG4gIGxldCBjb3Vyc2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VOYW1lXCIpLnZhbHVlO1xuICBsZXQgY291cnNlQ3JlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VDcmVkaXRcIikudmFsdWU7XG4gIGxldCBjb3Vyc2UgPSBDb3Vyc2UoY291cnNlTmFtZSwgY291cnNlQ3JlZGl0KTtcblxuICByZXR1cm4gY291cnNlO1xufTtcblxuY29uc3QgZGlzcGxheU5ld1RhYiA9ICh0YXJnZXQpID0+IHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb25zdCBjb3Vyc2VUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvdXJzZVRpdGxlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY291cnNlVGl0bGVEaXZcIik7XG5cbiAgLy9UaXRsZVxuICBjb25zdCBjb3Vyc2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoXCIpO1xuICBjb3Vyc2VUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvdXJzZVRpdGxlXCIpO1xuICBjb3Vyc2VUaXRsZS5pbm5lckhUTUwgPSB0YXJnZXQuaW5uZXJIVE1MO1xuICBjb3Vyc2VUaXRsZURpdi5hcHBlbmQoY291cnNlVGl0bGUpO1xuXG4gIC8vRGVsZXRlQ291cnNlQnV0dG9uXG4gIGNvbnN0IGRlbGV0ZUNvdXJzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUNvdXJzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZUNvdXJzZUJ1dHRvblwiKTtcbiAgZGVsZXRlQ291cnNlQnV0dG9uLmlubmVySFRNTCA9IFwiRGVsZXRlXCI7XG4gIGNvdXJzZVRpdGxlRGl2LmFwcGVuZChkZWxldGVDb3Vyc2VCdXR0b24pO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kKGNvdXJzZVRpdGxlRGl2KTtcblxuICAvL0FkZCBUYXNrIEJ1dHRvblxuICBjb25zdCBhZGRUYXNrUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza1Byb21wdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFRhc2tQcm9tcHRcIik7XG4gIGFkZFRhc2tQcm9tcHQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgYWRkVGFza1Byb21wdC5pbm5lckhUTUwgPSBcIisgQWRkIFRhc2tcIjtcbiAgY29udGVudERpdi5hcHBlbmQoYWRkVGFza1Byb21wdCk7XG5cbiAgLy9UYXNrbGlzdFxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0xpc3RcIik7XG4gIGNvbnRlbnREaXYuYXBwZW5kKHRhc2tMaXN0KTtcbn07XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGNoYW5nZVRhYnMgPSAoZSkgPT4ge1xuICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgLy9EaXNwbGF5cyB0aXRsZSwgYWRkVGFza1Byb21wdCwgYW5kIHRhc2tMaXN0IGRpdiBmb3IgY291cnNlIHRhYnNcbiAgZGlzcGxheU5ld1RhYih0YXJnZXQpO1xuXG4gIC8vYWRkIEV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkZWxldGVDb3Vyc2UgQnV0dG9uXG4gIGFkZERlbGV0ZUNvdXJzZU9uQ2xpY2soKTtcblxuICAvL0FkZCBFdmVudCBsaXN0ZW5lciB0byB0aGUgYWRkVGFzayBCdXR0b25cbiAgYWRkVGFza1Byb21wdE9uQ2xpY2soKTtcblxuICBsZXQgY291cnNlSW5kZXggPSBkZXRlcm1pbmVDb3Vyc2VJbmRleCgpO1xuXG4gIGZvciAoXG4gICAgbGV0IHRhc2tJbmRleCA9IDA7XG4gICAgdGFza0luZGV4IDwgY291cnNlQXJyYXlbY291cnNlSW5kZXhdLnRhc2tBcnJheS5sZW5ndGg7XG4gICAgdGFza0luZGV4KytcbiAgKSB7XG4gICAgbGV0IHRhc2tFbGVtZW50cyA9IGRpc3BsYXlUYXNrKFxuICAgICAgY291cnNlQXJyYXlbY291cnNlSW5kZXhdLnRhc2tBcnJheVt0YXNrSW5kZXhdXG4gICAgKTtcbiAgICBhZGRUYXNrTGlzdGVuZXJzKHRhc2tFbGVtZW50cyk7XG4gIH1cbn07XG5cbmNvbnN0IGFkZENvdXJzZVRhYkxpc3RlbmVyID0gKGNvdXJzZSkgPT4ge1xuICBpZiAoY291cnNlICE9IHVuZGVmaW5lZCkge1xuICAgIGNvdXJzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNoYW5nZVRhYnMoZSk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBDb3Vyc2UsIGJ1aWxkQ291cnNlRnJvbUZvcm0sIGFkZENvdXJzZVRhYkxpc3RlbmVyIH0gZnJvbSBcIi4vY291cnNlLmpzXCI7XG5pbXBvcnQge1xuICB0b2dnbGVBZGRDb3Vyc2VGb3JtLFxuICB0b2dnbGVBZGRDb3Vyc2VQcm9tcHQsXG4gIGJ1aWxkTG9jYWxseVN0b3JlZENvdXJzZXMsXG59IGZyb20gXCIuL0RPTS5qc1wiO1xuaW1wb3J0IHtcbiAgY291cnNlQXJyYXksXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZUZyb21BcnJheSxcbiAgZGlzcGxheUNvdXJzZSxcbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmV4cG9ydCB7IGRpc3BsYXlMb2NhbGx5U3RvcmVkQ291cnNlcywgYWRkQ291cnNlIH07XG5cbmNvbnN0IGRpc3BsYXlMb2NhbGx5U3RvcmVkQ291cnNlcyA9ICgpID0+IHtcbiAgZm9yIChsZXQgY291cnNlSW5kZXggPSAwOyBjb3Vyc2VJbmRleCA8IDUwOyBjb3Vyc2VJbmRleCsrKSB7XG4gICAgd2hpbGUgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fU5hbWVgKSAhPSBudWxsKSB7XG4gICAgICBsZXQgY291cnNlRWxlbWVudCA9IGJ1aWxkTG9jYWxseVN0b3JlZENvdXJzZXMoY291cnNlSW5kZXgpO1xuXG4gICAgICAvL0FkZCBsb2NhbGx5IHN0b3JlZCBjb3Vyc2VzIHRvIHRoZSBhcnJheVxuICAgICAgbGV0IGNvdXJzZU5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1OYW1lYCk7XG4gICAgICBsZXQgY291cnNlQ3JlZGl0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9Q3JlZGl0YCk7XG4gICAgICBsZXQgY291cnNlID0gQ291cnNlKGNvdXJzZU5hbWUsIGNvdXJzZUNyZWRpdCk7XG4gICAgICBjb3Vyc2VBcnJheS5wdXNoKGNvdXJzZSk7XG5cbiAgICAgIC8vRnJvbSBjb3Vyc2UuanMsIGxpc3RlbiBmb3IgY2xpY2sgYW5kIHJ1biBmdW5jdGlvbnMgdGhhdCBkaXNwbGF5IHRoZSByaWdodCBwYWdlLlxuICAgICAgYWRkQ291cnNlVGFiTGlzdGVuZXIoY291cnNlRWxlbWVudCk7XG4gICAgICBjb3Vyc2VJbmRleCsrO1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IGRvZXNDb3Vyc2VBbHJlYWR5RXhpc3QgPSAoY291cnNlTmFtZSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdXJzZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2l9TmFtZWApID09IGNvdXJzZU5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxuLy9BZGRpbmcgYSBjb3Vyc2VcbmNvbnN0IGFkZENvdXJzZSA9ICgpID0+IHtcbiAgY29uc3QgYWRkQ291cnNlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRDb3Vyc2VCdXR0b25cIik7XG4gIGFkZENvdXJzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGNvdXJzZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZU5hbWVcIik7XG4gICAgY29uc3QgY291cnNlQ3JlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VDcmVkaXRcIik7XG5cbiAgICAvL1RoZSBmb2xsb3dpbmcgaWYgc3RhdGVtZW50cyBhcmUgdGhlIGZvcm0gdmFsaWRhdGlvbiwgY2hlY2tpbmcgZm9yIGlucHV0IGFzIHdlbGwgYXMgbm8gY291cnNlTmFtZSBkdXBsaWNhdGVzLlxuICAgIGlmIChcbiAgICAgIGNvdXJzZU5hbWUudmFsaWRpdHkudmFsdWVNaXNzaW5nICYmXG4gICAgICBjb3Vyc2VDcmVkaXQudmFsaWRpdHkudmFsdWVNaXNzaW5nXG4gICAgKSB7XG4gICAgICBjb3Vyc2VOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiKlRoaXMgaW5wdXQgaXMgcmVxdWlyZWRcIik7XG4gICAgICBjb3Vyc2VDcmVkaXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIqVGhpcyBpbnB1dCBpcyByZXF1aXJlZFwiKTtcbiAgICB9IGVsc2UgaWYgKGNvdXJzZU5hbWUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBjb3Vyc2VOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiKlRoaXMgaW5wdXQgaXMgcmVxdWlyZWRcIik7XG4gICAgfSBlbHNlIGlmIChjb3Vyc2VDcmVkaXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBjb3Vyc2VDcmVkaXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIqVGhpcyBpbnB1dCBpcyByZXF1aXJlZFwiKTtcbiAgICAgIGlmIChkb2VzQ291cnNlQWxyZWFkeUV4aXN0KGNvdXJzZU5hbWUudmFsdWUpID09IHRydWUpIHtcbiAgICAgICAgY291cnNlTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGNvdXJzZU5hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIqVGhpcyBjb3Vyc2UgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkb2VzQ291cnNlQWxyZWFkeUV4aXN0KGNvdXJzZU5hbWUudmFsdWUpID09IHRydWUpIHtcbiAgICAgICAgY291cnNlTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGNvdXJzZU5hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIqVGhpcyBjb3Vyc2UgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3Vyc2VOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiXCIpO1xuICAgICAgICBjb3Vyc2VDcmVkaXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJcIik7XG5cbiAgICAgICAgbGV0IGNvdXJzZSA9IGJ1aWxkQ291cnNlRnJvbUZvcm0oKTtcblxuICAgICAgICAvL1B1c2hlcyBjb3Vyc2UgdG8gYXJyYXksIGl0ZXJhdGVzIHRocm91Z2ggYXJyYXkgYW5kIHVwZGF0ZXMgbG9jYWxTdG9yYWdlXG4gICAgICAgIGNvdXJzZUFycmF5LnB1c2goY291cnNlKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlRnJvbUFycmF5KCk7XG5cbiAgICAgICAgLy9kZWxldGVzIGV2ZXJ5dGhpbmcgaW4gdGhlIGNvdXJzZUxpc3QgYW5kIGJ1aWxkcyBpdCBhbGwgYWdhaW5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VMaXN0XCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgbGV0IGNvdXJzZUluZGV4ID0gMDtcbiAgICAgICAgICBjb3Vyc2VJbmRleCA8IGNvdXJzZUFycmF5Lmxlbmd0aDtcbiAgICAgICAgICBjb3Vyc2VJbmRleCsrXG4gICAgICAgICkge1xuICAgICAgICAgIGxldCBjb3Vyc2VFbGVtZW50ID0gZGlzcGxheUNvdXJzZShjb3Vyc2VBcnJheVtjb3Vyc2VJbmRleF0pO1xuXG4gICAgICAgICAgLy9hZGRzIHRoZSB0YWIgZnVuY3Rpb25hbGl0eSB0byB0aGUgbmV3bHkgYnVpbGQgYW5kIGRpc3BsYXllZCBjb3Vyc2UuXG4gICAgICAgICAgLy9Db3Vyc2VFbGVtZW50IChmcm9tIGRpc3BsYXlDb3Vyc2UpIGlzIHRoZSBuYXYgZWxlbWVudC5cbiAgICAgICAgICBhZGRDb3Vyc2VUYWJMaXN0ZW5lcihjb3Vyc2VFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZUFkZENvdXJzZUZvcm0oKTtcbiAgICAgICAgdG9nZ2xlQWRkQ291cnNlUHJvbXB0KCk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRDb3Vyc2VGb3JtXCIpLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBjb3Vyc2VBcnJheSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5leHBvcnQgeyBhZGREZWxldGVDb3Vyc2VPbkNsaWNrIH07XG5cbmNvbnN0IGFkZERlbGV0ZUNvdXJzZU9uQ2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZUNvdXJzZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlQ291cnNlQnV0dG9uXCIpO1xuICBkZWxldGVDb3Vyc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGxldCB0aXRsZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuXG4gICAgLy9GaW5kaW5nIHRoZSBjb3Vyc2UgSW5kZXhcbiAgICBsZXQgY291cnNlSW5kZXggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291cnNlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aXRsZSA9PSBjb3Vyc2VBcnJheVtpXS5jb3Vyc2VOYW1lKSB7XG4gICAgICAgIGNvdXJzZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2RlbGV0ZSBjb3Vyc2UgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9TmFtZWApO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fUNyZWRpdGApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291cnNlQXJyYXlbY291cnNlSW5kZXhdLnRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7aX1OYW1lYCk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtpfUR1ZURhdGVgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2l9V2VpZ2h0YCk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtpfU1hcmtgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2l9UHJpb3JpdHlgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2l9Q29tcGxldGlvbmApO1xuICAgIH1cbiAgICAvL3NoaWZ0IGxvY2Fsc3RvcmFnZVxuICAgIGZvciAobGV0IGkgPSBjb3Vyc2VJbmRleDsgaSA8IGNvdXJzZUFycmF5Lmxlbmd0aCArIDE7IGkrKykge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2kgKyAxfU5hbWVgKSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgYGNvdXJzZSR7aX1OYW1lYCxcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtpICsgMX1OYW1lYClcbiAgICAgICAgKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICBgY291cnNlJHtpfUNyZWRpdGAsXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7aSArIDF9Q3JlZGl0YClcbiAgICAgICAgKTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdXJzZUFycmF5W2kgKyAxXS50YXNrQXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIGBjb3Vyc2Uke2l9VGFzayR7an1OYW1lYCxcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2kgKyAxfVRhc2ske2p9TmFtZWApXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIGBjb3Vyc2Uke2l9VGFzayR7an1EdWVEYXRlYCxcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2kgKyAxfVRhc2ske2p9RHVlRGF0ZWApXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIGBjb3Vyc2Uke2l9VGFzayR7an1XZWlnaHRgLFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7aSArIDF9VGFzayR7an1XZWlnaHRgKVxuICAgICAgICAgICk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICBgY291cnNlJHtpfVRhc2ske2p9TWFya2AsXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtpICsgMX1UYXNrJHtqfU1hcmtgKVxuICAgICAgICAgICk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICBgY291cnNlJHtpfVRhc2ske2p9UHJpb3JpdHlgLFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7aSArIDF9VGFzayR7an1Qcmlvcml0eWApXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIGBjb3Vyc2Uke2l9VGFzayR7an1Db21wbGV0aW9uYCxcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2kgKyAxfVRhc2ske2p9Q29tcGxldGlvbmApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9kZWxldGUgY291cnNlIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtpfU5hbWVgKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNvdXJzZSR7aX1DcmVkaXRgKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3Vyc2VBcnJheVtjb3Vyc2VJbmRleF0udGFza0FycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNvdXJzZSR7aX1UYXNrJHtqfU5hbWVgKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtpfVRhc2ske2p9RHVlRGF0ZWApO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2l9VGFzayR7an1XZWlnaHRgKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtpfVRhc2ske2p9TWFya2ApO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2l9VGFzayR7an1Qcmlvcml0eWApO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2l9VGFzayR7an1Db21wbGV0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkZWxldGUgY291cnNlIGZyb20gYXJyYXlcbiAgICBsZXQgdGVtcENvdXJzZUluZGV4ID0gY291cnNlSW5kZXg7XG4gICAgd2hpbGUgKHRlbXBDb3Vyc2VJbmRleCA8IGNvdXJzZUFycmF5Lmxlbmd0aCkge1xuICAgICAgaWYgKGNvdXJzZUFycmF5W3RlbXBDb3Vyc2VJbmRleCArIDFdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjb3Vyc2VBcnJheVt0ZW1wQ291cnNlSW5kZXhdID0gY291cnNlQXJyYXlbdGVtcENvdXJzZUluZGV4ICsgMV07XG4gICAgICAgIHRlbXBDb3Vyc2VJbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291cnNlQXJyYXkucG9wKCk7XG4gICAgICB9XG4gICAgICB0ZW1wQ291cnNlSW5kZXgrKztcbiAgICB9XG5cbiAgICAvL2RlbGV0ZSBjb3Vyc2UgZnJvbSBuYXZcbiAgICBsZXQgY291cnNlTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvdXJzZVwiKSk7XG4gICAgY291cnNlTGlzdC5mb3JFYWNoKChjb3Vyc2UpID0+IHtcbiAgICAgIGlmIChjb3Vyc2UuaW5uZXJUZXh0ID09IHRpdGxlKSB7XG4gICAgICAgIGNvdXJzZS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGhvbWVCdXR0b25JbWFnZSBmcm9tIFwiLi9ob21lQnV0dG9uLmpwZ1wiO1xuXG5pbXBvcnQgeyBkaXNwbGF5TG9jYWxseVN0b3JlZENvdXJzZXMsIGFkZENvdXJzZSB9IGZyb20gXCIuL2NvdXJzZUFkZGl0aW9uLmpzXCI7XG5pbXBvcnQgeyBjYW5jZWxBZGRUYXNrLCBhZGRUYXNrIH0gZnJvbSBcIi4vdGFza0FkZGl0aW9uLmpzXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgQ291cnNlLCBhZGRDb3Vyc2VUYWJMaXN0ZW5lciB9IGZyb20gXCIuL2NvdXJzZS5qc1wiO1xuaW1wb3J0IHsgYWRkQ291cnNlUHJvbXB0T25DbGljaywgY2FuY2VsQWRkQ291cnNlIH0gZnJvbSBcIi4vRE9NLmpzXCI7XG5leHBvcnQge1xuICBjb3Vyc2VBcnJheSxcbiAgdXBkYXRlTG9jYWxTdG9yYWdlRnJvbUFycmF5LFxuICB1cGRhdGVDb3Vyc2VBcnJheUZyb21Mb2NhbFN0b3JhZ2UsXG4gIGRpc3BsYXlUYXNrLFxuICBkaXNwbGF5Q291cnNlLFxufTtcblxuY29uc3QgaG9tZUJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuaG9tZUJ1dHRvbi5zcmMgPSBob21lQnV0dG9uSW1hZ2U7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVCdXR0b25cIikuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG5cbmNvbnN0IGNvdXJzZUFycmF5ID0gW107XG5cbmNvbnN0IHVwZGF0ZUNvdXJzZUFycmF5RnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgLy9mb3IgYWxsIGxvY2FsbHkgc3RvcmVkIGNvdXJzZXNcbiAgZm9yIChsZXQgY291cnNlSW5kZXggPSAwOyBjb3Vyc2VJbmRleCA8IDUwOyBjb3Vyc2VJbmRleCsrKSB7XG4gICAgLy9XaGlsZSBhIGNvdXJzZSBzdGlsbCBleGlzdHMgYXQgdGhpcyBjb3Vyc2VJbmRleCxcbiAgICB3aGlsZSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9TmFtZWApICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNvdXJzZUluZGV4KTtcbiAgICAgIC8vQnVpbGQgYW5kIGFkZCBsb2NhbGx5IHN0b3JlZCBjb3Vyc2VzIHRvIHRoZSBhcnJheVxuICAgICAgbGV0IGNvdXJzZU5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1OYW1lYCk7XG4gICAgICBsZXQgY291cnNlQ3JlZGl0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9Q3JlZGl0YCk7XG4gICAgICBsZXQgY291cnNlID0gQ291cnNlKGNvdXJzZU5hbWUsIGNvdXJzZUNyZWRpdCk7XG4gICAgICAvL1JlcGxhY2UgdGhlIGN1cnJlbnQgY291cnNlIHdpdGggdGhlIHVwZGF0ZWQgb25lXG4gICAgICBjb3Vyc2VBcnJheVtjb3Vyc2VJbmRleF0gPSBjb3Vyc2U7XG4gICAgICAvL2ZvciBhbGwgb2YgdGhpcyBjb3Vyc2UncyB0YXNrc1xuICAgICAgZm9yIChsZXQgdGFza0luZGV4ID0gMDsgdGFza0luZGV4IDwgMjAwOyB0YXNrSW5kZXgrKykge1xuICAgICAgICAvL1doaWxlIGEgdGFzayBzdGlsbCBleGlzdHMgYXQgdGhpcyBjb3Vyc2VJbmRleCBhbmQgYXQgdGhpcyB0YXNrSW5kZXhcbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske3Rhc2tJbmRleH1OYW1lYCkgIT1cbiAgICAgICAgICBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNvdXJzZUluZGV4LCB0YXNrSW5kZXgpO1xuICAgICAgICAgIC8vQnVpbGQgYW5kIGFkZCBsb2NhbGx5IHN0b3JlZCB0YXNrcyB0byB0aGUgYXBwcm9wcmlhdGUgY291cnNlIGluIHRoZSBhcnJheVxuICAgICAgICAgIGxldCBuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgICAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHt0YXNrSW5kZXh9TmFtZWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBkdWVEYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgICAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHt0YXNrSW5kZXh9RHVlRGF0ZWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCB3ZWlnaHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske3Rhc2tJbmRleH1XZWlnaHRgXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgbWFyayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgICAgICAgICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7dGFza0luZGV4fU1hcmtgXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske3Rhc2tJbmRleH1Qcmlvcml0eWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBjb21wbGV0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgICAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHt0YXNrSW5kZXh9Q29tcGxldGlvbmBcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCB0YXNrID0gVGFzayhuYW1lLCBkdWVEYXRlLCB3ZWlnaHQsIG1hcmssIHByaW9yaXR5LCBjb21wbGV0aW9uKTtcbiAgICAgICAgICBjb3Vyc2VBcnJheVtjb3Vyc2VJbmRleF0udGFza0FycmF5LnB1c2godGFzayk7XG4gICAgICAgICAgdGFza0luZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgLy9Gcm9tIGNvdXJzZS5qcywgbGlzdGVuIGZvciBjbGljayBhbmQgcnVuIGZ1bmN0aW9ucyB0aGF0IGRpc3BsYXkgdGhlIHJpZ2h0IHBhZ2UuXG4gICAgICB9XG4gICAgICBjb3Vyc2VJbmRleCsrO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlRnJvbUFycmF5ID0gKCkgPT4ge1xuICBjb3Vyc2VBcnJheS5mb3JFYWNoKChjb3Vyc2UsIGNvdXJzZUluZGV4KSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9TmFtZWAsIGAke2NvdXJzZS5jb3Vyc2VOYW1lfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9Q3JlZGl0YCxcbiAgICAgIGAke2NvdXJzZS5jb3Vyc2VDcmVkaXR9YFxuICAgICk7XG4gICAgY291cnNlLnRhc2tBcnJheS5mb3JFYWNoKCh0YXNrLCB0YXNrSW5kZXgpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHt0YXNrSW5kZXh9TmFtZWAsXG4gICAgICAgIGAke3Rhc2sudGFza05hbWV9YFxuICAgICAgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHt0YXNrSW5kZXh9RHVlRGF0ZWAsXG4gICAgICAgIGAke3Rhc2sudGFza0R1ZURhdGV9YFxuICAgICAgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHt0YXNrSW5kZXh9V2VpZ2h0YCxcbiAgICAgICAgYCR7dGFzay50YXNrV2VpZ2h0fWBcbiAgICAgICk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7dGFza0luZGV4fU1hcmtgLFxuICAgICAgICBgJHt0YXNrLnRhc2tNYXJrfWBcbiAgICAgICk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7dGFza0luZGV4fVByaW9yaXR5YCxcbiAgICAgICAgYCR7dGFzay50YXNrUHJpb3JpdHl9YFxuICAgICAgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHt0YXNrSW5kZXh9Q29tcGxldGlvbmAsXG4gICAgICAgIGAke3Rhc2sudGFza0NvbXBsZXRpb259YFxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBjb25zdCBkaXNwbGF5TG9jYWxseVN0b3JlZENvdXJzZXNJbk5hdiA9IChjb3Vyc2VJbmRleCkgPT4ge1xuLy8gICBjb25zdCBjb3Vyc2VMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VMaXN0XCIpO1xuXG4vLyAgIGNvbnN0IGNvdXJzZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuLy8gICBjb3Vyc2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VcIik7XG4vLyAgIGNvdXJzZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4vLyAgICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9TmFtZWBcbi8vICAgKX1gO1xuLy8gICBjb3Vyc2VMaXN0LmFwcGVuZENoaWxkKGNvdXJzZUVsZW1lbnQpO1xuXG4vLyAgIHJldHVybiBjb3Vyc2VFbGVtZW50O1xuLy8gfTtcblxuY29uc3QgZGlzcGxheUNvdXJzZSA9IChjb3Vyc2UpID0+IHtcbiAgY29uc3QgY291cnNlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cnNlTGlzdFwiKTtcbiAgY29uc3QgY291cnNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvdXJzZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvdXJzZVwiKTtcbiAgY291cnNlRWxlbWVudC5pbm5lckhUTUwgPSBgJHtjb3Vyc2UuY291cnNlTmFtZX1gO1xuICBjb3Vyc2VMaXN0LmFwcGVuZENoaWxkKGNvdXJzZUVsZW1lbnQpO1xuXG4gIHJldHVybiBjb3Vyc2VFbGVtZW50O1xufTtcblxuY29uc3QgZGlzcGxheVRhc2sgPSAodGFzaykgPT4ge1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0xpc3RcIik7XG5cbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgY29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ2hlY2tib3hcIik7XG4gIHRhc2tEaXYuYXBwZW5kKHRhc2tDaGVja2JveCk7XG5cbiAgaWYgKHRhc2sudGFza1ByaW9yaXR5ID09IFwiaGlnaFwiKSB7XG4gICAgdGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJoaWdoUHJpb3JpdHlcIik7XG4gIH0gZWxzZSBpZiAodGFzay50YXNrUHJpb3JpdHkgPT0gXCJtZWRpdW1cIikge1xuICAgIHRhc2tDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwibWVkaXVtUHJpb3JpdHlcIik7XG4gIH0gZWxzZSBpZiAodGFzay50YXNrUHJpb3JpdHkgPT0gXCJsb3dcIikge1xuICAgIHRhc2tDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwibG93UHJpb3JpdHlcIik7XG4gIH0gZWxzZSB7XG4gIH1cbiAgaWYgKHRhc2sudGFza0NvbXBsZXRpb24gPT0gXCJ0cnVlXCIpIHtcbiAgICB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gIH0gZWxzZSBpZiAoXG4gICAgdGFzay50YXNrQ29tcGxldGlvbiA9PSBcImZhbHNlXCIgJiZcbiAgICB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tlZFwiKVxuICApIHtcbiAgICB0YXNrQ2hlY2tib3gucmVtb3ZlKFwiY2hlY2tlZFwiKTtcbiAgfSBlbHNlIHtcbiAgfVxuXG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrTmFtZVwiKTtcbiAgdGFza05hbWUuaW5uZXJIVE1MID0gYCR7dGFzay50YXNrTmFtZX1gO1xuICB0YXNrRGl2LmFwcGVuZCh0YXNrTmFtZSk7XG5cbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2tEdWVEYXRlXCIpO1xuICB0YXNrRHVlRGF0ZS5pbm5lckhUTUwgPSBgJHt0YXNrLnRhc2tEdWVEYXRlfWA7XG4gIHRhc2tEaXYuYXBwZW5kKHRhc2tEdWVEYXRlKTtcblxuICBjb25zdCB0YXNrV2VpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tXZWlnaHQuY2xhc3NMaXN0LmFkZChcInRhc2tXZWlnaHRcIik7XG4gIHRhc2tXZWlnaHQuaW5uZXJIVE1MID0gYCR7dGFzay50YXNrV2VpZ2h0fSVgO1xuICB0YXNrRGl2LmFwcGVuZCh0YXNrV2VpZ2h0KTtcblxuICBjb25zdCB0YXNrTWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrTWFyay5jbGFzc0xpc3QuYWRkKFwidGFza01hcmtcIik7XG4gIHRhc2tNYXJrLmlubmVySFRNTCA9IGAke3Rhc2sudGFza01hcmt9JWA7XG4gIHRhc2tEaXYuYXBwZW5kKHRhc2tNYXJrKTtcblxuICBjb25zdCB0YXNrRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFza0RlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFza0RlbGV0ZUJ1dHRvblwiKTtcbiAgdGFza0RlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBgWGA7XG4gIHRhc2tEaXYuYXBwZW5kKHRhc2tEZWxldGVCdXR0b24pO1xuXG4gIHRhc2tMaXN0LmFwcGVuZCh0YXNrRGl2KTtcblxuICByZXR1cm4geyB0YXNrQ2hlY2tib3gsIHRhc2tEZWxldGVCdXR0b24gfTtcbn07XG5cbi8vXG5cbi8vSWYgdGhlcmUgYXJlIGFueSBlbGVtZW50cyBpbiBsb2NhbFN0b3JhZ2UsIHRoZXkgZ2V0IGNvcGllZCBvbnRvIHRoZSBhcnJheS5cbnVwZGF0ZUNvdXJzZUFycmF5RnJvbUxvY2FsU3RvcmFnZSgpO1xuXG4vKk5vdyB0aGF0IGJvdGggdGhlIGFycmF5IGFuZCB0aGUgTG9jYWxTdG9yYWdlIGFyZSBzeW5jaGVkLCBcbmRpc3BsYXkgZWFjaCBjb3Vyc2UgaW4gdGhlIG5hdiwgYW5kIGZvciBlYWNoIGRpc3BsYXllZCBcbmVsZW1lbnQsIGFkZCBpdCdzIHRhYiBmdW5jdGlvbmFsaXR5LiovXG5cbmZvciAobGV0IGNvdXJzZUluZGV4ID0gMDsgY291cnNlSW5kZXggPCBjb3Vyc2VBcnJheS5sZW5ndGg7IGNvdXJzZUluZGV4KyspIHtcbiAgbGV0IGNvdXJzZUVsZW1lbnQgPSBkaXNwbGF5Q291cnNlKGNvdXJzZUFycmF5W2NvdXJzZUluZGV4XSk7XG4gIGFkZENvdXJzZVRhYkxpc3RlbmVyKGNvdXJzZUVsZW1lbnQpO1xufVxuXG4vKkxvY2FsbHkgc3RvcmVkIGNvdXJzZXMgYXJlIG5vdyBkaXNwbGF5ZWQgb24gdGhlIG5hdi4gYWRkQ291cnNlVGFiTGlzdGVuZXIgbGlzdGVucyBmb3JcbmEgY2xpY2suIEl0IGRlbGV0ZXMgZXZlcnl0aGluZyBpbiB0aGUgY29udGVudCBkaXYsIHRoZW4gY2FsbHMgY2hhbmdlVGFicywgd2hpY2ggd2lsbDpcbi0gY2FsbCBkaXNwbGF5TmV3VGFiIChkaXNwbGF5cyBjb3Vyc2UgdGl0bGUsIGFkZFRhc2tQcm9tcHQsIGFuZCB0YXNrTGlzdCBkaXYpXG4tIGNhbGwgYWRkRGVsZXRlQ291cnNlT25DbGljayAoZGVsZXRlcyBhbmQgc2hpZnRzIGZyb20gbG9jYWxTdG9yYWdlIGFuZCB0aGUgY291cnNlQXJyYXkpXG4tIGNhbGwgYWRkVGFza1Byb21wdE9uQ2xpY2sgKHRvZ2dsZXMgdGhlIGFkZFRhc2tNb2RhbCBhbmQgYWRkVGFza1Byb21wdCksXG4tIGFuZCBmaW5hbGx5LCBpdCB3aWxsIGRpc3BsYXkgdGhlIHRhc2tzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY291cnNlLiAqL1xuXG4vKkV2ZXJ5dGhpbmcgaXMgZmluYWxseSBkaXNwbGF5ZWQuIE5vdyBhZGRpbmcgZnVuY3Rpb24uICovXG5cbi8vVG9nZ2xlcyB0aGUgYWRkQ291cnNlUHJvbXB0IGFuZCBhZGRDb3Vyc2VGb3JtXG5hZGRDb3Vyc2VQcm9tcHRPbkNsaWNrKCk7XG5cbi8qQXR0YWNoZXMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGFkZENvdXJzZUJ1dHRvbiwgXG4tIGhhbmRsZXMgZm9ybSB2YWxpZGF0aW9uLCBcbi0gYnVpbGRzIGEgbmV3IENvdXJzZSBmcm9tIGZvcm0gaW5wdXQsIFxuLSBwdXNoZXMgaXQgdG8gdGhlIGFycmF5IGFuZCBjb3BpZXMgaXQgdG8gbG9jYWxTdG9yYWdlLFxuLSByZS1kaXNwbGF5cyBhbGwgY291cnNlcyB0byB0aGUgY291cnNlTGlzdCwgYWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gZWFjaCwgdGhlbiB0b2dnbGVzIGZvcm0gYW5kIHByb21wdC4gKi9cbmFkZENvdXJzZSgpO1xuXG5jYW5jZWxBZGRDb3Vyc2UoKTtcblxuLypBdHRhY2hlcyBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgYWRkVGFza0J1dHRvbiwgXG4tIGhhbmRsZXMgZm9ybSB2YWxpZGF0aW9uLCBcbi0gYnVpbGRzIGEgbmV3IHRhc2sgZnJvbSBmb3JtIGlucHV0LCBcbi0gcHVzaGVzIGl0IHRvIHRoZSBhcnJheSBhbmQgY29waWVzIGl0IHRvIGxvY2FsU3RvcmFnZSxcbi0gcmUtZGlzcGxheXMgYWxsIHRhc2tzIHRvIHRoZSB0YXNrTGlzdCwgYWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gZWFjaCwgdGhlbiB0b2dnbGVzIGZvcm0gYW5kIHByb21wdC4gKi9cbmFkZFRhc2soKTtcblxuY2FuY2VsQWRkVGFzaygpO1xuXG5jb25zb2xlLmxvZyhjb3Vyc2VBcnJheSk7XG4iLCJpbXBvcnQge1xuICBjb3Vyc2VBcnJheSxcbiAgdXBkYXRlTG9jYWxTdG9yYWdlRnJvbUFycmF5LFxuICB1cGRhdGVDb3Vyc2VBcnJheUZyb21Mb2NhbFN0b3JhZ2UsXG59IGZyb20gXCIuL2luZGV4LmpzXCI7XG5leHBvcnQgeyBUYXNrLCBhZGRUYXNrTGlzdGVuZXJzIH07XG5cbmNvbnN0IFRhc2sgPSAoXG4gIHRhc2tOYW1lLFxuICB0YXNrRHVlRGF0ZSxcbiAgdGFza1dlaWdodCxcbiAgdGFza01hcmssXG4gIHRhc2tQcmlvcml0eSxcbiAgdGFza0NvbXBsZXRpb24gPSBcImZhbHNlXCJcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHRhc2tOYW1lLFxuICAgIHRhc2tEdWVEYXRlLFxuICAgIHRhc2tXZWlnaHQsXG4gICAgdGFza01hcmssXG4gICAgdGFza1ByaW9yaXR5LFxuICAgIHRhc2tDb21wbGV0aW9uLFxuICB9O1xufTtcblxuY29uc3QgYWRkVGFza0xpc3RlbmVycyA9IChlbGVtZW50cykgPT4ge1xuICBpZiAoZWxlbWVudHMudGFza0NoZWNrYm94ICE9IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnRzLnRhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIC8vZmluZCB0aGUgdGFza05hbWUgYW5kIENvdXJzZU5hbWVcbiAgICAgIGxldCB0YXNrTmFtZSA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nLmlubmVyVGV4dDtcbiAgICAgIGxldCBjb3Vyc2VOYW1lID1cbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkXG4gICAgICAgICAgLmlubmVyVGV4dDtcblxuICAgICAgLy90b2dnbGUgdGhlIGNoZWNrZWQgc3RhdHVzXG4gICAgICBlbGVtZW50cy50YXNrQ2hlY2tib3guY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XG5cbiAgICAgIC8vZmluZCB0aGUgcmlnaHQgY291cnNlIGFuZCB0YXNrIywgdGhlbiBjaGFuZ2UgaXRzIGNvbXBsYXRpb24gdmFsdWVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291cnNlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2l9TmFtZWApID09IGNvdXJzZU5hbWUpIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdXJzZUFycmF5W2ldLnRhc2tBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2l9VGFzayR7an1OYW1lYCkgPT0gdGFza05hbWUpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2l9VGFzayR7an1Db21wbGV0aW9uYCkgPT0gYGZhbHNlYFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgY291cnNlJHtpfVRhc2ske2p9Q29tcGxldGlvbmAsIGB0cnVlYCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGNvdXJzZSR7aX1UYXNrJHtqfUNvbXBsZXRpb25gLCBgZmFsc2VgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB1cGRhdGVDb3Vyc2VBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChlbGVtZW50cy50YXNrRGVsZXRlQnV0dG9uICE9IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnRzLnRhc2tEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAvL2ZpbmQgdGhlIHRhc2tOYW1lIGFuZCBDb3Vyc2VOYW1lXG4gICAgICBsZXQgdGFza05hbWUgPVxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVyVGV4dDtcbiAgICAgIGxldCBjb3Vyc2VOYW1lID1cbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkXG4gICAgICAgICAgLmlubmVyVGV4dDtcblxuICAgICAgbGV0IGNvdXJzZUluZGV4ID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291cnNlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNvdXJzZU5hbWUgPT0gY291cnNlQXJyYXlbaV0uY291cnNlTmFtZSkge1xuICAgICAgICAgIGNvdXJzZUluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdGFza0luZGV4ID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291cnNlQXJyYXlbY291cnNlSW5kZXhdLnRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGFza05hbWUgPT0gY291cnNlQXJyYXlbY291cnNlSW5kZXhdLnRhc2tBcnJheVtpXS50YXNrTmFtZSkge1xuICAgICAgICAgIHRhc2tJbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coY291cnNlSW5kZXgsIHRhc2tJbmRleCk7XG4gICAgICAvL2RlbGV0ZSBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7dGFza0luZGV4fU5hbWVgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske3Rhc2tJbmRleH1EdWVEYXRlYCk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHt0YXNrSW5kZXh9V2VpZ2h0YCk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHt0YXNrSW5kZXh9TWFya2ApO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7dGFza0luZGV4fVByaW9yaXR5YCk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHt0YXNrSW5kZXh9Q29tcGxldGlvbmApO1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGogPSB0YXNrSW5kZXg7XG4gICAgICAgIGogPCBjb3Vyc2VBcnJheVtjb3Vyc2VJbmRleF0udGFza0FycmF5Lmxlbmd0aDtcbiAgICAgICAgaisrXG4gICAgICApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2ogKyAxfU5hbWVgKSAhPVxuICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2ogKyAxfU5hbWVgKVxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2p9TmFtZWAsXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtqICsgMX1OYW1lYClcbiAgICAgICAgICApO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7an1EdWVEYXRlYCxcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2ogKyAxfUR1ZURhdGVgKVxuICAgICAgICAgICk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtqfVdlaWdodGAsXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtqICsgMX1XZWlnaHRgKVxuICAgICAgICAgICk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtqfU1hcmtgLFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7aiArIDF9TWFya2ApXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2p9UHJpb3JpdHlgLFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7aiArIDF9UHJpb3JpdHlgKVxuICAgICAgICAgICk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtqfUNvbXBsZXRpb25gLFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7aiArIDF9Q29tcGxldGlvbmApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtqfU5hbWVgKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtqfUR1ZURhdGVgKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtqfVdlaWdodGApO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2p9TWFya2ApO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2p9UHJpb3JpdHlgKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtqfUNvbXBsZXRpb25gKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkZWxldGUgdGFzayBmcm9tIGFycmF5XG4gICAgICB1cGRhdGVDb3Vyc2VBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgLy9kZWxldGUgY291cnNlIGZyb20gbmF2XG4gICAgICBsZXQgdGFza0xpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrXCIpKTtcbiAgICAgIHRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2suZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVyVGV4dCA9PSB0YXNrTmFtZSkge1xuICAgICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgVGFzaywgYWRkVGFza0xpc3RlbmVycyB9IGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCB7XG4gIGNvdXJzZUFycmF5LFxuICB1cGRhdGVMb2NhbFN0b3JhZ2VGcm9tQXJyYXksXG4gIGRpc3BsYXlUYXNrLFxufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZGV0ZXJtaW5lQ291cnNlSW5kZXggfSBmcm9tIFwiLi9jb3Vyc2UuanNcIjtcbmV4cG9ydCB7IGNhbmNlbEFkZFRhc2ssIGFkZFRhc2ssIGFkZFRhc2tQcm9tcHRPbkNsaWNrIH07XG5cbmNvbnN0IHRvZ2dsZUFkZFRhc2tGb3JtID0gKCkgPT4ge1xuICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIik7XG4gIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG59O1xuY29uc3QgdG9nZ2xlQWRkVGFza01vZGFsID0gKCkgPT4ge1xuICBjb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tNb2RhbFwiKTtcbiAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tGb3JtXCIpO1xuICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn07XG5jb25zdCBhZGRUYXNrUHJvbXB0T25DbGljayA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza1Byb21wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1Byb21wdFwiKTtcbiAgYWRkVGFza1Byb21wdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZ2dsZUFkZFRhc2tGb3JtKCk7XG4gICAgdG9nZ2xlQWRkVGFza01vZGFsKCk7XG4gIH0pO1xufTtcbmNvbnN0IGNhbmNlbEFkZFRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbmNlbEFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbEFkZFRhc2tCdXR0b25cIik7XG5cbiAgY2FuY2VsQWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZ2dsZUFkZFRhc2tGb3JtKCk7XG4gICAgdG9nZ2xlQWRkVGFza01vZGFsKCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tGb3JtXCIpLnJlc2V0KCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTmFtZVwiKS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlwiKTtcbiAgfSk7XG59O1xuY29uc3QgYnVpbGRUYXNrRnJvbUZvcm0gPSAoKSA9PiB7XG4gIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza05hbWVcIikudmFsdWU7XG4gIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0R1ZURhdGVcIikudmFsdWU7XG4gIGxldCB0YXNrV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrV2VpZ2h0XCIpLnZhbHVlO1xuICBsZXQgdGFza01hcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tNYXJrXCIpLnZhbHVlO1xuICBsZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrUHJpb3JpdHlcIikudmFsdWU7XG4gIGxldCB0YXNrID0gVGFzayh0YXNrTmFtZSwgdGFza0R1ZURhdGUsIHRhc2tXZWlnaHQsIHRhc2tNYXJrLCB0YXNrUHJpb3JpdHkpO1xuXG4gIHJldHVybiB0YXNrO1xufTtcbmNvbnN0IGRvZXNUYXNrQWxyZWFkeUV4aXN0ID0gKHRhc2tOYW1lLCBldmVudCkgPT4ge1xuICBsZXQgY291cnNlTmFtZSA9XG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgIC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcblxuICBjb25zb2xlLmxvZyhjb3Vyc2VOYW1lKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdXJzZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2l9TmFtZWApID09IGNvdXJzZU5hbWUpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291cnNlQXJyYXlbaV0udGFza0FycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtpfVRhc2ske2p9TmFtZWApID09IHRhc2tOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tCdXR0b25cIik7XG5cbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza05hbWVcIik7XG5cbiAgICBpZiAodGFza05hbWUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRoaXMgaW5wdXQgaXMgcmVxdWlyZWRcIik7XG4gICAgfVxuICAgIGlmIChkb2VzVGFza0FscmVhZHlFeGlzdCh0YXNrTmFtZS52YWx1ZSwgZXZlbnQpID09IHRydWUpIHtcbiAgICAgIHRhc2tOYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiKlRoaXMgdGFzayBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJcIik7XG5cbiAgICAgIGxldCB0YXNrID0gYnVpbGRUYXNrRnJvbUZvcm0oKTtcbiAgICAgIGxldCBjb3Vyc2VJbmRleCA9IGRldGVybWluZUNvdXJzZUluZGV4KCk7XG5cbiAgICAgIC8vUHVzaGVzIHRhc2sgdG8gdGhlIGNvcnJlY3QgY291cnNlJ3MgdGFzayBhcnJheS5cbiAgICAgIGNvdXJzZUFycmF5W2NvdXJzZUluZGV4XS50YXNrQXJyYXkucHVzaCh0YXNrKTtcblxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlRnJvbUFycmF5KCk7XG5cbiAgICAgIC8vZGVsZXRlcyBldmVyeXRoaW5nIGluIHRoZSB0YXNrTGlzdCBhbmQgYnVpbGRzIGl0IGFsbCBhZ2FpblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IDA7XG4gICAgICAgIHRhc2tJbmRleCA8IGNvdXJzZUFycmF5W2NvdXJzZUluZGV4XS50YXNrQXJyYXkubGVuZ3RoO1xuICAgICAgICB0YXNrSW5kZXgrK1xuICAgICAgKSB7XG4gICAgICAgIGxldCB0YXNrRWxlbWVudHMgPSBkaXNwbGF5VGFzayhcbiAgICAgICAgICBjb3Vyc2VBcnJheVtjb3Vyc2VJbmRleF0udGFza0FycmF5W3Rhc2tJbmRleF1cbiAgICAgICAgKTtcbiAgICAgICAgLy9hZGRzIHRoZSB0YWIgZnVuY3Rpb25hbGl0eSB0byB0aGUgbmV3bHkgYnVpbGQgYW5kIGRpc3BsYXllZCB0YXNrLlxuICAgICAgICAvL3Rhc2tFbGVtZW50cyAoZnJvbSBkaXNwbGF5dGFzaykgaXMgdGhlIG5hdiBlbGVtZW50LlxuICAgICAgICBhZGRUYXNrTGlzdGVuZXJzKHRhc2tFbGVtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHRvZ2dsZUFkZFRhc2tGb3JtKCk7XG4gICAgICB0b2dnbGVBZGRUYXNrTW9kYWwoKTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRm9ybVwiKS5yZXNldCgpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9