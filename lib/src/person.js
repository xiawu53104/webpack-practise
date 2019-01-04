'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Person = function () {
  function Person(name, age) {
    (0, _classCallCheck3.default)(this, Person);

    this.name = name;
    this.age = age;
  }

  (0, _createClass3.default)(Person, [{
    key: 'sayHi',
    value: function sayHi() {
      console.log('hello, my name is ' + this.name);
    }
  }]);
  return Person;
}();

var xiaoming = new Person('xiaoming', 18);
xiaoming.sayHi();

var t = function t() {
  return new _promise2.default(function (resolve) {
    resolve('test');
  });
};

t().then(function (data) {
  return console.log('test');
});