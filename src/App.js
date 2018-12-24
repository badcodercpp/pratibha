"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _logo = _interopRequireDefault(require("./logo.svg"));

require("./App.css");

var _test = _interopRequireDefault(require("./pratibha/test/test"));

var _map = require("./pratibha/@core/map");

var _index = require("./pratibha/@decorator/index");

var _dec, _dec2, _dec3, _class, _temp;

var w = new _map.WritableMap([{
  a: "hi ajay",
  b: "hello pratibha"
}]);
var x = w.create();
console.log("Writable map");
console.log(x);
var r = new _map.ReadableMap(x);
var read = r.read();
console.log("readable map");
console.log(read);
var App = (_dec = (0, _index.Link)(), _dec2 = (0, _index.P)(), _dec3 = (0, _index.Div)(), _dec(_class = _dec2(_class = _dec3(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(App, _Component);

  function App(props) {
    var _this;

    (0, _classCallCheck2.default)(this, App);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "_click_p", function (e) {
      e.preventDefault();
      e.stopPropagation();
      alert("hi");
    });
    _this.Link = _this.constructor.Link;
    _this.Div = _this.constructor.Div;
    _this.P = _this.constructor.P;
    return _this;
  }

  (0, _createClass2.default)(App, [{
    key: "render",
    value: function render() {
      console.log(this.constructor.Link);
      console.log(this.constructor.P);
      return _react.default.createElement("div", {
        className: "App"
      }, this.Link({
        href: "/ajay_jha",
        style: {
          color: "red"
        }
      }, "click me"), this.Link({
        href: "/haha",
        style: {
          color: "blue"
        }
      }, "click me different action"), this.P({
        style: {
          color: "green"
        },
        onClick: this._click_p
      }, "clickable paragraph"), this.Div({
        style: {
          color: "green"
        },
        onClick: this._click_p
      }, [this.Link({
        href: "/ajay_jha",
        style: {
          color: "yellow"
        },
        key: 0
      }, "clickable as children"), this.P({
        style: {
          color: "green"
        },
        onClick: this._click_p,
        key: 1
      }, "clickable paragraph")]));
    }
  }]);
  return App;
}(_react.Component), _temp)) || _class) || _class) || _class);
var _default = App;
exports.default = _default;
