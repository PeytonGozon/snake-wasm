(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/snake_wasm_pgozon.js":
/*!***********************************!*\
  !*** ../pkg/snake_wasm_pgozon.js ***!
  \***********************************/
/*! exports provided: UniverseTickOutcomes, Direction, Block, Universe, __wbg_floor_ecd9cd89028e4982, __wbg_random_f1dabdd9f148bad5, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake_wasm_pgozon_bg.wasm */ \"../pkg/snake_wasm_pgozon_bg.wasm\");\n/* harmony import */ var _snake_wasm_pgozon_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake_wasm_pgozon_bg.js */ \"../pkg/snake_wasm_pgozon_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"UniverseTickOutcomes\", function() { return _snake_wasm_pgozon_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"UniverseTickOutcomes\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Direction\", function() { return _snake_wasm_pgozon_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Direction\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Block\", function() { return _snake_wasm_pgozon_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Block\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _snake_wasm_pgozon_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_floor_ecd9cd89028e4982\", function() { return _snake_wasm_pgozon_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_floor_ecd9cd89028e4982\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_f1dabdd9f148bad5\", function() { return _snake_wasm_pgozon_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_f1dabdd9f148bad5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _snake_wasm_pgozon_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/snake_wasm_pgozon.js?");

/***/ }),

/***/ "../pkg/snake_wasm_pgozon_bg.js":
/*!**************************************!*\
  !*** ../pkg/snake_wasm_pgozon_bg.js ***!
  \**************************************/
/*! exports provided: UniverseTickOutcomes, Direction, Block, Universe, __wbg_floor_ecd9cd89028e4982, __wbg_random_f1dabdd9f148bad5, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UniverseTickOutcomes\", function() { return UniverseTickOutcomes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Direction\", function() { return Direction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Block\", function() { return Block; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_floor_ecd9cd89028e4982\", function() { return __wbg_floor_ecd9cd89028e4982; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_f1dabdd9f148bad5\", function() { return __wbg_random_f1dabdd9f148bad5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake_wasm_pgozon_bg.wasm */ \"../pkg/snake_wasm_pgozon_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nconst UniverseTickOutcomes = Object.freeze({ Continue:0,\"0\":\"Continue\",Loss:1,\"1\":\"Loss\",Win:2,\"2\":\"Win\", });\n/**\n*/\nconst Direction = Object.freeze({ Up:0,\"0\":\"Up\",Down:1,\"1\":\"Down\",Left:2,\"2\":\"Left\",Right:3,\"3\":\"Right\", });\n/**\n*/\nclass Block {\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_block_free\"](ptr);\n    }\n}\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n    }\n    /**\n    * @param {number} rows\n    * @param {number} cols\n    * @returns {Universe}\n    */\n    static new(rows, cols) {\n        const ret = _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"](rows, cols);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    tick() {\n        const ret = _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    rows() {\n        const ret = _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_rows\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    cols() {\n        const ret = _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_cols\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {Uint8Array}\n    */\n    snake_to_coordinates() {\n        try {\n            const retptr = _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_snake_to_coordinates\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            var v0 = getArrayU8FromWasm0(r0, r1).slice();\n            _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1 * 1);\n            return v0;\n        } finally {\n            _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n        }\n    }\n    /**\n    * @param {number} d\n    */\n    snake_buffer_direction(d) {\n        _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_snake_buffer_direction\"](this.ptr, d);\n    }\n    /**\n    * @returns {Uint8Array}\n    */\n    food_to_coordinates() {\n        try {\n            const retptr = _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_food_to_coordinates\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            var v0 = getArrayU8FromWasm0(r0, r1).slice();\n            _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1 * 1);\n            return v0;\n        } finally {\n            _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n        }\n    }\n    /**\n    */\n    toggle_pause() {\n        _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_toggle_pause\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    snake_length() {\n        const ret = _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_snake_length\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    */\n    generate_new_food() {\n        _snake_wasm_pgozon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_generate_new_food\"](this.ptr);\n    }\n}\n\nconst __wbg_floor_ecd9cd89028e4982 = typeof Math.floor == 'function' ? Math.floor : notDefined('Math.floor');\n\nconst __wbg_random_f1dabdd9f148bad5 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/snake_wasm_pgozon_bg.js?");

/***/ }),

