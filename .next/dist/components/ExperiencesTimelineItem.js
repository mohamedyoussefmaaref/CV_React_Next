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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/usr/src/app/components/ExperiencesTimelineItem.js';


var ExperiencesTimelineItem = function (_React$Component) {
    (0, _inherits3.default)(ExperiencesTimelineItem, _React$Component);

    function ExperiencesTimelineItem() {
        (0, _classCallCheck3.default)(this, ExperiencesTimelineItem);

        return (0, _possibleConstructorReturn3.default)(this, (ExperiencesTimelineItem.__proto__ || (0, _getPrototypeOf2.default)(ExperiencesTimelineItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(ExperiencesTimelineItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                time = _props.time,
                side = _props.side,
                color = _props.color,
                children = _props.children;

            var lineColor = "#7f8c8d";

            return _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, side === 'left' ? _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'columns timeline',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'circle is-hidden-mobile',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }), _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'column left is-6 has-text-right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'arrow arrow-right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }), _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'detail detail-left',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('p', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'is-hidden-tablet',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, time), children)), _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'column is-6 has-text-left is-hidden-mobile',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'time',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, time))) : _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'columns timeline',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'circle is-hidden-mobile',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }), _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'column is-6 has-text-right is-hidden-mobile',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'time',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, time)), _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'column right is-6 has-text-left',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'arrow arrow-left',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), _react2.default.createElement('div', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'detail detail-right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('p', {
                className: _style2.default.dynamic([['75295875', [lineColor, lineColor, color, color, color, color, color]]]) + ' ' + 'is-hidden-tablet',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, time), children))), _react2.default.createElement(_style2.default, {
                styleId: '75295875',
                css: '.timeline.__jsx-style-dynamic-selector{position:relative;}.timeline.__jsx-style-dynamic-selector .left.__jsx-style-dynamic-selector{-webkit-transform:translateX(2px);-ms-transform:translateX(2px);transform:translateX(2px);border-right:4px solid ' + lineColor + ';}.timeline.__jsx-style-dynamic-selector .right.__jsx-style-dynamic-selector{-webkit-transform:translateX(-2px);-ms-transform:translateX(-2px);transform:translateX(-2px);border-left:4px solid ' + lineColor + ';}.timeline.__jsx-style-dynamic-selector .detail.__jsx-style-dynamic-selector{padding:20px;margin:0 20px 20px;border-radius:5px;background-color:#ffffff;display:inline-block;}.timeline.__jsx-style-dynamic-selector .detail-left.__jsx-style-dynamic-selector{border-right:8px solid ' + color + ';}.timeline.__jsx-style-dynamic-selector .detail-right.__jsx-style-dynamic-selector{border-left:8px solid ' + color + ';}.timeline.__jsx-style-dynamic-selector .time.__jsx-style-dynamic-selector{padding:5px 10px;margin:10px 10px 0;border-radius:20px;font-size:0.8em;color:#ffffff;background-color:#c0392b;display:inline-block;}.circle.__jsx-style-dynamic-selector{width:20px;height:20px;border-radius:100%;background-color:' + color + ';position:absolute;top:30px;left:calc(50% - 10px);z-index:99;}.arrow.__jsx-style-dynamic-selector{position:absolute;width:0;height:0;border-top:10px solid transparent;border-bottom:10px solid transparent;top:30px;}.arrow-left.__jsx-style-dynamic-selector{border-right:20px solid ' + color + ';left:14px;}.arrow-right.__jsx-style-dynamic-selector{border-left:20px solid ' + color + ';right:14px;}@media screen and (max-width:769px){.timeline.__jsx-style-dynamic-selector .left.__jsx-style-dynamic-selector{border-right:0px;}.timeline.__jsx-style-dynamic-selector .right.__jsx-style-dynamic-selector{border-left:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRXhwZXJpZW5jZXNUaW1lbGluZUl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUM0QixBQUcyQyxBQUdRLEFBSUMsQUFJZCxBQU91QyxBQUdELEFBR2xDLEFBU04sQUFVTSxBQVFvQyxBQUlELEFBSy9CLEFBR0QsV0E3QlIsRUF0Qk8sR0FvRG5CLENBdkNtQixBQW9DbkIsQ0E1REosQUEyQ1ksS0FUVyxHQVVWLE1BaENTLEdBaUNnQixDQXBCZixNQVUyQixRQXRCckIsQ0FRN0IsQ0FIQSxBQXFDZSxDQUpELEVBekJNLFFBMEJwQixBQUlBLE1BVnlDLEVBbkJ2QixJQWJPLFVBY0ksR0FRUixFQWpDbUMsR0FJRCxHQVF2RCxVQXNCYSxBQVVBLElBbEJZLEtBU0MsQUFVMUIsZ0JBbEJBLE1BU2UsS0FuQ2YsRUFJQSxJQWdDQSIsImZpbGUiOiJjb21wb25lbnRzL0V4cGVyaWVuY2VzVGltZWxpbmVJdGVtLmpzIiwic291cmNlUm9vdCI6Ii91c3Ivc3JjL2FwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcmllbmNlc1RpbWVsaW5lSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHt0aW1lLCBzaWRlLCBjb2xvciwgY2hpbGRyZW59ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGxldCBsaW5lQ29sb3IgPSBcIiM3ZjhjOGRcIlxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGUgPT09ICdsZWZ0JyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIHRpbWVsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZSBpcy1oaWRkZW4tbW9iaWxlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBsZWZ0IGlzLTYgaGFzLXRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGFycm93LXJpZ2h0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwgZGV0YWlsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXMtaGlkZGVuLXRhYmxldFwiPnt0aW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy02IGhhcy10ZXh0LWxlZnQgaXMtaGlkZGVuLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVwiPnt0aW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyB0aW1lbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUgaXMtaGlkZGVuLW1vYmlsZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtNiBoYXMtdGV4dC1yaWdodCBpcy1oaWRkZW4tbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lXCI+e3RpbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHJpZ2h0IGlzLTYgaGFzLXRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgYXJyb3ctbGVmdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsIGRldGFpbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpcy1oaWRkZW4tdGFibGV0XCI+e3RpbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC50aW1lbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVsaW5lIC5sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICR7bGluZUNvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVsaW5lIC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAke2xpbmVDb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50aW1lbGluZSAuZGV0YWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50aW1lbGluZSAuZGV0YWlsLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAke2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVsaW5lIC5kZXRhaWwtcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICR7Y29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGltZWxpbmUgLnRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDM5MmI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFycm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFycm93LWxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgJHtjb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnJvdy1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICR7Y29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVsaW5lIC5sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lbGluZSAucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=components/ExperiencesTimelineItem.js */',
                dynamic: [lineColor, lineColor, color, color, color, color, color]
            }));
        }
    }]);

    return ExperiencesTimelineItem;
}(_react2.default.Component);

