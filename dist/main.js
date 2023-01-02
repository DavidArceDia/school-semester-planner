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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  margin: 0;\n  display: flex;\n\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* NAV */\n\n#nav {\n  flex-grow: 1;\n  max-width: 35%;\n  min-height: 100vh;\n  background-color: #e5e9ec;\n  display: flex;\n  flex-direction: column;\n}\n\n#homeButton {\n  border: none;\n  background-color: transparent;\n  margin: 2rem;\n}\n\n#homeButton > img {\n  height: 4rem;\n}\n\n/* COURSE LIST*/\n\n#courseList {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.course {\n  font-size: 1rem;\n  width: 90%;\n  padding: 0.75rem;\n\n  border: none;\n  border-radius: 2rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n  background-color: #e6a715;\n  color: white;\n\n  transition: 0.25s;\n}\n\n.course:hover {\n  background-color: #efc86c;\n  color: #fff8e7;\n}\n\n/* ADD COURSE FORM */\n\n#addCoursePrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addCoursePrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 2rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #e6a715;\n  margin: 2rem 1rem;\n\n  transition: 0.25s;\n}\n\n#addCoursePrompt:hover {\n  color: #efc86c;\n}\n\n#addCoursePrompt:hover,\n#homeButton {\n  cursor: pointer;\n}\n\n#addCourseForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addCourseForm.active {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addCourseFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 90%;\n}\n\n#addCourseFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addCourseFormWrapper > .formRow > input {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addCourseFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #e6a715;\n}\n\n#addCourseSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addCourseButton {\n  font-size: 1.2rem;\n\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddCourseButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addCourseButton:hover,\n#cancelAddCourseButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addCourseButton:hover {\n  color: #e6a715;\n}\n\n/* CONTENT */\n\n#content {\n  max-width: 60%;\n\n  flex-grow: 3;\n  min-height: 50vh;\n\n  padding: 1.5rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#courseTitle {\n  font-size: 2rem;\n  font-weight: bold;\n  color: black;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#deleteCourseButton {\n  margin: 1rem;\n  padding: 0.25rem 1rem;\n  font-size: 1.2rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #ff8787;\n  color: white;\n\n  transition: 0.25s;\n}\n\n#deleteCourseButton:hover {\n  background-color: transparent;\n  color: #ff8787;\n}\n\n#addTaskPrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addTaskPrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 2rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #9a7aa0;\n  margin: 1.5rem 0rem;\n  padding: 0;\n\n  transition: 0.25s;\n}\n\n#addTaskPrompt:hover {\n  color: #d4c1d7;\n}\n\n/* ADD TASK MODAL */\n\n#addTaskModal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n\n  background-color: #e5e9ec;\n  border-radius: 1rem;\n\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n  width: 35rem;\n\n  transition: 0.25s ease-in-out;\n  pointer-events: none;\n}\n\n#addTaskModal.active {\n  transform: translate(-50%, -50%) scale(1);\n  pointer-events: all;\n}\n\n#addTaskForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addTaskForm.active {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addTaskFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 100%;\n}\n\n#addTaskFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addTaskFormWrapper > .formRow > input {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addTaskFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #9a7aa0;\n}\n\n#addTaskSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addTaskButton:hover,\n#cancelAddTaskButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addTaskButton:hover {\n  color: #9a7aa0;\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n\n  transition: 0.25s ease-in-out;\n}\n\n#overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n\n/* TASKS */\n\n#taskList {\n  width: 100%;\n}\n\n.task {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: bold;\n  gap: 0.75rem;\n}\n\n.taskCheckbox {\n  width: 1.5rem;\n  height: 1.5rem;\n\n  background-color: #23967f;\n  border: none;\n  border-radius: 50%;\n}\n\n.taskName {\n  width: 40%;\n}\n\n.taskDueDate {\n  width: 30%;\n}\n\n.taskWeight {\n  width: 5%;\n}\n\n.taskMark {\n  width: 5%;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  display: flex;\n  margin: 0;\n  display: flex;\n\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* NAV */\n\n#nav {\n  flex-grow: 1;\n  max-width: 35%;\n  min-height: 100vh;\n  background-color: #e5e9ec;\n  display: flex;\n  flex-direction: column;\n}\n\n#homeButton {\n  border: none;\n  background-color: transparent;\n  margin: 2rem;\n}\n\n#homeButton > img {\n  height: 4rem;\n}\n\n/* COURSE LIST*/\n\n#courseList {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.course {\n  font-size: 1rem;\n  width: 90%;\n  padding: 0.75rem;\n\n  border: none;\n  border-radius: 2rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n  background-color: #e6a715;\n  color: white;\n\n  transition: 0.25s;\n}\n\n.course:hover {\n  background-color: #efc86c;\n  color: #fff8e7;\n}\n\n/* ADD COURSE FORM */\n\n#addCoursePrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addCoursePrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 2rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #e6a715;\n  margin: 2rem 1rem;\n\n  transition: 0.25s;\n}\n\n#addCoursePrompt:hover {\n  color: #efc86c;\n}\n\n#addCoursePrompt:hover,\n#homeButton {\n  cursor: pointer;\n}\n\n#addCourseForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addCourseForm.active {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addCourseFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 90%;\n}\n\n#addCourseFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addCourseFormWrapper > .formRow > input {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addCourseFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #e6a715;\n}\n\n#addCourseSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addCourseButton {\n  font-size: 1.2rem;\n\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddCourseButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addCourseButton:hover,\n#cancelAddCourseButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addCourseButton:hover {\n  color: #e6a715;\n}\n\n/* CONTENT */\n\n#content {\n  max-width: 60%;\n\n  flex-grow: 3;\n  min-height: 50vh;\n\n  padding: 1.5rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#courseTitle {\n  font-size: 2rem;\n  font-weight: bold;\n  color: black;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#deleteCourseButton {\n  margin: 1rem;\n  padding: 0.25rem 1rem;\n  font-size: 1.2rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #ff8787;\n  color: white;\n\n  transition: 0.25s;\n}\n\n#deleteCourseButton:hover {\n  background-color: transparent;\n  color: #ff8787;\n}\n\n#addTaskPrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addTaskPrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 2rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #9a7aa0;\n  margin: 1.5rem 0rem;\n  padding: 0;\n\n  transition: 0.25s;\n}\n\n#addTaskPrompt:hover {\n  color: #d4c1d7;\n}\n\n/* ADD TASK MODAL */\n\n#addTaskModal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n\n  background-color: #e5e9ec;\n  border-radius: 1rem;\n\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n  width: 35rem;\n\n  transition: 0.25s ease-in-out;\n  pointer-events: none;\n}\n\n#addTaskModal.active {\n  transform: translate(-50%, -50%) scale(1);\n  pointer-events: all;\n}\n\n#addTaskForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addTaskForm.active {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addTaskFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 100%;\n}\n\n#addTaskFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addTaskFormWrapper > .formRow > input {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addTaskFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #9a7aa0;\n}\n\n#addTaskSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addTaskButton:hover,\n#cancelAddTaskButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addTaskButton:hover {\n  color: #9a7aa0;\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n\n  transition: 0.25s ease-in-out;\n}\n\n#overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n\n/* TASKS */\n\n#taskList {\n  width: 100%;\n}\n\n.task {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: bold;\n  gap: 0.75rem;\n}\n\n.taskCheckbox {\n  width: 1.5rem;\n  height: 1.5rem;\n\n  background-color: #23967f;\n  border: none;\n  border-radius: 50%;\n}\n\n.taskName {\n  width: 40%;\n}\n\n.taskDueDate {\n  width: 30%;\n}\n\n.taskWeight {\n  width: 5%;\n}\n\n.taskMark {\n  width: 5%;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "buildNewTab": () => (/* binding */ buildNewTab),
/* harmony export */   "cancelAddCoursePromptOnClick": () => (/* binding */ cancelAddCoursePromptOnClick),
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
/* harmony export */   "buildCourseFromForm": () => (/* binding */ buildCourseFromForm)
/* harmony export */ });
/* harmony import */ var _taskAddition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskAddition */ "./src/taskAddition.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");