/***/ "../pkg/snake_wasm_pgozon_bg.wasm":
/*!****************************************!*\
  !*** ../pkg/snake_wasm_pgozon_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, __wbg_universe_free, universe_new, universe_tick, universe_rows, universe_cols, universe_snake_to_coordinates, universe_snake_buffer_direction, universe_food_to_coordinates, universe_toggle_pause, universe_snake_length, universe_generate_new_food, __wbg_block_free, __wbindgen_add_to_stack_pointer, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./snake_wasm_pgozon_bg.js */ \"../pkg/snake_wasm_pgozon_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/snake_wasm_pgozon_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var snake_wasm_pgozon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snake-wasm-pgozon */ \"../pkg/snake_wasm_pgozon.js\");\n\n\nconst canvas = document.getElementById(\"snake-canvas\");\nconst statusField = document.getElementById(\"status\");\nconst ctx = canvas.getContext('2d');\n\nconst COLOR_BACKGROUND   = \"#d4f1f4\";\nconst COLOR_SNAKE_PIECE_FILL   = \"#75E6DA\";\nconst COLOR_SNAKE_PIECE_BORDER = \"#189AB4\";\nconst COLOR_FOOD = \"#05445E\";\nconst FPS = 15;\nconst ROWS = 40;\nconst COLS = 40;\n\nlet universe = null;\nlet gameLoopIntervalId = -1;\nlet gameOver = false;\n\nconst render = () => {\n    const snakeCoordinates = universe.snake_to_coordinates();\n\n    const cellWidth  = canvas.width  / universe.cols();\n    const cellHeight = canvas.height / universe.rows();\n\n    ctx.beginPath();\n\n    // Clear the canvas\n    ctx.fillStyle = COLOR_BACKGROUND;\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    // Draw the snake pieces\n    ctx.fillStyle = COLOR_SNAKE_PIECE_FILL;\n    ctx.strokeStyle = COLOR_SNAKE_PIECE_BORDER;\n\n    const to_pixel = (i, size) => i * size + 0.5;\n\n    for (let i = 0; i < snakeCoordinates.length; i += 2) {\n        const cellRow = snakeCoordinates[i];\n        const cellCol = snakeCoordinates[i+1];\n\n        // Adding 0.5 to x and y to \"straddle the pixels\" -- this is done to make the rendering on the canvas not blurry.\n        // https://stackoverflow.com/questions/8696631/canvas-drawings-like-lines-are-blurry\n        const x = to_pixel(cellCol, cellWidth);\n        const y = to_pixel(cellRow, cellHeight);\n\n        ctx.fillRect(x, y, cellWidth, cellHeight);  // Draw the cell\n        ctx.rect(x, y, cellWidth, cellHeight);      // Draw a small boarder around each snake piece.\n    }\n\n    // Draw the food\n    const foodCoordinates = universe.food_to_coordinates();\n    const foodX = to_pixel(foodCoordinates[1], cellWidth);\n    const foodY = to_pixel(foodCoordinates[0], cellHeight);\n\n    ctx.fillStyle = COLOR_FOOD;\n    ctx.fillRect(foodX, foodY, cellWidth, cellHeight);\n    ctx.rect(foodX, foodY, cellWidth, cellHeight);\n\n    ctx.stroke();\n}\n\nconst gameLoop = () => {\n    const universeUpdateCode = universe.tick();\n\n    if(!gameOver) {\n        gameOver = universeUpdateCode !== snake_wasm_pgozon__WEBPACK_IMPORTED_MODULE_0__[\"UniverseTickOutcomes\"].Continue;\n        renderStatusMessage();\n        requestAnimationFrame(render);\n    } else {\n        if (universeUpdateCode === snake_wasm_pgozon__WEBPACK_IMPORTED_MODULE_0__[\"UniverseTickOutcomes\"].Win) {\n            renderStatusMessage(\"Congratulations -- You won! That's no small feat :^)\");\n        } else {  // We have universe.tick returned UniverseTickOutcomes.Loss\n            renderStatusMessage(\"You lost! Press {esc} to play again!\");\n        }\n\n        // Stop updating the game every 15 fps.\n        clearInterval(gameLoopIntervalId);\n    }\n}\n\nconst resetGame = () => {\n    universe = snake_wasm_pgozon__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new(ROWS, COLS);\n    gameOver = false;\n    renderStatusMessage();\n    gameLoopIntervalId = setInterval(gameLoop, 1000/FPS);\n}\n\nconst onReady = () => {\n    resetGame();\n\n    document.addEventListener(\"keydown\", (event) => {\n        switch (event.code) {\n            case \"ArrowUp\":    universe.snake_buffer_direction(snake_wasm_pgozon__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Up);    break;\n            case \"ArrowDown\":  universe.snake_buffer_direction(snake_wasm_pgozon__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Down);  break;\n            case \"ArrowLeft\":  universe.snake_buffer_direction(snake_wasm_pgozon__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Left);  break;\n            case \"ArrowRight\": universe.snake_buffer_direction(snake_wasm_pgozon__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Right); break;\n            case \"Space\":      universe.toggle_pause(); break;\n            case \"Escape\":     resetGame(); break;\n        }\n    });\n}\n\nconst renderStatusMessage = (message) => {\n    if (message === undefined) {\n        message = \"You got this!\";\n    }\n    statusField.innerText = message + \"\\n\" + lengthToMessage(universe.snake_length());\n}\n\nconst lengthToMessage = (length) => {\n    let str = \"Snake length: \" + length + \". \";\n\n    if (length < 5) {\n        str += \"Very smol :^)\";\n    } else if (length < 10) {\n        str += \"smol :o\";\n    } else if (length < 20) {\n        str += \"big boi =^-^=\";\n    } else {\n        str += \"woahhhhhh!\";\n    }\n\n    return str;\n}\n\nif (document.readyState !== \"loading\") {\n    onReady();\n} else {\n    document.addEventListener(\"DOMContentLoaded\", onReady);\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);