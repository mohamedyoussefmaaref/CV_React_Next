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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _About = require('./../components/About');

var _About2 = _interopRequireDefault(_About);

var _Experiences = require('./../components/Experiences');

var _Experiences2 = _interopRequireDefault(_Experiences);

var _Education = require('./../components/Education');

var _Education2 = _interopRequireDefault(_Education);

var _Skills = require('./../components/Skills');

var _Skills2 = _interopRequireDefault(_Skills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/usr/src/app/pages/index.js?entry';


var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index() {
        (0, _classCallCheck3.default)(this, Index);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

        _this.state = {
            mounted: false
        };
        return _this;
    }

    (0, _createClass3.default)(Index, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ mounted: true });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.mounted) {
                return _react2.default.createElement('main', {
                    className: 'jsx-1133136544',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                }, _react2.default.createElement(_Header2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }), _react2.default.createElement(_About2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }), _react2.default.createElement(_Experiences2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }), _react2.default.createElement(_Education2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                }), _react2.default.createElement(_Skills2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                }), _react2.default.createElement(_style2.default, {
                    styleId: '1133136544',
                    css: 'body{font-family:\'Questrial\',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCc0MsQUFHaUUsbUNBQ3hDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii91c3Ivc3JjL2FwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBBYm91dCBmcm9tICcuLy4uL2NvbXBvbmVudHMvQWJvdXQnXHJcbmltcG9ydCBFeHBlcmllbmNlcyBmcm9tICcuLy4uL2NvbXBvbmVudHMvRXhwZXJpZW5jZXMnXHJcbmltcG9ydCBFZHVjYXRpb24gZnJvbSAnLi8uLi9jb21wb25lbnRzL0VkdWNhdGlvbidcclxuaW1wb3J0IFNraWxscyBmcm9tICcuLy4uL2NvbXBvbmVudHMvU2tpbGxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1vdW50ZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdW50ZWQ6dHJ1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgICAgICAgICAgICA8RXhwZXJpZW5jZXMgLz5cclxuICAgICAgICAgICAgICAgICAgIDxFZHVjYXRpb24gLz5cclxuICAgICAgICAgICAgICAgICAgIDxTa2lsbHMgLz5cclxuICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm8gaXMtbGlnaHQgaXMtZnVsbGhlaWdodCBoYXMtdGV4dC1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Mb2FkaW5nLi4uPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59Il19 */\n/*@ sourceURL=pages/index.js?entry */'
                }));
            } else {
                return _react2.default.createElement('section', { className: 'hero is-light is-fullheight has-text-centered', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                }, _react2.default.createElement('div', { className: 'hero-body', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                }, _react2.default.createElement('div', { className: 'container', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                }, _react2.default.createElement('h1', { className: 'title', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                }, 'Loading...'))));
            }
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIkhlYWRlciIsIkFib3V0IiwiRXhwZXJpZW5jZXMiLCJFZHVjYXRpb24iLCJTa2lsbHMiLCJJbmRleCIsInN0YXRlIiwibW91bnRlZCIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUVFO21DQUNqQjs7cUJBQWM7NENBQUE7O2tJQUVWOztjQUFBLEFBQUs7cUJBRkssQUFFVixBQUFhLEFBQ0E7QUFEQSxBQUNUO2VBRVA7Ozs7OzRDQUVtQixBQUNoQjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFmLEFBQWMsQUFBUyxBQUMxQjs7OztpQ0FFUSxBQUNMO2dCQUFJLEtBQUEsQUFBSyxNQUFULEFBQWUsU0FBUyxBQUNwQjt1Q0FDSSxjQUFBOytCQUFBOztrQ0FBQTtvQ0FBQSxBQUNHO0FBREg7QUFBQSxpQkFBQSxrQkFDRyxBQUFDOztrQ0FBRDtvQ0FESCxBQUNHLEFBQ0E7QUFEQTtBQUFBLG9DQUNBLEFBQUM7O2tDQUFEO29DQUZILEFBRUcsQUFDQTtBQURBO0FBQUEsb0NBQ0EsQUFBQzs7a0NBQUQ7b0NBSEgsQUFHRyxBQUNBO0FBREE7QUFBQSxvQ0FDQSxBQUFDOztrQ0FBRDtvQ0FKSCxBQUlHLEFBQ0E7QUFEQTtBQUFBLG9DQUNBLEFBQUM7O2tDQUFEO29DQUxILEFBS0c7QUFBQTtBQUFBOzZCQUxIO3lCQURKLEFBQ0ksQUFhUDtBQWJPO0FBRlIsbUJBZU8sQUFDSDt1Q0FDSSxjQUFBLGFBQVMsV0FBVCxBQUFtQjtrQ0FBbkI7b0NBQUEsQUFDQTtBQURBO2lCQUFBLGtCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7a0NBQWY7b0NBQUEsQUFDRTtBQURGO21DQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7a0NBQWY7b0NBQUEsQUFDRTtBQURGO21DQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7a0NBQWQ7b0NBQUE7QUFBQTttQkFKUixBQUNJLEFBQ0EsQUFDRSxBQUNFLEFBS1g7QUFDSjs7Ozs7RUF2QzhCLGdCLEFBQU07O2tCLEFBQXBCIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii91c3Ivc3JjL2FwcCJ9