const Course = (courseName, courseCredit) => {
  const getCourseName = () => courseName;
  const getCourseCredit = () => courseCredit;
  const taskArray = [];
  const getTaskArray = () => taskArray;
  return { getCourseName, getCourseCredit, taskArray };
};

//Building a course from form
const buildCourseFromForm = () => {
  let courseName = document.getElementById("courseName").value;
  let courseCredit = document.getElementById("courseCredit").value;
  let course = Course(courseName, courseCredit);

  return course;
};

const contentDiv = document.getElementById("content");

const changeTabs = (e) => {
  let target = e.target;

  (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.buildNewTab)(target);

  //Add Event listener to the Task Button
  (0,_taskAddition__WEBPACK_IMPORTED_MODULE_0__.addTaskPromptOnClick)();

  //Build all the courses stored in localstorage.
  (0,_taskAddition__WEBPACK_IMPORTED_MODULE_0__.displayLocallyStoredTasks)(courseTitle.innerHTML);
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

//Displaying a new course. Course tab event listener is added here from course.js
const displayCourse = (course) => {
  const courseList = document.getElementById("courseList");
  const courseElement = document.createElement("button");
  courseElement.classList.add("course");
  courseElement.innerHTML = `${course.getCourseName()}`;
  courseList.appendChild(courseElement);

  //From course.js, listen for click and run functions that display the right page.
  (0,_course_js__WEBPACK_IMPORTED_MODULE_0__.addCourseTabListener)(courseElement);
};

const updateCoursesLocalStorage = () => {
  _index_js__WEBPACK_IMPORTED_MODULE_2__.courseArray.forEach((course, index) => {
    localStorage.setItem(`course${index}Name`, `${course.getCourseName()}`);
    localStorage.setItem(`course${index}Credit`, `${course.getCourseCredit()}`);
  });
};

//Adding a course
const addCourse = () => {
  const addCourseButton = document.getElementById("addCourseButton");
  addCourseButton.addEventListener("click", (event) => {
    event.preventDefault();

    let course = (0,_course_js__WEBPACK_IMPORTED_MODULE_0__.buildCourseFromForm)();
    _index_js__WEBPACK_IMPORTED_MODULE_2__.courseArray.push(course);
    displayCourse(course);

    //Iterates through courseArray and updates localstorage.
    updateCoursesLocalStorage();

    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.toggleAddCourseForm)();
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.toggleAddCoursePrompt)();

    document.getElementById("addCourseForm").reset();
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
/* harmony export */   "courseArray": () => (/* binding */ courseArray)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homeButton_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeButton.jpg */ "./src/homeButton.jpg");
/* harmony import */ var _courseAddition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courseAddition.js */ "./src/courseAddition.js");
/* harmony import */ var _taskAddition_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskAddition.js */ "./src/taskAddition.js");
/* harmony import */ var _course_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course.js */ "./src/course.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");









const homeButton = new Image();
homeButton.src = _homeButton_jpg__WEBPACK_IMPORTED_MODULE_1__;

document.getElementById("homeButton").appendChild(homeButton);

const courseArray = [];

//courseAddition
(0,_DOM_js__WEBPACK_IMPORTED_MODULE_5__.addCoursePromptOnClick)();
(0,_DOM_js__WEBPACK_IMPORTED_MODULE_5__.cancelAddCoursePromptOnClick)();
(0,_courseAddition_js__WEBPACK_IMPORTED_MODULE_2__.displayLocallyStoredCourses)();
(0,_courseAddition_js__WEBPACK_IMPORTED_MODULE_2__.addCourse)();

(0,_taskAddition_js__WEBPACK_IMPORTED_MODULE_3__.cancelAddTask)();
(0,_taskAddition_js__WEBPACK_IMPORTED_MODULE_3__.addTask)();


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




const Task = (taskName, taskDueDate, taskWeight, taskMark) => {
  const getTaskName = () => taskName;
  const getTaskDueDate = () => taskDueDate;
  const getTaskWeight = () => taskWeight;
  const getTaskMark = () => taskMark;

  return { getTaskName, getTaskDueDate, getTaskWeight, getTaskMark };
};

/*
Your ‘todos’ are going to be objects that you’ll want to 
dynamically create, which means either using factories or 
constructors/classes to generate them.

### Task Properties

- Name
- Due Date
- Weight
- Mark

- Priority
- Edit, Delete



*/


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
/* harmony export */   "cancelAddTask": () => (/* binding */ cancelAddTask),
/* harmony export */   "displayLocallyStoredTasks": () => (/* binding */ displayLocallyStoredTasks)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




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
  });
};

const buildTask = () => {
  let taskName = document.getElementById("taskName").value;
  let taskDueDate = document.getElementById("taskDueDate").value;
  let taskWeight = document.getElementById("taskWeight").value;
  let taskMark = document.getElementById("taskMark").value;
  let task = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(taskName, taskDueDate, taskWeight, taskMark);

  return task;
};

