'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _ExperiencesTimelineItem = require('./ExperiencesTimelineItem');

var _ExperiencesTimelineItem2 = _interopRequireDefault(_ExperiencesTimelineItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/usr/src/app/components/Experiences.js';


var Experiences = function (_React$Component) {
    (0, _inherits3.default)(Experiences, _React$Component);

    function Experiences() {
        (0, _classCallCheck3.default)(this, Experiences);

        return (0, _possibleConstructorReturn3.default)(this, (Experiences.__proto__ || (0, _getPrototypeOf2.default)(Experiences)).apply(this, arguments));
    }

    (0, _createClass3.default)(Experiences, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('section', {
                className: 'jsx-4002042116' + ' ' + 'hero wrapper has-text-centered',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement(_Title2.default, { title: 'Experiences', color: '#2c3e50', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }), _react2.default.createElement('div', {
                className: 'jsx-4002042116' + ' ' + 'container',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement(_ExperiencesTimelineItem2.default, { side: 'right', time: 'Nov 2020', color: '#3498db', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement('h4', { style: { 'color': '#3498db' }, className: 'jsx-4002042116',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, 'Vermeg'), _react2.default.createElement('p', {
                className: 'jsx-4002042116',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('i', {
                className: 'jsx-4002042116' + ' ' + 'position',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, 'BA-QA Engineer'))), _react2.default.createElement(_ExperiencesTimelineItem2.default, { side: 'left', time: 'Jun - Oct 2020', color: '#e67e22', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('h4', { style: { 'color': '#e67e22' }, className: 'jsx-4002042116',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, 'Mobelite'), _react2.default.createElement('p', {
                className: 'jsx-4002042116',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('i', {
                className: 'jsx-4002042116' + ' ' + 'position',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'QA Engineer')))), _react2.default.createElement(_style2.default, {
                styleId: '4002042116',
                css: '.wrapper.jsx-4002042116{padding-top:50px;padding-bottom:50px;background:#bdc3c7;color:#333333;font-size:1.3em;}h4.jsx-4002042116{font-size:1.2em;font-weight:bold;}p.jsx-4002042116{font-size:0.8em;}i.position.jsx-4002042116{color:#c0392b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRXhwZXJpZW5jZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0I0QixBQUcwQyxBQU9ELEFBSUEsQUFHRixjQUNsQixFQVBxQixBQUlyQixDQVh3QixnQkFReEIsSUFQdUIsbUJBQ0wsY0FDRSxnQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9FeHBlcmllbmNlcy5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL3NyYy9hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJ1xyXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9FeHBlcmllbmNlc1RpbWVsaW5lSXRlbSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVyaWVuY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvIHdyYXBwZXIgaGFzLXRleHQtY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSB0aXRsZT1cIkV4cGVyaWVuY2VzXCIgY29sb3I9JyMyYzNlNTAnLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpbWVsaW5lIHNpZGU9XCJyaWdodFwiIHRpbWU9XCJOb3YgMjAyMFwiIGNvbG9yPVwiIzM0OThkYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3snY29sb3InOiAnIzM0OThkYid9fT5WZXJtZWc8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBvc2l0aW9uXCI+QkEtUUEgRW5naW5lZXI8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpbWVsaW5lPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaW1lbGluZSBzaWRlPVwibGVmdFwiIHRpbWU9XCJKdW4gLSBPY3QgMjAyMFwiIGNvbG9yPVwiI2U2N2UyMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3snY29sb3InOiAnI2U2N2UyMid9fT5Nb2JlbGl0ZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicG9zaXRpb25cIj5RQSBFbmdpbmVlcjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGltZWxpbmU+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2JkYzNjNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpLnBvc2l0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjMDM5MmI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=components/Experiences.js */'
            }));
        }
    }]);

    return Experiences;
}(_react2.default.Component);

exports.default = Experiences;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRXhwZXJpZW5jZXMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUaXRsZSIsIlRpbWVsaW5lIiwiRXhwZXJpZW5jZXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVBOzs7Ozs7Ozs7OztpQ0FDUixBQUNMO21DQUNJLGNBQUE7b0RBQUEsQUFBbUI7OzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsaUNBQU0sT0FBUCxBQUFhLGVBQWMsT0FBM0IsQUFBaUM7OEJBQWpDO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyxtREFBUyxNQUFWLEFBQWUsU0FBUSxNQUF2QixBQUE0QixZQUFXLE9BQXZDLEFBQTZDOzhCQUE3QztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxRQUFJLE9BQU8sRUFBQyxTQUFaLEFBQVcsQUFBVSx3QkFBckI7OzhCQUFBO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EsMkJBQUEsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTtvREFBQSxBQUFhOzs4QkFBYjtnQ0FBQTtBQUFBO0FBQUEsZUFKWixBQUNJLEFBRUksQUFDSSxBQUdSLHFDQUFBLEFBQUMsbURBQVMsTUFBVixBQUFlLFFBQU8sTUFBdEIsQUFBMkIsa0JBQWlCLE9BQTVDLEFBQWtEOzhCQUFsRDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxRQUFJLE9BQU8sRUFBQyxTQUFaLEFBQVcsQUFBVSx3QkFBckI7OzhCQUFBO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EsNkJBQUEsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTtvREFBQSxBQUFhOzs4QkFBYjtnQ0FBQTtBQUFBO0FBQUEsZUFaaEIsQUFFSSxBQU9JLEFBRUksQUFDSTt5QkFaaEI7cUJBREosQUFDSSxBQXNDUDtBQXRDTzs7Ozs7RUFINkIsZ0IsQUFBTTs7a0IsQUFBMUIiLCJmaWxlIjoiRXhwZXJpZW5jZXMuanMiLCJzb3VyY2VSb290IjoiL3Vzci9zcmMvYXBwIn0=