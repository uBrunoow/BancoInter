"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/headersLinks/PraVoceLinks.tsx":
/*!*******************************************!*\
  !*** ./src/headersLinks/PraVoceLinks.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PraVoceLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PraVoceLinks() {\n    _s();\n    // Abrir os links do header\n    const [isPraVoceLinksOpen, setIsPraVoceLinksOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handlePraVoceLinkAcess = ()=>{\n        const PraVoceArrow = document.getElementById(\"PraVoceArrow\");\n        const PraVoceLink = document.getElementById(\"PraVoceLink\");\n        setIsPraVoceLinksOpen(!isPraVoceLinksOpen);\n        // Transicao da inter arrow\n        InterArrow.style.transition = \"all .2s ease-in-out\";\n        if (isInterLinksOpen) {\n            document.body.style.overflowY = \"scroll\";\n            PraVoceArrow.style.transform = \"rotate(0deg)\";\n            PraVoceLink.style.color = \"rgb(22, 22, 22)\";\n        } else {\n            document.body.style.overflowY = \"hidden\";\n            PraVoceArrow.style.transform = \"rotate(-180deg)\";\n            PraVoceLink.style.color = \"#ff7a00\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex py-[5] px-1 ml-[14px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-[14px] font-[rgb(22, 22, 22)] font-semibold font-inter \",\n                        children: \"Pra voc\\xea\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \" text-[#B6B7BB] ml-[5px]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            isInterLinksOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"fixed top-[114px] left-0 w-full calcHeight z-10 bg-white py-4\",\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.2\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[1428px] h-[500px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" mb-4 px-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex items-center justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" font-sora font-semibold text-[20px]  leading-[25px] text-[#161616]\",\n                                            children: \"O Inter\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            className: \" cursor-pointer h-7 w-7 text-[#B6B7BB]\",\n                                            onClick: handleInterLinkAcess\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex-wrap flex justify-start items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-6 px-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" bg-transparent rounded-[8px] border-y-[1px] border-x-[1px] border-[#dedfe4]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" flex px-[15px] py-4 flex-col\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \" mb-6 font-sora font-semibold text-[16px] leading-[20px] text-[#161616] \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \" flex h-full flex-col justify-start cursor-pointer\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"\",\n                                                        className: \"block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px]\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\OneDrive\\\\Documentos\\\\GitHub\\\\BancoInter\\\\client\\\\src\\\\headersLinks\\\\PraVoceLinks.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PraVoceLinks, \"yzvLjfxlcszCcjnEktLenMwTQPM=\");\n_c = PraVoceLinks;\nvar _c;\n$RefreshReg$(_c, \"PraVoceLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2hlYWRlcnNMaW5rcy9QcmFWb2NlTGlua3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQztBQUNPO0FBQ2I7QUFFakIsU0FBU0k7O0lBRXRCLDJCQUEyQjtJQUMzQixNQUFNLENBQUVDLG9CQUFxQkMsc0JBQXVCLEdBQUdILCtDQUFRQSxDQUFDO0lBRWhFLE1BQU1JLHlCQUF5QjtRQUM3QixNQUFNQyxlQUFlQyxTQUFTQyxjQUFjLENBQUM7UUFDN0MsTUFBTUMsY0FBY0YsU0FBU0MsY0FBYyxDQUFDO1FBRTVDSixzQkFBc0IsQ0FBQ0Q7UUFFdkIsMkJBQTJCO1FBQzNCTyxXQUFXQyxLQUFLLENBQUNDLFVBQVUsR0FBRztRQUU5QixJQUFLQyxrQkFBbUI7WUFDdEJOLFNBQVNPLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxTQUFTLEdBQUc7WUFDaENULGFBQWFLLEtBQUssQ0FBQ0ssU0FBUyxHQUFHO1lBQy9CUCxZQUFZRSxLQUFLLENBQUNNLEtBQUssR0FBRztRQUM1QixPQUFPO1lBQ0xWLFNBQVNPLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxTQUFTLEdBQUc7WUFDaENULGFBQWFLLEtBQUssQ0FBQ0ssU0FBUyxHQUFHO1lBQy9CUCxZQUFZRSxLQUFLLENBQUNNLEtBQUssR0FBRztRQUM1QjtJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFnRTs7Ozs7O2tDQUMvRSw4REFBQ3BCLG9EQUFXQTt3QkFBQ29CLFdBQVU7Ozs7Ozs7Ozs7OztZQUd4Qk4sa0NBQ0QsOERBQUNmLGlEQUFNQSxDQUFDb0IsR0FBRztnQkFDVEMsV0FBVTtnQkFDVkMsU0FBUztvQkFBRUMsU0FBUztnQkFBRTtnQkFDdEJDLFNBQVM7b0JBQUVELFNBQVM7Z0JBQUU7Z0JBQ3RCVCxZQUFZO29CQUFFVyxVQUFVO2dCQUFJOzBCQUU1Qiw0RUFBQ0w7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0s7NENBQUVMLFdBQVU7c0RBQXNFOzs7Ozs7c0RBQ25GLDhEQUFDbkIsb0RBQUNBOzRDQUFDbUIsV0FBVTs0Q0FBeUNNLFNBQVNDOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHbkUsOERBQUNSO2dDQUFJQyxXQUFVOzBDQUdiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNEOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ0s7b0RBQUVMLFdBQVU7Ozs7Ozs4REFDYiw4REFBQ0Q7b0RBQUlDLFdBQVU7OERBQ2IsNEVBQUNRO3dEQUFFQyxNQUFLO3dEQUFHVCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWEzQztHQXBFd0JqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVhZGVyc0xpbmtzL1ByYVZvY2VMaW5rcy50c3g/NGE4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCB7IENoZXZyb25Eb3duLCBYIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByYVZvY2VMaW5rcygpIHtcclxuICBcclxuICAvLyBBYnJpciBvcyBsaW5rcyBkbyBoZWFkZXJcclxuICBjb25zdCBbIGlzUHJhVm9jZUxpbmtzT3BlbiAsIHNldElzUHJhVm9jZUxpbmtzT3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpIFxyXG5cclxuICBjb25zdCBoYW5kbGVQcmFWb2NlTGlua0FjZXNzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgUHJhVm9jZUFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1ByYVZvY2VBcnJvdycpIGFzIEhUTUxJbWFnZUVsZW1lbnRcclxuICAgIGNvbnN0IFByYVZvY2VMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1ByYVZvY2VMaW5rJykgYXMgSFRNTExpbmtFbGVtZW50XHJcblxyXG4gICAgc2V0SXNQcmFWb2NlTGlua3NPcGVuKCFpc1ByYVZvY2VMaW5rc09wZW4pXHJcblxyXG4gICAgLy8gVHJhbnNpY2FvIGRhIGludGVyIGFycm93XHJcbiAgICBJbnRlckFycm93LnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIC4ycyBlYXNlLWluLW91dCdcclxuICAgIFxyXG4gICAgaWYgKCBpc0ludGVyTGlua3NPcGVuICkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgICAgIFByYVZvY2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJ1xyXG4gICAgICBQcmFWb2NlTGluay5zdHlsZS5jb2xvciA9ICdyZ2IoMjIsIDIyLCAyMiknXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXHJcbiAgICAgIFByYVZvY2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC0xODBkZWcpJ1xyXG4gICAgICBQcmFWb2NlTGluay5zdHlsZS5jb2xvciA9ICcjZmY3YTAwJ1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBweS1bNV0gcHgtMSBtbC1bMTRweF1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LVsxNHB4XSBmb250LVtyZ2IoMjIsIDIyLCAyMildIGZvbnQtc2VtaWJvbGQgZm9udC1pbnRlciBcIj5QcmEgdm9jw6o8L2Rpdj5cclxuICAgICAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPVwiIHRleHQtWyNCNkI3QkJdIG1sLVs1cHhdXCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7aXNJbnRlckxpbmtzT3BlbiAmJiAoXHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLVsxMTRweF0gbGVmdC0wIHctZnVsbCBjYWxjSGVpZ2h0IHotMTAgYmctd2hpdGUgcHktNFwiXHJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzE0MjhweF0gaC1bNTAwcHhdXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1iLTQgcHgtM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGZvbnQtc29yYSBmb250LXNlbWlib2xkIHRleHQtWzIwcHhdICBsZWFkaW5nLVsyNXB4XSB0ZXh0LVsjMTYxNjE2XVwiPk8gSW50ZXI8L3A+XHJcbiAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgaC03IHctNyB0ZXh0LVsjQjZCN0JCXVwiIG9uQ2xpY2s9e2hhbmRsZUludGVyTGlua0FjZXNzfS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4LXdyYXAgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHsvKiAxwrAgSXRlbSBkbyBsaW5rICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBweC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy10cmFuc3BhcmVudCByb3VuZGVkLVs4cHhdIGJvcmRlci15LVsxcHhdIGJvcmRlci14LVsxcHhdIGJvcmRlci1bI2RlZGZlNF1cIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggcHgtWzE1cHhdIHB5LTQgZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgbWItNiBmb250LXNvcmEgZm9udC1zZW1pYm9sZCB0ZXh0LVsxNnB4XSBsZWFkaW5nLVsyMHB4XSB0ZXh0LVsjMTYxNjE2XSBcIj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBoLWZ1bGwgZmxleC1jb2wganVzdGlmeS1zdGFydCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtaW50ZXIgdGV4dC1bI0ZGN0EwMF0gZm9udC1ib2xkIHRleHQtWzE0cHhdIGxlYWRpbmctWzE3cHhdXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApfVxyXG5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJtb3Rpb24iLCJDaGV2cm9uRG93biIsIlgiLCJ1c2VTdGF0ZSIsIlByYVZvY2VMaW5rcyIsImlzUHJhVm9jZUxpbmtzT3BlbiIsInNldElzUHJhVm9jZUxpbmtzT3BlbiIsImhhbmRsZVByYVZvY2VMaW5rQWNlc3MiLCJQcmFWb2NlQXJyb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUHJhVm9jZUxpbmsiLCJJbnRlckFycm93Iiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiaXNJbnRlckxpbmtzT3BlbiIsImJvZHkiLCJvdmVyZmxvd1kiLCJ0cmFuc2Zvcm0iLCJjb2xvciIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwicCIsIm9uQ2xpY2siLCJoYW5kbGVJbnRlckxpbmtBY2VzcyIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/headersLinks/PraVoceLinks.tsx\n"));

/***/ })

});