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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeaderBackground = require('./HeaderBackground');

var _HeaderBackground2 = _interopRequireDefault(_HeaderBackground);

var _HeaderProfile = require('./HeaderProfile');

var _HeaderProfile2 = _interopRequireDefault(_HeaderProfile);

var _HeaderBrace = require('./HeaderBrace');

var _HeaderBrace2 = _interopRequireDefault(_HeaderBrace);

var _HeaderTitle = require('./HeaderTitle');

var _HeaderTitle2 = _interopRequireDefault(_HeaderTitle);

var _HeaderButton = require('./HeaderButton');

var _HeaderButton2 = _interopRequireDefault(_HeaderButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/usr/src/app/components/Header.js';

var themes = {
    light: {
        background: '#f5f5f5',
        font: '#4a4a4a'
    },
    dark: {
        background: '#2f353f',
        font: '#e4e4e4'
    }
};

var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header() {
        (0, _classCallCheck3.default)(this, Header);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this));

        _this.state = {
            theme: 'light'
        };
        return _this;
    }

    (0, _createClass3.default)(Header, [{
        key: 'toggleTheme',
        value: function toggleTheme() {
            var newtheme = this.state.theme === 'light' ? 'dark' : 'light';
            this.setState({
                theme: newtheme
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var theme = themes[this.state.theme];
            return _react2.default.createElement('section', { className: 'hero is-fullheight has-text-centered', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('div', { className: 'hero-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('div', { className: 'columns is-mobile', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_HeaderBrace2.default, { type: 'left', color: theme.font, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }), _react2.default.createElement(_HeaderProfile2.default, { toggle: this.toggleTheme.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }), _react2.default.createElement(_HeaderBrace2.default, { type: 'right', color: theme.font, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            })), _react2.default.createElement('div', { className: 'columns', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('div', { className: 'column', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_HeaderTitle2.default, { color: theme.font, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }))), _react2.default.createElement('div', { className: 'columns', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('div', { className: 'column', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_HeaderButton2.default, { title: 'My GitHub', url: 'https://github.com/mohamedyoussefmaaref', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), _react2.default.createElement(_HeaderButton2.default, { title: 'My Linkedin', url: 'https://www.linkedin.com/in/mohamed-youssef-maaref-3b5450145/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            })))), _react2.default.createElement(_HeaderBackground2.default, { color: theme.background, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            })));
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQmFja2dyb3VuZCIsIlByb2ZpbGVJbWFnZSIsIkJyYWNlIiwiVGl0bGUiLCJCdXR0b24iLCJ0aGVtZXMiLCJsaWdodCIsImJhY2tncm91bmQiLCJmb250IiwiZGFyayIsIkhlYWRlciIsInN0YXRlIiwidGhlbWUiLCJuZXd0aGVtZSIsInNldFN0YXRlIiwidG9nZ2xlVGhlbWUiLCJiaW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7Ozs7O0FBQ25CLElBQU07O29CQUNLLEFBQ1MsQUFDWjtjQUhPLEFBQ0osQUFFRyxBQUVWO0FBSk8sQUFDSDs7b0JBR0UsQUFDVSxBQUNaO2NBUFIsQUFBZSxBQUtMLEFBRUk7QUFGSixBQUNGO0FBTk8sQUFDWDs7SSxBQVVpQjtvQ0FDakI7O3NCQUFjOzRDQUFBOztvSUFFVjs7Y0FBQSxBQUFLO21CQUZLLEFBRVYsQUFBYSxBQUNGO0FBREUsQUFDVDtlQUVQOzs7OztzQ0FFYSxBQUNWO2dCQUFJLFdBQVcsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLFVBQXJCLEFBQStCLFNBQTlDLEFBQXVELEFBQ3ZEO2lCQUFBLEFBQUs7dUJBQUwsQUFBYyxBQUNILEFBRWQ7QUFIaUIsQUFDVjs7OztpQ0FJQyxBQUNMO2dCQUFJLFFBQVEsT0FBTyxLQUFBLEFBQUssTUFBeEIsQUFBWSxBQUFrQixBQUM5QjttQ0FDSSxjQUFBLGFBQVMsV0FBVCxBQUFtQjs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx1Q0FBTSxNQUFQLEFBQVksUUFBTyxPQUFPLE1BQTFCLEFBQWdDOzhCQUFoQztnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFhLFFBQVEsS0FBQSxBQUFLLFlBQUwsQUFBaUIsS0FBdkMsQUFBc0IsQUFBc0I7OEJBQTVDO2dDQUZKLEFBRUksQUFDQTtBQURBO2dDQUNBLEFBQUMsdUNBQU0sTUFBUCxBQUFZLFNBQVEsT0FBTyxNQUEzQixBQUFpQzs4QkFBakM7Z0NBSlIsQUFDSSxBQUdJLEFBRUo7QUFGSTtpQ0FFSixjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHVDQUFNLE9BQU8sTUFBZCxBQUFvQjs4QkFBcEI7Z0NBUlosQUFNSSxBQUNJLEFBQ0ksQUFHUjtBQUhRO2tDQUdSLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsd0NBQU8sT0FBUixBQUFjLGFBQVksS0FBMUIsQUFBOEI7OEJBQTlCO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLEFBQUMsd0NBQU8sT0FBUixBQUFjLGVBQWMsS0FBNUIsQUFBZ0M7OEJBQWhDO2dDQWZoQixBQUNJLEFBV0ksQUFDSSxBQUVJLEFBSVo7QUFKWTttQ0FJWixBQUFDLDRDQUFXLE9BQU8sTUFBbkIsQUFBeUI7OEJBQXpCO2dDQXJCWixBQUNJLEFBQ0ksQUFtQkksQUFJZjtBQUplOzs7Ozs7RUF0Q2dCLGdCLEFBQU07O2tCLEFBQXJCIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL3NyYy9hcHAifQ==