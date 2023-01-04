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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  margin: 0;\n  display: flex;\n\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* NAV */\n\n#nav {\n  flex-grow: 1;\n  max-width: 35%;\n  min-height: 100vh;\n  background-color: #e5e9ec;\n  display: flex;\n  flex-direction: column;\n}\n\n#homeButton {\n  border: none;\n  background-color: transparent;\n  margin: 2rem;\n}\n\n#homeButton > img {\n  height: 4rem;\n}\n\n/* COURSE LIST*/\n\n#courseList {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.course {\n  font-size: 1rem;\n  width: 90%;\n  padding: 0.75rem;\n\n  border: none;\n  border-radius: 2rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n  background-color: #e6a715;\n  color: white;\n\n  transition: 0.25s;\n}\n\n.course:hover {\n  background-color: #efc86c;\n  color: #fff8e7;\n}\n\n/* ADD COURSE FORM */\n\n#addCoursePrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addCoursePrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 1.75rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #e6a715;\n  margin: 2rem 1rem;\n}\n\n#addCoursePrompt:hover {\n  color: #efc86c;\n  transition: 0.25s;\n}\n\n#addCoursePrompt:hover,\n#homeButton {\n  cursor: pointer;\n}\n\n#addCourseForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addCourseForm.active {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addCourseFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 90%;\n}\n\n#addCourseFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addCourseFormWrapper > .formRow > input {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addCourseFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #e6a715;\n}\n\n#addCourseSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addCourseButton {\n  font-size: 1.2rem;\n\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddCourseButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addCourseButton:hover,\n#cancelAddCourseButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addCourseButton:hover {\n  color: #e6a715;\n}\n\n/* CONTENT */\n\n#content {\n  max-width: 60%;\n\n  flex-grow: 3;\n  min-height: 50vh;\n\n  padding: 1.5rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#courseTitleDiv {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#courseTitle {\n  font-size: 1.75rem;\n  font-weight: bold;\n  color: black;\n}\n\n#deleteCourseButton {\n  margin: 1rem;\n  padding: 0.25rem 1rem;\n  font-size: 1.2rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #ff8787;\n  color: white;\n\n  transition: 0.25s;\n}\n\n#deleteCourseButton:hover {\n  background-color: transparent;\n  color: #ff8787;\n}\n\n#addTaskPrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addTaskPrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 1.75rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #9a7aa0;\n  margin: 1.5rem 0rem;\n  padding: 0;\n\n  transition: 0.25s;\n}\n\n#addTaskPrompt:hover {\n  color: #d4c1d7;\n}\n\n/* ADD TASK MODAL */\n\n#addTaskModal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n\n  background-color: #e5e9ec;\n  border-radius: 1rem;\n\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n  width: 35rem;\n\n  transition: 0.25s ease-in-out;\n  pointer-events: none;\n}\n\n#addTaskModal.active {\n  transform: translate(-50%, -50%) scale(1);\n  pointer-events: all;\n}\n\n#addTaskForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addTaskForm.active {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addTaskFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 100%;\n}\n\n#addTaskFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addTaskFormWrapper > .formRow > input,\n#addTaskFormWrapper > .formRow > select {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addTaskFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #9a7aa0;\n}\n\n#addTaskSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addTaskButton:hover,\n#cancelAddTaskButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addTaskButton:hover {\n  color: #9a7aa0;\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #ff8787;\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #ff8787;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #ff8787;\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n\n  transition: 0.25s ease-in-out;\n}\n\n#overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n\n/* TASKS */\n\n#taskList {\n  width: 100%;\n}\n\n.task {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: bold;\n  gap: 0.75rem;\n}\n\n.taskCheckbox {\n  width: 1.5rem;\n  height: 1.5rem;\n\n  background-color: white;\n  border: 0.35rem solid #23967f;\n  border-radius: 50%;\n  transition: 0.5s;\n  cursor: pointer;\n}\n\n.taskCheckbox.lowPriority {\n  border: 0.35rem solid #23967f;\n}\n.taskCheckbox.lowPriority:hover {\n  background-color: rgba(35, 150, 127, 0.5);\n}\n.taskCheckbox.lowPriority.checked {\n  background-color: #23967f;\n  border: 0.35rem solid #23967f;\n  border-radius: 50%;\n}\n.taskCheckbox.mediumPriority {\n  border: 0.35rem solid #e6a715;\n}\n.taskCheckbox.mediumPriority:hover {\n  background-color: #e5a61580;\n}\n.taskCheckbox.mediumPriority.checked {\n  background-color: #e6a715;\n  border: 0.35rem solid #e6a715;\n  border-radius: 50%;\n}\n.taskCheckbox.highPriority {\n  border: 0.35rem solid #ff8787;\n}\n.taskCheckbox.highPriority:hover {\n  background-color: #ff878780;\n}\n.taskCheckbox.highPriority.checked {\n  background-color: #ff8787;\n  border: 0.35rem solid #ff8787;\n  border-radius: 50%;\n}\n\n.taskName {\n  width: 40%;\n}\n\n.taskDueDate {\n  width: 30%;\n}\n\n.taskWeight {\n  width: 5%;\n}\n\n.taskMark {\n  width: 5%;\n}\n\n.taskCrossOut {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  display: flex;\n  margin: 0;\n  display: flex;\n\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* NAV */\n\n#nav {\n  flex-grow: 1;\n  max-width: 35%;\n  min-height: 100vh;\n  background-color: #e5e9ec;\n  display: flex;\n  flex-direction: column;\n}\n\n#homeButton {\n  border: none;\n  background-color: transparent;\n  margin: 2rem;\n}\n\n#homeButton > img {\n  height: 4rem;\n}\n\n/* COURSE LIST*/\n\n#courseList {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.course {\n  font-size: 1rem;\n  width: 90%;\n  padding: 0.75rem;\n\n  border: none;\n  border-radius: 2rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n  background-color: #e6a715;\n  color: white;\n\n  transition: 0.25s;\n}\n\n.course:hover {\n  background-color: #efc86c;\n  color: #fff8e7;\n}\n\n/* ADD COURSE FORM */\n\n#addCoursePrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addCoursePrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 1.75rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #e6a715;\n  margin: 2rem 1rem;\n}\n\n#addCoursePrompt:hover {\n  color: #efc86c;\n  transition: 0.25s;\n}\n\n#addCoursePrompt:hover,\n#homeButton {\n  cursor: pointer;\n}\n\n#addCourseForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addCourseForm.active {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addCourseFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 90%;\n}\n\n#addCourseFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addCourseFormWrapper > .formRow > input {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addCourseFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #e6a715;\n}\n\n#addCourseSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addCourseButton {\n  font-size: 1.2rem;\n\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddCourseButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addCourseButton:hover,\n#cancelAddCourseButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addCourseButton:hover {\n  color: #e6a715;\n}\n\n/* CONTENT */\n\n#content {\n  max-width: 60%;\n\n  flex-grow: 3;\n  min-height: 50vh;\n\n  padding: 1.5rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#courseTitleDiv {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#courseTitle {\n  font-size: 1.75rem;\n  font-weight: bold;\n  color: black;\n}\n\n#deleteCourseButton {\n  margin: 1rem;\n  padding: 0.25rem 1rem;\n  font-size: 1.2rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #ff8787;\n  color: white;\n\n  transition: 0.25s;\n}\n\n#deleteCourseButton:hover {\n  background-color: transparent;\n  color: #ff8787;\n}\n\n#addTaskPrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addTaskPrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 1.75rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #9a7aa0;\n  margin: 1.5rem 0rem;\n  padding: 0;\n\n  transition: 0.25s;\n}\n\n#addTaskPrompt:hover {\n  color: #d4c1d7;\n}\n\n/* ADD TASK MODAL */\n\n#addTaskModal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n\n  background-color: #e5e9ec;\n  border-radius: 1rem;\n\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n  width: 35rem;\n\n  transition: 0.25s ease-in-out;\n  pointer-events: none;\n}\n\n#addTaskModal.active {\n  transform: translate(-50%, -50%) scale(1);\n  pointer-events: all;\n}\n\n#addTaskForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addTaskForm.active {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addTaskFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 100%;\n}\n\n#addTaskFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addTaskFormWrapper > .formRow > input,\n#addTaskFormWrapper > .formRow > select {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addTaskFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #9a7aa0;\n}\n\n#addTaskSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addTaskButton:hover,\n#cancelAddTaskButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addTaskButton:hover {\n  color: #9a7aa0;\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #ff8787;\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #ff8787;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #ff8787;\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n\n  transition: 0.25s ease-in-out;\n}\n\n#overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n\n/* TASKS */\n\n#taskList {\n  width: 100%;\n}\n\n.task {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: bold;\n  gap: 0.75rem;\n}\n\n.taskCheckbox {\n  width: 1.5rem;\n  height: 1.5rem;\n\n  background-color: white;\n  border: 0.35rem solid #23967f;\n  border-radius: 50%;\n  transition: 0.5s;\n  cursor: pointer;\n}\n\n.taskCheckbox.lowPriority {\n  border: 0.35rem solid #23967f;\n}\n.taskCheckbox.lowPriority:hover {\n  background-color: rgba(35, 150, 127, 0.5);\n}\n.taskCheckbox.lowPriority.checked {\n  background-color: #23967f;\n  border: 0.35rem solid #23967f;\n  border-radius: 50%;\n}\n.taskCheckbox.mediumPriority {\n  border: 0.35rem solid #e6a715;\n}\n.taskCheckbox.mediumPriority:hover {\n  background-color: #e5a61580;\n}\n.taskCheckbox.mediumPriority.checked {\n  background-color: #e6a715;\n  border: 0.35rem solid #e6a715;\n  border-radius: 50%;\n}\n.taskCheckbox.highPriority {\n  border: 0.35rem solid #ff8787;\n}\n.taskCheckbox.highPriority:hover {\n  background-color: #ff878780;\n}\n.taskCheckbox.highPriority.checked {\n  background-color: #ff8787;\n  border: 0.35rem solid #ff8787;\n  border-radius: 50%;\n}\n\n.taskName {\n  width: 40%;\n}\n\n.taskDueDate {\n  width: 30%;\n}\n\n.taskWeight {\n  width: 5%;\n}\n\n.taskMark {\n  width: 5%;\n}\n\n.taskCrossOut {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n}\n"],"sourceRoot":""}]);
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

  // //Build all the tasks stored in localstorage.
  // displayTasksFromLocalStorage();

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
      //Build and add locally stored courses to the array
      let courseName = localStorage.getItem(`course${courseIndex}Name`);
      let courseCredit = localStorage.getItem(`course${courseIndex}Credit`);
      let course = (0,_course_js__WEBPACK_IMPORTED_MODULE_5__.Course)(courseName, courseCredit);
      courseArray.push(course);
      //for all of this course's tasks
      for (let taskIndex = 0; taskIndex < 200; taskIndex++) {
        //While a task still exists at this courseIndex and at this taskIndex
        while (
          localStorage.getItem(`course${courseIndex}Task${taskIndex}Name`) !=
          null
        ) {
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
          let task = (0,_task__WEBPACK_IMPORTED_MODULE_4__.Task)(name, dueDate, weight, mark, priority);
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

  taskList.append(taskDiv);

  return { taskCheckbox };
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



const Task = (taskName, taskDueDate, taskWeight, taskMark, taskPriority) => {
  return {
    taskName,
    taskDueDate,
    taskWeight,
    taskMark,
    taskPriority,
  };
};

const addTaskListeners = (elements) => {
  if (elements.taskCheckbox != undefined) {
    elements.taskCheckbox.addEventListener("click", () => {
      elements.taskCheckbox.classList.toggle("checked");
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

const addTask = () => {
  const addTaskButton = document.getElementById("addTaskButton");

  addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    const taskName = document.getElementById("taskName");

    if (taskName.validity.valueMissing) {
      taskName.setAttribute("placeholder", "This input is required");
    } else {
      taskName.setAttribute("placeholder", "");

      let task = buildTaskFromForm();
      let courseIndex = (0,_course_js__WEBPACK_IMPORTED_MODULE_2__.determineCourseIndex)();

      //Pushes task to the correct course's task array.
      _index_js__WEBPACK_IMPORTED_MODULE_1__.courseArray[courseIndex].taskArray.push(task);

      (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorageFromArray)();

      //

      //

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGtCQUFrQixjQUFjLGtCQUFrQixnREFBZ0QsR0FBRyx1QkFBdUIsaUJBQWlCLG1CQUFtQixzQkFBc0IsOEJBQThCLGtCQUFrQiwyQkFBMkIsR0FBRyxpQkFBaUIsaUJBQWlCLGtDQUFrQyxpQkFBaUIsR0FBRyx1QkFBdUIsaUJBQWlCLEdBQUcscUNBQXFDLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixjQUFjLEdBQUcsYUFBYSxvQkFBb0IsZUFBZSxxQkFBcUIsbUJBQW1CLHdCQUF3QixzQkFBc0IsOEJBQThCLHNCQUFzQiw4QkFBOEIsaUJBQWlCLHdCQUF3QixHQUFHLG1CQUFtQiw4QkFBOEIsbUJBQW1CLEdBQUcsK0NBQStDLHdCQUF3Qix5QkFBeUIsR0FBRyw2QkFBNkIsd0JBQXdCLHdCQUF3Qix1QkFBdUIsdUJBQXVCLHNCQUFzQixpQkFBaUIsa0NBQWtDLG1CQUFtQixzQkFBc0IsR0FBRyw0QkFBNEIsbUJBQW1CLHNCQUFzQixHQUFHLDBDQUEwQyxvQkFBb0IsR0FBRyxvQkFBb0Isa0JBQWtCLHlCQUF5QixHQUFHLDJCQUEyQixrQkFBa0Isd0JBQXdCLDRCQUE0Qix3QkFBd0IsR0FBRywyQkFBMkIsMEJBQTBCLGVBQWUsdUJBQXVCLGVBQWUsR0FBRyxzQ0FBc0Msa0JBQWtCLG9CQUFvQiw4QkFBOEIsd0JBQXdCLHFCQUFxQixHQUFHLDhDQUE4QyxlQUFlLDJCQUEyQiw0QkFBNEIscUJBQXFCLDBCQUEwQixrQkFBa0Isd0JBQXdCLG9CQUFvQixZQUFZLG1CQUFtQixHQUFHLDhDQUE4QyxzQkFBc0IsdUJBQXVCLHNCQUFzQix1QkFBdUIsWUFBWSxtQkFBbUIsR0FBRyw2QkFBNkIsNEJBQTRCLGdCQUFnQixHQUFHLHNCQUFzQixzQkFBc0IsNEJBQTRCLG1CQUFtQiwyQkFBMkIsc0JBQXNCLDhCQUE4QixzQkFBc0IsR0FBRyw0QkFBNEIsc0JBQXNCLDBCQUEwQixpQkFBaUIsMkJBQTJCLHNCQUFzQiw4QkFBOEIsc0JBQXNCLEdBQUcsMkRBQTJELDhCQUE4QixHQUFHLDRCQUE0QixtQkFBbUIsR0FBRywrQkFBK0IsbUJBQW1CLG1CQUFtQixxQkFBcUIsc0JBQXNCLG9CQUFvQiwyQkFBMkIsNEJBQTRCLEdBQUcscUJBQXFCLGdCQUFnQixrQkFBa0Isd0JBQXdCLG1DQUFtQyxHQUFHLGtCQUFrQix1QkFBdUIsc0JBQXNCLGlCQUFpQixHQUFHLHlCQUF5QixpQkFBaUIsMEJBQTBCLHNCQUFzQixtQkFBbUIsMkJBQTJCLHNCQUFzQiw4QkFBOEIsaUJBQWlCLHdCQUF3QixHQUFHLCtCQUErQixrQ0FBa0MsbUJBQW1CLEdBQUcsb0JBQW9CLHdCQUF3Qix5QkFBeUIsR0FBRywyQkFBMkIsd0JBQXdCLHdCQUF3Qix1QkFBdUIsdUJBQXVCLHNCQUFzQixpQkFBaUIsa0NBQWtDLG1CQUFtQix3QkFBd0IsZUFBZSx3QkFBd0IsR0FBRywwQkFBMEIsbUJBQW1CLEdBQUcsMkNBQTJDLG9CQUFvQixhQUFhLGNBQWMsOENBQThDLGdDQUFnQyx3QkFBd0Isc0JBQXNCLGtCQUFrQiwyQkFBMkIseUJBQXlCLDZCQUE2QixpQkFBaUIsb0NBQW9DLHlCQUF5QixHQUFHLDBCQUEwQiw4Q0FBOEMsd0JBQXdCLEdBQUcsa0JBQWtCLGtCQUFrQix5QkFBeUIsR0FBRyx5QkFBeUIsZ0JBQWdCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixHQUFHLHlCQUF5QiwwQkFBMEIsZUFBZSx1QkFBdUIsZ0JBQWdCLEdBQUcsb0NBQW9DLGtCQUFrQixvQkFBb0IsOEJBQThCLHdCQUF3QixxQkFBcUIsR0FBRyxzRkFBc0YsZUFBZSwyQkFBMkIsNEJBQTRCLHFCQUFxQiwwQkFBMEIsa0JBQWtCLHdCQUF3QixvQkFBb0IsWUFBWSxtQkFBbUIsR0FBRyw0Q0FBNEMsc0JBQXNCLHVCQUF1QixzQkFBc0IsdUJBQXVCLFlBQVksbUJBQW1CLEdBQUcsMkJBQTJCLDRCQUE0QixnQkFBZ0IsR0FBRyxvQkFBb0Isc0JBQXNCLDBCQUEwQixtQkFBbUIsMkJBQTJCLHNCQUFzQiw4QkFBOEIsc0JBQXNCLEdBQUcsMEJBQTBCLHNCQUFzQiwwQkFBMEIsaUJBQWlCLDJCQUEyQixzQkFBc0IsOEJBQThCLHNCQUFzQixHQUFHLHVEQUF1RCw4QkFBOEIsR0FBRywwQkFBMEIsbUJBQW1CLEdBQUcsbUJBQW1CLGlFQUFpRSxnQkFBZ0IsZ0JBQWdCLDRCQUE0QixvREFBb0QsR0FBRyw2QkFBNkIsMkNBQTJDLEdBQUcsY0FBYyxvQkFBb0IsZUFBZSxXQUFXLFlBQVksYUFBYSxjQUFjLHlDQUF5Qyx5QkFBeUIsb0NBQW9DLEdBQUcscUJBQXFCLHdCQUF3QixlQUFlLEdBQUcsOEJBQThCLGdCQUFnQixHQUFHLFdBQVcsa0JBQWtCLGdCQUFnQixtQ0FBbUMsd0JBQXdCLHVCQUF1QixzQkFBc0IsaUJBQWlCLEdBQUcsbUJBQW1CLGtCQUFrQixtQkFBbUIsOEJBQThCLGtDQUFrQyx1QkFBdUIscUJBQXFCLG9CQUFvQixHQUFHLCtCQUErQixrQ0FBa0MsR0FBRyxtQ0FBbUMsOENBQThDLEdBQUcscUNBQXFDLDhCQUE4QixrQ0FBa0MsdUJBQXVCLEdBQUcsZ0NBQWdDLGtDQUFrQyxHQUFHLHNDQUFzQyxnQ0FBZ0MsR0FBRyx3Q0FBd0MsOEJBQThCLGtDQUFrQyx1QkFBdUIsR0FBRyw4QkFBOEIsa0NBQWtDLEdBQUcsb0NBQW9DLGdDQUFnQyxHQUFHLHNDQUFzQyw4QkFBOEIsa0NBQWtDLHVCQUF1QixHQUFHLGVBQWUsZUFBZSxHQUFHLGtCQUFrQixlQUFlLEdBQUcsaUJBQWlCLGNBQWMsR0FBRyxlQUFlLGNBQWMsR0FBRyxtQkFBbUIsdUJBQXVCLGFBQWEsZ0JBQWdCLEdBQUcsU0FBUyxnRkFBZ0YsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFdBQVcsVUFBVSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxhQUFhLGFBQWEsY0FBYyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLG9CQUFvQixPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtB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QUFvQixrREFBVztBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFXO0FBQ3RDLFVBQVUsa0RBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBZ0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL3NyYy9jb3Vyc2UuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9zcmMvY291cnNlQWRkaXRpb24uanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9zcmMvY291cnNlRGVsZXRpb24uanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL3NyYy90YXNrQWRkaXRpb24uanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIE5BViAqL1xcblxcbiNuYXYge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWF4LXdpZHRoOiAzNSU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU5ZWM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hvbWVCdXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtYXJnaW46IDJyZW07XFxufVxcblxcbiNob21lQnV0dG9uID4gaW1nIHtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuLyogQ09VUlNFIExJU1QqL1xcblxcbiNjb3Vyc2VMaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY291cnNlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2YTcxNTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4uY291cnNlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmM4NmM7XFxuICBjb2xvcjogI2ZmZjhlNztcXG59XFxuXFxuLyogQUREIENPVVJTRSBGT1JNICovXFxuXFxuI2FkZENvdXJzZVByb21wdCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNhZGRDb3Vyc2VQcm9tcHQuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZTZhNzE1O1xcbiAgbWFyZ2luOiAycmVtIDFyZW07XFxufVxcblxcbiNhZGRDb3Vyc2VQcm9tcHQ6aG92ZXIge1xcbiAgY29sb3I6ICNlZmM4NmM7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZENvdXJzZVByb21wdDpob3ZlcixcXG4jaG9tZUJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZENvdXJzZUZvcm0uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybVdyYXBwZXIge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMXJlbSwgMHJlbTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtV3JhcHBlciA+IC5mb3JtUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gaW5wdXQge1xcbiAgYWxsOiB1bnNldDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMzVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNXJlbTtcXG4gIGZsZXg6IDQ7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI2FkZENvdXJzZUZvcm1XcmFwcGVyID4gLmZvcm1Sb3cgPiBsYWJlbCB7XFxuICBtaW4td2lkdGg6IDMuNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiAjZTZhNzE1O1xcbn1cXG5cXG4jYWRkQ291cnNlU3VibWl0Rm9ybVJvdyB7XFxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jYWRkQ291cnNlQnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jY2FuY2VsQWRkQ291cnNlQnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jYWRkQ291cnNlQnV0dG9uOmhvdmVyLFxcbiNjYW5jZWxBZGRDb3Vyc2VCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuI2FkZENvdXJzZUJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2U2YTcxNTtcXG59XFxuXFxuLyogQ09OVEVOVCAqL1xcblxcbiNjb250ZW50IHtcXG4gIG1heC13aWR0aDogNjAlO1xcblxcbiAgZmxleC1ncm93OiAzO1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG5cXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNjb3Vyc2VUaXRsZURpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jY291cnNlVGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNkZWxldGVDb3Vyc2VCdXR0b24ge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4Nzg3O1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNkZWxldGVDb3Vyc2VCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmODc4NztcXG59XFxuXFxuI2FkZFRhc2tQcm9tcHQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkVGFza1Byb21wdC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICM5YTdhYTA7XFxuICBtYXJnaW46IDEuNXJlbSAwcmVtO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jYWRkVGFza1Byb21wdDpob3ZlciB7XFxuICBjb2xvcjogI2Q0YzFkNztcXG59XFxuXFxuLyogQUREIFRBU0sgTU9EQUwgKi9cXG5cXG4jYWRkVGFza01vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlOWVjO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG5cXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICB3aWR0aDogMzVyZW07XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkVGFza01vZGFsLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbiNhZGRUYXNrRm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNhZGRUYXNrRm9ybS5hY3RpdmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuI2FkZFRhc2tGb3JtV3JhcHBlciB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAxcmVtLCAwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhZGRUYXNrRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm1XcmFwcGVyID4gLmZvcm1Sb3cgPiBpbnB1dCxcXG4jYWRkVGFza0Zvcm1XcmFwcGVyID4gLmZvcm1Sb3cgPiBzZWxlY3Qge1xcbiAgYWxsOiB1bnNldDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMzVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNXJlbTtcXG4gIGZsZXg6IDQ7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI2FkZFRhc2tGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gbGFiZWwge1xcbiAgbWluLXdpZHRoOiAzLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogIzlhN2FhMDtcXG59XFxuXFxuI2FkZFRhc2tTdWJtaXRGb3JtUm93IHtcXG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jY2FuY2VsQWRkVGFza0J1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZFRhc2tCdXR0b246aG92ZXIsXFxuI2NhbmNlbEFkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICM5YTdhYTA7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXFxuICBjb2xvcjogI2ZmODc4NztcXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xcbiAgY29sb3I6ICNmZjg3ODc7XFxufVxcblxcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXFxuICBjb2xvcjogI2ZmODc4NztcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNvdmVybGF5LmFjdGl2ZSB7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogVEFTS1MgKi9cXG5cXG4jdGFza0xpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGdhcDogMC43NXJlbTtcXG59XFxuXFxuLnRhc2tDaGVja2JveCB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMC4zNXJlbSBzb2xpZCAjMjM5NjdmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tDaGVja2JveC5sb3dQcmlvcml0eSB7XFxuICBib3JkZXI6IDAuMzVyZW0gc29saWQgIzIzOTY3ZjtcXG59XFxuLnRhc2tDaGVja2JveC5sb3dQcmlvcml0eTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCAxNTAsIDEyNywgMC41KTtcXG59XFxuLnRhc2tDaGVja2JveC5sb3dQcmlvcml0eS5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk2N2Y7XFxuICBib3JkZXI6IDAuMzVyZW0gc29saWQgIzIzOTY3ZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnRhc2tDaGVja2JveC5tZWRpdW1Qcmlvcml0eSB7XFxuICBib3JkZXI6IDAuMzVyZW0gc29saWQgI2U2YTcxNTtcXG59XFxuLnRhc2tDaGVja2JveC5tZWRpdW1Qcmlvcml0eTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVhNjE1ODA7XFxufVxcbi50YXNrQ2hlY2tib3gubWVkaXVtUHJpb3JpdHkuY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZhNzE1O1xcbiAgYm9yZGVyOiAwLjM1cmVtIHNvbGlkICNlNmE3MTU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50YXNrQ2hlY2tib3guaGlnaFByaW9yaXR5IHtcXG4gIGJvcmRlcjogMC4zNXJlbSBzb2xpZCAjZmY4Nzg3O1xcbn1cXG4udGFza0NoZWNrYm94LmhpZ2hQcmlvcml0eTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4Nzg3ODA7XFxufVxcbi50YXNrQ2hlY2tib3guaGlnaFByaW9yaXR5LmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODc4NztcXG4gIGJvcmRlcjogMC4zNXJlbSBzb2xpZCAjZmY4Nzg3O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFza05hbWUge1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnRhc2tEdWVEYXRlIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi50YXNrV2VpZ2h0IHtcXG4gIHdpZHRoOiA1JTtcXG59XFxuXFxuLnRhc2tNYXJrIHtcXG4gIHdpZHRoOiA1JTtcXG59XFxuXFxuLnRhc2tDcm9zc091dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhOztFQUViLHlDQUF5QztBQUMzQzs7QUFFQSxRQUFROztBQUVSO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtF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QUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBOQVYgKi9cXG5cXG4jbmF2IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogMzUlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlOWVjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNob21lQnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAycmVtO1xcbn1cXG5cXG4jaG9tZUJ1dHRvbiA+IGltZyB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi8qIENPVVJTRSBMSVNUKi9cXG5cXG4jY291cnNlTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvdXJzZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmE3MTU7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLmNvdXJzZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZjODZjO1xcbiAgY29sb3I6ICNmZmY4ZTc7XFxufVxcblxcbi8qIEFERCBDT1VSU0UgRk9STSAqL1xcblxcbiNhZGRDb3Vyc2VQcm9tcHQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkQ291cnNlUHJvbXB0LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2U2YTcxNTtcXG4gIG1hcmdpbjogMnJlbSAxcmVtO1xcbn1cXG5cXG4jYWRkQ291cnNlUHJvbXB0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZWZjODZjO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNhZGRDb3Vyc2VQcm9tcHQ6aG92ZXIsXFxuI2hvbWVCdXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuI2FkZENvdXJzZUZvcm1XcmFwcGVyIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDFyZW0sIDByZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyA+IGlucHV0IHtcXG4gIGFsbDogdW5zZXQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjM1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDVyZW07XFxuICBmbGV4OiA0O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gbGFiZWwge1xcbiAgbWluLXdpZHRoOiAzLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogI2U2YTcxNTtcXG59XFxuXFxuI2FkZENvdXJzZVN1Ym1pdEZvcm1Sb3cge1xcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2FkZENvdXJzZUJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2NhbmNlbEFkZENvdXJzZUJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZENvdXJzZUJ1dHRvbjpob3ZlcixcXG4jY2FuY2VsQWRkQ291cnNlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbiNhZGRDb3Vyc2VCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNlNmE3MTU7XFxufVxcblxcbi8qIENPTlRFTlQgKi9cXG5cXG4jY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDYwJTtcXG5cXG4gIGZsZXgtZ3JvdzogMztcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxuXFxuICBwYWRkaW5nOiAxLjVyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY291cnNlVGl0bGVEaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2NvdXJzZVRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jZGVsZXRlQ291cnNlQnV0dG9uIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODc4NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jZGVsZXRlQ291cnNlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmZjg3ODc7XFxufVxcblxcbiNhZGRUYXNrUHJvbXB0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2tQcm9tcHQuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjOWE3YWEwO1xcbiAgbWFyZ2luOiAxLjVyZW0gMHJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZFRhc2tQcm9tcHQ6aG92ZXIge1xcbiAgY29sb3I6ICNkNGMxZDc7XFxufVxcblxcbi8qIEFERCBUQVNLIE1PREFMICovXFxuXFxuI2FkZFRhc2tNb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTllYztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgd2lkdGg6IDM1cmVtO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2tNb2RhbC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm0uYWN0aXZlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbiNhZGRUYXNrRm9ybVdyYXBwZXIge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMXJlbSwgMHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm1XcmFwcGVyID4gLmZvcm1Sb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuI2FkZFRhc2tGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gaW5wdXQsXFxuI2FkZFRhc2tGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gc2VsZWN0IHtcXG4gIGFsbDogdW5zZXQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjM1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDVyZW07XFxuICBmbGV4OiA0O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiNhZGRUYXNrRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyA+IGxhYmVsIHtcXG4gIG1pbi13aWR0aDogMy41cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6ICM5YTdhYTA7XFxufVxcblxcbiNhZGRUYXNrU3VibWl0Rm9ybVJvdyB7XFxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2NhbmNlbEFkZFRhc2tCdXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyLFxcbiNjYW5jZWxBZGRUYXNrQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjOWE3YWEwO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xcbiAgY29sb3I6ICNmZjg3ODc7XFxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cXG4gIGNvbG9yOiAjZmY4Nzg3O1xcbn1cXG5cXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xcbiAgY29sb3I6ICNmZjg3ODc7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIFRBU0tTICovXFxuXFxuI3Rhc2tMaXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBnYXA6IDAuNzVyZW07XFxufVxcblxcbi50YXNrQ2hlY2tib3gge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDAuMzVyZW0gc29saWQgIzIzOTY3ZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrQ2hlY2tib3gubG93UHJpb3JpdHkge1xcbiAgYm9yZGVyOiAwLjM1cmVtIHNvbGlkICMyMzk2N2Y7XFxufVxcbi50YXNrQ2hlY2tib3gubG93UHJpb3JpdHk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwgMTUwLCAxMjcsIDAuNSk7XFxufVxcbi50YXNrQ2hlY2tib3gubG93UHJpb3JpdHkuY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NjdmO1xcbiAgYm9yZGVyOiAwLjM1cmVtIHNvbGlkICMyMzk2N2Y7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50YXNrQ2hlY2tib3gubWVkaXVtUHJpb3JpdHkge1xcbiAgYm9yZGVyOiAwLjM1cmVtIHNvbGlkICNlNmE3MTU7XFxufVxcbi50YXNrQ2hlY2tib3gubWVkaXVtUHJpb3JpdHk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1YTYxNTgwO1xcbn1cXG4udGFza0NoZWNrYm94Lm1lZGl1bVByaW9yaXR5LmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2YTcxNTtcXG4gIGJvcmRlcjogMC4zNXJlbSBzb2xpZCAjZTZhNzE1O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4udGFza0NoZWNrYm94LmhpZ2hQcmlvcml0eSB7XFxuICBib3JkZXI6IDAuMzVyZW0gc29saWQgI2ZmODc4NztcXG59XFxuLnRhc2tDaGVja2JveC5oaWdoUHJpb3JpdHk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODc4NzgwO1xcbn1cXG4udGFza0NoZWNrYm94LmhpZ2hQcmlvcml0eS5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjg3ODc7XFxuICBib3JkZXI6IDAuMzVyZW0gc29saWQgI2ZmODc4NztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2tOYW1lIHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbi50YXNrRHVlRGF0ZSB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4udGFza1dlaWdodCB7XFxuICB3aWR0aDogNSU7XFxufVxcblxcbi50YXNrTWFyayB7XFxuICB3aWR0aDogNSU7XFxufVxcblxcbi50YXNrQ3Jvc3NPdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHtcbiAgYWRkQ291cnNlUHJvbXB0T25DbGljayxcbiAgY2FuY2VsQWRkQ291cnNlLFxuICBidWlsZExvY2FsbHlTdG9yZWRDb3Vyc2VzLFxuICB0b2dnbGVBZGRDb3Vyc2VGb3JtLFxuICB0b2dnbGVBZGRDb3Vyc2VQcm9tcHQsXG59O1xuXG4vLyBDb3Vyc2UgQWRkaXRpb24gLy9cblxuY29uc3QgdG9nZ2xlQWRkQ291cnNlRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgYWRkQ291cnNlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQ291cnNlRm9ybVwiKTtcbiAgYWRkQ291cnNlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufTtcbmNvbnN0IHRvZ2dsZUFkZENvdXJzZVByb21wdCA9ICgpID0+IHtcbiAgY29uc3QgYWRkQ291cnNlUHJvbXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRDb3Vyc2VQcm9tcHRcIik7XG4gIGFkZENvdXJzZVByb21wdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufTtcblxuLy9hZGRDb3Vyc2VQcm9tcHQgZXZlbnQgbGlzdGVuZXJcbmNvbnN0IGFkZENvdXJzZVByb21wdE9uQ2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZENvdXJzZVByb21wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQ291cnNlUHJvbXB0XCIpO1xuICBhZGRDb3Vyc2VQcm9tcHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2dnbGVBZGRDb3Vyc2VGb3JtKCk7XG4gICAgdG9nZ2xlQWRkQ291cnNlUHJvbXB0KCk7XG4gIH0pO1xufTtcblxuLy9DYW5jZWwgYWRkaW5nIGEgY291cnNlXG5jb25zdCBjYW5jZWxBZGRDb3Vyc2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbmNlbEFkZENvdXJzZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiY2FuY2VsQWRkQ291cnNlQnV0dG9uXCJcbiAgKTtcblxuICBjYW5jZWxBZGRDb3Vyc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2dnbGVBZGRDb3Vyc2VGb3JtKCk7XG4gICAgdG9nZ2xlQWRkQ291cnNlUHJvbXB0KCk7XG5cbiAgICAvL3Jlc2V0IGZvcm0gaW5wdXRzLCBwbGFjZWhvbGRlcnNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZENvdXJzZUZvcm1cIikucmVzZXQoKTtcblxuICAgIGNvbnN0IGNvdXJzZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZU5hbWVcIik7XG4gICAgY29uc3QgY291cnNlQ3JlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VDcmVkaXRcIik7XG5cbiAgICBjb3Vyc2VOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiXCIpO1xuICAgIGNvdXJzZUNyZWRpdC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlwiKTtcbiAgfSk7XG59O1xuXG4vL0J1aWxkIGxvY2FsbHkgc3RvcmVkIGNvdXJzZXMgb24gdGhlIERPTVxuY29uc3QgYnVpbGRMb2NhbGx5U3RvcmVkQ291cnNlcyA9IChjb3Vyc2VJbmRleCkgPT4ge1xuICBjb25zdCBjb3Vyc2VMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VMaXN0XCIpO1xuXG4gIGNvbnN0IGNvdXJzZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb3Vyc2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VcIik7XG4gIGNvdXJzZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9TmFtZWBcbiAgKX1gO1xuICBjb3Vyc2VMaXN0LmFwcGVuZENoaWxkKGNvdXJzZUVsZW1lbnQpO1xuXG4gIHJldHVybiBjb3Vyc2VFbGVtZW50O1xufTtcbiIsImltcG9ydCB7IGFkZFRhc2tQcm9tcHRPbkNsaWNrIH0gZnJvbSBcIi4vdGFza0FkZGl0aW9uXCI7XG5pbXBvcnQgeyBhZGREZWxldGVDb3Vyc2VPbkNsaWNrIH0gZnJvbSBcIi4vY291cnNlRGVsZXRpb24uanNcIjtcbmltcG9ydCB7fSBmcm9tIFwiLi9ET00uanNcIjtcbmltcG9ydCB7IGFkZFRhc2tMaXN0ZW5lcnMgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgeyBjb3Vyc2VBcnJheSwgZGlzcGxheVRhc2sgfSBmcm9tIFwiLi9pbmRleFwiO1xuZXhwb3J0IHtcbiAgQ291cnNlLFxuICBhZGRDb3Vyc2VUYWJMaXN0ZW5lcixcbiAgYnVpbGRDb3Vyc2VGcm9tRm9ybSxcbiAgZGV0ZXJtaW5lQ291cnNlSW5kZXgsXG59O1xuXG5jb25zdCBDb3Vyc2UgPSAoY291cnNlTmFtZSwgY291cnNlQ3JlZGl0KSA9PiB7XG4gIGNvbnN0IHRhc2tBcnJheSA9IFtdO1xuXG4gIC8vIGNvbnN0IGdldENvdXJzZU5hbWUgPSAoKSA9PiBjb3Vyc2VOYW1lO1xuICAvLyBjb25zdCBnZXRDb3Vyc2VDcmVkaXQgPSAoKSA9PiBjb3Vyc2VDcmVkaXQ7XG5cbiAgcmV0dXJuIHtcbiAgICBjb3Vyc2VOYW1lLFxuICAgIGNvdXJzZUNyZWRpdCxcbiAgICB0YXNrQXJyYXksXG4gICAgLy8gZ2V0Q291cnNlTmFtZSxcbiAgICAvLyBnZXRDb3Vyc2VDcmVkaXQsXG4gICAgLy8gdGFza0FycmF5LFxuICB9O1xufTtcblxuY29uc3QgZGV0ZXJtaW5lQ291cnNlSW5kZXggPSAoKSA9PiB7XG4gIGZvciAobGV0IGNvdXJzZUluZGV4ID0gMDsgY291cnNlSW5kZXggPD0gY291cnNlQXJyYXkubGVuZ3RoOyBjb3Vyc2VJbmRleCsrKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cnNlVGl0bGVcIikgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZVRpdGxlXCIpLmlubmVySFRNTCA9PVxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9TmFtZWApXG4gICAgKSB7XG4gICAgICByZXR1cm4gY291cnNlSW5kZXg7XG4gICAgfVxuICB9XG59O1xuXG4vL0J1aWxkaW5nIGEgY291cnNlIGZyb20gZm9ybVxuY29uc3QgYnVpbGRDb3Vyc2VGcm9tRm9ybSA9ICgpID0+IHtcbiAgbGV0IGNvdXJzZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZU5hbWVcIikudmFsdWU7XG4gIGxldCBjb3Vyc2VDcmVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZUNyZWRpdFwiKS52YWx1ZTtcbiAgbGV0IGNvdXJzZSA9IENvdXJzZShjb3Vyc2VOYW1lLCBjb3Vyc2VDcmVkaXQpO1xuXG4gIHJldHVybiBjb3Vyc2U7XG59O1xuXG5jb25zdCBkaXNwbGF5TmV3VGFiID0gKHRhcmdldCkgPT4ge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IGNvdXJzZVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY291cnNlVGl0bGVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb3Vyc2VUaXRsZURpdlwiKTtcblxuICAvL1RpdGxlXG4gIGNvbnN0IGNvdXJzZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhcIik7XG4gIGNvdXJzZVRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY291cnNlVGl0bGVcIik7XG4gIGNvdXJzZVRpdGxlLmlubmVySFRNTCA9IHRhcmdldC5pbm5lckhUTUw7XG4gIGNvdXJzZVRpdGxlRGl2LmFwcGVuZChjb3Vyc2VUaXRsZSk7XG5cbiAgLy9EZWxldGVDb3Vyc2VCdXR0b25cbiAgY29uc3QgZGVsZXRlQ291cnNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQ291cnNlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlQ291cnNlQnV0dG9uXCIpO1xuICBkZWxldGVDb3Vyc2VCdXR0b24uaW5uZXJIVE1MID0gXCJEZWxldGVcIjtcbiAgY291cnNlVGl0bGVEaXYuYXBwZW5kKGRlbGV0ZUNvdXJzZUJ1dHRvbik7XG5cbiAgY29udGVudERpdi5hcHBlbmQoY291cnNlVGl0bGVEaXYpO1xuXG4gIC8vQWRkIFRhc2sgQnV0dG9uXG4gIGNvbnN0IGFkZFRhc2tQcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrUHJvbXB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkVGFza1Byb21wdFwiKTtcbiAgYWRkVGFza1Byb21wdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBhZGRUYXNrUHJvbXB0LmlubmVySFRNTCA9IFwiKyBBZGQgVGFza1wiO1xuICBjb250ZW50RGl2LmFwcGVuZChhZGRUYXNrUHJvbXB0KTtcblxuICAvL1Rhc2tsaXN0XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0xpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrTGlzdFwiKTtcbiAgY29udGVudERpdi5hcHBlbmQodGFza0xpc3QpO1xufTtcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29uc3QgY2hhbmdlVGFicyA9IChlKSA9PiB7XG4gIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAvL0Rpc3BsYXlzIHRpdGxlLCBhZGRUYXNrUHJvbXB0LCBhbmQgdGFza0xpc3QgZGl2IGZvciBjb3Vyc2UgdGFic1xuICBkaXNwbGF5TmV3VGFiKHRhcmdldCk7XG5cbiAgLy9hZGQgRXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRlbGV0ZUNvdXJzZSBCdXR0b25cbiAgYWRkRGVsZXRlQ291cnNlT25DbGljaygpO1xuXG4gIC8vQWRkIEV2ZW50IGxpc3RlbmVyIHRvIHRoZSBhZGRUYXNrIEJ1dHRvblxuICBhZGRUYXNrUHJvbXB0T25DbGljaygpO1xuXG4gIC8vIC8vQnVpbGQgYWxsIHRoZSB0YXNrcyBzdG9yZWQgaW4gbG9jYWxzdG9yYWdlLlxuICAvLyBkaXNwbGF5VGFza3NGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbiAgbGV0IGNvdXJzZUluZGV4ID0gZGV0ZXJtaW5lQ291cnNlSW5kZXgoKTtcblxuICBmb3IgKFxuICAgIGxldCB0YXNrSW5kZXggPSAwO1xuICAgIHRhc2tJbmRleCA8IGNvdXJzZUFycmF5W2NvdXJzZUluZGV4XS50YXNrQXJyYXkubGVuZ3RoO1xuICAgIHRhc2tJbmRleCsrXG4gICkge1xuICAgIGxldCB0YXNrRWxlbWVudHMgPSBkaXNwbGF5VGFzayhcbiAgICAgIGNvdXJzZUFycmF5W2NvdXJzZUluZGV4XS50YXNrQXJyYXlbdGFza0luZGV4XVxuICAgICk7XG4gICAgYWRkVGFza0xpc3RlbmVycyh0YXNrRWxlbWVudHMpO1xuICB9XG59O1xuXG5jb25zdCBhZGRDb3Vyc2VUYWJMaXN0ZW5lciA9IChjb3Vyc2UpID0+IHtcbiAgaWYgKGNvdXJzZSAhPSB1bmRlZmluZWQpIHtcbiAgICBjb3Vyc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjaGFuZ2VUYWJzKGUpO1xuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgQ291cnNlLCBidWlsZENvdXJzZUZyb21Gb3JtLCBhZGRDb3Vyc2VUYWJMaXN0ZW5lciB9IGZyb20gXCIuL2NvdXJzZS5qc1wiO1xuaW1wb3J0IHtcbiAgdG9nZ2xlQWRkQ291cnNlRm9ybSxcbiAgdG9nZ2xlQWRkQ291cnNlUHJvbXB0LFxuICBidWlsZExvY2FsbHlTdG9yZWRDb3Vyc2VzLFxufSBmcm9tIFwiLi9ET00uanNcIjtcbmltcG9ydCB7XG4gIGNvdXJzZUFycmF5LFxuICB1cGRhdGVMb2NhbFN0b3JhZ2VGcm9tQXJyYXksXG4gIGRpc3BsYXlDb3Vyc2UsXG59IGZyb20gXCIuL2luZGV4LmpzXCI7XG5leHBvcnQgeyBkaXNwbGF5TG9jYWxseVN0b3JlZENvdXJzZXMsIGFkZENvdXJzZSB9O1xuXG5jb25zdCBkaXNwbGF5TG9jYWxseVN0b3JlZENvdXJzZXMgPSAoKSA9PiB7XG4gIGZvciAobGV0IGNvdXJzZUluZGV4ID0gMDsgY291cnNlSW5kZXggPCA1MDsgY291cnNlSW5kZXgrKykge1xuICAgIHdoaWxlIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1OYW1lYCkgIT0gbnVsbCkge1xuICAgICAgbGV0IGNvdXJzZUVsZW1lbnQgPSBidWlsZExvY2FsbHlTdG9yZWRDb3Vyc2VzKGNvdXJzZUluZGV4KTtcblxuICAgICAgLy9BZGQgbG9jYWxseSBzdG9yZWQgY291cnNlcyB0byB0aGUgYXJyYXlcbiAgICAgIGxldCBjb3Vyc2VOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9TmFtZWApO1xuICAgICAgbGV0IGNvdXJzZUNyZWRpdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fUNyZWRpdGApO1xuICAgICAgbGV0IGNvdXJzZSA9IENvdXJzZShjb3Vyc2VOYW1lLCBjb3Vyc2VDcmVkaXQpO1xuICAgICAgY291cnNlQXJyYXkucHVzaChjb3Vyc2UpO1xuXG4gICAgICAvL0Zyb20gY291cnNlLmpzLCBsaXN0ZW4gZm9yIGNsaWNrIGFuZCBydW4gZnVuY3Rpb25zIHRoYXQgZGlzcGxheSB0aGUgcmlnaHQgcGFnZS5cbiAgICAgIGFkZENvdXJzZVRhYkxpc3RlbmVyKGNvdXJzZUVsZW1lbnQpO1xuICAgICAgY291cnNlSW5kZXgrKztcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRvZXNDb3Vyc2VBbHJlYWR5RXhpc3QgPSAoY291cnNlTmFtZSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdXJzZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2l9TmFtZWApID09IGNvdXJzZU5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxuLy9BZGRpbmcgYSBjb3Vyc2VcbmNvbnN0IGFkZENvdXJzZSA9ICgpID0+IHtcbiAgY29uc3QgYWRkQ291cnNlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRDb3Vyc2VCdXR0b25cIik7XG4gIGFkZENvdXJzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGNvdXJzZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZU5hbWVcIik7XG4gICAgY29uc3QgY291cnNlQ3JlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VDcmVkaXRcIik7XG5cbiAgICAvL1RoZSBmb2xsb3dpbmcgaWYgc3RhdGVtZW50cyBhcmUgdGhlIGZvcm0gdmFsaWRhdGlvbiwgY2hlY2tpbmcgZm9yIGlucHV0IGFzIHdlbGwgYXMgbm8gY291cnNlTmFtZSBkdXBsaWNhdGVzLlxuICAgIGlmIChcbiAgICAgIGNvdXJzZU5hbWUudmFsaWRpdHkudmFsdWVNaXNzaW5nICYmXG4gICAgICBjb3Vyc2VDcmVkaXQudmFsaWRpdHkudmFsdWVNaXNzaW5nXG4gICAgKSB7XG4gICAgICBjb3Vyc2VOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiKlRoaXMgaW5wdXQgaXMgcmVxdWlyZWRcIik7XG4gICAgICBjb3Vyc2VDcmVkaXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIqVGhpcyBpbnB1dCBpcyByZXF1aXJlZFwiKTtcbiAgICB9IGVsc2UgaWYgKGNvdXJzZU5hbWUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBjb3Vyc2VOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiKlRoaXMgaW5wdXQgaXMgcmVxdWlyZWRcIik7XG4gICAgfSBlbHNlIGlmIChjb3Vyc2VDcmVkaXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBjb3Vyc2VDcmVkaXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIqVGhpcyBpbnB1dCBpcyByZXF1aXJlZFwiKTtcbiAgICAgIGlmIChkb2VzQ291cnNlQWxyZWFkeUV4aXN0KGNvdXJzZU5hbWUudmFsdWUpID09IHRydWUpIHtcbiAgICAgICAgY291cnNlTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGNvdXJzZU5hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIqVGhpcyBjb3Vyc2UgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkb2VzQ291cnNlQWxyZWFkeUV4aXN0KGNvdXJzZU5hbWUudmFsdWUpID09IHRydWUpIHtcbiAgICAgICAgY291cnNlTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGNvdXJzZU5hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIqVGhpcyBjb3Vyc2UgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3Vyc2VOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiXCIpO1xuICAgICAgICBjb3Vyc2VDcmVkaXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJcIik7XG5cbiAgICAgICAgbGV0IGNvdXJzZSA9IGJ1aWxkQ291cnNlRnJvbUZvcm0oKTtcblxuICAgICAgICAvL1B1c2hlcyBjb3Vyc2UgdG8gYXJyYXksIGl0ZXJhdGVzIHRocm91Z2ggYXJyYXkgYW5kIHVwZGF0ZXMgbG9jYWxTdG9yYWdlXG4gICAgICAgIGNvdXJzZUFycmF5LnB1c2goY291cnNlKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlRnJvbUFycmF5KCk7XG5cbiAgICAgICAgLy9kZWxldGVzIGV2ZXJ5dGhpbmcgaW4gdGhlIGNvdXJzZUxpc3QgYW5kIGJ1aWxkcyBpdCBhbGwgYWdhaW5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VMaXN0XCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgbGV0IGNvdXJzZUluZGV4ID0gMDtcbiAgICAgICAgICBjb3Vyc2VJbmRleCA8IGNvdXJzZUFycmF5Lmxlbmd0aDtcbiAgICAgICAgICBjb3Vyc2VJbmRleCsrXG4gICAgICAgICkge1xuICAgICAgICAgIGxldCBjb3Vyc2VFbGVtZW50ID0gZGlzcGxheUNvdXJzZShjb3Vyc2VBcnJheVtjb3Vyc2VJbmRleF0pO1xuXG4gICAgICAgICAgLy9hZGRzIHRoZSB0YWIgZnVuY3Rpb25hbGl0eSB0byB0aGUgbmV3bHkgYnVpbGQgYW5kIGRpc3BsYXllZCBjb3Vyc2UuXG4gICAgICAgICAgLy9Db3Vyc2VFbGVtZW50IChmcm9tIGRpc3BsYXlDb3Vyc2UpIGlzIHRoZSBuYXYgZWxlbWVudC5cbiAgICAgICAgICBhZGRDb3Vyc2VUYWJMaXN0ZW5lcihjb3Vyc2VFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZUFkZENvdXJzZUZvcm0oKTtcbiAgICAgICAgdG9nZ2xlQWRkQ291cnNlUHJvbXB0KCk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRDb3Vyc2VGb3JtXCIpLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBjb3Vyc2VBcnJheSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5leHBvcnQgeyBhZGREZWxldGVDb3Vyc2VPbkNsaWNrIH07XG5cbmNvbnN0IGFkZERlbGV0ZUNvdXJzZU9uQ2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZUNvdXJzZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlQ291cnNlQnV0dG9uXCIpO1xuICBkZWxldGVDb3Vyc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGxldCB0aXRsZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuXG4gICAgLy9GaW5kaW5nIHRoZSBjb3Vyc2UgSW5kZXhcbiAgICBsZXQgY291cnNlSW5kZXggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291cnNlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aXRsZSA9PSBjb3Vyc2VBcnJheVtpXS5jb3Vyc2VOYW1lKSB7XG4gICAgICAgIGNvdXJzZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2RlbGV0ZSBjb3Vyc2UgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9TmFtZWApO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fUNyZWRpdGApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291cnNlQXJyYXlbY291cnNlSW5kZXhdLnRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7aX1OYW1lYCk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtpfUR1ZURhdGVgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2l9V2VpZ2h0YCk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtpfU1hcmtgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2l9UHJpb3JpdHlgKTtcbiAgICB9XG4gICAgLy9zaGlmdCBsb2NhbHN0b3JhZ2VcbiAgICBmb3IgKGxldCBpID0gY291cnNlSW5kZXg7IGkgPCBjb3Vyc2VBcnJheS5sZW5ndGggKyAxOyBpKyspIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtpICsgMX1OYW1lYCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgIGBjb3Vyc2Uke2l9TmFtZWAsXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7aSArIDF9TmFtZWApXG4gICAgICAgICk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgYGNvdXJzZSR7aX1DcmVkaXRgLFxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2kgKyAxfUNyZWRpdGApXG4gICAgICAgICk7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3Vyc2VBcnJheVtpICsgMV0udGFza0FycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICBgY291cnNlJHtpfVRhc2ske2p9TmFtZWAsXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtpICsgMX1UYXNrJHtqfU5hbWVgKVxuICAgICAgICAgICk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICBgY291cnNlJHtpfVRhc2ske2p9RHVlRGF0ZWAsXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtpICsgMX1UYXNrJHtqfUR1ZURhdGVgKVxuICAgICAgICAgICk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICBgY291cnNlJHtpfVRhc2ske2p9V2VpZ2h0YCxcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2kgKyAxfVRhc2ske2p9V2VpZ2h0YClcbiAgICAgICAgICApO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgYGNvdXJzZSR7aX1UYXNrJHtqfU1hcmtgLFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7aSArIDF9VGFzayR7an1NYXJrYClcbiAgICAgICAgICApO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgYGNvdXJzZSR7aX1UYXNrJHtqfVByaW9yaXR5YCxcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2kgKyAxfVRhc2ske2p9UHJpb3JpdHlgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vZGVsZXRlIGNvdXJzZSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNvdXJzZSR7aX1OYW1lYCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2l9Q3JlZGl0YCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291cnNlQXJyYXlbY291cnNlSW5kZXhdLnRhc2tBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjb3Vyc2Uke2l9VGFzayR7an1OYW1lYCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNvdXJzZSR7aX1UYXNrJHtqfUR1ZURhdGVgKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtpfVRhc2ske2p9V2VpZ2h0YCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNvdXJzZSR7aX1UYXNrJHtqfU1hcmtgKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY291cnNlJHtpfVRhc2ske2p9UHJpb3JpdHlgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRlbGV0ZSBjb3Vyc2UgZnJvbSBhcnJheVxuICAgIGxldCB0ZW1wQ291cnNlSW5kZXggPSBjb3Vyc2VJbmRleDtcbiAgICB3aGlsZSAodGVtcENvdXJzZUluZGV4IDwgY291cnNlQXJyYXkubGVuZ3RoKSB7XG4gICAgICBpZiAoY291cnNlQXJyYXlbdGVtcENvdXJzZUluZGV4ICsgMV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvdXJzZUFycmF5W3RlbXBDb3Vyc2VJbmRleF0gPSBjb3Vyc2VBcnJheVt0ZW1wQ291cnNlSW5kZXggKyAxXTtcbiAgICAgICAgdGVtcENvdXJzZUluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3Vyc2VBcnJheS5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHRlbXBDb3Vyc2VJbmRleCsrO1xuICAgIH1cblxuICAgIC8vZGVsZXRlIGNvdXJzZSBmcm9tIG5hdlxuICAgIGxldCBjb3Vyc2VMaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY291cnNlXCIpKTtcbiAgICBjb3Vyc2VMaXN0LmZvckVhY2goKGNvdXJzZSkgPT4ge1xuICAgICAgaWYgKGNvdXJzZS5pbm5lclRleHQgPT0gdGl0bGUpIHtcbiAgICAgICAgY291cnNlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgaG9tZUJ1dHRvbkltYWdlIGZyb20gXCIuL2hvbWVCdXR0b24uanBnXCI7XG5cbmltcG9ydCB7IGRpc3BsYXlMb2NhbGx5U3RvcmVkQ291cnNlcywgYWRkQ291cnNlIH0gZnJvbSBcIi4vY291cnNlQWRkaXRpb24uanNcIjtcbmltcG9ydCB7IGNhbmNlbEFkZFRhc2ssIGFkZFRhc2sgfSBmcm9tIFwiLi90YXNrQWRkaXRpb24uanNcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBDb3Vyc2UsIGFkZENvdXJzZVRhYkxpc3RlbmVyIH0gZnJvbSBcIi4vY291cnNlLmpzXCI7XG5pbXBvcnQgeyBhZGRDb3Vyc2VQcm9tcHRPbkNsaWNrLCBjYW5jZWxBZGRDb3Vyc2UgfSBmcm9tIFwiLi9ET00uanNcIjtcbmV4cG9ydCB7IGNvdXJzZUFycmF5LCB1cGRhdGVMb2NhbFN0b3JhZ2VGcm9tQXJyYXksIGRpc3BsYXlUYXNrLCBkaXNwbGF5Q291cnNlIH07XG5cbmNvbnN0IGhvbWVCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbmhvbWVCdXR0b24uc3JjID0gaG9tZUJ1dHRvbkltYWdlO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lQnV0dG9uXCIpLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuXG5jb25zdCBjb3Vyc2VBcnJheSA9IFtdO1xuXG5jb25zdCB1cGRhdGVDb3Vyc2VBcnJheUZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIC8vZm9yIGFsbCBsb2NhbGx5IHN0b3JlZCBjb3Vyc2VzXG4gIGZvciAobGV0IGNvdXJzZUluZGV4ID0gMDsgY291cnNlSW5kZXggPCA1MDsgY291cnNlSW5kZXgrKykge1xuICAgIC8vV2hpbGUgYSBjb3Vyc2Ugc3RpbGwgZXhpc3RzIGF0IHRoaXMgY291cnNlSW5kZXgsXG4gICAgd2hpbGUgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fU5hbWVgKSAhPSBudWxsKSB7XG4gICAgICAvL0J1aWxkIGFuZCBhZGQgbG9jYWxseSBzdG9yZWQgY291cnNlcyB0byB0aGUgYXJyYXlcbiAgICAgIGxldCBjb3Vyc2VOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9TmFtZWApO1xuICAgICAgbGV0IGNvdXJzZUNyZWRpdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fUNyZWRpdGApO1xuICAgICAgbGV0IGNvdXJzZSA9IENvdXJzZShjb3Vyc2VOYW1lLCBjb3Vyc2VDcmVkaXQpO1xuICAgICAgY291cnNlQXJyYXkucHVzaChjb3Vyc2UpO1xuICAgICAgLy9mb3IgYWxsIG9mIHRoaXMgY291cnNlJ3MgdGFza3NcbiAgICAgIGZvciAobGV0IHRhc2tJbmRleCA9IDA7IHRhc2tJbmRleCA8IDIwMDsgdGFza0luZGV4KyspIHtcbiAgICAgICAgLy9XaGlsZSBhIHRhc2sgc3RpbGwgZXhpc3RzIGF0IHRoaXMgY291cnNlSW5kZXggYW5kIGF0IHRoaXMgdGFza0luZGV4XG4gICAgICAgIHdoaWxlIChcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHt0YXNrSW5kZXh9TmFtZWApICE9XG4gICAgICAgICAgbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICAvL0J1aWxkIGFuZCBhZGQgbG9jYWxseSBzdG9yZWQgdGFza3MgdG8gdGhlIGFwcHJvcHJpYXRlIGNvdXJzZSBpbiB0aGUgYXJyYXlcbiAgICAgICAgICBsZXQgbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgICAgICAgICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7dGFza0luZGV4fU5hbWVgXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgZHVlRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgICAgICAgICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7dGFza0luZGV4fUR1ZURhdGVgXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgd2VpZ2h0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgICAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHt0YXNrSW5kZXh9V2VpZ2h0YFxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IG1hcmsgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske3Rhc2tJbmRleH1NYXJrYFxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IHByaW9yaXR5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgICAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHt0YXNrSW5kZXh9UHJpb3JpdHlgXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgdGFzayA9IFRhc2sobmFtZSwgZHVlRGF0ZSwgd2VpZ2h0LCBtYXJrLCBwcmlvcml0eSk7XG4gICAgICAgICAgY291cnNlQXJyYXlbY291cnNlSW5kZXhdLnRhc2tBcnJheS5wdXNoKHRhc2spO1xuICAgICAgICAgIHRhc2tJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIC8vRnJvbSBjb3Vyc2UuanMsIGxpc3RlbiBmb3IgY2xpY2sgYW5kIHJ1biBmdW5jdGlvbnMgdGhhdCBkaXNwbGF5IHRoZSByaWdodCBwYWdlLlxuICAgICAgfVxuICAgICAgY291cnNlSW5kZXgrKztcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZUZyb21BcnJheSA9ICgpID0+IHtcbiAgY291cnNlQXJyYXkuZm9yRWFjaCgoY291cnNlLCBjb3Vyc2VJbmRleCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fU5hbWVgLCBgJHtjb3Vyc2UuY291cnNlTmFtZX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fUNyZWRpdGAsXG4gICAgICBgJHtjb3Vyc2UuY291cnNlQ3JlZGl0fWBcbiAgICApO1xuICAgIGNvdXJzZS50YXNrQXJyYXkuZm9yRWFjaCgodGFzaywgdGFza0luZGV4KSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7dGFza0luZGV4fU5hbWVgLFxuICAgICAgICBgJHt0YXNrLnRhc2tOYW1lfWBcbiAgICAgICk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7dGFza0luZGV4fUR1ZURhdGVgLFxuICAgICAgICBgJHt0YXNrLnRhc2tEdWVEYXRlfWBcbiAgICAgICk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7dGFza0luZGV4fVdlaWdodGAsXG4gICAgICAgIGAke3Rhc2sudGFza1dlaWdodH1gXG4gICAgICApO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske3Rhc2tJbmRleH1NYXJrYCxcbiAgICAgICAgYCR7dGFzay50YXNrTWFya31gXG4gICAgICApO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske3Rhc2tJbmRleH1Qcmlvcml0eWAsXG4gICAgICAgIGAke3Rhc2sudGFza1ByaW9yaXR5fWBcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gY29uc3QgZGlzcGxheUxvY2FsbHlTdG9yZWRDb3Vyc2VzSW5OYXYgPSAoY291cnNlSW5kZXgpID0+IHtcbi8vICAgY29uc3QgY291cnNlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cnNlTGlzdFwiKTtcblxuLy8gICBjb25zdCBjb3Vyc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbi8vICAgY291cnNlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY291cnNlXCIpO1xuLy8gICBjb3Vyc2VFbGVtZW50LmlubmVySFRNTCA9IGAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFxuLy8gICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fU5hbWVgXG4vLyAgICl9YDtcbi8vICAgY291cnNlTGlzdC5hcHBlbmRDaGlsZChjb3Vyc2VFbGVtZW50KTtcblxuLy8gICByZXR1cm4gY291cnNlRWxlbWVudDtcbi8vIH07XG5cbmNvbnN0IGRpc3BsYXlDb3Vyc2UgPSAoY291cnNlKSA9PiB7XG4gIGNvbnN0IGNvdXJzZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZUxpc3RcIik7XG4gIGNvbnN0IGNvdXJzZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb3Vyc2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VcIik7XG4gIGNvdXJzZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7Y291cnNlLmNvdXJzZU5hbWV9YDtcbiAgY291cnNlTGlzdC5hcHBlbmRDaGlsZChjb3Vyc2VFbGVtZW50KTtcblxuICByZXR1cm4gY291cnNlRWxlbWVudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlUYXNrID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tMaXN0XCIpO1xuXG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRhc2tDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFza0NoZWNrYm94XCIpO1xuICB0YXNrRGl2LmFwcGVuZCh0YXNrQ2hlY2tib3gpO1xuXG4gIGlmICh0YXNrLnRhc2tQcmlvcml0eSA9PSBcImhpZ2hcIikge1xuICAgIHRhc2tDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiaGlnaFByaW9yaXR5XCIpO1xuICB9IGVsc2UgaWYgKHRhc2sudGFza1ByaW9yaXR5ID09IFwibWVkaXVtXCIpIHtcbiAgICB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcIm1lZGl1bVByaW9yaXR5XCIpO1xuICB9IGVsc2UgaWYgKHRhc2sudGFza1ByaW9yaXR5ID09IFwibG93XCIpIHtcbiAgICB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcImxvd1ByaW9yaXR5XCIpO1xuICB9IGVsc2Uge1xuICB9XG5cbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2tOYW1lXCIpO1xuICB0YXNrTmFtZS5pbm5lckhUTUwgPSBgJHt0YXNrLnRhc2tOYW1lfWA7XG4gIHRhc2tEaXYuYXBwZW5kKHRhc2tOYW1lKTtcblxuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFza0R1ZURhdGVcIik7XG4gIHRhc2tEdWVEYXRlLmlubmVySFRNTCA9IGAke3Rhc2sudGFza0R1ZURhdGV9YDtcbiAgdGFza0Rpdi5hcHBlbmQodGFza0R1ZURhdGUpO1xuXG4gIGNvbnN0IHRhc2tXZWlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza1dlaWdodC5jbGFzc0xpc3QuYWRkKFwidGFza1dlaWdodFwiKTtcbiAgdGFza1dlaWdodC5pbm5lckhUTUwgPSBgJHt0YXNrLnRhc2tXZWlnaHR9JWA7XG4gIHRhc2tEaXYuYXBwZW5kKHRhc2tXZWlnaHQpO1xuXG4gIGNvbnN0IHRhc2tNYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tNYXJrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrTWFya1wiKTtcbiAgdGFza01hcmsuaW5uZXJIVE1MID0gYCR7dGFzay50YXNrTWFya30lYDtcbiAgdGFza0Rpdi5hcHBlbmQodGFza01hcmspO1xuXG4gIHRhc2tMaXN0LmFwcGVuZCh0YXNrRGl2KTtcblxuICByZXR1cm4geyB0YXNrQ2hlY2tib3ggfTtcbn07XG5cbi8vXG5cbi8vSWYgdGhlcmUgYXJlIGFueSBlbGVtZW50cyBpbiBsb2NhbFN0b3JhZ2UsIHRoZXkgZ2V0IGNvcGllZCBvbnRvIHRoZSBhcnJheS5cbnVwZGF0ZUNvdXJzZUFycmF5RnJvbUxvY2FsU3RvcmFnZSgpO1xuXG4vKk5vdyB0aGF0IGJvdGggdGhlIGFycmF5IGFuZCB0aGUgTG9jYWxTdG9yYWdlIGFyZSBzeW5jaGVkLCBcbmRpc3BsYXkgZWFjaCBjb3Vyc2UgaW4gdGhlIG5hdiwgYW5kIGZvciBlYWNoIGRpc3BsYXllZCBcbmVsZW1lbnQsIGFkZCBpdCdzIHRhYiBmdW5jdGlvbmFsaXR5LiovXG5cbmZvciAobGV0IGNvdXJzZUluZGV4ID0gMDsgY291cnNlSW5kZXggPCBjb3Vyc2VBcnJheS5sZW5ndGg7IGNvdXJzZUluZGV4KyspIHtcbiAgbGV0IGNvdXJzZUVsZW1lbnQgPSBkaXNwbGF5Q291cnNlKGNvdXJzZUFycmF5W2NvdXJzZUluZGV4XSk7XG4gIGFkZENvdXJzZVRhYkxpc3RlbmVyKGNvdXJzZUVsZW1lbnQpO1xufVxuXG4vKkxvY2FsbHkgc3RvcmVkIGNvdXJzZXMgYXJlIG5vdyBkaXNwbGF5ZWQgb24gdGhlIG5hdi4gYWRkQ291cnNlVGFiTGlzdGVuZXIgbGlzdGVucyBmb3JcbmEgY2xpY2suIEl0IGRlbGV0ZXMgZXZlcnl0aGluZyBpbiB0aGUgY29udGVudCBkaXYsIHRoZW4gY2FsbHMgY2hhbmdlVGFicywgd2hpY2ggd2lsbDpcbi0gY2FsbCBkaXNwbGF5TmV3VGFiIChkaXNwbGF5cyBjb3Vyc2UgdGl0bGUsIGFkZFRhc2tQcm9tcHQsIGFuZCB0YXNrTGlzdCBkaXYpXG4tIGNhbGwgYWRkRGVsZXRlQ291cnNlT25DbGljayAoZGVsZXRlcyBhbmQgc2hpZnRzIGZyb20gbG9jYWxTdG9yYWdlIGFuZCB0aGUgY291cnNlQXJyYXkpXG4tIGNhbGwgYWRkVGFza1Byb21wdE9uQ2xpY2sgKHRvZ2dsZXMgdGhlIGFkZFRhc2tNb2RhbCBhbmQgYWRkVGFza1Byb21wdCksXG4tIGFuZCBmaW5hbGx5LCBpdCB3aWxsIGRpc3BsYXkgdGhlIHRhc2tzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY291cnNlLiAqL1xuXG4vKkV2ZXJ5dGhpbmcgaXMgZmluYWxseSBkaXNwbGF5ZWQuIE5vdyBhZGRpbmcgZnVuY3Rpb24uICovXG5cbi8vVG9nZ2xlcyB0aGUgYWRkQ291cnNlUHJvbXB0IGFuZCBhZGRDb3Vyc2VGb3JtXG5hZGRDb3Vyc2VQcm9tcHRPbkNsaWNrKCk7XG5cbi8qQXR0YWNoZXMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGFkZENvdXJzZUJ1dHRvbiwgXG4tIGhhbmRsZXMgZm9ybSB2YWxpZGF0aW9uLCBcbi0gYnVpbGRzIGEgbmV3IENvdXJzZSBmcm9tIGZvcm0gaW5wdXQsIFxuLSBwdXNoZXMgaXQgdG8gdGhlIGFycmF5IGFuZCBjb3BpZXMgaXQgdG8gbG9jYWxTdG9yYWdlLFxuLSByZS1kaXNwbGF5cyBhbGwgY291cnNlcyB0byB0aGUgY291cnNlTGlzdCwgYWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gZWFjaCwgdGhlbiB0b2dnbGVzIGZvcm0gYW5kIHByb21wdC4gKi9cbmFkZENvdXJzZSgpO1xuXG5jYW5jZWxBZGRDb3Vyc2UoKTtcblxuLypBdHRhY2hlcyBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgYWRkVGFza0J1dHRvbiwgXG4tIGhhbmRsZXMgZm9ybSB2YWxpZGF0aW9uLCBcbi0gYnVpbGRzIGEgbmV3IHRhc2sgZnJvbSBmb3JtIGlucHV0LCBcbi0gcHVzaGVzIGl0IHRvIHRoZSBhcnJheSBhbmQgY29waWVzIGl0IHRvIGxvY2FsU3RvcmFnZSxcbi0gcmUtZGlzcGxheXMgYWxsIHRhc2tzIHRvIHRoZSB0YXNrTGlzdCwgYWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gZWFjaCwgdGhlbiB0b2dnbGVzIGZvcm0gYW5kIHByb21wdC4gKi9cbmFkZFRhc2soKTtcblxuY2FuY2VsQWRkVGFzaygpO1xuXG5jb25zb2xlLmxvZyhjb3Vyc2VBcnJheSk7XG4iLCJpbXBvcnQgeyBjb3Vyc2VBcnJheSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5leHBvcnQgeyBUYXNrLCBhZGRUYXNrTGlzdGVuZXJzIH07XG5cbmNvbnN0IFRhc2sgPSAodGFza05hbWUsIHRhc2tEdWVEYXRlLCB0YXNrV2VpZ2h0LCB0YXNrTWFyaywgdGFza1ByaW9yaXR5KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGFza05hbWUsXG4gICAgdGFza0R1ZURhdGUsXG4gICAgdGFza1dlaWdodCxcbiAgICB0YXNrTWFyayxcbiAgICB0YXNrUHJpb3JpdHksXG4gIH07XG59O1xuXG5jb25zdCBhZGRUYXNrTGlzdGVuZXJzID0gKGVsZW1lbnRzKSA9PiB7XG4gIGlmIChlbGVtZW50cy50YXNrQ2hlY2tib3ggIT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudHMudGFza0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlbGVtZW50cy50YXNrQ2hlY2tib3guY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBUYXNrLCBhZGRUYXNrTGlzdGVuZXJzIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHtcbiAgY291cnNlQXJyYXksXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZUZyb21BcnJheSxcbiAgZGlzcGxheVRhc2ssXG59IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBkZXRlcm1pbmVDb3Vyc2VJbmRleCB9IGZyb20gXCIuL2NvdXJzZS5qc1wiO1xuZXhwb3J0IHsgY2FuY2VsQWRkVGFzaywgYWRkVGFzaywgYWRkVGFza1Byb21wdE9uQ2xpY2sgfTtcblxuY29uc3QgdG9nZ2xlQWRkVGFza0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRm9ybVwiKTtcbiAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn07XG5jb25zdCB0b2dnbGVBZGRUYXNrTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza01vZGFsXCIpO1xuICBhZGRUYXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIik7XG4gIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufTtcbmNvbnN0IGFkZFRhc2tQcm9tcHRPbkNsaWNrID0gKCkgPT4ge1xuICBjb25zdCBhZGRUYXNrUHJvbXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrUHJvbXB0XCIpO1xuICBhZGRUYXNrUHJvbXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlQWRkVGFza0Zvcm0oKTtcbiAgICB0b2dnbGVBZGRUYXNrTW9kYWwoKTtcbiAgfSk7XG59O1xuY29uc3QgY2FuY2VsQWRkVGFzayA9ICgpID0+IHtcbiAgY29uc3QgY2FuY2VsQWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsQWRkVGFza0J1dHRvblwiKTtcblxuICBjYW5jZWxBZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlQWRkVGFza0Zvcm0oKTtcbiAgICB0b2dnbGVBZGRUYXNrTW9kYWwoKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIikucmVzZXQoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOYW1lXCIpLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiXCIpO1xuICB9KTtcbn07XG5jb25zdCBidWlsZFRhc2tGcm9tRm9ybSA9ICgpID0+IHtcbiAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTmFtZVwiKS52YWx1ZTtcbiAgbGV0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRHVlRGF0ZVwiKS52YWx1ZTtcbiAgbGV0IHRhc2tXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tXZWlnaHRcIikudmFsdWU7XG4gIGxldCB0YXNrTWFyayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza01hcmtcIikudmFsdWU7XG4gIGxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tQcmlvcml0eVwiKS52YWx1ZTtcbiAgbGV0IHRhc2sgPSBUYXNrKHRhc2tOYW1lLCB0YXNrRHVlRGF0ZSwgdGFza1dlaWdodCwgdGFza01hcmssIHRhc2tQcmlvcml0eSk7XG5cbiAgcmV0dXJuIHRhc2s7XG59O1xuXG5jb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrQnV0dG9uXCIpO1xuXG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOYW1lXCIpO1xuXG4gICAgaWYgKHRhc2tOYW1lLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaGlzIGlucHV0IGlzIHJlcXVpcmVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlwiKTtcblxuICAgICAgbGV0IHRhc2sgPSBidWlsZFRhc2tGcm9tRm9ybSgpO1xuICAgICAgbGV0IGNvdXJzZUluZGV4ID0gZGV0ZXJtaW5lQ291cnNlSW5kZXgoKTtcblxuICAgICAgLy9QdXNoZXMgdGFzayB0byB0aGUgY29ycmVjdCBjb3Vyc2UncyB0YXNrIGFycmF5LlxuICAgICAgY291cnNlQXJyYXlbY291cnNlSW5kZXhdLnRhc2tBcnJheS5wdXNoKHRhc2spO1xuXG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2VGcm9tQXJyYXkoKTtcblxuICAgICAgLy9cblxuICAgICAgLy9cblxuICAgICAgLy9kZWxldGVzIGV2ZXJ5dGhpbmcgaW4gdGhlIHRhc2tMaXN0IGFuZCBidWlsZHMgaXQgYWxsIGFnYWluXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tMaXN0XCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgdGFza0luZGV4ID0gMDtcbiAgICAgICAgdGFza0luZGV4IDwgY291cnNlQXJyYXlbY291cnNlSW5kZXhdLnRhc2tBcnJheS5sZW5ndGg7XG4gICAgICAgIHRhc2tJbmRleCsrXG4gICAgICApIHtcbiAgICAgICAgbGV0IHRhc2tFbGVtZW50cyA9IGRpc3BsYXlUYXNrKFxuICAgICAgICAgIGNvdXJzZUFycmF5W2NvdXJzZUluZGV4XS50YXNrQXJyYXlbdGFza0luZGV4XVxuICAgICAgICApO1xuICAgICAgICAvL2FkZHMgdGhlIHRhYiBmdW5jdGlvbmFsaXR5IHRvIHRoZSBuZXdseSBidWlsZCBhbmQgZGlzcGxheWVkIHRhc2suXG4gICAgICAgIC8vdGFza0VsZW1lbnRzIChmcm9tIGRpc3BsYXl0YXNrKSBpcyB0aGUgbmF2IGVsZW1lbnQuXG4gICAgICAgIGFkZFRhc2tMaXN0ZW5lcnModGFza0VsZW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgdG9nZ2xlQWRkVGFza0Zvcm0oKTtcbiAgICAgIHRvZ2dsZUFkZFRhc2tNb2RhbCgpO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tGb3JtXCIpLnJlc2V0KCk7XG4gICAgfVxuICB9KTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=