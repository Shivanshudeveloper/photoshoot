(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[56],{2786:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n(3),r=n(31),a=n(32),c=n(2664),i=n(389),l=n(625),s=n(2759),u=n(36),p=n(0);function f(e){var t=e.links,n=e.action,f=e.heading,d=e.moreLink,b=void 0===d?[]:d,y=e.sx,m=Object(r.a)(e,["links","action","heading","moreLink","sx"]);return Object(p.jsxs)(c.a,{sx:y,mb:5,spacing:2,children:[Object(p.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(p.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(p.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:f}),Object(p.jsx)(u.c,Object(o.a)({links:t},m))]}),n&&Object(p.jsx)(i.a,{sx:{flexShrink:0},children:n})]}),Object(a.isString)(b)?Object(p.jsx)(s.a,{href:b,target:"_blank",variant:"body2",children:b}):b.map((function(e){return Object(p.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2855:function(e,t,n){"use strict";var o=n(2),r=n(8),a=n(1),c=(n(10),n(12)),i=n(2718),l=n(7),s=n(14),u=n(2658),p=n(2719);function f(e){return Object(u.a)("MuiCardContent",e)}Object(p.a)("MuiCardContent",["root"]);var d=n(0),b=Object(l.a)("div",{},{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),y=a.forwardRef((function(e,t){var n=Object(s.a)({props:e,name:"MuiCardContent"}),a=n.className,l=n.component,u=void 0===l?"div":l,p=Object(r.a)(n,["className","component"]),y=Object(o.a)({},n,{component:u}),m=function(e){var t=e.classes;return Object(i.a)({root:["root"]},f,t)}(y);return Object(d.jsx)(b,Object(o.a)({as:u,className:Object(c.a)(m.root,a),styleProps:y,ref:t},p))}));t.a=y},2918:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M18 9h-3V5.67A2.68 2.68 0 0 0 12.33 3H5.67A2.68 2.68 0 0 0 3 5.67v6.66A2.68 2.68 0 0 0 5.67 15H9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zm-9 3v1H5.67a.67.67 0 0 1-.67-.67V5.67A.67.67 0 0 1 5.67 5h6.66a.67.67 0 0 1 .67.67V9h-1a3 3 0 0 0-3 3z"/>',width:24,height:24}},3255:function(e,t,n){"use strict";var o=n(3256).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},3256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=a(n(1)),r=a(n(3257));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?d(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n;s(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return y(d(n=p(this,(e=f(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=n.props,a=t.text,c=t.onCopy,i=t.children,l=t.options,s=o.default.Children.only(i),u=(0,r.default)(a,l);c&&c(a,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),n}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,a),c&&u(n,c),t}(o.default.PureComponent);t.CopyToClipboard=m,y(m,"defaultProps",{onCopy:void 0,options:void 0})},3257:function(e,t,n){"use strict";var o=n(3258),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,c,i,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(c=o(),i=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),s&&document.body.removeChild(s),c()}return u}},3258:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},4383:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var o=n(7),r=n(389),a=n(2768),c=n(2781),i=n(2855),l=n(26),s=n(393),u=n(3),p=n(17),f=n(31),d=n(1),b=n(25),y=n(163),m=n(2918),j=n.n(m),h=n(3255),O=n(2776),v=n(2772),g=n(2775),C=n(392),x=n(0);function w(e){var t=e.value,n=Object(f.a)(e,["value"]),o=Object(y.b)().enqueueSnackbar,r=Object(d.useState)({value:t,copied:!1}),a=Object(p.a)(r,2),c=a[0],i=a[1];return Object(x.jsx)(O.a,Object(u.a)({fullWidth:!0,value:c.value,onChange:function(e){i({value:e.target.value,copied:!1})},InputProps:{endAdornment:Object(x.jsx)(v.a,{position:"end",children:Object(x.jsx)(h.CopyToClipboard,{text:c.value,onCopy:function(){i(Object(u.a)(Object(u.a)({},c),{},{copied:!0})),c.value&&o("Copied",{variant:"success"})},children:Object(x.jsx)(g.a,{title:"Copy",children:Object(x.jsx)(C.a,{children:Object(x.jsx)(b.Icon,{icon:j.a,width:24,height:24})})})})})}},n))}var k=n(2786),P=Object(o.a)(s.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function D(){return Object(x.jsxs)(P,{title:"Components: Copy To Clipboard | Minimal-UI",children:[Object(x.jsx)(r.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(x.jsx)(a.a,{maxWidth:"lg",children:Object(x.jsx)(k.a,{heading:"Copy To Clipboard",links:[{name:"Components",href:l.d.components},{name:"Copy To Clipboard"}],moreLink:"https://www.npmjs.com/package/react-copy-to-clipboard"})})}),Object(x.jsx)(a.a,{maxWidth:"lg",children:Object(x.jsx)(c.a,{children:Object(x.jsx)(i.a,{children:Object(x.jsx)(w,{value:"https://www.npmjs.com/package/react-copy-to-clipboard"})})})})]})}}}]);
//# sourceMappingURL=56.59e69c13.chunk.js.map