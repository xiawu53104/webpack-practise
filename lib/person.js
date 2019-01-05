"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Person =
/*#__PURE__*/
function () {
  function Person(name, age) {
    (0, _classCallCheck2.default)(this, Person);
    this.name = name;
    this.age = age;
  }

  (0, _createClass2.default)(Person, [{
    key: "sayHi",
    value: function sayHi() {
      console.log('hello, my name is ' + this.name);
    }
  }]);
  return Person;
}();

var xiaoming = new Person('xiaoming', 18);
xiaoming.sayHi();

var t = function t() {
  return new Promise(function (resolve) {
    resolve('test');
  });
};

t().then(function (data) {
  return console.log('test');
});