const determineCourse = () => {
  for (let courseIndex = 0; courseIndex <= _index_js__WEBPACK_IMPORTED_MODULE_1__.courseArray.length; courseIndex++) {
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

const displayLocallyStoredTasks = (courseTitle) => {
  //finding the course's index
  let courseIndex = 0;
  for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_1__.courseArray.length; i++) {
    if (_index_js__WEBPACK_IMPORTED_MODULE_1__.courseArray[i].getCourseName() == courseTitle) {
      courseIndex = i;
    }
  }

  for (let i = 0; i < 50; i++) {
    while (localStorage.getItem(`course${courseIndex}Task${i}Name`) != null) {
      // Build locally stored courses on the DOM
      const taskList = document.getElementById("taskList");
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");

      const taskCheckbox = document.createElement("button");
      taskCheckbox.classList.add("taskCheckbox");
      taskDiv.append(taskCheckbox);

      const taskName = document.createElement("p");
      taskName.classList.add("taskName");
      taskName.innerHTML = `${localStorage.getItem(
        `course${courseIndex}Task${i}Name`
      )}`;
      taskDiv.append(taskName);

      const taskDueDate = document.createElement("p");
      taskDueDate.classList.add("taskDueDate");
      taskDueDate.innerHTML = `${localStorage.getItem(
        `course${courseIndex}Task${i}DueDate`
      )}`;
      taskDiv.append(taskDueDate);

      const taskWeight = document.createElement("p");
      taskWeight.classList.add("taskWeight");
      taskWeight.innerHTML = `${localStorage.getItem(
        `course${courseIndex}Task${i}Weight`
      )}%`;
      taskDiv.append(taskWeight);

      const taskMark = document.createElement("p");
      taskMark.classList.add("taskMark");
      taskMark.innerHTML = `${localStorage.getItem(
        `course${courseIndex}Task${i}Mark`
      )}%`;
      taskDiv.append(taskMark);

      taskList.append(taskDiv);

      // //Add locally stored tasks to the array
      let taskN = localStorage.getItem(`course${courseIndex}Task${i}Name`);
      let taskD = localStorage.getItem(`course${courseIndex}Task${i}DueDate`);
      let taskW = localStorage.getItem(`course${courseIndex}Task${i}Weight`);
      let taskM = localStorage.getItem(`course${courseIndex}Task${i}Mark`);
      let task = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(taskN, taskD, taskW, taskM);
      _index_js__WEBPACK_IMPORTED_MODULE_1__.courseArray[courseIndex].taskArray.push(task);

      i++;
    }
  }
};

const displayTask = (task) => {
  const taskList = document.getElementById("taskList");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskCheckbox = document.createElement("button");
  taskCheckbox.classList.add("taskCheckbox");
  taskDiv.append(taskCheckbox);

  const taskName = document.createElement("p");
  taskName.classList.add("taskName");
  taskName.innerHTML = `${task.getTaskName()}`;
  taskDiv.append(taskName);

  const taskDueDate = document.createElement("p");
  taskDueDate.classList.add("taskDueDate");
  taskDueDate.innerHTML = `${task.getTaskDueDate()}`;
  taskDiv.append(taskDueDate);

  const taskWeight = document.createElement("p");
  taskWeight.classList.add("taskWeight");
  taskWeight.innerHTML = `${task.getTaskWeight()}%`;
  taskDiv.append(taskWeight);

  const taskMark = document.createElement("p");
  taskMark.classList.add("taskMark");
  taskMark.innerHTML = `${task.getTaskMark()}%`;
  taskDiv.append(taskMark);

  taskList.append(taskDiv);
};

const addTask = () => {
  const addTaskButton = document.getElementById("addTaskButton");

  addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();

    let task = buildTask();

    let courseIndex = determineCourse();

    //Pushes task to the correct course's task array.
    _index_js__WEBPACK_IMPORTED_MODULE_1__.courseArray[courseIndex].taskArray.push(task);
    //Now add to local storage:
    _index_js__WEBPACK_IMPORTED_MODULE_1__.courseArray[courseIndex].taskArray.forEach((task, index) => {
      localStorage.setItem(
        `course${courseIndex}Task${index}Name`,
        `${task.getTaskName()}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${index}DueDate`,
        `${task.getTaskDueDate()}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${index}Weight`,
        `${task.getTaskWeight()}`
      );
      localStorage.setItem(
        `course${courseIndex}Task${index}Mark`,
        `${task.getTaskMark()}`
      );
    });

    displayTask(task);

    // //First clear the taskList, then display all the tasks.
    // document.getElementById("taskList").innerHTML = "";

    // for (
    //   let taskIndex = 0;
    //   taskIndex < courseArray[courseIndex].taskArray.length;
    //   taskIndex++
    // ) {
    //   displayTask(courseIndex, taskIndex);
    // }

    toggleAddTaskForm();
    toggleAddTaskModal();

    document.getElementById("addTaskForm").reset();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFdBQVcsVUFBVSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxjQUFjLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0s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O1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vc3JjL2NvdXJzZS5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL3NyYy9jb3Vyc2VBZGRpdGlvbi5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vc3JjL3Rhc2tBZGRpdGlvbi5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogTkFWICovXFxuXFxuI25hdiB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtYXgtd2lkdGg6IDM1JTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTllYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jaG9tZUJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogMnJlbTtcXG59XFxuXFxuI2hvbWVCdXR0b24gPiBpbWcge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4vKiBDT1VSU0UgTElTVCovXFxuXFxuI2NvdXJzZUxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5jb3Vyc2Uge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZhNzE1O1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbi5jb3Vyc2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYzg2YztcXG4gIGNvbG9yOiAjZmZmOGU3O1xcbn1cXG5cXG4vKiBBREQgQ09VUlNFIEZPUk0gKi9cXG5cXG4jYWRkQ291cnNlUHJvbXB0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZENvdXJzZVByb21wdC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNlNmE3MTU7XFxuICBtYXJnaW46IDJyZW0gMXJlbTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jYWRkQ291cnNlUHJvbXB0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZWZjODZjO1xcbn1cXG5cXG4jYWRkQ291cnNlUHJvbXB0OmhvdmVyLFxcbiNob21lQnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZENvdXJzZUZvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybS5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtV3JhcHBlciB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAxcmVtLCAwcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuI2FkZENvdXJzZUZvcm1XcmFwcGVyID4gLmZvcm1Sb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuI2FkZENvdXJzZUZvcm1XcmFwcGVyID4gLmZvcm1Sb3cgPiBpbnB1dCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC4zNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLXdpZHRoOiA1cmVtO1xcbiAgZmxleDogNDtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyA+IGxhYmVsIHtcXG4gIG1pbi13aWR0aDogMy41cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6ICNlNmE3MTU7XFxufVxcblxcbiNhZGRDb3Vyc2VTdWJtaXRGb3JtUm93IHtcXG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNhZGRDb3Vyc2VCdXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNjYW5jZWxBZGRDb3Vyc2VCdXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNhZGRDb3Vyc2VCdXR0b246aG92ZXIsXFxuI2NhbmNlbEFkZENvdXJzZUJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbn1cXG5cXG4jYWRkQ291cnNlQnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZTZhNzE1O1xcbn1cXG5cXG4vKiBDT05URU5UICovXFxuXFxuI2NvbnRlbnQge1xcbiAgbWF4LXdpZHRoOiA2MCU7XFxuXFxuICBmbGV4LWdyb3c6IDM7XFxuICBtaW4taGVpZ2h0OiA1MHZoO1xcblxcbiAgcGFkZGluZzogMS41cmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI2NvdXJzZVRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2RlbGV0ZUNvdXJzZUJ1dHRvbiB7XFxuICBtYXJnaW46IDFyZW07XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjg3ODc7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2RlbGV0ZUNvdXJzZUJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZmY4Nzg3O1xcbn1cXG5cXG4jYWRkVGFza1Byb21wdCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNhZGRUYXNrUHJvbXB0LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzlhN2FhMDtcXG4gIG1hcmdpbjogMS41cmVtIDByZW07XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNhZGRUYXNrUHJvbXB0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZDRjMWQ3O1xcbn1cXG5cXG4vKiBBREQgVEFTSyBNT0RBTCAqL1xcblxcbiNhZGRUYXNrTW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU5ZWM7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIHdpZHRoOiAzNXJlbTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNhZGRUYXNrTW9kYWwuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuI2FkZFRhc2tGb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2tGb3JtLmFjdGl2ZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm1XcmFwcGVyIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDFyZW0sIDByZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2FkZFRhc2tGb3JtV3JhcHBlciA+IC5mb3JtUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcblxcbiNhZGRUYXNrRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyA+IGlucHV0IHtcXG4gIGFsbDogdW5zZXQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjM1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDVyZW07XFxuICBmbGV4OiA0O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiNhZGRUYXNrRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyA+IGxhYmVsIHtcXG4gIG1pbi13aWR0aDogMy41cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6ICM5YTdhYTA7XFxufVxcblxcbiNhZGRUYXNrU3VibWl0Rm9ybVJvdyB7XFxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2NhbmNlbEFkZFRhc2tCdXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyLFxcbiNjYW5jZWxBZGRUYXNrQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjOWE3YWEwO1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI292ZXJsYXkuYWN0aXZlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBUQVNLUyAqL1xcblxcbiN0YXNrTGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4udGFza0NoZWNrYm94IHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk2N2Y7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50YXNrTmFtZSB7XFxuICB3aWR0aDogNDAlO1xcbn1cXG5cXG4udGFza0R1ZURhdGUge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLnRhc2tXZWlnaHQge1xcbiAgd2lkdGg6IDUlO1xcbn1cXG5cXG4udGFza01hcmsge1xcbiAgd2lkdGg6IDUlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhOztFQUViLHlDQUF5QztBQUMzQzs7QUFFQSxRQUFROztBQUVSO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNF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RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLG9CQUFvQjs7RUFFcEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQSxVQUFVOztBQUVWO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7O0VBRWQseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBOQVYgKi9cXG5cXG4jbmF2IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogMzUlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlOWVjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNob21lQnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAycmVtO1xcbn1cXG5cXG4jaG9tZUJ1dHRvbiA+IGltZyB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi8qIENPVVJTRSBMSVNUKi9cXG5cXG4jY291cnNlTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvdXJzZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmE3MTU7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLmNvdXJzZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZjODZjO1xcbiAgY29sb3I6ICNmZmY4ZTc7XFxufVxcblxcbi8qIEFERCBDT1VSU0UgRk9STSAqL1xcblxcbiNhZGRDb3Vyc2VQcm9tcHQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkQ291cnNlUHJvbXB0LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2U2YTcxNTtcXG4gIG1hcmdpbjogMnJlbSAxcmVtO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNhZGRDb3Vyc2VQcm9tcHQ6aG92ZXIge1xcbiAgY29sb3I6ICNlZmM4NmM7XFxufVxcblxcbiNhZGRDb3Vyc2VQcm9tcHQ6aG92ZXIsXFxuI2hvbWVCdXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuI2FkZENvdXJzZUZvcm1XcmFwcGVyIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDFyZW0sIDByZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyA+IGlucHV0IHtcXG4gIGFsbDogdW5zZXQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjM1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDVyZW07XFxuICBmbGV4OiA0O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gbGFiZWwge1xcbiAgbWluLXdpZHRoOiAzLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogI2U2YTcxNTtcXG59XFxuXFxuI2FkZENvdXJzZVN1Ym1pdEZvcm1Sb3cge1xcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2FkZENvdXJzZUJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2NhbmNlbEFkZENvdXJzZUJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZENvdXJzZUJ1dHRvbjpob3ZlcixcXG4jY2FuY2VsQWRkQ291cnNlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbiNhZGRDb3Vyc2VCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNlNmE3MTU7XFxufVxcblxcbi8qIENPTlRFTlQgKi9cXG5cXG4jY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDYwJTtcXG5cXG4gIGZsZXgtZ3JvdzogMztcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxuXFxuICBwYWRkaW5nOiAxLjVyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY291cnNlVGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jZGVsZXRlQ291cnNlQnV0dG9uIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODc4NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jZGVsZXRlQ291cnNlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmZjg3ODc7XFxufVxcblxcbiNhZGRUYXNrUHJvbXB0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2tQcm9tcHQuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjOWE3YWEwO1xcbiAgbWFyZ2luOiAxLjVyZW0gMHJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZFRhc2tQcm9tcHQ6aG92ZXIge1xcbiAgY29sb3I6ICNkNGMxZDc7XFxufVxcblxcbi8qIEFERCBUQVNLIE1PREFMICovXFxuXFxuI2FkZFRhc2tNb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTllYztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgd2lkdGg6IDM1cmVtO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2tNb2RhbC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm0uYWN0aXZlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbiNhZGRUYXNrRm9ybVdyYXBwZXIge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMXJlbSwgMHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm1XcmFwcGVyID4gLmZvcm1Sb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuI2FkZFRhc2tGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gaW5wdXQge1xcbiAgYWxsOiB1bnNldDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMzVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNXJlbTtcXG4gIGZsZXg6IDQ7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI2FkZFRhc2tGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gbGFiZWwge1xcbiAgbWluLXdpZHRoOiAzLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogIzlhN2FhMDtcXG59XFxuXFxuI2FkZFRhc2tTdWJtaXRGb3JtUm93IHtcXG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jY2FuY2VsQWRkVGFza0J1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZFRhc2tCdXR0b246aG92ZXIsXFxuI2NhbmNlbEFkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICM5YTdhYTA7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIFRBU0tTICovXFxuXFxuI3Rhc2tMaXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBnYXA6IDAuNzVyZW07XFxufVxcblxcbi50YXNrQ2hlY2tib3gge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzOTY3ZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2tOYW1lIHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbi50YXNrRHVlRGF0ZSB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4udGFza1dlaWdodCB7XFxuICB3aWR0aDogNSU7XFxufVxcblxcbi50YXNrTWFyayB7XFxuICB3aWR0aDogNSU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7XG4gIGFkZENvdXJzZVByb21wdE9uQ2xpY2ssXG4gIGNhbmNlbEFkZENvdXJzZVByb21wdE9uQ2xpY2ssXG4gIGJ1aWxkTmV3VGFiLFxuICBidWlsZExvY2FsbHlTdG9yZWRDb3Vyc2VzLFxuICB0b2dnbGVBZGRDb3Vyc2VGb3JtLFxuICB0b2dnbGVBZGRDb3Vyc2VQcm9tcHQsXG59O1xuXG4vLyBDb3Vyc2UgQWRkaXRpb24gLy9cblxuY29uc3QgdG9nZ2xlQWRkQ291cnNlRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgYWRkQ291cnNlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQ291cnNlRm9ybVwiKTtcbiAgYWRkQ291cnNlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufTtcbmNvbnN0IHRvZ2dsZUFkZENvdXJzZVByb21wdCA9ICgpID0+IHtcbiAgY29uc3QgYWRkQ291cnNlUHJvbXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRDb3Vyc2VQcm9tcHRcIik7XG4gIGFkZENvdXJzZVByb21wdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufTtcblxuLy9hZGRDb3Vyc2VQcm9tcHQgZXZlbnQgbGlzdGVuZXJcbmNvbnN0IGFkZENvdXJzZVByb21wdE9uQ2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZENvdXJzZVByb21wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQ291cnNlUHJvbXB0XCIpO1xuICBhZGRDb3Vyc2VQcm9tcHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2dnbGVBZGRDb3Vyc2VGb3JtKCk7XG4gICAgdG9nZ2xlQWRkQ291cnNlUHJvbXB0KCk7XG4gIH0pO1xufTtcblxuLy9DYW5jZWwgYWRkaW5nIGEgY291cnNlXG5jb25zdCBjYW5jZWxBZGRDb3Vyc2VQcm9tcHRPbkNsaWNrID0gKCkgPT4ge1xuICBjb25zdCBjYW5jZWxBZGRDb3Vyc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImNhbmNlbEFkZENvdXJzZUJ1dHRvblwiXG4gICk7XG5cbiAgY2FuY2VsQWRkQ291cnNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlQWRkQ291cnNlRm9ybSgpO1xuICAgIHRvZ2dsZUFkZENvdXJzZVByb21wdCgpO1xuICB9KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZENvdXJzZUZvcm1cIikucmVzZXQoKTtcbn07XG5cbi8vQnVpbGQgbG9jYWxseSBzdG9yZWQgY291cnNlcyBvbiB0aGUgRE9NXG5jb25zdCBidWlsZExvY2FsbHlTdG9yZWRDb3Vyc2VzID0gKGNvdXJzZUluZGV4KSA9PiB7XG4gIGNvbnN0IGNvdXJzZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZUxpc3RcIik7XG5cbiAgY29uc3QgY291cnNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvdXJzZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvdXJzZVwiKTtcbiAgY291cnNlRWxlbWVudC5pbm5lckhUTUwgPSBgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1OYW1lYFxuICApfWA7XG4gIGNvdXJzZUxpc3QuYXBwZW5kQ2hpbGQoY291cnNlRWxlbWVudCk7XG5cbiAgcmV0dXJuIGNvdXJzZUVsZW1lbnQ7XG59O1xuXG4vL0Rpc3BsYXlzIHRpdGxlLCBhZGRUYXNrUHJvbXB0LCBhbmQgdGFza0xpc3QgZGl2IGZvciBjb3Vyc2UgdGFic1xuY29uc3QgYnVpbGROZXdUYWIgPSAodGFyZ2V0KSA9PiB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy9UaXRsZVxuICBjb25zdCBjb3Vyc2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoXCIpO1xuICBjb3Vyc2VUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvdXJzZVRpdGxlXCIpO1xuICBjb3Vyc2VUaXRsZS5pbm5lckhUTUwgPSB0YXJnZXQuaW5uZXJIVE1MO1xuICBjb250ZW50RGl2LmFwcGVuZChjb3Vyc2VUaXRsZSk7XG5cbiAgLy9EZWxldGVDb3Vyc2VCdXR0b25cbiAgY29uc3QgZGVsZXRlQ291cnNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQ291cnNlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlQ291cnNlQnV0dG9uXCIpO1xuICBkZWxldGVDb3Vyc2VCdXR0b24uaW5uZXJIVE1MID0gXCJEZWxldGVcIjtcbiAgY291cnNlVGl0bGUuYXBwZW5kKGRlbGV0ZUNvdXJzZUJ1dHRvbik7XG5cbiAgLy9BZGQgVGFzayBCdXR0b25cbiAgY29uc3QgYWRkVGFza1Byb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tQcm9tcHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRUYXNrUHJvbXB0XCIpO1xuICBhZGRUYXNrUHJvbXB0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGFkZFRhc2tQcm9tcHQuaW5uZXJIVE1MID0gXCIrIEFkZCBUYXNrXCI7XG4gIGNvbnRlbnREaXYuYXBwZW5kKGFkZFRhc2tQcm9tcHQpO1xuXG4gIC8vVGFza2xpc3RcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tMaXN0XCIpO1xuICBjb250ZW50RGl2LmFwcGVuZCh0YXNrTGlzdCk7XG59O1xuIiwiaW1wb3J0IHtcbiAgYWRkVGFza1Byb21wdE9uQ2xpY2ssXG4gIGRpc3BsYXlMb2NhbGx5U3RvcmVkVGFza3MsXG59IGZyb20gXCIuL3Rhc2tBZGRpdGlvblwiO1xuaW1wb3J0IHsgYnVpbGROZXdUYWIgfSBmcm9tIFwiLi9ET00uanNcIjtcbmV4cG9ydCB7IENvdXJzZSwgYWRkQ291cnNlVGFiTGlzdGVuZXIsIGJ1aWxkQ291cnNlRnJvbUZvcm0gfTtcblxuY29uc3QgQ291cnNlID0gKGNvdXJzZU5hbWUsIGNvdXJzZUNyZWRpdCkgPT4ge1xuICBjb25zdCBnZXRDb3Vyc2VOYW1lID0gKCkgPT4gY291cnNlTmFtZTtcbiAgY29uc3QgZ2V0Q291cnNlQ3JlZGl0ID0gKCkgPT4gY291cnNlQ3JlZGl0O1xuICBjb25zdCB0YXNrQXJyYXkgPSBbXTtcbiAgY29uc3QgZ2V0VGFza0FycmF5ID0gKCkgPT4gdGFza0FycmF5O1xuICByZXR1cm4geyBnZXRDb3Vyc2VOYW1lLCBnZXRDb3Vyc2VDcmVkaXQsIHRhc2tBcnJheSB9O1xufTtcblxuLy9CdWlsZGluZyBhIGNvdXJzZSBmcm9tIGZvcm1cbmNvbnN0IGJ1aWxkQ291cnNlRnJvbUZvcm0gPSAoKSA9PiB7XG4gIGxldCBjb3Vyc2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VOYW1lXCIpLnZhbHVlO1xuICBsZXQgY291cnNlQ3JlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VDcmVkaXRcIikudmFsdWU7XG4gIGxldCBjb3Vyc2UgPSBDb3Vyc2UoY291cnNlTmFtZSwgY291cnNlQ3JlZGl0KTtcblxuICByZXR1cm4gY291cnNlO1xufTtcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29uc3QgY2hhbmdlVGFicyA9IChlKSA9PiB7XG4gIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcblxuICBidWlsZE5ld1RhYih0YXJnZXQpO1xuXG4gIC8vQWRkIEV2ZW50IGxpc3RlbmVyIHRvIHRoZSBUYXNrIEJ1dHRvblxuICBhZGRUYXNrUHJvbXB0T25DbGljaygpO1xuXG4gIC8vQnVpbGQgYWxsIHRoZSBjb3Vyc2VzIHN0b3JlZCBpbiBsb2NhbHN0b3JhZ2UuXG4gIGRpc3BsYXlMb2NhbGx5U3RvcmVkVGFza3MoY291cnNlVGl0bGUuaW5uZXJIVE1MKTtcbn07XG5cbmNvbnN0IGFkZENvdXJzZVRhYkxpc3RlbmVyID0gKGNvdXJzZSkgPT4ge1xuICBpZiAoY291cnNlICE9IHVuZGVmaW5lZCkge1xuICAgIGNvdXJzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNoYW5nZVRhYnMoZSk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBDb3Vyc2UsIGJ1aWxkQ291cnNlRnJvbUZvcm0sIGFkZENvdXJzZVRhYkxpc3RlbmVyIH0gZnJvbSBcIi4vY291cnNlLmpzXCI7XG5pbXBvcnQge1xuICB0b2dnbGVBZGRDb3Vyc2VGb3JtLFxuICB0b2dnbGVBZGRDb3Vyc2VQcm9tcHQsXG4gIGJ1aWxkTG9jYWxseVN0b3JlZENvdXJzZXMsXG59IGZyb20gXCIuL0RPTS5qc1wiO1xuaW1wb3J0IHsgY291cnNlQXJyYXkgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuZXhwb3J0IHsgZGlzcGxheUxvY2FsbHlTdG9yZWRDb3Vyc2VzLCBhZGRDb3Vyc2UgfTtcblxuY29uc3QgZGlzcGxheUxvY2FsbHlTdG9yZWRDb3Vyc2VzID0gKCkgPT4ge1xuICBmb3IgKGxldCBjb3Vyc2VJbmRleCA9IDA7IGNvdXJzZUluZGV4IDwgNTA7IGNvdXJzZUluZGV4KyspIHtcbiAgICB3aGlsZSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9TmFtZWApICE9IG51bGwpIHtcbiAgICAgIGxldCBjb3Vyc2VFbGVtZW50ID0gYnVpbGRMb2NhbGx5U3RvcmVkQ291cnNlcyhjb3Vyc2VJbmRleCk7XG5cbiAgICAgIC8vQWRkIGxvY2FsbHkgc3RvcmVkIGNvdXJzZXMgdG8gdGhlIGFycmF5XG4gICAgICBsZXQgY291cnNlTmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fU5hbWVgKTtcbiAgICAgIGxldCBjb3Vyc2VDcmVkaXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1DcmVkaXRgKTtcbiAgICAgIGxldCBjb3Vyc2UgPSBDb3Vyc2UoY291cnNlTmFtZSwgY291cnNlQ3JlZGl0KTtcbiAgICAgIGNvdXJzZUFycmF5LnB1c2goY291cnNlKTtcblxuICAgICAgLy9Gcm9tIGNvdXJzZS5qcywgbGlzdGVuIGZvciBjbGljayBhbmQgcnVuIGZ1bmN0aW9ucyB0aGF0IGRpc3BsYXkgdGhlIHJpZ2h0IHBhZ2UuXG4gICAgICBhZGRDb3Vyc2VUYWJMaXN0ZW5lcihjb3Vyc2VFbGVtZW50KTtcbiAgICAgIGNvdXJzZUluZGV4Kys7XG4gICAgfVxuICB9XG59O1xuXG4vL0Rpc3BsYXlpbmcgYSBuZXcgY291cnNlLiBDb3Vyc2UgdGFiIGV2ZW50IGxpc3RlbmVyIGlzIGFkZGVkIGhlcmUgZnJvbSBjb3Vyc2UuanNcbmNvbnN0IGRpc3BsYXlDb3Vyc2UgPSAoY291cnNlKSA9PiB7XG4gIGNvbnN0IGNvdXJzZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZUxpc3RcIik7XG4gIGNvbnN0IGNvdXJzZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb3Vyc2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VcIik7XG4gIGNvdXJzZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7Y291cnNlLmdldENvdXJzZU5hbWUoKX1gO1xuICBjb3Vyc2VMaXN0LmFwcGVuZENoaWxkKGNvdXJzZUVsZW1lbnQpO1xuXG4gIC8vRnJvbSBjb3Vyc2UuanMsIGxpc3RlbiBmb3IgY2xpY2sgYW5kIHJ1biBmdW5jdGlvbnMgdGhhdCBkaXNwbGF5IHRoZSByaWdodCBwYWdlLlxuICBhZGRDb3Vyc2VUYWJMaXN0ZW5lcihjb3Vyc2VFbGVtZW50KTtcbn07XG5cbmNvbnN0IHVwZGF0ZUNvdXJzZXNMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvdXJzZUFycmF5LmZvckVhY2goKGNvdXJzZSwgaW5kZXgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgY291cnNlJHtpbmRleH1OYW1lYCwgYCR7Y291cnNlLmdldENvdXJzZU5hbWUoKX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgY291cnNlJHtpbmRleH1DcmVkaXRgLCBgJHtjb3Vyc2UuZ2V0Q291cnNlQ3JlZGl0KCl9YCk7XG4gIH0pO1xufTtcblxuLy9BZGRpbmcgYSBjb3Vyc2VcbmNvbnN0IGFkZENvdXJzZSA9ICgpID0+IHtcbiAgY29uc3QgYWRkQ291cnNlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRDb3Vyc2VCdXR0b25cIik7XG4gIGFkZENvdXJzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBjb3Vyc2UgPSBidWlsZENvdXJzZUZyb21Gb3JtKCk7XG4gICAgY291cnNlQXJyYXkucHVzaChjb3Vyc2UpO1xuICAgIGRpc3BsYXlDb3Vyc2UoY291cnNlKTtcblxuICAgIC8vSXRlcmF0ZXMgdGhyb3VnaCBjb3Vyc2VBcnJheSBhbmQgdXBkYXRlcyBsb2NhbHN0b3JhZ2UuXG4gICAgdXBkYXRlQ291cnNlc0xvY2FsU3RvcmFnZSgpO1xuXG4gICAgdG9nZ2xlQWRkQ291cnNlRm9ybSgpO1xuICAgIHRvZ2dsZUFkZENvdXJzZVByb21wdCgpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRDb3Vyc2VGb3JtXCIpLnJlc2V0KCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgaG9tZUJ1dHRvbkltYWdlIGZyb20gXCIuL2hvbWVCdXR0b24uanBnXCI7XG5cbmltcG9ydCB7IGRpc3BsYXlMb2NhbGx5U3RvcmVkQ291cnNlcywgYWRkQ291cnNlIH0gZnJvbSBcIi4vY291cnNlQWRkaXRpb24uanNcIjtcbmltcG9ydCB7IGNhbmNlbEFkZFRhc2ssIGFkZFRhc2sgfSBmcm9tIFwiLi90YXNrQWRkaXRpb24uanNcIjtcbmltcG9ydCB7fSBmcm9tIFwiLi9jb3Vyc2UuanNcIjtcbmltcG9ydCB7IGFkZENvdXJzZVByb21wdE9uQ2xpY2ssIGNhbmNlbEFkZENvdXJzZVByb21wdE9uQ2xpY2sgfSBmcm9tIFwiLi9ET00uanNcIjtcbmV4cG9ydCB7IGNvdXJzZUFycmF5IH07XG5cbmNvbnN0IGhvbWVCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbmhvbWVCdXR0b24uc3JjID0gaG9tZUJ1dHRvbkltYWdlO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVCdXR0b25cIikuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG5cbmNvbnN0IGNvdXJzZUFycmF5ID0gW107XG5cbi8vY291cnNlQWRkaXRpb25cbmFkZENvdXJzZVByb21wdE9uQ2xpY2soKTtcbmNhbmNlbEFkZENvdXJzZVByb21wdE9uQ2xpY2soKTtcbmRpc3BsYXlMb2NhbGx5U3RvcmVkQ291cnNlcygpO1xuYWRkQ291cnNlKCk7XG5cbmNhbmNlbEFkZFRhc2soKTtcbmFkZFRhc2soKTtcbiIsImltcG9ydCB7IGNvdXJzZUFycmF5IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IHsgVGFzayB9O1xuXG5jb25zdCBUYXNrID0gKHRhc2tOYW1lLCB0YXNrRHVlRGF0ZSwgdGFza1dlaWdodCwgdGFza01hcmspID0+IHtcbiAgY29uc3QgZ2V0VGFza05hbWUgPSAoKSA9PiB0YXNrTmFtZTtcbiAgY29uc3QgZ2V0VGFza0R1ZURhdGUgPSAoKSA9PiB0YXNrRHVlRGF0ZTtcbiAgY29uc3QgZ2V0VGFza1dlaWdodCA9ICgpID0+IHRhc2tXZWlnaHQ7XG4gIGNvbnN0IGdldFRhc2tNYXJrID0gKCkgPT4gdGFza01hcms7XG5cbiAgcmV0dXJuIHsgZ2V0VGFza05hbWUsIGdldFRhc2tEdWVEYXRlLCBnZXRUYXNrV2VpZ2h0LCBnZXRUYXNrTWFyayB9O1xufTtcblxuLypcbllvdXIg4oCYdG9kb3PigJkgYXJlIGdvaW5nIHRvIGJlIG9iamVjdHMgdGhhdCB5b3XigJlsbCB3YW50IHRvIFxuZHluYW1pY2FsbHkgY3JlYXRlLCB3aGljaCBtZWFucyBlaXRoZXIgdXNpbmcgZmFjdG9yaWVzIG9yIFxuY29uc3RydWN0b3JzL2NsYXNzZXMgdG8gZ2VuZXJhdGUgdGhlbS5cblxuIyMjIFRhc2sgUHJvcGVydGllc1xuXG4tIE5hbWVcbi0gRHVlIERhdGVcbi0gV2VpZ2h0XG4tIE1hcmtcblxuLSBQcmlvcml0eVxuLSBFZGl0LCBEZWxldGVcblxuXG5cbiovXG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgY291cnNlQXJyYXkgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuZXhwb3J0IHtcbiAgY2FuY2VsQWRkVGFzayxcbiAgYWRkVGFzayxcbiAgYWRkVGFza1Byb21wdE9uQ2xpY2ssXG4gIGRpc3BsYXlMb2NhbGx5U3RvcmVkVGFza3MsXG59O1xuXG5jb25zdCB0b2dnbGVBZGRUYXNrRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tGb3JtXCIpO1xuICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufTtcblxuY29uc3QgdG9nZ2xlQWRkVGFza01vZGFsID0gKCkgPT4ge1xuICBjb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tNb2RhbFwiKTtcbiAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tGb3JtXCIpO1xuICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn07XG5jb25zdCBhZGRUYXNrUHJvbXB0T25DbGljayA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza1Byb21wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1Byb21wdFwiKTtcbiAgYWRkVGFza1Byb21wdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZ2dsZUFkZFRhc2tGb3JtKCk7XG4gICAgdG9nZ2xlQWRkVGFza01vZGFsKCk7XG4gIH0pO1xufTtcblxuY29uc3QgY2FuY2VsQWRkVGFzayA9ICgpID0+IHtcbiAgY29uc3QgY2FuY2VsQWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsQWRkVGFza0J1dHRvblwiKTtcblxuICBjYW5jZWxBZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlQWRkVGFza0Zvcm0oKTtcbiAgICB0b2dnbGVBZGRUYXNrTW9kYWwoKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIikucmVzZXQoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBidWlsZFRhc2sgPSAoKSA9PiB7XG4gIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza05hbWVcIikudmFsdWU7XG4gIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0R1ZURhdGVcIikudmFsdWU7XG4gIGxldCB0YXNrV2VpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrV2VpZ2h0XCIpLnZhbHVlO1xuICBsZXQgdGFza01hcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tNYXJrXCIpLnZhbHVlO1xuICBsZXQgdGFzayA9IFRhc2sodGFza05hbWUsIHRhc2tEdWVEYXRlLCB0YXNrV2VpZ2h0LCB0YXNrTWFyayk7XG5cbiAgcmV0dXJuIHRhc2s7XG59O1xuXG5jb25zdCBkZXRlcm1pbmVDb3Vyc2UgPSAoKSA9PiB7XG4gIGZvciAobGV0IGNvdXJzZUluZGV4ID0gMDsgY291cnNlSW5kZXggPD0gY291cnNlQXJyYXkubGVuZ3RoOyBjb3Vyc2VJbmRleCsrKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cnNlVGl0bGVcIikgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZVRpdGxlXCIpLmlubmVySFRNTCA9PVxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9TmFtZWApXG4gICAgKSB7XG4gICAgICByZXR1cm4gY291cnNlSW5kZXg7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5TG9jYWxseVN0b3JlZFRhc2tzID0gKGNvdXJzZVRpdGxlKSA9PiB7XG4gIC8vZmluZGluZyB0aGUgY291cnNlJ3MgaW5kZXhcbiAgbGV0IGNvdXJzZUluZGV4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3Vyc2VBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjb3Vyc2VBcnJheVtpXS5nZXRDb3Vyc2VOYW1lKCkgPT0gY291cnNlVGl0bGUpIHtcbiAgICAgIGNvdXJzZUluZGV4ID0gaTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDUwOyBpKyspIHtcbiAgICB3aGlsZSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7aX1OYW1lYCkgIT0gbnVsbCkge1xuICAgICAgLy8gQnVpbGQgbG9jYWxseSBzdG9yZWQgY291cnNlcyBvbiB0aGUgRE9NXG4gICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0xpc3RcIik7XG4gICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2tDaGVja2JveFwiKTtcbiAgICAgIHRhc2tEaXYuYXBwZW5kKHRhc2tDaGVja2JveCk7XG5cbiAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFza05hbWVcIik7XG4gICAgICB0YXNrTmFtZS5pbm5lckhUTUwgPSBgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7aX1OYW1lYFxuICAgICAgKX1gO1xuICAgICAgdGFza0Rpdi5hcHBlbmQodGFza05hbWUpO1xuXG4gICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2tEdWVEYXRlXCIpO1xuICAgICAgdGFza0R1ZURhdGUuaW5uZXJIVE1MID0gYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2l9RHVlRGF0ZWBcbiAgICAgICl9YDtcbiAgICAgIHRhc2tEaXYuYXBwZW5kKHRhc2tEdWVEYXRlKTtcblxuICAgICAgY29uc3QgdGFza1dlaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgdGFza1dlaWdodC5jbGFzc0xpc3QuYWRkKFwidGFza1dlaWdodFwiKTtcbiAgICAgIHRhc2tXZWlnaHQuaW5uZXJIVE1MID0gYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2l9V2VpZ2h0YFxuICAgICAgKX0lYDtcbiAgICAgIHRhc2tEaXYuYXBwZW5kKHRhc2tXZWlnaHQpO1xuXG4gICAgICBjb25zdCB0YXNrTWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgdGFza01hcmsuY2xhc3NMaXN0LmFkZChcInRhc2tNYXJrXCIpO1xuICAgICAgdGFza01hcmsuaW5uZXJIVE1MID0gYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2l9TWFya2BcbiAgICAgICl9JWA7XG4gICAgICB0YXNrRGl2LmFwcGVuZCh0YXNrTWFyayk7XG5cbiAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrRGl2KTtcblxuICAgICAgLy8gLy9BZGQgbG9jYWxseSBzdG9yZWQgdGFza3MgdG8gdGhlIGFycmF5XG4gICAgICBsZXQgdGFza04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtpfU5hbWVgKTtcbiAgICAgIGxldCB0YXNrRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2l9RHVlRGF0ZWApO1xuICAgICAgbGV0IHRhc2tXID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7aX1XZWlnaHRgKTtcbiAgICAgIGxldCB0YXNrTSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2l9TWFya2ApO1xuICAgICAgbGV0IHRhc2sgPSBUYXNrKHRhc2tOLCB0YXNrRCwgdGFza1csIHRhc2tNKTtcbiAgICAgIGNvdXJzZUFycmF5W2NvdXJzZUluZGV4XS50YXNrQXJyYXkucHVzaCh0YXNrKTtcblxuICAgICAgaSsrO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZGlzcGxheVRhc2sgPSAodGFzaykgPT4ge1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0xpc3RcIik7XG5cbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgY29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ2hlY2tib3hcIik7XG4gIHRhc2tEaXYuYXBwZW5kKHRhc2tDaGVja2JveCk7XG5cbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2tOYW1lXCIpO1xuICB0YXNrTmFtZS5pbm5lckhUTUwgPSBgJHt0YXNrLmdldFRhc2tOYW1lKCl9YDtcbiAgdGFza0Rpdi5hcHBlbmQodGFza05hbWUpO1xuXG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRHVlRGF0ZVwiKTtcbiAgdGFza0R1ZURhdGUuaW5uZXJIVE1MID0gYCR7dGFzay5nZXRUYXNrRHVlRGF0ZSgpfWA7XG4gIHRhc2tEaXYuYXBwZW5kKHRhc2tEdWVEYXRlKTtcblxuICBjb25zdCB0YXNrV2VpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tXZWlnaHQuY2xhc3NMaXN0LmFkZChcInRhc2tXZWlnaHRcIik7XG4gIHRhc2tXZWlnaHQuaW5uZXJIVE1MID0gYCR7dGFzay5nZXRUYXNrV2VpZ2h0KCl9JWA7XG4gIHRhc2tEaXYuYXBwZW5kKHRhc2tXZWlnaHQpO1xuXG4gIGNvbnN0IHRhc2tNYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tNYXJrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrTWFya1wiKTtcbiAgdGFza01hcmsuaW5uZXJIVE1MID0gYCR7dGFzay5nZXRUYXNrTWFyaygpfSVgO1xuICB0YXNrRGl2LmFwcGVuZCh0YXNrTWFyayk7XG5cbiAgdGFza0xpc3QuYXBwZW5kKHRhc2tEaXYpO1xufTtcblxuY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0J1dHRvblwiKTtcblxuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHRhc2sgPSBidWlsZFRhc2soKTtcblxuICAgIGxldCBjb3Vyc2VJbmRleCA9IGRldGVybWluZUNvdXJzZSgpO1xuXG4gICAgLy9QdXNoZXMgdGFzayB0byB0aGUgY29ycmVjdCBjb3Vyc2UncyB0YXNrIGFycmF5LlxuICAgIGNvdXJzZUFycmF5W2NvdXJzZUluZGV4XS50YXNrQXJyYXkucHVzaCh0YXNrKTtcbiAgICAvL05vdyBhZGQgdG8gbG9jYWwgc3RvcmFnZTpcbiAgICBjb3Vyc2VBcnJheVtjb3Vyc2VJbmRleF0udGFza0FycmF5LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgYGNvdXJzZSR7Y291cnNlSW5kZXh9VGFzayR7aW5kZXh9TmFtZWAsXG4gICAgICAgIGAke3Rhc2suZ2V0VGFza05hbWUoKX1gXG4gICAgICApO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2luZGV4fUR1ZURhdGVgLFxuICAgICAgICBgJHt0YXNrLmdldFRhc2tEdWVEYXRlKCl9YFxuICAgICAgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBgY291cnNlJHtjb3Vyc2VJbmRleH1UYXNrJHtpbmRleH1XZWlnaHRgLFxuICAgICAgICBgJHt0YXNrLmdldFRhc2tXZWlnaHQoKX1gXG4gICAgICApO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIGBjb3Vyc2Uke2NvdXJzZUluZGV4fVRhc2ske2luZGV4fU1hcmtgLFxuICAgICAgICBgJHt0YXNrLmdldFRhc2tNYXJrKCl9YFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuXG4gICAgLy8gLy9GaXJzdCBjbGVhciB0aGUgdGFza0xpc3QsIHRoZW4gZGlzcGxheSBhbGwgdGhlIHRhc2tzLlxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0xpc3RcIikuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vIGZvciAoXG4gICAgLy8gICBsZXQgdGFza0luZGV4ID0gMDtcbiAgICAvLyAgIHRhc2tJbmRleCA8IGNvdXJzZUFycmF5W2NvdXJzZUluZGV4XS50YXNrQXJyYXkubGVuZ3RoO1xuICAgIC8vICAgdGFza0luZGV4KytcbiAgICAvLyApIHtcbiAgICAvLyAgIGRpc3BsYXlUYXNrKGNvdXJzZUluZGV4LCB0YXNrSW5kZXgpO1xuICAgIC8vIH1cblxuICAgIHRvZ2dsZUFkZFRhc2tGb3JtKCk7XG4gICAgdG9nZ2xlQWRkVGFza01vZGFsKCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tGb3JtXCIpLnJlc2V0KCk7XG4gIH0pO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==