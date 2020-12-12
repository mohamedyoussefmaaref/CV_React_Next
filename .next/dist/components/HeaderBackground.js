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

var _reactParticlesJs = require('react-particles-js');

var _reactParticlesJs2 = _interopRequireDefault(_reactParticlesJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/usr/src/app/components/HeaderBackground.js';


var HeaderBackground = function (_React$Component) {
    (0, _inherits3.default)(HeaderBackground, _React$Component);

    function HeaderBackground() {
        (0, _classCallCheck3.default)(this, HeaderBackground);

        var _this = (0, _possibleConstructorReturn3.default)(this, (HeaderBackground.__proto__ || (0, _getPrototypeOf2.default)(HeaderBackground)).call(this));

        _this.state = {
            windowWidth: 0
        };
        return _this;
    }

    (0, _createClass3.default)(HeaderBackground, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.updateDimensions();
            window.addEventListener('resize', function () {
                return _this2.updateDimensions();
            });
        }
    }, {
        key: 'updateDimensions',
        value: function updateDimensions() {
            this.setState({
                windowWidth: window.innerWidth
            });
            console.log(console.log(window.innerWidth));
        }
    }, {
        key: 'render',
        value: function render() {
            var bgStyle = {
                position: "absolute",
                width: "100%",
                zIndex: -1,
                top: 0,
                left: 0,
                backgroundColor: this.props.color
            };

            if (this.state.windowWidth <= 769) {
                return _react2.default.createElement('div', { style: bgStyle, className: 'hero is-fullheight', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                });
            } else {
                return _react2.default.createElement(_reactParticlesJs2.default, {
                    params: {
                        particles: {
                            number: {
                                value: 50
                            },
                            shape: {
                                type: "triangle"
                            },
                            color: {
                                value: ["#1abc9c", "#3498db", "#9b59b6", "#f1c40f", "#e74c3c"]
                            },
                            line_linked: {
                                color: "#FFF",
                                width: 1,
                                shadow: {
                                    enable: true,
                                    color: "#333333",
                                    blur: 5
                                }
                            },
                            size: {
                                value: 15,
                                random: true
                            }
                        },
                        interactivity: {
                            detect_on: "window",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "bubble"
                                }
                            },
                            modes: {
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                },
                                bubble: {
                                    distance: 200,
                                    size: 20,
                                    duration: 2,
                                    opacity: 8,
                                    speed: 3
                                }
                            }
                        },
                        retina_detect: true
                    },
                    style: bgStyle,
                    className: 'hero is-fullheight',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                });
            }
        }
    }]);

    return HeaderBackground;
}(_react2.default.Component);

