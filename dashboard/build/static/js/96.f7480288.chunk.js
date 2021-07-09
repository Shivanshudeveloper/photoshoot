(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[96],{2767:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var c=a(3),r=a(30),n=a(31),s=a(2643),o=a(375),l=a(603),i=a(2740),j=a(36),d=a(0);function b(e){var t=e.links,a=e.action,b=e.heading,x=e.moreLink,u=void 0===x?[]:x,O=e.sx,h=Object(r.a)(e,["links","action","heading","moreLink","sx"]);return Object(d.jsxs)(s.a,{sx:O,mb:5,spacing:2,children:[Object(d.jsxs)(s.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(d.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(j.c,Object(c.a)({links:t},h))]}),a&&Object(d.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(n.isString)(u)?Object(d.jsx)(i.a,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return Object(d.jsx)(i.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2770:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return j}));var c=a(3),r=a(603),n=a(2762),s=a(2778),o=a(375),l=a(0);function i(e){var t=e.title;return Object(l.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function j(e){var t=e.title,a=e.sx,r=e.children;return Object(l.jsxs)(n.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(l.jsx)(s.a,{title:t}),Object(l.jsx)(o.a,{sx:Object(c.a)({p:3,minHeight:180},a),children:r})]})}},2778:function(e,t,a){"use strict";var c=a(5),r=a(7),n=a(2),s=a(1),o=(a(12),a(11)),l=a(2696),i=a(603),j=a(14),d=a(8),b=a(2637),x=a(2697);function u(e){return Object(b.a)("MuiCardHeader",e)}var O=Object(x.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),p=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(n.a)((a={},Object(c.a)(a,"& .".concat(O.title),t.title),Object(c.a)(a,"& .".concat(O.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),m=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=s.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiCardHeader"}),c=a.action,s=a.avatar,d=a.className,b=a.component,x=void 0===b?"div":b,O=a.disableTypography,g=void 0!==O&&O,y=a.subheader,k=a.subheaderTypographyProps,C=a.title,w=a.titleTypographyProps,P=Object(r.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),S=Object(n.a)({},a,{component:x,disableTypography:g}),T=function(e){var t=e.classes;return Object(l.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,t)}(S),N=C;null==N||N.type===i.a||g||(N=Object(h.jsx)(i.a,Object(n.a)({variant:s?"body2":"h5",className:T.title,component:"span",display:"block"},w,{children:N})));var H=y;return null==H||H.type===i.a||g||(H=Object(h.jsx)(i.a,Object(n.a)({variant:s?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:H}))),Object(h.jsxs)(p,Object(n.a)({className:Object(o.a)(T.root,d),as:x,ref:t,styleProps:S},P,{children:[s&&Object(h.jsx)(m,{className:T.avatar,styleProps:S,children:s}),Object(h.jsxs)(v,{className:T.content,styleProps:S,children:[N,H]}),c&&Object(h.jsx)(f,{className:T.action,styleProps:S,children:c})]}))}));t.a=g},4303:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var c=a(8),r=a(375),n=a(2749),s=a(2643),o=a(2739),l=a(2761),i=a(2759),j=a(2652),d=a(27),b=a(378),x=a(2767),u=a(36),O=a(2770),h=a(0),p={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},m=Object(c.a)(b.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function f(){return Object(h.jsxs)(m,{title:"Components: Switches | Minimal-UI",children:[Object(h.jsx)(r.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(h.jsx)(n.a,{maxWidth:"lg",children:Object(h.jsx)(x.a,{heading:"Switches",links:[{name:"Components",href:d.d.components},{name:"Switches"}],moreLink:"https://next.material-ui.com/components/alert"})})}),Object(h.jsx)(n.a,{maxWidth:"lg",children:Object(h.jsxs)(s.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(h.jsxs)(s.a,{spacing:3,sx:{width:1},children:[Object(h.jsxs)(O.a,{title:"Basic",sx:p,children:[Object(h.jsx)(o.a,{defaultChecked:!0}),Object(h.jsx)(o.a,{}),Object(h.jsx)(o.a,{disabled:!0}),Object(h.jsx)(o.a,{disabled:!0,checked:!0}),Object(h.jsx)(o.a,{defaultChecked:!0,color:"default"})]}),Object(h.jsxs)(O.a,{title:"Sizes",sx:p,children:[Object(h.jsx)(l.a,{control:Object(h.jsx)(o.a,{size:"small"}),label:"Small"}),Object(h.jsx)(l.a,{control:Object(h.jsx)(o.a,{}),label:"Normal"})]}),Object(h.jsx)(O.a,{title:"Placement",sx:p,children:Object(h.jsx)(i.a,{component:"fieldset",children:Object(h.jsxs)(j.a,{row:!0,children:[Object(h.jsx)(l.a,{value:"top",label:"Top",labelPlacement:"top",control:Object(h.jsx)(o.a,{})}),Object(h.jsx)(l.a,{value:"start",label:"Start",labelPlacement:"start",control:Object(h.jsx)(o.a,{})}),Object(h.jsx)(l.a,{value:"bottom",label:"Bottom",labelPlacement:"bottom",control:Object(h.jsx)(o.a,{})}),Object(h.jsx)(l.a,{value:"end",label:"End",labelPlacement:"end",control:Object(h.jsx)(o.a,{})})]})})})]}),Object(h.jsx)(O.a,{title:"Adding Colors",children:Object(h.jsx)(i.a,{component:"fieldset",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(l.a,{control:Object(h.jsx)(o.a,{defaultChecked:!0,color:"default"}),label:"Default"}),Object(h.jsx)(l.a,{control:Object(h.jsx)(o.a,{defaultChecked:!0}),label:"Primary"}),Object(h.jsx)(l.a,{control:Object(h.jsx)(u.n,{defaultChecked:!0,color:"info"}),label:"Info"}),Object(h.jsx)(l.a,{control:Object(h.jsx)(u.n,{defaultChecked:!0,color:"success"}),label:"Success"}),Object(h.jsx)(l.a,{control:Object(h.jsx)(u.n,{defaultChecked:!0,color:"warning"}),label:"Warning"}),Object(h.jsx)(l.a,{control:Object(h.jsx)(u.n,{defaultChecked:!0,color:"error"}),label:"Error"}),Object(h.jsx)(l.a,{disabled:!0,control:Object(h.jsx)(u.n,{defaultChecked:!0,color:"error"}),label:"Disabled"}),Object(h.jsx)(l.a,{disabled:!0,control:Object(h.jsx)(u.n,{color:"error"}),label:"Disabled"})]})})})]})})]})}}}]);
//# sourceMappingURL=96.f7480288.chunk.js.map