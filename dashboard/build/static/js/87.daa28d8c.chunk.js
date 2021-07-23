(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[87],{2786:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(3),r=a(31),i=a(32),c=a(2664),s=a(389),o=a(625),l=a(2759),d=a(36),b=a(0);function j(e){var t=e.links,a=e.action,j=e.heading,u=e.moreLink,p=void 0===u?[]:u,h=e.sx,x=Object(r.a)(e,["links","action","heading","moreLink","sx"]);return Object(b.jsxs)(c.a,{sx:h,mb:5,spacing:2,children:[Object(b.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(b.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(b.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:j}),Object(b.jsx)(d.c,Object(n.a)({links:t},x))]}),a&&Object(b.jsx)(s.a,{sx:{flexShrink:0},children:a})]}),Object(i.isString)(p)?Object(b.jsx)(l.a,{href:p,target:"_blank",variant:"body2",children:p}):p.map((function(e){return Object(b.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2789:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var n=a(3),r=a(625),i=a(2781),c=a(2797),s=a(389),o=a(0);function l(e){var t=e.title;return Object(o.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,a=e.sx,r=e.children;return Object(o.jsxs)(i.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(o.jsx)(c.a,{title:t}),Object(o.jsx)(s.a,{sx:Object(n.a)({p:3,minHeight:180},a),children:r})]})}},2797:function(e,t,a){"use strict";var n=a(5),r=a(8),i=a(2),c=a(1),s=(a(10),a(12)),o=a(2718),l=a(625),d=a(14),b=a(7),j=a(2658),u=a(2719);function p(e){return Object(j.a)("MuiCardHeader",e)}var h=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=a(0),m=Object(b.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(i.a)((a={},Object(n.a)(a,"& .".concat(h.title),t.title),Object(n.a)(a,"& .".concat(h.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),O=Object(b.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(b.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=Object(b.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,c=a.avatar,b=a.className,j=a.component,u=void 0===j?"div":j,h=a.disableTypography,g=void 0!==h&&h,y=a.subheader,w=a.subheaderTypographyProps,k=a.title,C=a.titleTypographyProps,S=Object(r.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),T=Object(i.a)({},a,{component:u,disableTypography:g}),H=function(e){var t=e.classes;return Object(o.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(T),M=k;null==M||M.type===l.a||g||(M=Object(x.jsx)(l.a,Object(i.a)({variant:c?"body2":"h5",className:H.title,component:"span",display:"block"},C,{children:M})));var N=y;return null==N||N.type===l.a||g||(N=Object(x.jsx)(l.a,Object(i.a)({variant:c?"body2":"body1",className:H.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:N}))),Object(x.jsxs)(m,Object(i.a)({className:Object(s.a)(H.root,b),as:u,ref:t,styleProps:T},S,{children:[c&&Object(x.jsx)(O,{className:H.avatar,styleProps:T,children:c}),Object(x.jsxs)(v,{className:H.content,styleProps:T,children:[M,N]}),n&&Object(x.jsx)(f,{className:H.action,styleProps:T,children:n})]}))}));t.a=g},4290:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(3),r=a(7),i=a(55),c=a(2762),s=a(625),o=a(389),l=a(2768),d=a(2664),b=a(26),j=a(393),u=a(2786),p=a(2789),h=a(0),x={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}},m=Object(r.a)(j.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function O(e){var t=e.sx,a=e.title;return Object(h.jsx)(c.a,{sx:Object(n.a)({padding:3,margin:1.5,display:"flex",alignItems:"center",justifyContent:"center",width:{xs:"calc((100%/2) - 24px)",sm:"calc((100%/4) - 24px)",md:"calc((100%/6) - 24px)"}},t),children:Object(h.jsx)(s.a,{variant:"subtitle1",children:a})})}function f(){var e=Object(i.a)(),t=e.shadows.slice(1,e.shadows.length),a=Object.entries(e.customShadows).slice(0,Object.entries(e.customShadows).length-6);return Object(h.jsxs)(m,{title:"Foundations: Shadows | Minimal-UI",children:[Object(h.jsx)(o.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(h.jsx)(l.a,{maxWidth:"lg",children:Object(h.jsx)(u.a,{heading:"Shadows",links:[{name:"Components",href:b.d.components},{name:"Shadows"}]})})}),Object(h.jsx)(l.a,{maxWidth:"lg",children:Object(h.jsxs)(d.a,{spacing:5,children:[Object(h.jsx)(p.a,{title:"System",sx:x,children:t.map((function(e,t){return Object(h.jsx)(O,{title:"z".concat(t+1),sx:{boxShadow:e}},e)}))}),Object(h.jsx)(p.a,{title:"Customs",sx:x,children:a.map((function(e){return Object(h.jsx)(O,{title:e[0],sx:{boxShadow:e[1]}},e)}))}),Object(h.jsx)(p.a,{title:"Colors",sx:x,children:["primary","secondary","info","success","warning","error"].map((function(t){return Object(h.jsx)(O,{title:t,sx:{color:e.palette[t].contrastText,bgcolor:e.palette[t].main,boxShadow:e.customShadows[t]}},t)}))})]})})]})}}}]);
//# sourceMappingURL=87.daa28d8c.chunk.js.map