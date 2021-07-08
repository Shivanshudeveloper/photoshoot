(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[84],{2768:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(3),r=a(30),c=a(31),i=a(2642),o=a(375),s=a(603),l=a(2739),d=a(36),j=a(0);function b(e){var t=e.links,a=e.action,b=e.heading,u=e.moreLink,h=void 0===u?[]:u,p=e.sx,x=Object(r.a)(e,["links","action","heading","moreLink","sx"]);return Object(j.jsxs)(i.a,{sx:p,mb:5,spacing:2,children:[Object(j.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(j.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(j.jsx)(d.c,Object(n.a)({links:t},x))]}),a&&Object(j.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(c.isString)(h)?Object(j.jsx)(l.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2772:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var n=a(3),r=a(603),c=a(2761),i=a(2786),o=a(375),s=a(0);function l(e){var t=e.title;return Object(s.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,a=e.sx,r=e.children;return Object(s.jsxs)(c.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(i.a,{title:t}),Object(s.jsx)(o.a,{sx:Object(n.a)({p:3,minHeight:180},a),children:r})]})}},2786:function(e,t,a){"use strict";var n=a(5),r=a(7),c=a(2),i=a(1),o=(a(12),a(11)),s=a(2695),l=a(603),d=a(14),j=a(8),b=a(2636),u=a(2696);function h(e){return Object(b.a)("MuiCardHeader",e)}var p=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=a(0),m=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(n.a)(a,"& .".concat(p.title),t.title),Object(n.a)(a,"& .".concat(p.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),O=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),g=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),f=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,i=a.avatar,j=a.className,b=a.component,u=void 0===b?"div":b,p=a.disableTypography,f=void 0!==p&&p,y=a.subheader,S=a.subheaderTypographyProps,k=a.title,C=a.titleTypographyProps,w=Object(r.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),N=Object(c.a)({},a,{component:u,disableTypography:f}),R=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(N),T=k;null==T||T.type===l.a||f||(T=Object(x.jsx)(l.a,Object(c.a)({variant:i?"body2":"h5",className:R.title,component:"span",display:"block"},C,{children:T})));var H=y;return null==H||H.type===l.a||f||(H=Object(x.jsx)(l.a,Object(c.a)({variant:i?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},S,{children:H}))),Object(x.jsxs)(m,Object(c.a)({className:Object(o.a)(R.root,j),as:u,ref:t,styleProps:N},w,{children:[i&&Object(x.jsx)(O,{className:R.avatar,styleProps:N,children:i}),Object(x.jsxs)(v,{className:R.content,styleProps:N,children:[T,H]}),n&&Object(x.jsx)(g,{className:R.action,styleProps:N,children:n})]}))}));t.a=f},4249:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(17),r=a(1),c=a(8),i=a(55),o=a(2742),s=a(375),l=a(2748),d=a(2642),j=a(603),b=a(2728),u=a(2708),h=a(2760),p=a(2714),x=a(25),m=a(378),O=a(2768),g=a(2772),v=a(0),f=Object(c.a)(m.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),y=Object(c.a)(o.a)((function(e){var t=e.theme;return{padding:t.spacing(5),borderRadius:t.shape.borderRadiusSm,border:"solid 1px ".concat(t.palette.divider),backgroundColor:t.palette.grey["light"===t.palette.mode?100:800]}})),S=["1col","2col","3col","4col","6col","12col"];function k(){var e=Object(i.a)(),t=Object(r.useState)(2),a=Object(n.a)(t,2),c=a[0],m=a[1],k=Object(r.useState)(3),C=Object(n.a)(k,2),w=C[0],N=C[1];return Object(v.jsxs)(f,{title:"Foundations: Grid | Minimal-UI",children:[Object(v.jsx)(s.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(v.jsx)(l.a,{maxWidth:"lg",children:Object(v.jsx)(O.a,{heading:"Grid",links:[{name:"Components",href:x.d.components},{name:"Grid"}]})})}),Object(v.jsx)(l.a,{maxWidth:"lg",children:Object(v.jsxs)(d.a,{spacing:5,children:[Object(v.jsx)(g.a,{title:"Spacing",children:Object(v.jsxs)(y,{variant:"outlined",children:[Object(v.jsxs)(j.a,{variant:"body2",sx:{mb:3,textAlign:"center"},children:["Spacing: ",Object(v.jsx)("strong",{children:e.spacing(c)})]}),Object(v.jsx)(b.a,{container:!0,spacing:c,children:[0,1,2,3,4,5,6,7,8,9,10,11].map((function(e){return Object(v.jsx)(b.a,{item:!0,xs:1,children:Object(v.jsx)(o.a,{sx:{height:80,boxShadow:function(e){return e.customShadows.z8}}})},e)}))}),Object(v.jsx)(u.a,{row:!0,name:"spacing",value:c.toString(),onChange:function(e){m(Number(e.target.value))},sx:{mt:3,display:"flex",justifyContent:"center"},children:[0,1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(v.jsx)(h.a,{value:e.toString(),label:e.toString(),control:Object(v.jsx)(p.a,{})},e)}))})]})}),Object(v.jsx)(g.a,{title:"Column",children:Object(v.jsxs)(y,{variant:"outlined",children:[Object(v.jsx)(b.a,{container:!0,spacing:3,children:[0,1,2,3,4,5,6,7,8,9,10,11].map((function(e){return Object(v.jsx)(b.a,{item:!0,xs:w,children:Object(v.jsxs)(o.a,{sx:{py:3,textAlign:"center",boxShadow:function(e){return e.customShadows.z8}},children:["xs = ",w]})},e)}))}),Object(v.jsx)(u.a,{row:!0,name:"column",value:w.toString(),onChange:function(e){N(Number(e.target.value))},sx:{mt:3,display:"flex",justifyContent:"center"},children:[12,6,4,3,2,1].map((function(e,t){return Object(v.jsx)(h.a,{value:e.toString(),label:S[t],control:Object(v.jsx)(p.a,{})},e)}))})]})})]})})]})}}}]);
//# sourceMappingURL=84.3b13c2ab.chunk.js.map