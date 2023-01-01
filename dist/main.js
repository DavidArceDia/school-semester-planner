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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  margin: 0;\n  display: flex;\n\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* NAV */\n\n#nav {\n  flex-grow: 1;\n  max-width: 35%;\n  min-height: 100vh;\n  background-color: #e5e9ec;\n  display: flex;\n  flex-direction: column;\n}\n\n#homeButton {\n  border: none;\n  background-color: transparent;\n  margin: 2rem;\n}\n\n#homeButton > img {\n  height: 4rem;\n}\n\n/* COURSE LIST*/\n\n#courseList {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.course {\n  font-size: 1rem;\n  width: 90%;\n  padding: 0.75rem;\n\n  border: none;\n  border-radius: 2rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n  background-color: #e6a715;\n  color: white;\n\n  transition: 0.25s;\n}\n\n.course:hover {\n  background-color: #efc86c;\n  color: #fff8e7;\n}\n\n/* ADD COURSE FORM */\n\n#addCoursePrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addCoursePrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 2rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #e6a715;\n  margin: 2rem 1rem;\n\n  transition: 0.25s;\n}\n\n#addCoursePrompt:hover {\n  color: #efc86c;\n}\n\n#addCoursePrompt:hover,\n#homeButton {\n  cursor: pointer;\n}\n\n#addCourseForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addCourseForm.active {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addCourseFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 90%;\n}\n\n#addCourseFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addCourseFormWrapper > .formRow > input {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addCourseFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #e6a715;\n}\n\n#addCourseSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addCourseButton {\n  font-size: 1.2rem;\n\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddCourseButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addCourseButton:hover,\n#cancelAddCourseButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addCourseButton:hover {\n  color: #e6a715;\n}\n\n/* CONTENT */\n\n#content {\n  max-width: 60%;\n\n  flex-grow: 3;\n  min-height: 50vh;\n\n  padding: 1.5rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#courseTitle {\n  font-size: 2rem;\n  font-weight: bold;\n  color: black;\n}\n\n#addTaskPrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addTaskPrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 2rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #9a7aa0;\n  margin: 1.5rem 0rem;\n  padding: 0;\n\n  transition: 0.25s;\n}\n\n#addTaskPrompt:hover {\n  color: #d4c1d7;\n}\n\n/* ADD TASK MODAL */\n\n#addTaskModal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n\n  background-color: #e5e9ec;\n  border-radius: 1rem;\n\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n  width: 35rem;\n\n  transition: 0.25s ease-in-out;\n  pointer-events: none;\n}\n\n#addTaskModal.active {\n  transform: translate(-50%, -50%) scale(1);\n  pointer-events: all;\n}\n\n#addTaskForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addTaskForm.active {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addTaskFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 100%;\n}\n\n#addTaskFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addTaskFormWrapper > .formRow > input {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addTaskFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #9a7aa0;\n}\n\n#addTaskSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addTaskButton:hover,\n#cancelAddTaskButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addTaskButton:hover {\n  color: #9a7aa0;\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n\n  transition: 0.25s ease-in-out;\n}\n\n#overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  display: flex;\n  margin: 0;\n  display: flex;\n\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* NAV */\n\n#nav {\n  flex-grow: 1;\n  max-width: 35%;\n  min-height: 100vh;\n  background-color: #e5e9ec;\n  display: flex;\n  flex-direction: column;\n}\n\n#homeButton {\n  border: none;\n  background-color: transparent;\n  margin: 2rem;\n}\n\n#homeButton > img {\n  height: 4rem;\n}\n\n/* COURSE LIST*/\n\n#courseList {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.course {\n  font-size: 1rem;\n  width: 90%;\n  padding: 0.75rem;\n\n  border: none;\n  border-radius: 2rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n  background-color: #e6a715;\n  color: white;\n\n  transition: 0.25s;\n}\n\n.course:hover {\n  background-color: #efc86c;\n  color: #fff8e7;\n}\n\n/* ADD COURSE FORM */\n\n#addCoursePrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addCoursePrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 2rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #e6a715;\n  margin: 2rem 1rem;\n\n  transition: 0.25s;\n}\n\n#addCoursePrompt:hover {\n  color: #efc86c;\n}\n\n#addCoursePrompt:hover,\n#homeButton {\n  cursor: pointer;\n}\n\n#addCourseForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addCourseForm.active {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addCourseFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 90%;\n}\n\n#addCourseFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addCourseFormWrapper > .formRow > input {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addCourseFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #e6a715;\n}\n\n#addCourseSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addCourseButton {\n  font-size: 1.2rem;\n\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddCourseButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addCourseButton:hover,\n#cancelAddCourseButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addCourseButton:hover {\n  color: #e6a715;\n}\n\n/* CONTENT */\n\n#content {\n  max-width: 60%;\n\n  flex-grow: 3;\n  min-height: 50vh;\n\n  padding: 1.5rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#courseTitle {\n  font-size: 2rem;\n  font-weight: bold;\n  color: black;\n}\n\n#addTaskPrompt {\n  transform: scale(0);\n  pointer-events: none;\n}\n\n#addTaskPrompt.active {\n  transform: scale(1);\n  pointer-events: all;\n  font-size: 2rem;\n  font-style: italic;\n  font-weight: bold;\n  border: none;\n  background-color: transparent;\n  color: #9a7aa0;\n  margin: 1.5rem 0rem;\n  padding: 0;\n\n  transition: 0.25s;\n}\n\n#addTaskPrompt:hover {\n  color: #d4c1d7;\n}\n\n/* ADD TASK MODAL */\n\n#addTaskModal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n\n  background-color: #e5e9ec;\n  border-radius: 1rem;\n\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n  width: 35rem;\n\n  transition: 0.25s ease-in-out;\n  pointer-events: none;\n}\n\n#addTaskModal.active {\n  transform: translate(-50%, -50%) scale(1);\n  pointer-events: all;\n}\n\n#addTaskForm {\n  display: none;\n  pointer-events: none;\n}\n\n#addTaskForm.active {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n}\n\n#addTaskFormWrapper {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem, 0rem;\n  width: 100%;\n}\n\n#addTaskFormWrapper > .formRow {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.25rem;\n}\n\n#addTaskFormWrapper > .formRow > input {\n  all: unset;\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem;\n  padding-left: 0.35rem;\n  display: flex;\n  align-items: center;\n  min-width: 5rem;\n  flex: 4;\n  height: 1.5rem;\n}\n\n#addTaskFormWrapper > .formRow > label {\n  min-width: 3.5rem;\n  margin-right: 1rem;\n  font-weight: bold;\n  font-size: 1.25rem;\n  flex: 1;\n  color: #9a7aa0;\n}\n\n#addTaskSubmitFormRow {\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n\n#addTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#cancelAddTaskButton {\n  font-size: 1.2rem;\n  padding: 0.25rem 1rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  background-color: #d4d4d4;\n  transition: 0.25s;\n}\n\n#addTaskButton:hover,\n#cancelAddTaskButton:hover {\n  background-color: #f2f2f2;\n}\n\n#addTaskButton:hover {\n  color: #9a7aa0;\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n\n  transition: 0.25s ease-in-out;\n}\n\n#overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "courseAdditionController": () => (/* binding */ courseAdditionController),
/* harmony export */   "courseArray": () => (/* binding */ courseArray),
/* harmony export */   "taskAdditionController": () => (/* binding */ taskAdditionController)
/* harmony export */ });
/* harmony import */ var _course_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course.js */ "./src/course.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");




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
        let course = (0,_course_js__WEBPACK_IMPORTED_MODULE_0__.Course)(courseName, courseCredit);
        courseArray.push(course);

        //From course.js, listen for click and run functions that display the right page.
        _course_js__WEBPACK_IMPORTED_MODULE_0__.courseTabController.courseTabListener(courseElement);
        i++;
      }
    }
  };

  //Building a course
  const buildCourse = () => {
    let courseName = document.getElementById("courseName").value;
    let courseCredit = document.getElementById("courseCredit").value;
    let course = (0,_course_js__WEBPACK_IMPORTED_MODULE_0__.Course)(courseName, courseCredit);

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
    _course_js__WEBPACK_IMPORTED_MODULE_0__.courseTabController.courseTabListener(courseElement);
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
    let task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.Task)(taskName, taskDueDate, taskWeight, taskMark);

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


