(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[53],{2773:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var l=a(3),n=a(30),r=a(31),i=a(2649),s=a(380),c=a(608),d=a(2746),o=a(36),u=a(0);function j(e){var t=e.links,a=e.action,j=e.heading,b=e.moreLink,h=void 0===b?[]:b,x=e.sx,O=Object(n.a)(e,["links","action","heading","moreLink","sx"]);return Object(u.jsxs)(i.a,{sx:x,mb:5,spacing:2,children:[Object(u.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(u.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(u.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:j}),Object(u.jsx)(o.c,Object(l.a)({links:t},O))]}),a&&Object(u.jsx)(s.a,{sx:{flexShrink:0},children:a})]}),Object(r.isString)(h)?Object(u.jsx)(d.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(u.jsx)(d.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2776:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return o}));var l=a(3),n=a(608),r=a(2768),i=a(2784),s=a(380),c=a(0);function d(e){var t=e.title;return Object(c.jsx)(n.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function o(e){var t=e.title,a=e.sx,n=e.children;return Object(c.jsxs)(r.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(c.jsx)(i.a,{title:t}),Object(c.jsx)(s.a,{sx:Object(l.a)({p:3,minHeight:180},a),children:n})]})}},2784:function(e,t,a){"use strict";var l=a(5),n=a(7),r=a(2),i=a(1),s=(a(12),a(11)),c=a(2702),d=a(608),o=a(14),u=a(8),j=a(2643),b=a(2703);function h(e){return Object(j.a)("MuiCardHeader",e)}var x=Object(b.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),O=a(0),f=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(r.a)((a={},Object(l.a)(a,"& .".concat(x.title),t.title),Object(l.a)(a,"& .".concat(x.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),p=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),m=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),w=i.forwardRef((function(e,t){var a=Object(o.a)({props:e,name:"MuiCardHeader"}),l=a.action,i=a.avatar,u=a.className,j=a.component,b=void 0===j?"div":j,x=a.disableTypography,w=void 0!==x&&x,g=a.subheader,y=a.subheaderTypographyProps,P=a.title,W=a.titleTypographyProps,C=Object(n.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),M=Object(r.a)({},a,{component:b,disableTypography:w}),S=function(e){var t=e.classes;return Object(c.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(M),T=P;null==T||T.type===d.a||w||(T=Object(O.jsx)(d.a,Object(r.a)({variant:i?"body2":"h5",className:S.title,component:"span",display:"block"},W,{children:T})));var V=g;return null==V||V.type===d.a||w||(V=Object(O.jsx)(d.a,Object(r.a)({variant:i?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:V}))),Object(O.jsxs)(f,Object(r.a)({className:Object(s.a)(S.root,u),as:b,ref:t,styleProps:M},C,{children:[i&&Object(O.jsx)(p,{className:S.avatar,styleProps:M,children:i}),Object(O.jsxs)(m,{className:S.content,styleProps:M,children:[T,V]}),l&&Object(O.jsx)(v,{className:S.action,styleProps:M,children:l})]}))}));t.a=w},3014:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return o}));var l=a(17),n=a(1),r=(a(12),a(0)),i=n.createContext(null);function s(e){var t=e.children,a=e.value,s=function(){var e=n.useState(null),t=Object(l.a)(e,2),a=t[0],r=t[1];return n.useEffect((function(){r("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),a}(),c=n.useMemo((function(){return{idPrefix:s,value:a}}),[s,a]);return Object(r.jsx)(i.Provider,{value:c,children:t})}function c(){return n.useContext(i)}function d(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(t)}function o(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(t)}},3015:function(e,t,a){"use strict";var l=a(2),n=a(7),r=a(1),i=(a(12),a(4345)),s=a(3014),c=a(0),d=r.forwardRef((function(e,t){var a=e.children,d=Object(n.a)(e,["children"]),o=Object(s.d)();if(null===o)throw new TypeError("No TabContext provided");var u=r.Children.map(a,(function(e){return r.isValidElement(e)?r.cloneElement(e,{"aria-controls":Object(s.b)(o,e.props.value),id:Object(s.c)(o,e.props.value)}):null}));return Object(c.jsx)(i.a,Object(l.a)({},d,{ref:t,value:o.value,children:u}))}));t.a=d},3058:function(e,t,a){"use strict";var l=a(611),n=a(610);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(a(1));var r=l(a(612)),i=a(0),s=(0,r.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");t.default=s},3065:function(e,t,a){"use strict";var l=a(2),n=a(7),r=a(1),i=(a(12),a(11)),s=a(8),c=a(14),d=a(2702),o=a(2643),u=a(2703);function j(e){return Object(o.a)("MuiTabPanel",e)}Object(u.a)("MuiTabPanel",["root"]);var b=a(3014),h=a(0),x=Object(s.a)("div",{},{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(3)}})),O=r.forwardRef((function(e,t){var a=Object(c.a)({props:e,name:"MuiTabPanel"}),r=a.children,s=a.className,o=a.value,u=Object(n.a)(a,["children","className","value"]),O=Object(l.a)({},a),f=function(e){var t=e.classes;return Object(d.a)({root:["root"]},j,t)}(O),p=Object(b.d)();if(null===p)throw new TypeError("No TabContext provided");var v=Object(b.b)(p,o),m=Object(b.c)(p,o);return Object(h.jsx)(x,Object(l.a)({"aria-labelledby":m,className:Object(i.a)(f.root,s),hidden:o!==p.value,id:v,ref:t,role:"tabpanel",styleProps:O},u,{children:o===p.value&&r}))}));t.a=O},3261:function(e,t,a){"use strict";var l=a(611),n=a(610);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(a(1));var r=l(a(612)),i=a(0),s=(0,r.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=s},3262:function(e,t,a){"use strict";var l=a(611),n=a(610);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(a(1));var r=l(a(612)),i=a(0),s=(0,r.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=s},4356:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return G}));var l=a(17),n=a(1),r=a(8),i=a(380),s=a(2755),c=a(4381),d=a(3014),o=a(3015),u=a(3065),j=a(26),b=a(383),h=a(2773),x=a(5),O=a(3),f=a(3261),p=a.n(f),v=a(3058),m=a.n(v),w=a(3262),g=a.n(w),y=a(2649),P=a(2763),W=a(2759),C=a(2765),M=a(2764),S=a(2766),T=a(2729),V=a(2744),A=a(2760),I=a(2776),z=a(0),R=[{value:"USD",label:"$"},{value:"EUR",label:"\u20ac"},{value:"BTC",label:"\u0e3f"},{value:"JPY",label:"\xa5"}],H={"& > *":{my:"8px !important"}};function k(){var e=Object(n.useState)("EUR"),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),s=Object(l.a)(i,2),c=s[0],d=s[1],o=function(e){r(e.target.value)},u=function(e){return function(t){d(Object(O.a)(Object(O.a)({},c),{},Object(x.a)({},e,t.target.value)))}};return Object(z.jsxs)(y.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(z.jsxs)(y.a,{spacing:3,sx:{width:1},children:[Object(z.jsxs)(I.a,{title:"General",sx:H,children:[Object(z.jsx)(P.a,{fullWidth:!0,label:"Inactive",variant:"filled"}),Object(z.jsx)(P.a,{required:!0,fullWidth:!0,label:"Activated",variant:"filled",defaultValue:"Hello Minimal"}),Object(z.jsx)(P.a,{fullWidth:!0,type:"password",label:"Password",variant:"filled",autoComplete:"current-password"}),Object(z.jsx)(P.a,{disabled:!0,fullWidth:!0,label:"Disabled",variant:"filled",defaultValue:"Hello Minimal"})]}),Object(z.jsxs)(I.a,{title:"With Icon & Adornments",sx:H,children:[Object(z.jsx)(P.a,{fullWidth:!0,label:"Filled",variant:"filled",InputProps:{startAdornment:Object(z.jsx)(W.a,{position:"start",children:Object(z.jsx)(m.a,{})})}}),Object(z.jsx)(P.a,{disabled:!0,fullWidth:!0,label:"Disabled",variant:"filled",defaultValue:"Hello Minimal",InputProps:{startAdornment:Object(z.jsx)(W.a,{position:"start",children:Object(z.jsx)(m.a,{})})}}),Object(z.jsx)(P.a,{fullWidth:!0,label:"With normal TextField",InputProps:{startAdornment:Object(z.jsx)(W.a,{position:"start",children:"Kg"})},variant:"filled"}),Object(z.jsxs)(C.a,{variant:"filled",fullWidth:!0,children:[Object(z.jsx)(M.a,{id:"filled-adornment-weight",value:c.weight,onChange:u("weight"),endAdornment:Object(z.jsx)(W.a,{position:"end",children:"Kg"}),"aria-describedby":"filled-weight-helper-text",inputProps:{"aria-label":"weight"}}),Object(z.jsx)(S.a,{id:"filled-weight-helper-text",children:"Weight"})]}),Object(z.jsxs)(C.a,{variant:"filled",fullWidth:!0,children:[Object(z.jsx)(T.a,{htmlFor:"filled-adornment-password",children:"Password"}),Object(z.jsx)(M.a,{type:c.showPassword?"text":"password",value:c.password,onChange:u("password"),startAdornment:Object(z.jsx)(W.a,{position:"start",children:Object(z.jsx)(m.a,{})}),endAdornment:Object(z.jsx)(W.a,{position:"end",children:Object(z.jsx)(V.a,{onClick:function(){d(Object(O.a)(Object(O.a)({},c),{},{showPassword:!c.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:c.showPassword?Object(z.jsx)(p.a,{}):Object(z.jsx)(g.a,{})})})})]})]}),Object(z.jsxs)(I.a,{title:"With Caption",sx:H,children:[Object(z.jsx)(P.a,{fullWidth:!0,label:"Error",variant:"filled",defaultValue:"Hello Minimal",helperText:"Incorrect entry."}),Object(z.jsx)(P.a,{error:!0,fullWidth:!0,label:"Error",variant:"filled",defaultValue:"Hello Minimal",helperText:"Incorrect entry."})]})]}),Object(z.jsxs)(y.a,{spacing:3,sx:{width:1},children:[Object(z.jsxs)(I.a,{title:"Type",sx:H,children:[Object(z.jsx)(P.a,{fullWidth:!0,type:"password",label:"Password",variant:"filled",autoComplete:"current-password"}),Object(z.jsx)(P.a,{fullWidth:!0,type:"number",label:"Number",defaultValue:0,variant:"filled",InputLabelProps:{shrink:!0}}),Object(z.jsx)(P.a,{fullWidth:!0,label:"Search",type:"search",variant:"filled"})]}),Object(z.jsxs)(I.a,{title:"Size",sx:H,children:[Object(z.jsx)(P.a,{fullWidth:!0,label:"Size",size:"small",variant:"filled",defaultValue:"Small"}),Object(z.jsx)(P.a,{fullWidth:!0,label:"Size",variant:"filled",defaultValue:"Normal"})]}),Object(z.jsxs)(I.a,{title:"Select",sx:H,children:[Object(z.jsx)(P.a,{select:!0,fullWidth:!0,label:"Select",value:a,variant:"filled",onChange:o,helperText:"Please select your currency",children:R.map((function(e){return Object(z.jsx)(A.a,{value:e.value,children:e.label},e.value)}))}),Object(z.jsx)(P.a,{select:!0,fullWidth:!0,size:"small",value:a,variant:"filled",label:"Native select",SelectProps:{native:!0},onChange:o,helperText:"Please select your currency",children:R.map((function(e){return Object(z.jsx)("option",{value:e.value,children:e.label},e.value)}))})]}),Object(z.jsxs)(I.a,{title:"Multiline",sx:H,children:[Object(z.jsx)(P.a,{fullWidth:!0,label:"Multiline",multiline:!0,maxRows:4,value:"Controlled",onChange:u,variant:"filled"}),Object(z.jsx)(P.a,{fullWidth:!0,multiline:!0,variant:"filled",placeholder:"Placeholder",label:"Multiline Placeholder"}),Object(z.jsx)(P.a,{rows:4,fullWidth:!0,multiline:!0,label:"Multiline",variant:"filled",defaultValue:"Default Value"})]})]})]})}var N=a(2758),D=[{value:"USD",label:"$"},{value:"EUR",label:"\u20ac"},{value:"BTC",label:"\u0e3f"},{value:"JPY",label:"\xa5"}],E={"& > *":{my:"8px !important"}};function F(){var e=Object(n.useState)("EUR"),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),s=Object(l.a)(i,2),c=s[0],d=s[1],o=function(e){r(e.target.value)},u=function(e){return function(t){d(Object(O.a)(Object(O.a)({},c),{},Object(x.a)({},e,t.target.value)))}};return Object(z.jsxs)(y.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(z.jsxs)(y.a,{spacing:3,sx:{width:1},children:[Object(z.jsxs)(I.a,{title:"General",sx:E,children:[Object(z.jsx)(P.a,{variant:"standard",fullWidth:!0,label:"Inactive"}),Object(z.jsx)(P.a,{fullWidth:!0,label:"Activated",variant:"standard",defaultValue:"Hello Minimal"}),Object(z.jsx)(P.a,{fullWidth:!0,type:"password",label:"Password",variant:"standard"}),Object(z.jsx)(P.a,{disabled:!0,fullWidth:!0,label:"Disabled",variant:"standard",defaultValue:"Hello Minimal"})]}),Object(z.jsxs)(I.a,{title:"With Icon & Adornments",sx:E,children:[Object(z.jsx)(P.a,{fullWidth:!0,label:"Standard",variant:"standard",InputProps:{startAdornment:Object(z.jsx)(W.a,{position:"start",children:Object(z.jsx)(m.a,{})})}}),Object(z.jsx)(P.a,{disabled:!0,fullWidth:!0,label:"Disabled",variant:"standard",defaultValue:"Hello Minimal",InputProps:{startAdornment:Object(z.jsx)(W.a,{position:"start",children:Object(z.jsx)(m.a,{})})}}),Object(z.jsx)(P.a,{fullWidth:!0,variant:"standard",label:"With normal TextField",InputProps:{startAdornment:Object(z.jsx)(W.a,{position:"start",children:"Kg"})}}),Object(z.jsxs)(C.a,{fullWidth:!0,children:[Object(z.jsx)(N.a,{value:c.weight,onChange:u("weight"),endAdornment:Object(z.jsx)(W.a,{position:"end",children:"Kg"})}),Object(z.jsx)(S.a,{id:"standard-weight-helper-text",children:"Weight"})]}),Object(z.jsxs)(C.a,{fullWidth:!0,children:[Object(z.jsx)(T.a,{htmlFor:"standard-adornment-password",children:"Password"}),Object(z.jsx)(N.a,{type:c.showPassword?"text":"password",value:c.password,onChange:u("password"),startAdornment:Object(z.jsx)(W.a,{position:"start",children:Object(z.jsx)(m.a,{})}),endAdornment:Object(z.jsx)(W.a,{position:"end",children:Object(z.jsx)(V.a,{onClick:function(){d(Object(O.a)(Object(O.a)({},c),{},{showPassword:!c.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:c.showPassword?Object(z.jsx)(p.a,{}):Object(z.jsx)(g.a,{})})})})]})]}),Object(z.jsxs)(I.a,{title:"With Caption",sx:E,children:[Object(z.jsx)(P.a,{fullWidth:!0,variant:"standard",label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."}),Object(z.jsx)(P.a,{error:!0,fullWidth:!0,variant:"standard",label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."})]})]}),Object(z.jsxs)(y.a,{spacing:3,sx:{width:1},children:[Object(z.jsxs)(I.a,{title:"Type",sx:E,children:[Object(z.jsx)(P.a,{fullWidth:!0,variant:"standard",type:"password",label:"Password",autoComplete:"current-password"}),Object(z.jsx)(P.a,{fullWidth:!0,variant:"standard",type:"number",label:"Number",defaultValue:0,InputLabelProps:{shrink:!0}}),Object(z.jsx)(P.a,{fullWidth:!0,variant:"standard",label:"Search",type:"search"})]}),Object(z.jsxs)(I.a,{title:"Size",sx:E,children:[Object(z.jsx)(P.a,{fullWidth:!0,variant:"standard",label:"Size",size:"small",defaultValue:"Small"}),Object(z.jsx)(P.a,{fullWidth:!0,variant:"standard",label:"Size",defaultValue:"Normal"})]}),Object(z.jsxs)(I.a,{title:"Select",sx:E,children:[Object(z.jsx)(P.a,{select:!0,fullWidth:!0,variant:"standard",label:"Select",value:a,onChange:o,helperText:"Please select your currency",children:D.map((function(e){return Object(z.jsx)(A.a,{value:e.value,children:e.label},e.value)}))}),Object(z.jsx)(P.a,{select:!0,fullWidth:!0,variant:"standard",size:"small",value:a,label:"Native select",SelectProps:{native:!0},onChange:o,helperText:"Please select your currency",children:D.map((function(e){return Object(z.jsx)("option",{value:e.value,children:e.label},e.value)}))})]}),Object(z.jsxs)(I.a,{title:"Multiline",sx:E,children:[Object(z.jsx)(P.a,{fullWidth:!0,variant:"standard",label:"Multiline",multiline:!0,maxRows:4,value:"Controlled",onChange:u}),Object(z.jsx)(P.a,{fullWidth:!0,variant:"standard",multiline:!0,placeholder:"Placeholder",label:"Multiline Placeholder"}),Object(z.jsx)(P.a,{rows:4,fullWidth:!0,variant:"standard",multiline:!0,label:"Multiline",defaultValue:"Default Value"})]})]})]})}var U=a(2736),_=[{value:"USD",label:"$"},{value:"EUR",label:"\u20ac"},{value:"BTC",label:"\u0e3f"},{value:"JPY",label:"\xa5"}],B={"& > *":{my:"8px !important"}};function L(){var e=Object(n.useState)("EUR"),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),s=Object(l.a)(i,2),c=s[0],d=s[1],o=function(e){r(e.target.value)},u=function(e){return function(t){d(Object(O.a)(Object(O.a)({},c),{},Object(x.a)({},e,t.target.value)))}};return Object(z.jsxs)(y.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(z.jsxs)(y.a,{spacing:3,sx:{width:1},children:[Object(z.jsxs)(I.a,{title:"General",sx:B,children:[Object(z.jsx)(P.a,{fullWidth:!0,label:"Inactive"}),Object(z.jsx)(P.a,{required:!0,fullWidth:!0,label:"Activated",defaultValue:"Hello Minimal"}),Object(z.jsx)(P.a,{fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),Object(z.jsx)(P.a,{disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal"})]}),Object(z.jsxs)(I.a,{title:"With Icon & Adornments",sx:B,children:[Object(z.jsx)(P.a,{fullWidth:!0,label:"Filled",InputProps:{startAdornment:Object(z.jsx)(W.a,{position:"start",children:Object(z.jsx)(m.a,{})})}}),Object(z.jsx)(P.a,{disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal",InputProps:{startAdornment:Object(z.jsx)(W.a,{position:"start",children:Object(z.jsx)(m.a,{})})}}),Object(z.jsx)(P.a,{fullWidth:!0,label:"With normal TextField",InputProps:{startAdornment:Object(z.jsx)(W.a,{position:"start",children:"Kg"})}}),Object(z.jsxs)(C.a,{fullWidth:!0,children:[Object(z.jsx)(U.a,{id:"outlined-adornment-weight",value:c.weight,onChange:u("weight"),endAdornment:Object(z.jsx)(W.a,{position:"end",children:"Kg"}),"aria-describedby":"outlined-weight-helper-text",inputProps:{"aria-label":"weight"}}),Object(z.jsx)(S.a,{id:"outlined-weight-helper-text",children:"Weight"})]}),Object(z.jsxs)(C.a,{fullWidth:!0,children:[Object(z.jsx)(T.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(z.jsx)(U.a,{type:c.showPassword?"text":"password",value:c.password,onChange:u("password"),startAdornment:Object(z.jsx)(W.a,{position:"start",children:Object(z.jsx)(m.a,{})}),endAdornment:Object(z.jsx)(W.a,{position:"end",children:Object(z.jsx)(V.a,{onClick:function(){d(Object(O.a)(Object(O.a)({},c),{},{showPassword:!c.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:c.showPassword?Object(z.jsx)(p.a,{}):Object(z.jsx)(g.a,{})})})})]})]}),Object(z.jsxs)(I.a,{title:"With Caption",sx:B,children:[Object(z.jsx)(P.a,{fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."}),Object(z.jsx)(P.a,{error:!0,fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."})]})]}),Object(z.jsxs)(y.a,{spacing:3,sx:{width:1},children:[Object(z.jsxs)(I.a,{title:"Type",sx:B,children:[Object(z.jsx)(P.a,{fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),Object(z.jsx)(P.a,{fullWidth:!0,type:"number",label:"Number",defaultValue:0,InputLabelProps:{shrink:!0}}),Object(z.jsx)(P.a,{fullWidth:!0,label:"Search",type:"search"})]}),Object(z.jsxs)(I.a,{title:"Size",sx:B,children:[Object(z.jsx)(P.a,{fullWidth:!0,label:"Size",size:"small",defaultValue:"Small"}),Object(z.jsx)(P.a,{fullWidth:!0,label:"Size",defaultValue:"Normal"})]}),Object(z.jsxs)(I.a,{title:"Select",sx:B,children:[Object(z.jsx)(P.a,{select:!0,fullWidth:!0,label:"Select",value:a,onChange:o,helperText:"Please select your currency",children:_.map((function(e){return Object(z.jsx)(A.a,{value:e.value,children:e.label},e.value)}))}),Object(z.jsx)(P.a,{select:!0,fullWidth:!0,size:"small",value:a,label:"Native select",SelectProps:{native:!0},onChange:o,helperText:"Please select your currency",children:_.map((function(e){return Object(z.jsx)("option",{value:e.value,children:e.label},e.value)}))})]}),Object(z.jsxs)(I.a,{title:"Multiline",sx:B,children:[Object(z.jsx)(P.a,{fullWidth:!0,label:"Multiline",multiline:!0,maxRows:4,value:"Controlled",onChange:u}),Object(z.jsx)(P.a,{fullWidth:!0,multiline:!0,placeholder:"Placeholder",label:"Multiline Placeholder"}),Object(z.jsx)(P.a,{rows:4,fullWidth:!0,multiline:!0,label:"Multiline",defaultValue:"Default Value"})]})]})]})}var K=[{name:"Filled",component:Object(z.jsx)(k,{})},{name:"Standard",component:Object(z.jsx)(F,{})},{name:"Outlined",component:Object(z.jsx)(L,{})}],J=Object(r.a)(b.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function G(){var e=Object(n.useState)("1"),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(z.jsxs)(J,{title:"Components: TextField | Minimal-UI",children:[Object(z.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(z.jsx)(s.a,{maxWidth:"lg",children:Object(z.jsx)(h.a,{heading:"TextField",links:[{name:"Components",href:j.d.components},{name:"TextField"}],moreLink:"https://next.material-ui.com/components/text-fields"})})}),Object(z.jsx)(s.a,{maxWidth:"lg",children:Object(z.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(z.jsxs)(d.a,{value:a,children:[Object(z.jsx)(o.a,{onChange:function(e,t){r(t)},children:K.map((function(e,t){return Object(z.jsx)(c.a,{disableRipple:!0,label:e.name,value:String(t+1)},e.name)}))}),K.map((function(e,t){return Object(z.jsx)(u.a,{value:String(t+1),sx:{mt:5},children:e.component},e.name)}))]})})})]})}}}]);
//# sourceMappingURL=53.ab480c34.chunk.js.map