"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar userIds = [\n    \"roy\",\n    \"sarah\"\n];\nvar getRandomUserId = function() {\n    return userIds[Math.round(Math.random())];\n};\nvar originalMsgs = Array(50).fill(0).map(function(_, i) {\n    return {\n        id: i + 1,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + i * 1000 * 60,\n        text: \"\".concat(i + 1, \" mock text\")\n    };\n}).reverse();\nconsole.log(originalMsgs);\nvar MsgList = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(originalMsgs), msgs = ref[0], setMsgs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var onCreate = function(text) {\n        var newMsg = {\n            id: msgs.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: \"\".concat(msgs.length + 1, \" \").concat(text)\n        };\n        setMsgs(function(msgs) {\n            return [\n                newMsg\n            ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(msgs));\n        });\n    };\n    var onUpdate = function(text, id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(msgs);\n            newMsgs.splice(targetIndex, 1, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, msgs[targetIndex]), {\n                text: text\n            }));\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    var onDelete = function(id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(msgs);\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/sohee/Desktop/soheeProject/api-practice/client/components/MsgList.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map(function(x) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, x), {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id\n                    }), x.id, false, {\n                        fileName: \"/Users/sohee/Desktop/soheeProject/api-practice/client/components/MsgList.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sohee/Desktop/soheeProject/api-practice/client/components/MsgList.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"98aREoWYavyOBv5xOQhoiAi3TBY=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsQ0FBQyxTQUFDQyxHQUFHO3VCQUFLQSxHQUFHLENBQUNwQixFQUFFLEtBQUtBLEVBQUU7YUFBQSxDQUFDO1lBQzFELElBQUlrQixXQUFXLEdBQUcsQ0FBQyxFQUFFLE9BQU9WLElBQUksQ0FBQztZQUNqQyxJQUFNYSxPQUFPLEdBQUkscUZBQUdiLElBQUksQ0FBSkE7WUFDcEJhLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDSixXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsT0FBT0csT0FBTyxDQUFDO1NBQ2hCLENBQUMsQ0FBQztLQUNKO0lBRUQsSUFBTUUsUUFBUSxHQUFHO2VBQU1aLFlBQVksQ0FBQyxJQUFJLENBQUM7S0FBQTtJQUN6QyxxQkFDRTs7MEJBQ0UsOERBQUN2QixpREFBUTtnQkFBQ3FDLE1BQU0sRUFBRWIsUUFBUTs7Ozs7cUJBQUk7MEJBQzlCLDhEQUFDYyxJQUFFO2dCQUFDQyxTQUFTLEVBQUMsVUFBVTswQkFDckJuQixJQUFJLENBQUNYLEdBQUcsQ0FBQyxTQUFDK0IsQ0FBQzt5Q0FDViw4REFBQ3pDLGdEQUFPLDBLQUVGeUMsQ0FBQzt3QkFDTFgsUUFBUSxFQUFFQSxRQUFRO3dCQUNsQk8sUUFBUSxFQUFFO21DQUFNQSxRQUFRLENBQUNJLENBQUMsQ0FBQzVCLEVBQUUsQ0FBQzt5QkFBQTt3QkFDOUI2QixTQUFTLEVBQUU7bUNBQU1sQixZQUFZLENBQUNpQixDQUFDLENBQUM1QixFQUFFLENBQUM7eUJBQUE7d0JBQ25DOEIsU0FBUyxFQUFFcEIsU0FBUyxLQUFLa0IsQ0FBQyxDQUFDNUIsRUFBRTt3QkFMeEI0QixDQUFDLENBQUM1QixFQUFFOzs7OzZCQU1UO2lCQUNILENBQUM7Ozs7O3FCQUNDOztvQkFDSixDQUNIO0NBQ0g7R0F2REtPLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQXlEYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XG5cbmNvbnN0IHVzZXJJZHMgPSBbXCJyb3lcIiwgXCJzYXJhaFwiXTtcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IHVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG5jb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MClcbiAgLmZpbGwoMClcbiAgLm1hcCgoXywgaSkgPT4gKHtcbiAgICBpZDogaSArIDEsXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwLFxuICAgIHRleHQ6IGAke2kgKyAxfSBtb2NrIHRleHRgXG4gIH0pKVxuICAucmV2ZXJzZSgpO1xuXG5jb25zb2xlLmxvZyhvcmlnaW5hbE1zZ3MpO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG9uQ3JlYXRlID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSB7XG4gICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxuICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWBcbiAgICB9O1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xuICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcbiAgICAgICAgdGV4dFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgICBkb25lRWRpdCgpO1xuICB9O1xuXG4gIGNvbnN0IG9uRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICAgIHJldHVybiBuZXdNc2dzO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcbiAgICAgICAgICA8TXNnSXRlbVxuICAgICAgICAgICAga2V5PXt4LmlkfVxuICAgICAgICAgICAgey4uLnh9XG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsInVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsInJldmVyc2UiLCJjb25zb2xlIiwibG9nIiwiTXNnTGlzdCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJuZXdNc2ciLCJsZW5ndGgiLCJEYXRlIiwibm93Iiwib25VcGRhdGUiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwibXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJ4Iiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});