exports.default = ExperiencesTimelineItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRXhwZXJpZW5jZXNUaW1lbGluZUl0ZW0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUaXRsZSIsIkV4cGVyaWVuY2VzVGltZWxpbmVJdGVtIiwicHJvcHMiLCJ0aW1lIiwic2lkZSIsImNvbG9yIiwiY2hpbGRyZW4iLCJsaW5lQ29sb3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7Ozs7OztJLEFBRUc7Ozs7Ozs7Ozs7O2lDQUNSO3lCQUMrQixLQUQvQixBQUNvQztnQkFEcEMsQUFDQSxjQURBLEFBQ0E7Z0JBREEsQUFDTSxjQUROLEFBQ007Z0JBRE4sQUFDWSxlQURaLEFBQ1k7Z0JBRFosQUFDbUIsa0JBRG5CLEFBQ21CLEFBQ3hCOztnQkFBSSxZQUFKLEFBQWdCLEFBRWhCOzttQ0FDSSxjQUFBO2tFQUFBLEFBc0NzQyxXQXRDdEMsQUEwQ3FDLFdBMUNyQyxBQW9Ec0MsT0FwRHRDLEFBdURxQyxPQXZEckMsQUFzRWdDLE9BdEVoQyxBQXFGdUMsT0FyRnZDLEFBeUZzQzs7OEJBekZ0QztnQ0FBQSxBQUVRO0FBRlI7QUFBQSxhQUFBLFdBRVEsQUFBUyx5QkFDTCxjQUFBO2tFQUFBLEFBbUMwQixXQW5DMUIsQUF1Q3lCLFdBdkN6QixBQWlEMEIsT0FqRDFCLEFBb0R5QixPQXBEekIsQUFtRW9CLE9BbkVwQixBQWtGMkIsT0FsRjNCLEFBc0YwQixrQkF0RjFCLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUE7a0VBQ0ksQUFrQ3NCLFdBbEN0QixBQXNDcUIsV0F0Q3JCLEFBZ0RzQixPQWhEdEIsQUFtRHFCLE9BbkRyQixBQWtFZ0IsT0FsRWhCLEFBaUZ1QixPQWpGdkIsQUFxRnNCLGtCQXJGdEIsQUFBZTs7OEJBQWY7Z0NBREosQUFDSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBO2tFQUFBLEFBaUNzQixXQWpD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QSxnQ0FDQSxjQUFBO2tFQUFBLEFBY2tCLFdBZGxCLEFBa0JpQixXQWxCakIsQUE0QmtCLE9BNUJsQixBQStCaUIsT0EvQmpCLEFBOENZLE9BOUNaLEFBNkRtQixPQTdEbkIsQUFpRWtCLGtCQWpFbEIsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTtrRUFBQSxBQWFjLFdBYmQsQUFpQmEsV0FqQmIsQUEyQmMsT0EzQmQsQUE4QmEsT0E5QmIsQUE2Q1EsT0E3Q1IsQUE0RGUsT0E1RGYsQUFnRWMsa0JBaEVkLEFBQWE7OzhCQUFiO2dDQUFBLEFBQWlDO0FBQWpDO0FBQUEsZUFESixBQUNJLEFBQ0MsT0ExQnpCLEFBaUJZLEFBS0ksQUFFSTt5QkF4QnBCOytRQUFBLEFBc0NzQyxpTkF0Q3RDLEFBMENxQyx3U0ExQ3JDLEFBb0RzQyx1SEFwRHRDLEFBdURxQyw2VEF2RHJDLEFBc0VnQyxvU0F0RWhDLEFBcUZ1QywwRkFyRnZDLEFBeUZzQyxRQXpGdEM7MEJBQUEsQUFzQ3NDLFdBdEN0QyxBQTBDcUMsV0ExQ3JDLEFBb0RzQyxPQXBEdEMsQUF1RHFDLE9BdkRyQyxBQXNFZ0MsT0F0RWhDLEFBcUZ1QyxPQXRGM0MsQUFDSSxBQXlGc0MsQUFjN0M7QUF2R087Ozs7O0VBTnlDLGdCLEFBQU07O2tCLEFBQXRDIiwiZmlsZSI6IkV4cGVyaWVuY2VzVGltZWxpbmVJdGVtLmpzIiwic291cmNlUm9vdCI6Ii91c3Ivc3JjL2FwcCJ9