/***/ }),

/***/ "./src/course.js":
/*!***********************!*\
  !*** ./src/course.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Course": () => (/* binding */ Course),
/* harmony export */   "courseTabController": () => (/* binding */ courseTabController)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");



const Course = (courseName, courseCredit) => {
  const getCourseName = () => courseName;
  const getCourseCredit = () => courseCredit;
  const taskArray = [];
  const getTaskArray = () => taskArray;
  return { getCourseName, getCourseCredit, taskArray };
};

const courseTabController = (() => {
  const contentDiv = document.getElementById("content");

  const changeTabs = (e) => {
    let target = e.target;
    //Add Task Button
    const addTaskPrompt = document.createElement("button");
    addTaskPrompt.setAttribute("id", "addTaskPrompt");
    addTaskPrompt.classList.add("active");
    addTaskPrompt.innerHTML = "+ Add Task";
    contentDiv.prepend(addTaskPrompt);

    //Title
    const courseTitle = document.createElement("h");
    courseTitle.setAttribute("id", "courseTitle");
    courseTitle.innerHTML = target.innerHTML;
    contentDiv.prepend(courseTitle);

    //Tasklist
    const taskList = document.createElement("div");
    taskList.setAttribute("id", "taskList");
    contentDiv.append(taskList);

    //Add Event listener to the Task Button
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.taskAdditionController.addTaskPromptOnClick();

    //Build all the courses stored in localstorage.
  };

  const courseTabListener = (course) => {
    if (course != undefined) {
      course.addEventListener("click", (e) => {
        contentDiv.innerHTML = "";
        changeTabs(e);
      });
    }
  };
  return { courseTabListener };
})();


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
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homeButton_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeButton.jpg */ "./src/homeButton.jpg");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _course_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course.js */ "./src/course.js");





