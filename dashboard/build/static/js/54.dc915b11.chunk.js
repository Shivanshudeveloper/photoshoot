(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[54],{2786:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(3),n=a(31),o=a(32),i=a(2664),c=a(389),s=a(625),d=a(2759),l=a(36),u=a(0);function b(e){var t=e.links,a=e.action,b=e.heading,p=e.moreLink,j=void 0===p?[]:p,m=e.sx,h=Object(n.a)(e,["links","action","heading","moreLink","sx"]);return Object(u.jsxs)(i.a,{sx:m,mb:5,spacing:2,children:[Object(u.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(u.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(u.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(u.jsx)(l.c,Object(r.a)({links:t},h))]}),a&&Object(u.jsx)(c.a,{sx:{flexShrink:0},children:a})]}),Object(o.isString)(j)?Object(u.jsx)(d.a,{href:j,target:"_blank",variant:"body2",children:j}):j.map((function(e){return Object(u.jsx)(d.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2789:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return l}));var r=a(3),n=a(625),o=a(2781),i=a(2797),c=a(389),s=a(0);function d(e){var t=e.title;return Object(s.jsx)(n.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function l(e){var t=e.title,a=e.sx,n=e.children;return Object(s.jsxs)(o.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(i.a,{title:t}),Object(s.jsx)(c.a,{sx:Object(r.a)({p:3,minHeight:180},a),children:n})]})}},2797:function(e,t,a){"use strict";var r=a(5),n=a(8),o=a(2),i=a(1),c=(a(10),a(12)),s=a(2718),d=a(625),l=a(14),u=a(7),b=a(2658),p=a(2719);function j(e){return Object(b.a)("MuiCardHeader",e)}var m=Object(p.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),O=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(o.a)((a={},Object(r.a)(a,"& .".concat(m.title),t.title),Object(r.a)(a,"& .".concat(m.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),f=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),x=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCardHeader"}),r=a.action,i=a.avatar,u=a.className,b=a.component,p=void 0===b?"div":b,m=a.disableTypography,g=void 0!==m&&m,y=a.subheader,R=a.subheaderTypographyProps,C=a.title,k=a.titleTypographyProps,A=Object(n.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),M=Object(o.a)({},a,{component:p,disableTypography:g}),N=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},j,t)}(M),P=C;null==P||P.type===d.a||g||(P=Object(h.jsx)(d.a,Object(o.a)({variant:i?"body2":"h5",className:N.title,component:"span",display:"block"},k,{children:P})));var G=y;return null==G||G.type===d.a||g||(G=Object(h.jsx)(d.a,Object(o.a)({variant:i?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},R,{children:G}))),Object(h.jsxs)(O,Object(o.a)({className:Object(c.a)(N.root,u),as:p,ref:t,styleProps:M},A,{children:[i&&Object(h.jsx)(f,{className:N.avatar,styleProps:M,children:i}),Object(h.jsxs)(v,{className:N.content,styleProps:M,children:[P,G]}),r&&Object(h.jsx)(x,{className:N.action,styleProps:M,children:r})]}))}));t.a=g},3063:function(e,t,a){"use strict";var r=a(1),n=r.createContext({});t.a=n},4230:function(e,t,a){"use strict";var r=a(421),n=a(417),o=a(177),i=a(422);var c=a(17),s=a(5),d=a(8),l=a(2),u=a(1),b=(a(200),a(10),a(12)),p=a(2718),j=a(7),m=a(14),h=a(2756),O=a(2762),f=a(3063),x=a(100),v=a(2658),g=a(2719);function y(e){return Object(v.a)("MuiAccordion",e)}var R=Object(g.a)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),C=a(0),k=Object(j.a)(O.a,{},{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(l.a)(Object(s.a)({},"& .".concat(R.region),t.region),t.root,!a.square&&t.rounded,!a.disableGutters&&t.gutters)}})((function(e){var t,a=e.theme,r={duration:a.transitions.duration.shortest};return t={position:"relative",transition:a.transitions.create(["margin"],r),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:a.palette.divider,transition:a.transitions.create(["opacity","background-color"],r)},"&:first-of-type":{"&:before":{display:"none"}}},Object(s.a)(t,"&.".concat(R.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),Object(s.a)(t,"&.".concat(R.disabled),{backgroundColor:a.palette.action.disabledBackground}),t}),(function(e){var t=e.theme,a=e.styleProps;return Object(l.a)({},!a.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:t.shape.borderRadius,borderTopRightRadius:t.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:t.shape.borderRadius,borderBottomRightRadius:t.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!a.disableGutters&&Object(s.a)({},"&.".concat(R.expanded),{margin:"16px 0"}))})),A=u.forwardRef((function(e,t){var a,s=Object(m.a)({props:e,name:"MuiAccordion"}),j=s.children,O=s.className,v=s.defaultExpanded,g=void 0!==v&&v,R=s.disabled,A=void 0!==R&&R,M=s.disableGutters,N=void 0!==M&&M,P=s.expanded,G=s.onChange,T=s.square,w=void 0!==T&&T,I=s.TransitionComponent,H=void 0===I?h.a:I,S=s.TransitionProps,B=Object(d.a)(s,["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"]),V=Object(x.a)({controlled:P,default:g,name:"Accordion",state:"expanded"}),W=Object(c.a)(V,2),q=W[0],L=W[1],D=u.useCallback((function(e){L(!q),G&&G(e,!q)}),[q,G,L]),E=u.Children.toArray(j),J=(a=E,Object(r.a)(a)||Object(n.a)(a)||Object(o.a)(a)||Object(i.a)()),_=J[0],U=J.slice(1),z=u.useMemo((function(){return{expanded:q,disabled:A,disableGutters:N,toggle:D}}),[q,A,N,D]),F=Object(l.a)({},s,{square:w,disabled:A,disableGutters:N,expanded:q}),K=function(e){var t=e.classes,a={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return Object(p.a)(a,y,t)}(F);return Object(C.jsxs)(k,Object(l.a)({className:Object(b.a)(K.root,O),ref:t,styleProps:F,square:w},B,{children:[Object(C.jsx)(f.a.Provider,{value:z,children:_}),Object(C.jsx)(H,Object(l.a)({in:q,timeout:"auto"},S,{children:Object(C.jsx)("div",{"aria-labelledby":_.props.id,id:_.props["aria-controls"],role:"region",className:K.region,children:U})}))]}))}));t.a=A},4235:function(e,t,a){"use strict";var r=a(5),n=a(8),o=a(2),i=a(1),c=(a(10),a(12)),s=a(2718),d=a(7),l=a(14),u=a(2738),b=a(3063),p=a(2658),j=a(2719);function m(e){return Object(p.a)("MuiAccordionSummary",e)}var h=Object(j.a)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),O=a(0),f=Object(d.a)(u.a,{},{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,a=e.theme,n=e.styleProps,i={duration:a.transitions.duration.shortest};return Object(o.a)((t={display:"flex",minHeight:48,padding:a.spacing(0,2),transition:a.transitions.create(["min-height","background-color"],i)},Object(r.a)(t,"&.".concat(h.focusVisible),{backgroundColor:a.palette.action.focus}),Object(r.a)(t,"&.".concat(h.disabled),{opacity:a.palette.action.disabledOpacity}),Object(r.a)(t,"&:hover:not(.".concat(h.disabled,")"),{cursor:"pointer"}),t),!n.disableGutters&&Object(r.a)({},"&.".concat(h.expanded),{minHeight:64}))})),x=Object(d.a)("div",{},{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,a=e.styleProps;return Object(o.a)({display:"flex",flexGrow:1,margin:"12px 0"},!a.disableGutters&&Object(r.a)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(h.expanded),{margin:"20px 0"}))})),v=Object(d.a)("div",{},{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return Object(r.a)({display:"flex",color:t.palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(h.expanded),{transform:"rotate(180deg)"})})),g=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiAccordionSummary"}),r=a.children,d=a.className,u=a.expandIcon,p=a.focusVisibleClassName,j=a.onClick,h=Object(n.a)(a,["children","className","expandIcon","focusVisibleClassName","onClick"]),g=i.useContext(b.a),y=g.disabled,R=void 0!==y&&y,C=g.disableGutters,k=g.expanded,A=g.toggle,M=Object(o.a)({},a,{expanded:k,disabled:R,disableGutters:C}),N=function(e){var t=e.classes,a=e.expanded,r=e.disabled,n=e.disableGutters,o={root:["root",a&&"expanded",r&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]};return Object(s.a)(o,m,t)}(M);return Object(O.jsxs)(f,Object(o.a)({focusRipple:!1,disableRipple:!0,disabled:R,component:"div","aria-expanded":k,className:Object(c.a)(N.root,d),focusVisibleClassName:Object(c.a)(N.focusVisible,p),onClick:function(e){A&&A(e),j&&j(e)},ref:t,styleProps:M},h,{children:[Object(O.jsx)(x,{className:N.content,styleProps:M,children:r}),u&&Object(O.jsx)(v,{className:N.expandIconWrapper,styleProps:M,children:u})]}))}));t.a=g},4236:function(e,t,a){"use strict";var r=a(2),n=a(8),o=a(1),i=(a(10),a(12)),c=a(2718),s=a(7),d=a(14),l=a(2658),u=a(2719);function b(e){return Object(l.a)("MuiAccordionDetails",e)}Object(u.a)("MuiAccordionDetails",["root"]);var p=a(0),j=Object(s.a)("div",{},{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),m=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiAccordionDetails"}),o=a.className,s=Object(n.a)(a,["className"]),l=Object(r.a)({},a),u=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(l);return Object(p.jsx)(j,Object(r.a)({className:Object(i.a)(u.root,o),ref:t,styleProps:l},s))}));t.a=m},4292:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var r=a(17),n=a(19),o=a(4),i=a.n(o),c=a(25),s=a(1),d=a(167),l=a.n(d),u=a(7),b=a(389),p=a(2768),j=a(4230),m=a(4235),h=a(625),O=a(4236),f=a(393),x=a(26),v=a(2786),g=a(2789),y=a(0),R=Object(n.a)(Array(4)).map((function(e,t){var a=t+1;return{value:"panel".concat(a),heading:"Accordion ".concat(a),subHeading:i.a.lorem.slug(),detail:i.a.lorem.lines()}})),C=Object(u.a)(f.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function k(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(y.jsxs)(C,{title:"Components: Accordion | Minimal-UI",children:[Object(y.jsx)(b.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(y.jsx)(p.a,{maxWidth:"lg",children:Object(y.jsx)(v.a,{heading:"Accordion",links:[{name:"Components",href:x.d.components},{name:"Accordion"}],moreLink:"https://next.material-ui.com/components/accordion"})})}),Object(y.jsxs)(p.a,{children:[Object(y.jsx)(g.a,{title:"Simple",sx:{mb:5},children:R.map((function(e,t){return Object(y.jsxs)(j.a,{disabled:3===t,children:[Object(y.jsx)(m.a,{expandIcon:Object(y.jsx)(c.Icon,{icon:l.a,width:20,height:20}),children:Object(y.jsx)(h.a,{variant:"subtitle1",children:e.heading})}),Object(y.jsx)(O.a,{children:Object(y.jsx)(h.a,{children:e.detail})})]},e.value)}))}),Object(y.jsx)(g.a,{title:"Controlled",children:R.map((function(e,t){return Object(y.jsxs)(j.a,{disabled:3===t,expanded:a===e.value,onChange:(r=e.value,function(e,t){n(!!t&&r)}),children:[Object(y.jsxs)(m.a,{expandIcon:Object(y.jsx)(c.Icon,{icon:l.a,width:20,height:20}),children:[Object(y.jsx)(h.a,{variant:"subtitle1",sx:{width:"33%",flexShrink:0},children:e.heading}),Object(y.jsx)(h.a,{sx:{color:"text.secondary"},children:e.subHeading})]}),Object(y.jsx)(O.a,{children:Object(y.jsx)(h.a,{children:e.detail})})]},e.value);var r}))})]})]})}}}]);
//# sourceMappingURL=54.dc915b11.chunk.js.map