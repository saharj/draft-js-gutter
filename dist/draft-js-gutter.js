!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.EditorGutter=void 0;var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),f=r(3),s=n(f),p=r(2);e.EditorGutter=function(t){function e(t){a(this,e);var r=i(this,Object.getPrototypeOf(e).call(this,t));return r.state={editorState:p.EditorState.createEmpty()},r}return u(e,t),c(e,[{key:"onChange",value:function(t){this.setState({editorState:t})}},{key:"render",value:function(){var t=this;return s["default"].createElement("div",{style:{display:"flex"}},s["default"].createElement("ol",l({},this.props.list,{style:{margin:0,padding:0}}),[].concat(o(Array(this.state.editorState.getCurrentContent().getBlockMap().size))).map(function(e,r){return s["default"].createElement("li",{key:r,style:{marginLeft:"calc("+(t.props.start+r).toString().length+" * .6rem)"}})})),s["default"].createElement("div",{style:{flex:1}},s["default"].createElement(p.Editor,{editorState:this.state.editorState,onChange:this.onChange.bind(this)})))}}]),e}(f.Component)},function(t,e){t.exports=void 0},function(t,e){t.exports=void 0}]);
//# sourceMappingURL=draft-js-gutter.js.map