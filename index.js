/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(1);

	var _Vector2D = __webpack_require__(2);

	var _Vector2D2 = _interopRequireDefault(_Vector2D);

	var _Canvas = __webpack_require__(3);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	var _Rectangle2 = __webpack_require__(4);

	var _Rectangle3 = _interopRequireDefault(_Rectangle2);

	var _Square = __webpack_require__(6);

	var _Square2 = _interopRequireDefault(_Square);

	var _AnimationFrame = __webpack_require__(7);

	var _AnimationFrame2 = _interopRequireDefault(_AnimationFrame);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var canvas = new _Canvas2.default(new _Vector2D2.default(500, 500), '.canvas');

	var Moveable = function (_Rectangle) {
	    _inherits(Moveable, _Rectangle);

	    function Moveable(rect, speed) {
	        _classCallCheck(this, Moveable);

	        var _this = _possibleConstructorReturn(this, (Moveable.__proto__ || Object.getPrototypeOf(Moveable)).call(this, rect.pos, rect.sizeVector, rect.color, rect.filled));

	        _this.moveRight = false;
	        _this.moveLeft = false;
	        _this.moveUp = false;
	        _this.moveDown = true;
	        _this.speed = speed;
	        return _this;
	    }

	    _createClass(Moveable, [{
	        key: 'move',
	        value: function move() {
	            if (this.moveRight) this.pos.x += this.speed;
	            if (this.moveLeft) this.pos.x -= this.speed;
	            if (this.moveDown) this.pos.y += this.speed;
	            if (this.moveUp) this.pos.y -= this.speed;
	        }
	    }, {
	        key: 'direction',
	        value: function direction(canvas) {

	            if (this.moveRight) {
	                if (this.pos.x > canvas.elem.width - this.sizeVector.x - this.speed) {
	                    this.moveRight = false;
	                    this.moveLeft = false;
	                    this.moveUp = false;
	                    this.moveDown = false;
	                }
	            }

	            if (this.moveLeft) {
	                if (this.pos.x < this.sizeVector.x + this.speed) {
	                    this.moveRight = false;
	                    this.moveLeft = false;
	                    this.moveDown = false;
	                    this.moveUp = false;
	                }
	            }

	            if (this.moveUp) {
	                if (this.pos.y < this.sizeVector.y + this.speed) {
	                    this.moveRight = false;
	                    this.moveLeft = false;
	                    this.moveDown = true;
	                    this.moveUp = false;
	                }
	            }

	            if (this.moveDown) {
	                if (this.pos.y > canvas.elem.height - this.sizeVector.y * 2 - this.speed) {
	                    this.moveRight = false;
	                    this.moveUp = true;
	                    this.moveDown = false;
	                    this.moveLeft = false;
	                }
	            }
	        }
	    }]);

	    return Moveable;
	}(_Rectangle3.default);

	var sqs = [new Moveable(new _Rectangle3.default(new _Vector2D2.default(0, 0), new _Vector2D2.default(60, 20), '#fb35fe', true), 20), new Moveable(new _Rectangle3.default(new _Vector2D2.default(canvas.elem.width - 60, 20), new _Vector2D2.default(60, 20), '#22fe0a', true), 20), new Moveable(new _Rectangle3.default(new _Vector2D2.default(90, 20), new _Vector2D2.default(60, 20), '#fec045', true), 20)];

	canvas.addObjects(sqs);

	var af = new _AnimationFrame2.default(canvas);

	af.update = function () {

	    sqs.forEach(function (s) {
	        s.direction(canvas);
	        s.move();
	    });
	};

	af.run();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {

	    /** @param {class} c **/
	    Object.prototype.isType = function (c) {
	        return Object.getPrototypeOf(this) === c.prototype;
	    };
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Vector2D = function () {

	    /**
	     * @param {number} x
	     * @param {number} y
	     */
	    function Vector2D(x, y) {
	        _classCallCheck(this, Vector2D);

	        this.x = x;
	        this.y = y;
	    }

	    _createClass(Vector2D, [{
	        key: "diff",
	        value: function diff(vector) {
	            return new Vector2D(this.x - vector.x, this.y - vector.y);
	        }
	    }, {
	        key: "add",
	        value: function add(vector) {
	            return new Vector2D(this.x + vector.x, this.y + vector.y);
	        }
	    }, {
	        key: "dec",
	        value: function dec(vector) {
	            return new Vector2D(this.x - vector.x, this.y - vector.y);
	        }
	    }]);

	    return Vector2D;
	}();

	exports.default = Vector2D;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Canvas = function () {

	    /**
	     * @param {Vector2D} size
	     * @param {string} query
	     */
	    function Canvas(size, query) {
	        _classCallCheck(this, Canvas);

	        this.elem = document.querySelector(query);
	        this.pen = this.elem.getContext('2d');
	        this.elem.width = size.x;
	        this.elem.height = size.y;
	        this.elem.style.width = size.x + 'px';
	        this.elem.style.height = size.y + 'px';
	        this.objects = [];
	    }

	    _createClass(Canvas, [{
	        key: 'draw',
	        value: function draw() {
	            var _this = this;

	            this.pen.clearRect(0, 0, this.elem.width, this.elem.height);
	            this.objects.forEach(function (obj) {
	                obj.draw(_this);
	            });
	        }
	    }, {
	        key: 'addObjects',
	        value: function addObjects(objects) {
	            var _this2 = this;

	            objects.forEach(function (obj) {
	                _this2.objects.push(obj);
	            });
	        }
	    }]);

	    return Canvas;
	}();

	exports.default = Canvas;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _IShape2 = __webpack_require__(5);

	var _IShape3 = _interopRequireDefault(_IShape2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Rectangle = function (_IShape) {
	    _inherits(Rectangle, _IShape);

	    /**
	     * @param {Vector2D} pos
	     * @param {Vector2D} sizeVector
	     * @param {string} color
	     * @param {boolean} filled
	     */
	    function Rectangle(pos, sizeVector, color, filled) {
	        _classCallCheck(this, Rectangle);

	        var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this));

	        _this.pos = pos;
	        _this.sizeVector = sizeVector;
	        _this.color = color;
	        _this.filled = filled;
	        return _this;
	    }

	    /** @param {Canvas} canvas **/


	    _createClass(Rectangle, [{
	        key: 'draw',
	        value: function draw(canvas) {
	            if (this.filled) {
	                canvas.pen.fillStyle = this.color;
	                canvas.pen.fillRect(this.pos.x, this.pos.y, this.sizeVector.x, this.sizeVector.y);
	            } else {
	                canvas.pen.strokeStyle = this.color;
	                canvas.pen.strokeRect(this.pos.x, this.pos.y, this.sizeVector.x, this.sizeVector.y);
	            }
	        }
	    }]);

	    return Rectangle;
	}(_IShape3.default);

	exports.default = Rectangle;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var IShape = function () {
	    function IShape() {
	        _classCallCheck(this, IShape);
	    }

	    /** {Canvas} canvas **/


	    _createClass(IShape, [{
	        key: 'draw',
	        value: function draw(canvas) {
	            throw new NotImplementedError('The function `IShape::draw` has not been implemented.');
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            throw new NotImplementedError('The function `IShape::update` has not been implemented.');
	        }
	    }]);

	    return IShape;
	}();

	exports.default = IShape;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Rectangle2 = __webpack_require__(4);

	var _Rectangle3 = _interopRequireDefault(_Rectangle2);

	var _Vector2D = __webpack_require__(2);

	var _Vector2D2 = _interopRequireDefault(_Vector2D);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Square = function (_Rectangle) {
	    _inherits(Square, _Rectangle);

	    /**
	     * @param {Vector2D} pos
	     * @param {number} size
	     * @param {string} color
	     * @param {boolean} filled
	     */
	    function Square(pos, size, color, filled) {
	        _classCallCheck(this, Square);

	        return _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, pos, new _Vector2D2.default(size, size), color, filled));
	    }

	    return Square;
	}(_Rectangle3.default);

	exports.default = Square;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AnimationFrame = function () {

	    /** @param {Canvas} canvas **/
	    function AnimationFrame(canvas) {
	        _classCallCheck(this, AnimationFrame);

	        this.update = Function;
	        this.c = canvas;
	        this.fps = 50;
	        this.renderSettings = {
	            now: 0,
	            then: Date.now(),
	            delta: 0
	        };
	        this.updateSettings = {
	            now: 0,
	            diff: 0,
	            speed: 100,
	            then: Date.now(),
	            delta: 0
	        };
	    }

	    _createClass(AnimationFrame, [{
	        key: "run",
	        value: function run() {
	            var _this = this;

	            var render = function render() {
	                requestAnimationFrame(render);

	                _this.renderSettings.now = Date.now();
	                _this.renderSettings.delta = _this.renderSettings.now - _this.renderSettings.then;

	                if (_this.renderSettings.delta > 1000 / _this.fps) {
	                    _this.c.draw();
	                    _this.renderSettings.then = _this.renderSettings.now - _this.renderSettings.delta % 1000 / _this.fps;
	                }
	            };

	            var update = function update() {
	                requestAnimationFrame(update);

	                _this.updateSettings.now = Date.now();
	                _this.updateSettings.delta = _this.updateSettings.now - _this.updateSettings.then;

	                if (_this.updateSettings.delta + _this.updateSettings.diff > 1000 / _this.updateSettings.speed) {
	                    _this.update();
	                    _this.updateSettings.then = _this.updateSettings.now - _this.updateSettings.delta % 1000 / _this.updateSettings.speed;
	                    _this.updateSettings.diff = _this.updateSettings.delta - 1000 / _this.updateSettings.speed;
	                }
	            };

	            requestAnimationFrame(function () {
	                render();
	            });

	            requestAnimationFrame(function () {
	                update();
	            });
	        }
	    }]);

	    return AnimationFrame;
	}();

	exports.default = AnimationFrame;

/***/ }
/******/ ]);