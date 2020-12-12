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

var _jsxFileName = '/usr/src/app/components/AboutInterest.js';


var AboutInterest = function (_React$Component) {
    (0, _inherits3.default)(AboutInterest, _React$Component);

    function AboutInterest() {
        (0, _classCallCheck3.default)(this, AboutInterest);

        return (0, _possibleConstructorReturn3.default)(this, (AboutInterest.__proto__ || (0, _getPrototypeOf2.default)(AboutInterest)).apply(this, arguments));
    }

    (0, _createClass3.default)(AboutInterest, [{
        key: 'render',
        value: function render() {
            var items = ['Coding', 'Sining', 'Taking Photo', 'Reading'];
            return _react2.default.createElement('div', {
                className: 'jsx-2891427978',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2891427978' + ' ' + 'columns topic',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2891427978' + ' ' + 'column has-text-left is-6 is-offset-3 is-10-mobile is-offset-1-mobile',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, 'My Interests')), _react2.default.createElement('div', {
                className: 'jsx-2891427978' + ' ' + 'columns item',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2891427978' + ' ' + 'column is-6 is-offset-3 is-8-mobile is-offset-2-mobile',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, items.map(function (item, index) {
                return _react2.default.createElement('img', { key: index,
                    src: '/static/images/interest-' + (index + 1) + '.svg',
                    title: item, className: 'jsx-2891427978',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                });
            }))), _react2.default.createElement(_style2.default, {
                styleId: '2891427978',
                css: '.topic.jsx-2891427978{font-weight:bold;color:#ffcc00;font-size:1.2em;}.item.jsx-2891427978 img.jsx-2891427978{margin:0 30px;height:80px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;}.item.jsx-2891427978 img.jsx-2891427978:hover{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWJvdXRJbnRlcmVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QjRCLEFBRzBDLEFBS0gsQUFLTyxjQUpULEdBTEUsU0FNaUIsS0FMZixnQkFDcEIsNEJBUUEscUJBSEEiLCJmaWxlIjoiY29tcG9uZW50cy9BYm91dEludGVyZXN0LmpzIiwic291cmNlUm9vdCI6Ii91c3Ivc3JjL2FwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0SW50ZXJlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBpdGVtcyA9IFsnQ29kaW5nJywgJ1NpbmluZycsICdUYWtpbmcgUGhvdG8nLCAnUmVhZGluZyddXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyB0b3BpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGhhcy10ZXh0LWxlZnQgaXMtNiBpcy1vZmZzZXQtMyBpcy0xMC1tb2JpbGUgaXMtb2Zmc2V0LTEtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE15IEludGVyZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtNiBpcy1vZmZzZXQtMyBpcy04LW1vYmlsZSBpcy1vZmZzZXQtMi1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Jy9zdGF0aWMvaW1hZ2VzL2ludGVyZXN0LScgKyAoaW5kZXgrMSkgKyAnLnN2Zyd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAudG9waWMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmNjMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pdGVtIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pdGVtIGltZzpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=components/AboutInterest.js */'
            }));
        }
    }]);

    return AboutInterest;
}(_react2.default.Component);

exports.default = AboutInterest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWJvdXRJbnRlcmVzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkFib3V0SW50ZXJlc3QiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0ksQUFFYzs7Ozs7Ozs7Ozs7aUNBQ1IsQUFDTDtnQkFBSSxRQUFRLENBQUEsQUFBQyxVQUFELEFBQVcsVUFBWCxBQUFxQixnQkFBakMsQUFBWSxBQUFxQyxBQUNqRDttQ0FDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQTtBQUFBO0FBQUEsZUFGUixBQUNJLEFBQ0ksQUFJSixrQ0FBQSxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFFUTtBQUZSO0FBQUEscUJBRVEsQUFBTSxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBUDs4REFDRCxLQUFMLEFBQVUsQUFDTjt5QkFBSyw4QkFBOEIsUUFBOUIsQUFBb0MsS0FEN0MsQUFDa0QsQUFDOUM7MkJBRkosQUFFVyxpQkFGWDs7a0NBQUE7b0NBRE0sQUFDTjtBQUFBO2lCQUFBO0FBVnBCLEFBTUksQUFDSSxBQUVRO3lCQVRoQjtxQkFESixBQUNJLEFBb0NQO0FBcENPOzs7OztFQUorQixnQixBQUFNOztrQixBQUE1QiIsImZpbGUiOiJBYm91dEludGVyZXN0LmpzIiwic291cmNlUm9vdCI6Ii91c3Ivc3JjL2FwcCJ9