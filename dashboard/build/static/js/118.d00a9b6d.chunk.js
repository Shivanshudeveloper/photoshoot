(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[118],{2788:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return j})),a.d(t,"e",(function(){return g})),a.d(t,"f",(function(){return O}));var o=a(3),n=a(2770),r=a(8),c=a(0),i=Object(r.a)(n.b)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(1.5),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function s(e){var t=Object.assign({},e);return Object(c.jsx)(i,Object(o.a)({},t))}var l=Object(r.a)(n.c)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8}}));function p(e){var t=Object.assign({},e);return Object(c.jsx)(l,Object(o.a)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},t))}var b=a(30),u=Object(r.a)("svg")((function(e){return{height:20,stroke:"none",cursor:"pointer",fill:e.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function d(e){var t=e.onClick,a=Object(b.a)(e,["onClick"]);return Object(c.jsx)(n.f,Object(o.a)(Object(o.a)({},a),{},{children:Object(c.jsx)(u,{viewBox:"0 0 24 24",onClick:t,children:Object(c.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var h=Object(r.a)(n.g)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(t.palette.divider)}}}));function j(e){var t=Object.assign({},e);return Object(c.jsx)(h,Object(o.a)({},t))}var m=Object(r.a)(n.h)((function(e){var t=e.theme,a="rtl"===t.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:t.spacing(1),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:t.palette.common.white,right:a&&"0",left:a&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:t.palette.grey[800]}}}));function g(e){var t=e.children,a=e.onClose,n=Object(b.a)(e,["children","onClose"]);return Object(c.jsx)(m,Object(o.a)(Object(o.a)({tipSize:8,anchor:"bottom",onClose:a,closeButton:!0,closeOnClick:!1},n),{},{children:t}))}var x=Object(r.a)("div")((function(e){var t=e.theme;return{zIndex:99,position:"absolute",left:t.spacing(1.5),bottom:t.spacing(3.5),boxShadow:t.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:t.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function O(e){var t=e.sx,a=Object(b.a)(e,["sx"]);return Object(c.jsx)(x,{sx:t,children:Object(c.jsx)(n.i,Object(o.a)({maxWidth:100,unit:"imperial"},a))})}},3389:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var o=a(3),n=a(17),r=a(2770),c=a(1),i=a(2788),s=a(8),l=a(26),p=a(375),b=a(603),u=a(2738),d=a(4322),h=a(379),j=a(0),m=Object(s.a)("div")((function(e){var t=e.theme;return{zIndex:99,minWidth:240,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:t.shape.borderRadius,backgroundColor:Object(l.a)(t.palette.grey[900],.72)}}));function g(e){var t=e.startTime,a=e.endTime,o=e.allDays,n=e.selectedTime,r=e.onChangeTime,c=e.onChangeAllDays,i=864e5,s=Math.round((a-t)/i),l=Math.round((n-t)/i);return Object(j.jsxs)(m,{children:[Object(j.jsxs)(p.a,{sx:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(j.jsx)(b.a,{variant:"subtitle2",sx:{color:"common.white"},children:"All Days"}),Object(j.jsx)(u.a,{size:"small",checked:o,onChange:function(e){return c(e.target.checked)}})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(b.a,{gutterBottom:!0,variant:"body2",sx:{color:o?"text.disabled":"common.white"},children:["Each Day: ",Object(h.a)(n)]}),Object(j.jsx)(d.a,{min:1,step:1,max:s,disabled:o,value:l,onChange:function(e){var a=e.target.value;r(t+a*i)}})]})}var x={maxzoom:9,type:"heatmap",paint:{"heatmap-weight":["interpolate",["linear"],["get","mag"],0,0,6,1],"heatmap-intensity":["interpolate",["linear"],["zoom"],0,1,9,3],"heatmap-color":["interpolate",["linear"],["heatmap-density"],0,"rgba(33,102,172,0)",.2,"rgb(103,169,207)",.4,"rgb(209,229,240)",.6,"rgb(253,219,199)",.8,"rgb(239,138,98)",.9,"rgb(255,201,101)"],"heatmap-radius":["interpolate",["linear"],["zoom"],0,2,9,20],"heatmap-opacity":["interpolate",["linear"],["zoom"],7,1,9,0]}};function O(e){var t=Object.assign({},e),a=Object(c.useState)(!0),s=Object(n.a)(a,2),l=s[0],p=s[1],b=Object(c.useState)([0,0]),u=Object(n.a)(b,2),d=u[0],h=u[1],m=Object(c.useState)(0),O=Object(n.a)(m,2),f=O[0],v=O[1],w=Object(c.useState)(null),y=Object(n.a)(w,2),C=y[0],k=y[1],z=Object(c.useState)({latitude:40,longitude:-100,zoom:3,bearing:0,pitch:0}),S=Object(n.a)(z,2),T=S[0],D=S[1];Object(c.useEffect)((function(){fetch("https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson").then((function(e){return e.json()})).then((function(e){var t=e.features,a=t[0].properties.time,o=t[t.length-1].properties.time;h([o,a]),k(e),v(a)}))}),[]);var R=Object(c.useMemo)((function(){return l?C:function(e,t){var a=new Date(t),o=a.getFullYear(),n=a.getMonth(),r=a.getDate();return{type:"FeatureCollection",features:e.features.filter((function(e){var t=new Date(e.properties.time);return t.getFullYear()===o&&t.getMonth()===n&&t.getDate()===r}))}}(C,f)}),[C,l,f]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(r.l,Object(o.a)(Object(o.a)(Object(o.a)({},T),{},{onViewportChange:D},t),{},{children:[Object(j.jsx)(i.f,{}),Object(j.jsx)(i.d,{}),Object(j.jsx)(i.a,{}),Object(j.jsx)(i.b,{}),R&&Object(j.jsx)(r.j,{type:"geojson",data:R,children:Object(j.jsx)(r.d,Object(o.a)({},x))})]})),Object(j.jsx)(g,{startTime:d[0],endTime:d[1],allDays:l,selectedTime:f,onChangeTime:v,onChangeAllDays:p})]})}}}]);
//# sourceMappingURL=118.d00a9b6d.chunk.js.map