const homeButton = new Image();
homeButton.src = _homeButton_jpg__WEBPACK_IMPORTED_MODULE_1__;

document.getElementById("homeButton").appendChild(homeButton);

_DOM_js__WEBPACK_IMPORTED_MODULE_2__.courseAdditionController.addCoursePromptOnClick();

_DOM_js__WEBPACK_IMPORTED_MODULE_2__.courseAdditionController.cancelAddCoursePromptOnClick();

_DOM_js__WEBPACK_IMPORTED_MODULE_2__.courseAdditionController.displayLocallyStoredCourses();

_DOM_js__WEBPACK_IMPORTED_MODULE_2__.courseAdditionController.addCourse();

_course_js__WEBPACK_IMPORTED_MODULE_3__.courseTabController.courseTabListener();

_DOM_js__WEBPACK_IMPORTED_MODULE_2__.taskAdditionController.cancelAddTask();

_DOM_js__WEBPACK_IMPORTED_MODULE_2__.taskAdditionController.addTask();

console.log(_DOM_js__WEBPACK_IMPORTED_MODULE_2__.courseArray[0].taskArray);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci8uL3NyYy9jb3Vyc2UuanMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zY2hvb2wtc2VtZXN0ZXItcGxhbm5lci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2Nob29sLXNlbWVzdGVyLXBsYW5uZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NjaG9vbC1zZW1lc3Rlci1wbGFubmVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBOQVYgKi9cXG5cXG4jbmF2IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogMzUlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlOWVjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNob21lQnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAycmVtO1xcbn1cXG5cXG4jaG9tZUJ1dHRvbiA+IGltZyB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi8qIENPVVJTRSBMSVNUKi9cXG5cXG4jY291cnNlTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvdXJzZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmE3MTU7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLmNvdXJzZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZjODZjO1xcbiAgY29sb3I6ICNmZmY4ZTc7XFxufVxcblxcbi8qIEFERCBDT1VSU0UgRk9STSAqL1xcblxcbiNhZGRDb3Vyc2VQcm9tcHQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkQ291cnNlUHJvbXB0LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2U2YTcxNTtcXG4gIG1hcmdpbjogMnJlbSAxcmVtO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNhZGRDb3Vyc2VQcm9tcHQ6aG92ZXIge1xcbiAgY29sb3I6ICNlZmM4NmM7XFxufVxcblxcbiNhZGRDb3Vyc2VQcm9tcHQ6aG92ZXIsXFxuI2hvbWVCdXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuI2FkZENvdXJzZUZvcm1XcmFwcGVyIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDFyZW0sIDByZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyA+IGlucHV0IHtcXG4gIGFsbDogdW5zZXQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjM1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDVyZW07XFxuICBmbGV4OiA0O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gbGFiZWwge1xcbiAgbWluLXdpZHRoOiAzLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogI2U2YTcxNTtcXG59XFxuXFxuI2FkZENvdXJzZVN1Ym1pdEZvcm1Sb3cge1xcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2FkZENvdXJzZUJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2NhbmNlbEFkZENvdXJzZUJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZENvdXJzZUJ1dHRvbjpob3ZlcixcXG4jY2FuY2VsQWRkQ291cnNlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbiNhZGRDb3Vyc2VCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNlNmE3MTU7XFxufVxcblxcbi8qIENPTlRFTlQgKi9cXG5cXG4jY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDYwJTtcXG5cXG4gIGZsZXgtZ3JvdzogMztcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxuXFxuICBwYWRkaW5nOiAxLjVyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY291cnNlVGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNhZGRUYXNrUHJvbXB0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2tQcm9tcHQuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjOWE3YWEwO1xcbiAgbWFyZ2luOiAxLjVyZW0gMHJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZFRhc2tQcm9tcHQ6aG92ZXIge1xcbiAgY29sb3I6ICNkNGMxZDc7XFxufVxcblxcbi8qIEFERCBUQVNLIE1PREFMICovXFxuXFxuI2FkZFRhc2tNb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTllYztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgd2lkdGg6IDM1cmVtO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2tNb2RhbC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm0uYWN0aXZlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbiNhZGRUYXNrRm9ybVdyYXBwZXIge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMXJlbSwgMHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm1XcmFwcGVyID4gLmZvcm1Sb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuI2FkZFRhc2tGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gaW5wdXQge1xcbiAgYWxsOiB1bnNldDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMzVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNXJlbTtcXG4gIGZsZXg6IDQ7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI2FkZFRhc2tGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gbGFiZWwge1xcbiAgbWluLXdpZHRoOiAzLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogIzlhN2FhMDtcXG59XFxuXFxuI2FkZFRhc2tTdWJtaXRGb3JtUm93IHtcXG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jY2FuY2VsQWRkVGFza0J1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZFRhc2tCdXR0b246aG92ZXIsXFxuI2NhbmNlbEFkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICM5YTdhYTA7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7O0VBRWIseUNBQXlDO0FBQzNDOztBQUVBLFFBQVE7O0FBRVI7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLGVBQWU7O0FBRWY7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixnQkFBZ0I7O0VBRWhCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7O0VBRVosaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGlCQUFpQjs7RUFFakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7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QXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9DQUFvQztFQUNwQyxvQkFBb0I7O0VBRXBCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBOQVYgKi9cXG5cXG4jbmF2IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogMzUlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlOWVjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNob21lQnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAycmVtO1xcbn1cXG5cXG4jaG9tZUJ1dHRvbiA+IGltZyB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi8qIENPVVJTRSBMSVNUKi9cXG5cXG4jY291cnNlTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvdXJzZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmE3MTU7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLmNvdXJzZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZjODZjO1xcbiAgY29sb3I6ICNmZmY4ZTc7XFxufVxcblxcbi8qIEFERCBDT1VSU0UgRk9STSAqL1xcblxcbiNhZGRDb3Vyc2VQcm9tcHQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkQ291cnNlUHJvbXB0LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2U2YTcxNTtcXG4gIG1hcmdpbjogMnJlbSAxcmVtO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNhZGRDb3Vyc2VQcm9tcHQ6aG92ZXIge1xcbiAgY29sb3I6ICNlZmM4NmM7XFxufVxcblxcbiNhZGRDb3Vyc2VQcm9tcHQ6aG92ZXIsXFxuI2hvbWVCdXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuI2FkZENvdXJzZUZvcm1XcmFwcGVyIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDFyZW0sIDByZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5cXG4jYWRkQ291cnNlRm9ybVdyYXBwZXIgPiAuZm9ybVJvdyA+IGlucHV0IHtcXG4gIGFsbDogdW5zZXQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjM1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDVyZW07XFxuICBmbGV4OiA0O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiNhZGRDb3Vyc2VGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gbGFiZWwge1xcbiAgbWluLXdpZHRoOiAzLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogI2U2YTcxNTtcXG59XFxuXFxuI2FkZENvdXJzZVN1Ym1pdEZvcm1Sb3cge1xcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2FkZENvdXJzZUJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2NhbmNlbEFkZENvdXJzZUJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZENvdXJzZUJ1dHRvbjpob3ZlcixcXG4jY2FuY2VsQWRkQ291cnNlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbiNhZGRDb3Vyc2VCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNlNmE3MTU7XFxufVxcblxcbi8qIENPTlRFTlQgKi9cXG5cXG4jY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDYwJTtcXG5cXG4gIGZsZXgtZ3JvdzogMztcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxuXFxuICBwYWRkaW5nOiAxLjVyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY291cnNlVGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNhZGRUYXNrUHJvbXB0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2tQcm9tcHQuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjOWE3YWEwO1xcbiAgbWFyZ2luOiAxLjVyZW0gMHJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZFRhc2tQcm9tcHQ6aG92ZXIge1xcbiAgY29sb3I6ICNkNGMxZDc7XFxufVxcblxcbi8qIEFERCBUQVNLIE1PREFMICovXFxuXFxuI2FkZFRhc2tNb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTllYztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgd2lkdGg6IDM1cmVtO1xcblxcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2FkZFRhc2tNb2RhbC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm0uYWN0aXZlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbiNhZGRUYXNrRm9ybVdyYXBwZXIge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMXJlbSwgMHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkVGFza0Zvcm1XcmFwcGVyID4gLmZvcm1Sb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuI2FkZFRhc2tGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gaW5wdXQge1xcbiAgYWxsOiB1bnNldDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMzVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNXJlbTtcXG4gIGZsZXg6IDQ7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI2FkZFRhc2tGb3JtV3JhcHBlciA+IC5mb3JtUm93ID4gbGFiZWwge1xcbiAgbWluLXdpZHRoOiAzLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogIzlhN2FhMDtcXG59XFxuXFxuI2FkZFRhc2tTdWJtaXRGb3JtUm93IHtcXG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jY2FuY2VsQWRkVGFza0J1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2FkZFRhc2tCdXR0b246aG92ZXIsXFxuI2NhbmNlbEFkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICM5YTdhYTA7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IENvdXJzZSwgY291cnNlVGFiQ29udHJvbGxlciB9IGZyb20gXCIuL2NvdXJzZS5qc1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2suanNcIjtcbmV4cG9ydCB7IGNvdXJzZUFkZGl0aW9uQ29udHJvbGxlciwgY291cnNlQXJyYXksIHRhc2tBZGRpdGlvbkNvbnRyb2xsZXIgfTtcblxuY29uc3QgY291cnNlQXJyYXkgPSBbXTtcblxuY29uc3QgY291cnNlQWRkaXRpb25Db250cm9sbGVyID0gKCgpID0+IHtcbiAgLy9BZGQgYSBjb3Vyc2UgcHJvbXB0XG4gIGNvbnN0IGFkZENvdXJzZVByb21wdE9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkQ291cnNlUHJvbXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRDb3Vyc2VQcm9tcHRcIik7XG4gICAgYWRkQ291cnNlUHJvbXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0b2dnbGVBZGRDb3Vyc2VGb3JtKCk7XG4gICAgICB0b2dnbGVBZGRDb3Vyc2VQcm9tcHQoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvL0NhbmNlbCBhZGRpbmcgYSBjb3Vyc2VcbiAgY29uc3QgY2FuY2VsQWRkQ291cnNlUHJvbXB0T25DbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBjYW5jZWxBZGRDb3Vyc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiY2FuY2VsQWRkQ291cnNlQnV0dG9uXCJcbiAgICApO1xuXG4gICAgY2FuY2VsQWRkQ291cnNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0b2dnbGVBZGRDb3Vyc2VGb3JtKCk7XG4gICAgICB0b2dnbGVBZGRDb3Vyc2VQcm9tcHQoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQ291cnNlRm9ybVwiKS5yZXNldCgpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlMb2NhbGx5U3RvcmVkQ291cnNlcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb3Vyc2VMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VMaXN0XCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTA7IGkrKykge1xuICAgICAgd2hpbGUgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2l9TmFtZWApICE9IG51bGwpIHtcbiAgICAgICAgLy9CdWlsZCBsb2NhbGx5IHN0b3JlZCBjb3Vyc2VzIG9uIHRoZSBET01cbiAgICAgICAgY29uc3QgY291cnNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvdXJzZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvdXJzZVwiKTtcbiAgICAgICAgY291cnNlRWxlbWVudC5pbm5lckhUTUwgPSBgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtpfU5hbWVgKX1gO1xuICAgICAgICBjb3Vyc2VMaXN0LmFwcGVuZENoaWxkKGNvdXJzZUVsZW1lbnQpO1xuXG4gICAgICAgIC8vQWRkIGxvY2FsbHkgc3RvcmVkIGNvdXJzZXMgdG8gdGhlIGFycmF5XG4gICAgICAgIGxldCBjb3Vyc2VOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvdXJzZSR7aX1OYW1lYCk7XG4gICAgICAgIGxldCBjb3Vyc2VDcmVkaXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY291cnNlJHtpfUNyZWRpdGApO1xuICAgICAgICBsZXQgY291cnNlID0gQ291cnNlKGNvdXJzZU5hbWUsIGNvdXJzZUNyZWRpdCk7XG4gICAgICAgIGNvdXJzZUFycmF5LnB1c2goY291cnNlKTtcblxuICAgICAgICAvL0Zyb20gY291cnNlLmpzLCBsaXN0ZW4gZm9yIGNsaWNrIGFuZCBydW4gZnVuY3Rpb25zIHRoYXQgZGlzcGxheSB0aGUgcmlnaHQgcGFnZS5cbiAgICAgICAgY291cnNlVGFiQ29udHJvbGxlci5jb3Vyc2VUYWJMaXN0ZW5lcihjb3Vyc2VFbGVtZW50KTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvL0J1aWxkaW5nIGEgY291cnNlXG4gIGNvbnN0IGJ1aWxkQ291cnNlID0gKCkgPT4ge1xuICAgIGxldCBjb3Vyc2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VOYW1lXCIpLnZhbHVlO1xuICAgIGxldCBjb3Vyc2VDcmVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZUNyZWRpdFwiKS52YWx1ZTtcbiAgICBsZXQgY291cnNlID0gQ291cnNlKGNvdXJzZU5hbWUsIGNvdXJzZUNyZWRpdCk7XG5cbiAgICByZXR1cm4gY291cnNlO1xuICB9O1xuXG4gIC8vRGlzcGxheWluZyBhIG5ldyBjb3Vyc2UuIENvdXJzZSB0YWIgZXZlbnQgbGlzdGVuZXIgaXMgYWRkZWQgaGVyZSBmcm9tIGNvdXJzZS5qc1xuICBjb25zdCBkaXNwbGF5Q291cnNlID0gKGNvdXJzZSkgPT4ge1xuICAgIGNvbnN0IGNvdXJzZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZUxpc3RcIik7XG4gICAgY29uc3QgY291cnNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY291cnNlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY291cnNlXCIpO1xuICAgIGNvdXJzZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7Y291cnNlLmdldENvdXJzZU5hbWUoKX1gO1xuICAgIGNvdXJzZUxpc3QuYXBwZW5kQ2hpbGQoY291cnNlRWxlbWVudCk7XG5cbiAgICAvL0Zyb20gY291cnNlLmpzLCBsaXN0ZW4gZm9yIGNsaWNrIGFuZCBydW4gZnVuY3Rpb25zIHRoYXQgZGlzcGxheSB0aGUgcmlnaHQgcGFnZS5cbiAgICBjb3Vyc2VUYWJDb250cm9sbGVyLmNvdXJzZVRhYkxpc3RlbmVyKGNvdXJzZUVsZW1lbnQpO1xuICB9O1xuXG4gIC8vQWRkaW5nIGEgY291cnNlXG4gIGNvbnN0IGFkZENvdXJzZSA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRDb3Vyc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZENvdXJzZUJ1dHRvblwiKTtcbiAgICBhZGRDb3Vyc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGNvdXJzZSA9IGJ1aWxkQ291cnNlKCk7XG4gICAgICBjb3Vyc2VBcnJheS5wdXNoKGNvdXJzZSk7XG4gICAgICBkaXNwbGF5Q291cnNlKGNvdXJzZSk7XG5cbiAgICAgIGNvdXJzZUFycmF5LmZvckVhY2goKGNvdXJzZSwgaW5kZXgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGNvdXJzZSR7aW5kZXh9TmFtZWAsIGAke2NvdXJzZS5nZXRDb3Vyc2VOYW1lKCl9YCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgIGBjb3Vyc2Uke2luZGV4fUNyZWRpdGAsXG4gICAgICAgICAgYCR7Y291cnNlLmdldENvdXJzZUNyZWRpdCgpfWBcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICB0b2dnbGVBZGRDb3Vyc2VGb3JtKCk7XG4gICAgICB0b2dnbGVBZGRDb3Vyc2VQcm9tcHQoKTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRDb3Vyc2VGb3JtXCIpLnJlc2V0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRDb3Vyc2VQcm9tcHRPbkNsaWNrLFxuICAgIGNhbmNlbEFkZENvdXJzZVByb21wdE9uQ2xpY2ssXG4gICAgZGlzcGxheUxvY2FsbHlTdG9yZWRDb3Vyc2VzLFxuICAgIGFkZENvdXJzZSxcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IHRvZ2dsZUFkZENvdXJzZUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGFkZENvdXJzZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZENvdXJzZUZvcm1cIik7XG4gIGFkZENvdXJzZUZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn07XG5cbmNvbnN0IHRvZ2dsZUFkZENvdXJzZVByb21wdCA9ICgpID0+IHtcbiAgY29uc3QgYWRkQ291cnNlUHJvbXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRDb3Vyc2VQcm9tcHRcIik7XG4gIGFkZENvdXJzZVByb21wdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufTtcblxuY29uc3QgY291cnNlRWRpdEFuZERlbGV0ZUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBjb3Vyc2VPbkhvdmVyID0gKGNvdXJzZSkgPT4ge1xuICAgIGxldCBjb3Vyc2VJbm5lckh0bWwgPSBjb3Vyc2UuaW5uZXJIVE1MO1xuXG4gICAgY291cnNlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIC8vY291cnNlLmlubmVySFRNTCA9IFwiRWRpdCBvciBEZWxldGVcIjtcbiAgICAgIGNvdXJzZS5jbGFzc0xpc3QudG9nZ2xlKFwiaG92ZXJcIik7XG4gICAgfSk7XG5cbiAgICBjb3Vyc2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgLy9jb3Vyc2UuaW5uZXJIVE1MID0gY291cnNlSW5uZXJIdG1sO1xuICAgICAgY291cnNlLmNsYXNzTGlzdC50b2dnbGUoXCJob3ZlclwiKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBjb3Vyc2VPbkhvdmVyIH07XG59KSgpO1xuXG5jb25zdCB0YXNrQWRkaXRpb25Db250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgYWRkVGFza1Byb21wdE9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVGFza1Byb21wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1Byb21wdFwiKTtcbiAgICBhZGRUYXNrUHJvbXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0b2dnbGVBZGRUYXNrRm9ybSgpO1xuICAgICAgdG9nZ2xlQWRkVGFza01vZGFsKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2FuY2VsQWRkVGFzayA9ICgpID0+IHtcbiAgICBjb25zdCBjYW5jZWxBZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxBZGRUYXNrQnV0dG9uXCIpO1xuXG4gICAgY2FuY2VsQWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdG9nZ2xlQWRkVGFza0Zvcm0oKTtcbiAgICAgIHRvZ2dsZUFkZFRhc2tNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRm9ybVwiKS5yZXNldCgpO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkVGFzayA9ICgpID0+IHtcbiAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOYW1lXCIpLnZhbHVlO1xuICAgIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0R1ZURhdGVcIikudmFsdWU7XG4gICAgbGV0IHRhc2tXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tXZWlnaHRcIikudmFsdWU7XG4gICAgbGV0IHRhc2tNYXJrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTWFya1wiKS52YWx1ZTtcbiAgICBsZXQgdGFzayA9IFRhc2sodGFza05hbWUsIHRhc2tEdWVEYXRlLCB0YXNrV2VpZ2h0LCB0YXNrTWFyayk7XG5cbiAgICByZXR1cm4gdGFzaztcbiAgfTtcblxuICBjb25zdCBkZXRlcm1pbmVDb3Vyc2UgPSAoKSA9PiB7XG4gICAgZm9yIChcbiAgICAgIGxldCBjb3Vyc2VJbmRleCA9IDA7XG4gICAgICBjb3Vyc2VJbmRleCA8PSBjb3Vyc2VBcnJheS5sZW5ndGg7XG4gICAgICBjb3Vyc2VJbmRleCsrXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cnNlVGl0bGVcIikuaW5uZXJIVE1MID09XG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb3Vyc2Uke2NvdXJzZUluZGV4fU5hbWVgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBjb3Vyc2VJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRhc2sgPSAoY291cnNlSW5kZXgsIHRhc2spID0+IHtcbiAgICBjb25zdCBjb3Vyc2VMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2VMaXN0XCIpO1xuXG4gICAgY29uc3QgY291cnNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb3Vyc2UuY2xhc3NMaXN0LmFkZChcImNvdXJzZVwiKTtcblxuICAgIGNvbnN0IGNvdXJzZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb3Vyc2VDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY291cnNlQ2hlY2tib3hcIik7XG5cbiAgICBjb25zdCBjb3Vyc2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvdXJzZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VUaXRsZVwiKTtcblxuICAgIGNvbnN0IGNvdXJzZUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb3Vyc2VEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VEdWVEYXRlXCIpO1xuXG4gICAgY29uc3QgY291cnNlV2VpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY291cnNlV2VpZ2h0LmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VXZWlnaHRcIik7XG5cbiAgICBjb25zdCBjb3Vyc2VNYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY291cnNlTWFyay5jbGFzc0xpc3QuYWRkKFwiY291cnNlTWFya1wiKTtcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tCdXR0b25cIik7XG5cbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCB0YXNrID0gYnVpbGRUYXNrKCk7XG5cbiAgICAgIGxldCBjb3Vyc2VJbmRleCA9IGRldGVybWluZUNvdXJzZSgpO1xuICAgICAgY291cnNlQXJyYXlbY291cnNlSW5kZXhdLnRhc2tBcnJheS5wdXNoKHRhc2spO1xuXG4gICAgICBkaXNwbGF5VGFzayhjb3Vyc2VJbmRleCwgdGFzayk7XG5cbiAgICAgIHRvZ2dsZUFkZFRhc2tGb3JtKCk7XG4gICAgICB0b2dnbGVBZGRUYXNrTW9kYWwoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFRhc2tQcm9tcHRPbkNsaWNrLFxuICAgIGNhbmNlbEFkZFRhc2ssXG4gICAgYWRkVGFzayxcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IHRvZ2dsZUFkZFRhc2tGb3JtID0gKCkgPT4ge1xuICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIik7XG4gIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG59O1xuXG5jb25zdCB0b2dnbGVBZGRUYXNrTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza01vZGFsXCIpO1xuICBhZGRUYXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIik7XG4gIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufTtcbiIsImltcG9ydCB7IHRhc2tBZGRpdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi9ET00uanNcIjtcbmV4cG9ydCB7IENvdXJzZSwgY291cnNlVGFiQ29udHJvbGxlciB9O1xuXG5jb25zdCBDb3Vyc2UgPSAoY291cnNlTmFtZSwgY291cnNlQ3JlZGl0KSA9PiB7XG4gIGNvbnN0IGdldENvdXJzZU5hbWUgPSAoKSA9PiBjb3Vyc2VOYW1lO1xuICBjb25zdCBnZXRDb3Vyc2VDcmVkaXQgPSAoKSA9PiBjb3Vyc2VDcmVkaXQ7XG4gIGNvbnN0IHRhc2tBcnJheSA9IFtdO1xuICBjb25zdCBnZXRUYXNrQXJyYXkgPSAoKSA9PiB0YXNrQXJyYXk7XG4gIHJldHVybiB7IGdldENvdXJzZU5hbWUsIGdldENvdXJzZUNyZWRpdCwgdGFza0FycmF5IH07XG59O1xuXG5jb25zdCBjb3Vyc2VUYWJDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb25zdCBjaGFuZ2VUYWJzID0gKGUpID0+IHtcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgLy9BZGQgVGFzayBCdXR0b25cbiAgICBjb25zdCBhZGRUYXNrUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrUHJvbXB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkVGFza1Byb21wdFwiKTtcbiAgICBhZGRUYXNrUHJvbXB0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgYWRkVGFza1Byb21wdC5pbm5lckhUTUwgPSBcIisgQWRkIFRhc2tcIjtcbiAgICBjb250ZW50RGl2LnByZXBlbmQoYWRkVGFza1Byb21wdCk7XG5cbiAgICAvL1RpdGxlXG4gICAgY29uc3QgY291cnNlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiKTtcbiAgICBjb3Vyc2VUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvdXJzZVRpdGxlXCIpO1xuICAgIGNvdXJzZVRpdGxlLmlubmVySFRNTCA9IHRhcmdldC5pbm5lckhUTUw7XG4gICAgY29udGVudERpdi5wcmVwZW5kKGNvdXJzZVRpdGxlKTtcblxuICAgIC8vVGFza2xpc3RcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrTGlzdFwiKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZCh0YXNrTGlzdCk7XG5cbiAgICAvL0FkZCBFdmVudCBsaXN0ZW5lciB0byB0aGUgVGFzayBCdXR0b25cbiAgICB0YXNrQWRkaXRpb25Db250cm9sbGVyLmFkZFRhc2tQcm9tcHRPbkNsaWNrKCk7XG5cbiAgICAvL0J1aWxkIGFsbCB0aGUgY291cnNlcyBzdG9yZWQgaW4gbG9jYWxzdG9yYWdlLlxuICB9O1xuXG4gIGNvbnN0IGNvdXJzZVRhYkxpc3RlbmVyID0gKGNvdXJzZSkgPT4ge1xuICAgIGlmIChjb3Vyc2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb3Vyc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY2hhbmdlVGFicyhlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgY291cnNlVGFiTGlzdGVuZXIgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBjb3Vyc2VBcnJheSB9IGZyb20gXCIuL0RPTS5qc1wiO1xuZXhwb3J0IHsgVGFzayB9O1xuXG5jb25zdCBUYXNrID0gKHRhc2tOYW1lLCB0YXNrRHVlRGF0ZSwgdGFza1dlaWdodCwgdGFza01hcmspID0+IHtcbiAgY29uc3QgZ2V0VGFza05hbWUgPSAoKSA9PiB0YXNrTmFtZTtcbiAgY29uc3QgZ2V0VGFza0R1ZURhdGUgPSAoKSA9PiB0YXNrRHVlRGF0ZTtcbiAgY29uc3QgZ2V0VGFza1dlaWdodCA9ICgpID0+IHRhc2tXZWlnaHQ7XG4gIGNvbnN0IGdldFRhc2tNYXJrID0gKCkgPT4gdGFza01hcms7XG5cbiAgcmV0dXJuIHsgZ2V0VGFza05hbWUsIGdldFRhc2tEdWVEYXRlLCBnZXRUYXNrV2VpZ2h0LCBnZXRUYXNrTWFyayB9O1xufTtcblxuLypcbllvdXIg4oCYdG9kb3PigJkgYXJlIGdvaW5nIHRvIGJlIG9iamVjdHMgdGhhdCB5b3XigJlsbCB3YW50IHRvIFxuZHluYW1pY2FsbHkgY3JlYXRlLCB3aGljaCBtZWFucyBlaXRoZXIgdXNpbmcgZmFjdG9yaWVzIG9yIFxuY29uc3RydWN0b3JzL2NsYXNzZXMgdG8gZ2VuZXJhdGUgdGhlbS5cblxuIyMjIFRhc2sgUHJvcGVydGllc1xuXG4tIE5hbWVcbi0gRHVlIERhdGVcbi0gV2VpZ2h0XG4tIE1hcmtcblxuLSBQcmlvcml0eVxuLSBFZGl0LCBEZWxldGVcblxuXG5cbiovXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBob21lQnV0dG9uSW1hZ2UgZnJvbSBcIi4vaG9tZUJ1dHRvbi5qcGdcIjtcbmltcG9ydCB7XG4gIGNvdXJzZUFkZGl0aW9uQ29udHJvbGxlcixcbiAgdGFza0FkZGl0aW9uQ29udHJvbGxlcixcbiAgY291cnNlQXJyYXksXG59IGZyb20gXCIuL0RPTS5qc1wiO1xuaW1wb3J0IHsgY291cnNlVGFiQ29udHJvbGxlciB9IGZyb20gXCIuL2NvdXJzZS5qc1wiO1xuXG5jb25zdCBob21lQnV0dG9uID0gbmV3IEltYWdlKCk7XG5ob21lQnV0dG9uLnNyYyA9IGhvbWVCdXR0b25JbWFnZTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lQnV0dG9uXCIpLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuXG5jb3Vyc2VBZGRpdGlvbkNvbnRyb2xsZXIuYWRkQ291cnNlUHJvbXB0T25DbGljaygpO1xuXG5jb3Vyc2VBZGRpdGlvbkNvbnRyb2xsZXIuY2FuY2VsQWRkQ291cnNlUHJvbXB0T25DbGljaygpO1xuXG5jb3Vyc2VBZGRpdGlvbkNvbnRyb2xsZXIuZGlzcGxheUxvY2FsbHlTdG9yZWRDb3Vyc2VzKCk7XG5cbmNvdXJzZUFkZGl0aW9uQ29udHJvbGxlci5hZGRDb3Vyc2UoKTtcblxuY291cnNlVGFiQ29udHJvbGxlci5jb3Vyc2VUYWJMaXN0ZW5lcigpO1xuXG50YXNrQWRkaXRpb25Db250cm9sbGVyLmNhbmNlbEFkZFRhc2soKTtcblxudGFza0FkZGl0aW9uQ29udHJvbGxlci5hZGRUYXNrKCk7XG5cbmNvbnNvbGUubG9nKGNvdXJzZUFycmF5WzBdLnRhc2tBcnJheSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=