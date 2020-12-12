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

var _jsxFileName = "/usr/src/app/components/HeaderProfile.js";


var HeaderBrace = function (_React$Component) {
    (0, _inherits3.default)(HeaderBrace, _React$Component);

    function HeaderBrace() {
        (0, _classCallCheck3.default)(this, HeaderBrace);

        return (0, _possibleConstructorReturn3.default)(this, (HeaderBrace.__proto__ || (0, _getPrototypeOf2.default)(HeaderBrace)).apply(this, arguments));
    }

    (0, _createClass3.default)(HeaderBrace, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement("div", {
                className: "jsx-1279425771" + " " + "column profile",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            }, _react2.default.createElement("figure", { onClick: function onClick() {
                    return _this2.props.toggle();
                }, className: "jsx-1279425771" + " " + "image",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement("img", { src: "/static/images/mypicture.jpg", className: "jsx-1279425771",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            })), _react2.default.createElement(_style2.default, {
                styleId: "1279425771",
                css: ".profile.jsx-1279425771{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}figure.jsx-1279425771{cursor:pointer;margin:0 auto;width:300px;height:300px;}@media screen and (max-width:769px){figure.jsx-1279425771{width:250px;height:250px;}}img.jsx-1279425771{-webkit-transition:-webkit-transform 1s ease-in-out;-webkit-transition:-webkit-transform 1s ease-in-out;-webkit-transition:transform 1s ease-in-out;transition:transform 1s ease-in-out;-webkit-animation:flip 1s;-webkit-animation:flip-jsx-1279425771 1s;animation:flip-jsx-1279425771 1s;}img.jsx-1279425771:hover{-webkit-transform:rotateY(360deg);-webkit-transform:rotateY(360deg);-ms-transform:rotateY(360deg);transform:rotateY(360deg);}@-webkit-keyframes flip{from.jsx-1279425771{-webkit-transform:rotateY(360deg) scale(0);-ms-transform:rotateY(360deg) scale(0);transform:rotateY(360deg) scale(0);}to.jsx-1279425771{-webkit-transform:rotateY(0deg) scale(1);-ms-transform:rotateY(0deg) scale(1);transform:rotateY(0deg) scale(1);}}@-webkit-keyframes flip-jsx-1279425771{from{-webkit-transform:rotateY(360deg) scale(0);-ms-transform:rotateY(360deg) scale(0);transform:rotateY(360deg) scale(0);}to{-webkit-transform:rotateY(0deg) scale(1);-ms-transform:rotateY(0deg) scale(1);transform:rotateY(0deg) scale(1);}}@keyframes flip-jsx-1279425771{from{-webkit-transform:rotateY(360deg) scale(0);-ms-transform:rotateY(360deg) scale(0);transform:rotateY(360deg) scale(0);}to{-webkit-transform:rotateY(0deg) scale(1);-ms-transform:rotateY(0deg) scale(1);transform:rotateY(0deg) scale(1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyUHJvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTNEIsQUFHc0MsQUFLRSxBQU9DLEFBS29DLEFBTWxCLEFBS0ssQUFHRixBQUtFLEFBR0YsWUExQnBCLEdBUEgsVUFRZCxJQVBZLEtBaUJjLE9BaEJiLFdBVXVCLEVBVHhDLG9CQVIyQixxQ0ErQnZCLEFBUUEsTUFYQSxBQVFBLE9BWkosaURBdkIwQixXQWlCSSwwQkFDUix5Q0FqQnRCLGlDQWtCQSIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlclByb2ZpbGUuanMiLCJzb3VyY2VSb290IjoiL3Vzci9zcmMvYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyQnJhY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2VcIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy50b2dnbGUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9teXBpY3R1cmUuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpZ3VyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlndXJlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmxpcCAxcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmbGlwIDFzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbWc6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZsaXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpIHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZsaXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpIHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=components/HeaderProfile.js */"
            }));
        }
    }]);

    return HeaderBrace;
}(_react2.default.Component);

exports.default = HeaderBrace;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlckJyYWNlIiwicHJvcHMiLCJ0b2dnbGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztJLEFBRWM7Ozs7Ozs7Ozs7O2lDQUNSO3lCQUNMOzttQ0FDSSxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQSxZQUEwQixTQUFTLG1CQUFBOzJCQUFJLE9BQUEsQUFBSyxNQUFULEFBQUksQUFBVztBQUFsRCx1REFBQSxBQUFrQjs7OEJBQWxCO2dDQUFBLEFBQ0k7QUFESjtzREFDUyxLQUFMLEFBQVMsMkNBQVQ7OzhCQUFBO2dDQUZSLEFBQ0ksQUFDSTtBQUFBOzt5QkFGUjtxQkFESixBQUNJLEFBbURQO0FBbkRPOzs7OztFQUg2QixnQixBQUFNOztrQixBQUExQiIsImZpbGUiOiJIZWFkZXJQcm9maWxlLmpzIiwic291cmNlUm9vdCI6Ii91c3Ivc3JjL2FwcCJ9