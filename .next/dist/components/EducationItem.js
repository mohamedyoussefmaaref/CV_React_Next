"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/usr/src/app/components/EducationItem.js";


var EducationItem = function (_React$Component) {
    (0, _inherits3.default)(EducationItem, _React$Component);

    function EducationItem() {
        (0, _classCallCheck3.default)(this, EducationItem);

        return (0, _possibleConstructorReturn3.default)(this, (EducationItem.__proto__ || (0, _getPrototypeOf2.default)(EducationItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(EducationItem, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                color = _props.color,
                name = _props.name,
                time = _props.time,
                gpa = _props.gpa,
                major = _props.major;

            return _react2.default.createElement("div", {
                className: _style2.default.dynamic([["3511725159", [color, color]]]) + " " + "columns wrapper",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement("div", {
                className: _style2.default.dynamic([["3511725159", [color, color]]]) + " " + "column item is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement("div", {
                className: _style2.default.dynamic([["3511725159", [color, color]]]) + " " + "columns",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, _react2.default.createElement("div", {
                className: _style2.default.dynamic([["3511725159", [color, color]]]) + " " + "column is-9 has-text-left school",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement("p", {
                className: _style2.default.dynamic([["3511725159", [color, color]]]),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, time), _react2.default.createElement("h4", {
                className: _style2.default.dynamic([["3511725159", [color, color]]]) + " " + "name",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, name), major && _react2.default.createElement("i", {
                className: _style2.default.dynamic([["3511725159", [color, color]]]),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, "Major: ", major)))), _react2.default.createElement(_style2.default, {
                styleId: "3511725159",
                css: ".wrapper.__jsx-style-dynamic-selector{padding-top:15px;padding-bottom:15px;}.item.__jsx-style-dynamic-selector{border-left:8px solid " + color + ";background-color:#ffffff;box-shadow:10px 10px 0px #333333;}.school.__jsx-style-dynamic-selector .name.__jsx-style-dynamic-selector{font-weight:bold;font-size:1.3em;color:" + color + ";}.gpa.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-size:1.8em;color:#e74c3c;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRWR1Y2F0aW9uSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQjRCLEFBRzBDLEFBSWtDLEFBUWxDLEFBS0QsZ0JBQ0YsQ0FqQk0sQUFZSixhQU1wQixHQUx1QyxJQVp2QyxjQUc2QixpQkFVN0IsUUFUcUMsaUNBQ3JDIiwiZmlsZSI6ImNvbXBvbmVudHMvRWR1Y2F0aW9uSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL3NyYy9hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZHVjYXRpb25JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyBjb2xvciwgbmFtZSwgdGltZSwgZ3BhLCBtYWpvciB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyB3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpdGVtIGlzLTEwIGlzLW9mZnNldC0xIGlzLTYtZGVza3RvcCBpcy1vZmZzZXQtMy1kZXNrdG9wIGlzLTEwLW1vYmlsZSBpcy1vZmZzZXQtMS1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtOSBoYXMtdGV4dC1sZWZ0IHNjaG9vbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RpbWV9PC9wPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWFqb3IgJiYgPGk+TWFqb3I6IHttYWpvcn08L2k+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4OyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgJHtjb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAwcHggIzMzMzMzMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNjaG9vbCAudGltZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2Nob29sIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmdwYSBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTc0YzNjO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=components/EducationItem.js */",
                dynamic: [color, color]
            }));
        }
    }]);

    return EducationItem;
}(_react2.default.Component);

exports.default = EducationItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRWR1Y2F0aW9uSXRlbS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkVkdWNhdGlvbkl0ZW0iLCJwcm9wcyIsImNvbG9yIiwibmFtZSIsInRpbWUiLCJncGEiLCJtYWpvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0ksQUFFYzs7Ozs7Ozs7Ozs7aUNBQ1I7eUJBQ21DLEtBRG5DLEFBQ3dDO2dCQUR4QyxBQUNDLGVBREQsQUFDQztnQkFERCxBQUNRLGNBRFIsQUFDUTtnQkFEUixBQUNjLGNBRGQsQUFDYztnQkFEZCxBQUNvQixhQURwQixBQUNvQjtnQkFEcEIsQUFDeUIsZUFEekIsQUFDeUIsQUFDOUI7O21DQUNJLGNBQUE7b0VBQUEsQUFtQnFDLE9BbkJyQyxBQTZCcUIsa0JBN0JyQixBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7b0VBQUEsQUFrQmlDLE9BbEJqQyxBQTRCaUIsa0JBNUJqQixBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBO29FQUFBLEFBaUI2QixPQWpCN0IsQUEyQmEsa0JBM0JiLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7b0VBQUEsQUFnQnlCLE9BaEJ6QixBQTBCUyxrQkExQlQsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTtvRUFBQSxBQWVxQixPQWZyQixBQXlCSzs7OEJBekJMO2dDQUFBLEFBQUk7QUFBSjtBQUFBLGVBREosQUFDSSxBQUNBLHVCQUFBLGNBQUE7b0VBQUEsQUFjcUIsT0FkckIsQUF3Qkssa0JBeEJMLEFBQWM7OzhCQUFkO2dDQUFBLEFBQ0s7QUFETDtBQUFBLGVBRkosQUFFSSxBQUdFLGdDQUFTLGNBQUE7b0VBQUEsQUFXVSxPQVhWLEFBcUJOOzs4QkFyQk07Z0NBQUE7QUFBQTtBQUFBLGFBQUEsRUFBVyxXQVJ0QyxBQUNJLEFBQ0ksQUFDSSxBQUtlO3lCQVIzQjsrSkFBQSxBQW1CcUMsd0xBbkJyQyxBQTZCcUIsUUE3QnJCOzBCQUFBLEFBbUJxQyxPQXBCekMsQUFDSSxBQTZCcUIsQUFTNUI7QUF0Q087Ozs7O0VBSitCLGdCLEFBQU07O2tCLEFBQTVCIiwiZmlsZSI6IkVkdWNhdGlvbkl0ZW0uanMiLCJzb3VyY2VSb290IjoiL3Vzci9zcmMvYXBwIn0=