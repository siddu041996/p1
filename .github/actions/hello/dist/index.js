module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(239);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 239:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core =__webpack_require__(427);
const github =__webpack_require__(731);

try{ 
//throw(new Error("some error message"));

const name=core.getInput('who-to-greaat');
console.log('hello ${name}');

const time =new Date();
core.setOutput("time",time.toTimeString())

console.log(JSON.stringify(github,null,'\t'));
}catch (error) {

core.setFailed('dwdw')
}

/***/ }),

/***/ 427:
/***/ (function(module) {

module.exports = eval("require")("@action/core");


/***/ }),

/***/ 731:
/***/ (function(module) {

module.exports = eval("require")("@action/github");


/***/ })

/******/ });