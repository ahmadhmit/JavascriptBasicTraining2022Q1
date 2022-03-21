/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var App;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! ./user/user */ \"./src/user/user.js\"),\n    User = _require.User;\n\nvar _require2 = __webpack_require__(/*! ./user/post */ \"./src/user/post.js\"),\n    Post = _require2.Post;\n\nmodule.exports = {\n  run: function run() {\n    var user = new User();\n    var btnUser = document.getElementById(\"submit-user\");\n    var btnPost = document.getElementById(\"submit-post\");\n    btnUser.addEventListener(\"click\", function () {\n      getUser();\n    });\n    btnPost.addEventListener(\"click\", function () {\n      getPost();\n    });\n\n    var getUser = function getUser() {\n      var userId = document.getElementById(\"user-id\").value;\n      user.loadUser(userId).then(function (result) {\n        console.log(user);\n        document.getElementById(\"user-info-id\").innerHTML = result.id;\n        document.getElementById(\"user-info-name\").innerHTML = result.name;\n        document.getElementById(\"user-info-email\").innerHTML = result.email;\n      });\n    }; // load Post information from userId\n\n\n    var getPost = function getPost() {\n      var post = new Post();\n      var userId = document.getElementById(\"user-id\").value;\n      var postElm = document.getElementById(\"post-table\");\n      var posts = post.loadPost(userId).then(function (result) {\n        console.table(result); //loop inside array per object\n\n        for (var i = 0; i < result.length; i++) {\n          var row = document.createElement(\"tr\");\n          var postId = document.createElement(\"td\");\n          postId.innerHTML = result[i].id;\n          var title = document.createElement(\"td\");\n          title.innerHTML = result[i].title;\n          var body = document.createElement(\"td\");\n          body.innerHTML = result[i].body;\n          row.appendChild(postId);\n          row.appendChild(title);\n          row.appendChild(body);\n          postElm.appendChild(row);\n        }\n      });\n    };\n  }\n};\n\n//# sourceURL=webpack://App/./src/index.js?");

/***/ }),

/***/ "./src/user/post.js":
/*!**************************!*\
  !*** ./src/user/post.js ***!
  \**************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar post = /*#__PURE__*/function () {\n  function Post() {\n    _classCallCheck(this, Post);\n\n    _defineProperty(this, \"userId\", void 0);\n\n    _defineProperty(this, \"id\", void 0);\n\n    _defineProperty(this, \"title\", void 0);\n\n    _defineProperty(this, \"body\", void 0);\n  }\n\n  _createClass(Post, [{\n    key: \"loadPost\",\n    value: function loadPost(user_id) {\n      return fetch(\"https://jsonplaceholder.typicode.com/posts?userId=\".concat(user_id)).then(function (result) {\n        return result.json();\n      }).then(function (result) {\n        return result;\n      })[\"catch\"](function (err) {\n        throw err;\n      });\n    }\n  }]);\n\n  return Post;\n}();\n\nmodule.exports.Post = post;\n\n//# sourceURL=webpack://App/./src/user/post.js?");

/***/ }),

/***/ "./src/user/user.js":
/*!**************************!*\
  !*** ./src/user/user.js ***!
  \**************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar user = /*#__PURE__*/function () {\n  function User() {\n    _classCallCheck(this, User);\n\n    _defineProperty(this, \"id\", void 0);\n\n    _defineProperty(this, \"name\", void 0);\n\n    _defineProperty(this, \"email\", void 0);\n  }\n\n  _createClass(User, [{\n    key: \"loadUser\",\n    value: function loadUser(userId) {\n      var _this = this;\n\n      return fetch(\"https://jsonplaceholder.typicode.com/users/\".concat(userId)).then(function (result) {\n        return result.json();\n      }).then(function (result) {\n        _this.id = result.id;\n        _this.name = result.name;\n        _this.email = result.email;\n        return {\n          id: _this.id,\n          name: _this.name,\n          email: _this.email\n        };\n      })[\"catch\"](function (err) {\n        throw err;\n      });\n    }\n  }]);\n\n  return User;\n}();\n\nmodule.exports.User = user;\n\n//# sourceURL=webpack://App/./src/user/user.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	App = __webpack_exports__;
/******/ 	
/******/ })()
;