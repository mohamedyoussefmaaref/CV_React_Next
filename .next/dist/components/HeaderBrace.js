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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/usr/src/app/components/HeaderBrace.js';


var HeaderBrace = function (_React$Component) {
    (0, _inherits3.default)(HeaderBrace, _React$Component);

    function HeaderBrace() {
        (0, _classCallCheck3.default)(this, HeaderBrace);

        return (0, _possibleConstructorReturn3.default)(this, (HeaderBrace.__proto__ || (0, _getPrototypeOf2.default)(HeaderBrace)).apply(this, arguments));
    }

    (0, _createClass3.default)(HeaderBrace, [{
        key: 'render',
        value: function render() {
            var distance = 200;
            var item = {
                left: {
                    text: '{',
                    startPosision: distance,
                    textAlign: 'right'
                },
                right: {
                    text: '}',
                    startPosision: -distance,
                    textAlign: 'left'
                }
            };
            var _props = this.props,
                type = _props.type,
                color = _props.color;

            return _react2.default.createElement('div', {
                className: _style2.default.dynamic([['3622701280', [color, item[type].startPosision]]]) + ' ' + ('column is-hidden-mobile has-text-' + item[type].textAlign || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, item[type].text, _react2.default.createElement(_style2.default, {
                styleId: '3622701280',
                css: 'div.__jsx-style-dynamic-selector{color:' + color + ';font-size:15em;-webkit-animation:move 1s;-webkit-animation:move-__jsx-style-dynamic-selector 1s;animation:move-__jsx-style-dynamic-selector 1s;}@-webkit-keyframes move-__jsx-style-dynamic-selector{from{-webkit-transform:translate(' + item[type].startPosision + 'px,0);-ms-transform:translate(' + item[type].startPosision + 'px,0);transform:translate(' + item[type].startPosision + 'px,0);}to{-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);}}@keyframes move-__jsx-style-dynamic-selector{from{-webkit-transform:translate(' + item[type].startPosision + 'px,0);-ms-transform:translate(' + item[type].startPosision + 'px,0);transform:translate(' + item[type].startPosision + 'px,0);}to{-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyQnJhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0I0QixBQUc0RCxBQU93QixBQUd6QixtQ0FUbkIsZUFDVywwQkFDUix1QkFRbEIsMkVBSEEsSUFKSiIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlckJyYWNlLmpzIiwic291cmNlUm9vdCI6Ii91c3Ivc3JjL2FwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckJyYWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IDIwMFxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICd7JyxcclxuICAgICAgICAgICAgICAgIHN0YXJ0UG9zaXNpb246IGRpc3RhbmNlLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJpZ2h0OiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnfScsXHJcbiAgICAgICAgICAgICAgICBzdGFydFBvc2lzaW9uOiAtZGlzdGFuY2UsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB7IHR5cGUsIGNvbG9yIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29sdW1uIGlzLWhpZGRlbi1tb2JpbGUgaGFzLXRleHQtJyArIGl0ZW1bdHlwZV0udGV4dEFsaWdufT5cclxuICAgICAgICAgICAgICAgIHsgaXRlbVt0eXBlXS50ZXh0IH1cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUgMXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbW92ZSAxcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBtb3ZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgke2l0ZW1bdHlwZV0uc3RhcnRQb3Npc2lvbn1weCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=components/HeaderBrace.js */',
                dynamic: [color, item[type].startPosision]
            }));
        }
    }]);

    return HeaderBrace;
}(_react2.default.Component);

exports.default = HeaderBrace;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyQnJhY2UuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXJCcmFjZSIsImRpc3RhbmNlIiwiaXRlbSIsImxlZnQiLCJ0ZXh0Iiwic3RhcnRQb3Npc2lvbiIsInRleHRBbGlnbiIsInJpZ2h0IiwicHJvcHMiLCJ0eXBlIiwiY29sb3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztJLEFBRWM7Ozs7Ozs7Ozs7O2lDQUNSLEFBQ0w7Z0JBQU0sV0FBTixBQUFpQixBQUNqQjtnQkFBTTs7MEJBQ0ksQUFDSSxBQUNOO21DQUZFLEFBRWEsQUFDZjsrQkFKSyxBQUNILEFBR1MsQUFFZjtBQUxNLEFBQ0Y7OzBCQUlHLEFBQ0csQUFDTjttQ0FBZSxDQUZaLEFBRWEsQUFDaEI7K0JBWEgsQUFFTCxBQUFhLEFBTUYsQUFHUTtBQUhSLEFBQ0g7QUFQSyxBQUNUO3lCQVdrQixLQWRqQixBQWNzQjtnQkFkdEIsQUFjQyxjQWRELEFBY0M7Z0JBZEQsQUFjTyxlQWRQLEFBY08sQUFFWjs7bUNBQ0ksY0FBQTtvRUFBQSxBQUlxQixPQU9rQixLQUFBLEFBQUssTUFYNUMsQUFXa0QsMkJBWGxDLHNDQUFzQyxLQUFBLEFBQUssTUFBM0QsQUFBaUUsYUFBakU7OzhCQUFBO2dDQUFBLEFBQ007QUFETjtBQUFBLGFBQUEsT0FDTSxBQUFLLE1BRFgsQUFDaUI7eUJBRGpCO2lFQUFBLEFBSXFCLG9QQU9rQixLQUFBLEFBQUssTUFYNUMsQUFXa0QsbURBQVgsS0FBQSxBQUFLLE1BWDVDLEFBV2tELCtDQUFYLEtBQUEsQUFBSyxNQVg1QyxBQVdrRCxrTkFBWCxLQUFBLEFBQUssTUFYNUMsQUFXa0QsbURBQVgsS0FBQSxBQUFLLE1BWDVDLEFBV2tELCtDQUFYLEtBQUEsQUFBSyxNQVg1QyxBQVdrRCxnQkFYbEQ7MEJBQUEsQUFJcUIsT0FPa0IsS0FBQSxBQUFLLE1BWmhELEFBQ0ksQUFXa0QsQUFTekQ7QUFwQk87Ozs7O0VBbEI2QixnQixBQUFNOztrQixBQUExQiIsImZpbGUiOiJIZWFkZXJCcmFjZS5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL3NyYy9hcHAifQ==