exports.default = HeaderBackground;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyQmFja2dyb3VuZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlBhcnRpY2xlcyIsIkhlYWRlckJhY2tncm91bmQiLCJzdGF0ZSIsIndpbmRvd1dpZHRoIiwidXBkYXRlRGltZW5zaW9ucyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRTdGF0ZSIsImlubmVyV2lkdGgiLCJjb25zb2xlIiwibG9nIiwiYmdTdHlsZSIsInBvc2l0aW9uIiwid2lkdGgiLCJ6SW5kZXgiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwicHJvcHMiLCJjb2xvciIsInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwic2hhcGUiLCJ0eXBlIiwibGluZV9saW5rZWQiLCJzaGFkb3ciLCJlbmFibGUiLCJibHVyIiwic2l6ZSIsInJhbmRvbSIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm1vZGVzIiwicmVwdWxzZSIsImRpc3RhbmNlIiwiZHVyYXRpb24iLCJidWJibGUiLCJvcGFjaXR5Iiwic3BlZWQiLCJyZXRpbmFfZGV0ZWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SSxBQUVjOzhDQUNqQjs7Z0NBQWM7NENBQUE7O3dKQUVWOztjQUFBLEFBQUs7eUJBRkssQUFFVixBQUFhLEFBQ0k7QUFESixBQUNUO2VBRVA7Ozs7OzRDQUVtQjt5QkFDaEI7O2lCQUFBLEFBQUssQUFDTDttQkFBQSxBQUFPLGlCQUFQLEFBQXdCLFVBQVUsWUFBQTt1QkFBSSxPQUFKLEFBQUksQUFBSztBQUEzQyxBQUNIOzs7OzJDQUVrQixBQUNmO2lCQUFBLEFBQUs7NkJBQ1ksT0FEakIsQUFBYyxBQUNVLEFBRXhCO0FBSGMsQUFDVjtvQkFFSixBQUFRLElBQUksUUFBQSxBQUFRLElBQUksT0FBeEIsQUFBWSxBQUFtQixBQUNsQzs7OztpQ0FFUSxBQUNMO2dCQUFNOzBCQUFVLEFBQ0YsQUFDVjt1QkFGWSxBQUVMLEFBQ1A7d0JBQVEsQ0FISSxBQUdILEFBQ1Q7cUJBSlksQUFJUCxBQUNMO3NCQUxZLEFBS04sQUFDTjtpQ0FBaUIsS0FBQSxBQUFLLE1BTjFCLEFBQWdCLEFBTWdCLEFBR2hDO0FBVGdCLEFBQ1o7O2dCQVFBLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBZixBQUE4QixLQUFLLEFBQy9COzhEQUNTLE9BQUwsQUFBWSxTQUFTLFdBQXJCLEFBQStCO2tDQUEvQjtvQ0FESixBQUNJLEFBRVA7QUFGTztpQkFBQTtBQUZSLG1CQUlPLEFBQ0g7dUNBQ0ksQUFBQzs7Ozt1Q0FFa0IsQUFDQyxBQUNHLEFBRVg7QUFIUSxBQUNKOztzQ0FGRyxBQUlBLEFBQ0csQUFFVjtBQUhPLEFBQ0g7O3VDQUdPLENBQUEsQUFBQyxXQUFELEFBQVcsV0FBWCxBQUFxQixXQUFyQixBQUErQixXQVJuQyxBQU9BLEFBQ0ksQUFBeUMsQUFFcEQ7QUFITyxBQUNIOzt1Q0FFUyxBQUNGLEFBQ1A7dUNBRlMsQUFFRixBQUNQOzs0Q0FBUSxBQUNJLEFBQ1I7MkNBRkksQUFFRyxBQUNQOzBDQWhCRCxBQVVNLEFBR0QsQUFHRSxBQUdkO0FBTlksQUFDSjtBQUpLLEFBQ1Q7O3VDQVFFLEFBQ0ssQUFDUDt3Q0F0QkosQUFDTyxBQW1CRCxBQUVNLEFBR2hCO0FBTFUsQUFDRjtBQXBCRyxBQUNQOzt1Q0F1QlcsQUFDQSxBQUNYOzs7NENBQ2EsQUFDRyxBQUNSOzBDQUxHLEFBRUgsQUFDSyxBQUVDLEFBR2Q7QUFMYSxBQUNMO0FBRkEsQUFDSjs7OzhDQU1TLEFBQ0ssQUFDVjs4Q0FIRCxBQUNNLEFBRUssQUFFZDtBQUpTLEFBQ0w7OzhDQUdJLEFBQ00sQUFDVjswQ0FGSSxBQUVFLEFBQ047OENBSEksQUFHTSxBQUNWOzZDQUpJLEFBSUssQUFDVDsyQ0EzQ1IsQUF5QlcsQUFRSixBQUtLLEFBS0csQUFJbkI7QUFUZ0IsQUFDSjtBQU5ELEFBQ0g7QUFUTyxBQUNYO3VDQTNCWixBQUNZLEFBK0NXLEFBRW5CO0FBakRRLEFBQ0o7MkJBRlIsQUFrRFcsQUFDUDsrQkFuREosQUFtRGM7O2tDQW5EZDtvQ0FESixBQUNJLEFBc0RQO0FBdERPO0FBQ0ksaUJBREo7QUF1RFg7Ozs7O0VBM0Z5QyxnQixBQUFNOztrQixBQUEvQiIsImZpbGUiOiJIZWFkZXJCYWNrZ3JvdW5kLmpzIiwic291cmNlUm9vdCI6Ii91c3Ivc3JjL2FwcCJ9