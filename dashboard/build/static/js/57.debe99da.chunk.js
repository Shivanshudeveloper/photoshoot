(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[57],{2800:function(e,t,a){"use strict";var o=a(1),r=o.createContext();t.a=r},2819:function(e,t,a){"use strict";var o=a(1),r=o.createContext();t.a=r},2943:function(e,t,a){"use strict";var o=a(2),r=a(8),n=a(1),i=(a(10),a(12)),c=a(2715),s=a(14),l=a(7),d=a(2655),b=a(2716);function p(e){return Object(d.a)("MuiTableContainer",e)}Object(b.a)("MuiTableContainer",["root"]);var u=a(0),j=Object(l.a)("div",{},{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),O=n.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableContainer"}),n=a.className,l=a.component,d=void 0===l?"div":l,b=Object(r.a)(a,["className","component"]),O=Object(o.a)({},a,{component:d}),v=function(e){var t=e.classes;return Object(c.a)({root:["root"]},p,t)}(O);return Object(u.jsx)(j,Object(o.a)({ref:t,as:d,className:Object(i.a)(v.root,n),styleProps:O},b))}));t.a=O},2944:function(e,t,a){"use strict";var o=a(8),r=a(2),n=a(1),i=(a(10),a(12)),c=a(2715),s=a(2819),l=a(14),d=a(7),b=a(2655),p=a(2716);function u(e){return Object(b.a)("MuiTable",e)}Object(p.a)("MuiTable",["root","stickyHeader"]);var j=a(0),O=Object(d.a)("table",{},{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(r.a)({},t.root,a.stickyHeader&&t.stickyHeader)}})((function(e){var t=e.theme,a=e.styleProps;return Object(r.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),v="table",m=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTable"}),d=a.className,b=a.component,p=void 0===b?v:b,m=a.padding,g=void 0===m?"normal":m,h=a.size,f=void 0===h?"medium":h,y=a.stickyHeader,x=void 0!==y&&y,k=Object(o.a)(a,["className","component","padding","size","stickyHeader"]),C=Object(r.a)({},a,{component:p,padding:g,size:f,stickyHeader:x}),H=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(c.a)(a,u,t)}(C),T=n.useMemo((function(){return{padding:g,size:f,stickyHeader:x}}),[g,f,x]);return Object(j.jsx)(s.a.Provider,{value:T,children:Object(j.jsx)(O,Object(r.a)({as:p,role:p===v?null:"table",ref:t,className:Object(i.a)(H.root,d),styleProps:C},k))})}));t.a=m},2945:function(e,t,a){"use strict";var o=a(2),r=a(8),n=a(1),i=(a(10),a(12)),c=a(2715),s=a(2800),l=a(14),d=a(7),b=a(2655),p=a(2716);function u(e){return Object(b.a)("MuiTableHead",e)}Object(p.a)("MuiTableHead",["root"]);var j=a(0),O=Object(d.a)("thead",{},{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),v={variant:"head"},m="thead",g=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableHead"}),n=a.className,d=a.component,b=void 0===d?m:d,p=Object(r.a)(a,["className","component"]),g=Object(o.a)({},a,{component:b}),h=function(e){var t=e.classes;return Object(c.a)({root:["root"]},u,t)}(g);return Object(j.jsx)(s.a.Provider,{value:v,children:Object(j.jsx)(O,Object(o.a)({as:b,className:Object(i.a)(h.root,n),ref:t,role:b===m?null:"rowgroup",styleProps:g},p))})}));t.a=g},2946:function(e,t,a){"use strict";var o=a(5),r=a(8),n=a(2),i=a(1),c=(a(10),a(12)),s=a(2715),l=a(2800),d=a(22),b=a(14),p=a(7),u=a(2655),j=a(2716);function O(e){return Object(u.a)("MuiTableRow",e)}var v=Object(j.a)("MuiTableRow",["root","selected","hover","head","footer"]),m=a(0),g=Object(p.a)("tr",{},{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(n.a)({},t.root,a.head&&t.head,a.footer&&t.footer)}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(o.a)(t,"&.".concat(v.hover,":hover"),{backgroundColor:a.palette.action.hover}),Object(o.a)(t,"&.".concat(v.selected),{backgroundColor:Object(d.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(d.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),h=i.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiTableRow"}),o=a.className,d=a.component,p=void 0===d?"tr":d,u=a.hover,j=void 0!==u&&u,v=a.selected,h=void 0!==v&&v,f=Object(r.a)(a,["className","component","hover","selected"]),y=i.useContext(l.a),x=Object(n.a)({},a,{component:p,hover:j,selected:h,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),k=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(s.a)(a,O,t)}(x);return Object(m.jsx)(g,Object(n.a)({as:p,ref:t,className:Object(c.a)(k.root,o),role:"tr"===p?null:"row",styleProps:x},f))}));t.a=h},3069:function(e,t,a){"use strict";var o=a(5),r=a(8),n=a(2),i=a(1),c=(a(10),a(12)),s=a(2715),l=a(9),d=a(22),b=a(2819),p=a(2800),u=a(14),j=a(7),O=a(2655),v=a(2716);function m(e){return Object(O.a)("MuiTableCell",e)}var g=Object(v.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),h=a(0),f=Object(j.a)("td",{},{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(n.a)({},t.root,t[a.variant],t["size".concat(Object(l.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(l.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(l.a)(a.align))],a.stickyHeader&&t.stickyHeader)}})((function(e){var t=e.theme,a=e.styleProps;return Object(n.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(d.f)(Object(d.a)(t.palette.divider,1),.88):Object(d.b)(Object(d.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(o.a)({padding:"6px 16px"},"&.".concat(g.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),y=i.forwardRef((function(e,t){var a,o=Object(u.a)({props:e,name:"MuiTableCell"}),d=o.align,j=void 0===d?"inherit":d,O=o.className,v=o.component,g=o.padding,y=o.scope,x=o.size,k=o.sortDirection,C=o.variant,H=Object(r.a)(o,["align","className","component","padding","scope","size","sortDirection","variant"]),T=i.useContext(b.a),M=i.useContext(p.a),R=M&&"head"===M.variant;a=v||(R?"th":"td");var w=y;!w&&R&&(w="col");var N=C||M&&M.variant,z=Object(n.a)({},o,{align:j,component:a,padding:g||(T&&T.padding?T.padding:"normal"),size:x||(T&&T.size?T.size:"medium"),sortDirection:k,stickyHeader:"head"===N&&T&&T.stickyHeader,variant:N}),P=function(e){var t=e.classes,a=e.variant,o=e.align,r=e.padding,n=e.size,i={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==o&&"align".concat(Object(l.a)(o)),"normal"!==r&&"padding".concat(Object(l.a)(r)),"size".concat(Object(l.a)(n))]};return Object(s.a)(i,m,t)}(z),A=null;return k&&(A="asc"===k?"ascending":"descending"),Object(h.jsx)(f,Object(n.a)({as:a,ref:t,className:Object(c.a)(P.root,O),"aria-sort":A,scope:w,styleProps:z},H))}));t.a=y},4278:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));a(1);var o=a(2714),r=a(2944),n=a(3069),i=a(2943),c=a(2945),s=a(2946),l=a(2760),d=a(312),b=a(0),p=Object(o.a)({table:{minWidth:650}});function u(){var e=p();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{}),Object(b.jsx)("h2",{className:"forheadingscolors",children:"Customer"}),Object(b.jsx)(i.a,{component:l.a,children:Object(b.jsx)(r.a,{className:e.table,"aria-label":"simple table",children:Object(b.jsx)(c.a,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(n.a,{children:"Customer Name"}),Object(b.jsx)(n.a,{align:"right",children:"Customer Photo Gallery Title"}),Object(b.jsx)(n.a,{align:"right",children:"Email"}),Object(b.jsx)(n.a,{align:"right",children:"Amount"}),Object(b.jsx)(n.a,{align:"right",children:"Phone"})]})})})})]})}}}]);
//# sourceMappingURL=57.debe99da.chunk.js.map