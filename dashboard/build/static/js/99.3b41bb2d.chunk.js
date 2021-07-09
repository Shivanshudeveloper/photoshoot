(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[99],{2767:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),r=n(30),c=n(31),i=n(2643),o=n(375),l=n(603),s=n(2740),d=n(36),b=n(0);function u(e){var t=e.links,n=e.action,u=e.heading,f=e.moreLink,j=void 0===f?[]:f,p=e.sx,h=Object(r.a)(e,["links","action","heading","moreLink","sx"]);return Object(b.jsxs)(i.a,{sx:p,mb:5,spacing:2,children:[Object(b.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(b.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(b.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:u}),Object(b.jsx)(d.c,Object(a.a)({links:t},h))]}),n&&Object(b.jsx)(o.a,{sx:{flexShrink:0},children:n})]}),Object(c.isString)(j)?Object(b.jsx)(s.a,{href:j,target:"_blank",variant:"body2",children:j}):j.map((function(e){return Object(b.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},3150:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(3),r=n(30),c=n(26),i=n(2828),o=n.n(i),l=n(375),s=n(2709),d=n(2715),b=n(0);function u(e){var t=e.sx,n=Object(r.a)(e,["sx"]);return Object(b.jsx)(l.a,Object(a.a)(Object(a.a)({sx:Object(a.a)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},t)},n),{},{children:Object(b.jsx)(c.Icon,{icon:o.a})}))}function f(e){var t=e.colors,n=Object(r.a)(e,["colors"]);return Object(b.jsx)(s.a,Object(a.a)(Object(a.a)({row:!0},n),{},{children:t.map((function(e){var t="#FFFFFF"===e||"white"===e;return Object(b.jsx)(d.a,{value:e,color:"default",icon:Object(b.jsx)(u,{sx:Object(a.a)({},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)}})}),checkedIcon:Object(b.jsx)(u,{sx:Object(a.a)({transform:"scale(1.4)","&:before":{opacity:.48,width:"100%",content:"''",height:"100%",borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"},"& svg":{width:12,height:12,color:"common.white"}},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat(e.palette.grey[50024])},"& svg":{width:12,height:12,color:"common.black"}})}),sx:{color:e,"&:hover":{opacity:.72}}},e)}))}))}},4340:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return me}));var a=n(16),r=n.n(a),c=n(24),i=n(17),o=n(4217),l=n(4080),s=n(3459),d=n(4083),b=n(4213),u=n(4086),f=n(26),j=n(159),p=n(2792),h=n.n(p),x=n(1),v=n(55),O=n(2702),g=n(2749),y=n(295),m=n(2762),w=n(2988),k=n(296),C=n(401),D=n(27),S=n(378),F=n(156),I=n(2767),A=n(3),R=n(229),W=n(31),E=n(2823),M=n.n(E),T=n(228),V=n(2643),z=n(2757),B=n(2761),G=n(2739),L=n(2876),q=n(2756),N=n(2738),P=n(375),U=n(4265),J=n(2706),_=n(3150),H=n(0),K=["#00AB55","#1890FF","#94D82D","#FFC107","#FF4842","#04297A","#7A0C2E"],Q=function(e,t){var n={title:"",description:"",textColor:"#1890FF",allDay:!1,start:t?new Date(t.start):new Date,end:t?new Date(t.end):new Date};return e||t?Object(W.merge)({},n,e):n};function X(e){var t=e.event,n=e.range,a=e.onCancel,i=Object(j.b)().enqueueSnackbar,o=Object(k.c)(),l=!t,s=R.e().shape({title:R.g().max(255).required("Title is required"),description:R.g().max(5e3),end:R.b().when("start",(function(e,t){return e&&t.min(e,"End date must be later than start date")})),start:R.b()}),d=Object(T.d)({initialValues:Q(t,n),validationSchema:s,onSubmit:function(){var e=Object(c.a)(r.a.mark((function e(n,c){var l,s,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=c.resetForm,s=c.setSubmitting;try{d={title:n.title,description:n.description,textColor:n.textColor,allDay:n.allDay,start:n.start,end:n.end},t?(o(Object(C.i)(t.id,d)),i("Update event success",{variant:"success"})):(o(Object(C.b)(d)),i("Create event success",{variant:"success"})),l(),a(),s(!1)}catch(r){console.error(r)}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),b=d.values,u=d.errors,p=d.touched,h=d.handleSubmit,x=d.isSubmitting,v=d.getFieldProps,O=d.setFieldValue,g=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a(),o(Object(C.d)(t.id)),i("Delete event success",{variant:"success"})}catch(n){console.error(n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(H.jsx)(T.b,{value:d,children:Object(H.jsxs)(T.a,{autoComplete:"off",noValidate:!0,onSubmit:h,children:[Object(H.jsxs)(V.a,{spacing:3,sx:{p:3},children:[Object(H.jsx)(z.a,Object(A.a)(Object(A.a)({fullWidth:!0,label:"Title"},v("title")),{},{error:Boolean(p.title&&u.title),helperText:p.title&&u.title})),Object(H.jsx)(z.a,Object(A.a)(Object(A.a)({fullWidth:!0,multiline:!0,maxRows:4,label:"Description"},v("description")),{},{error:Boolean(p.description&&u.description),helperText:p.description&&u.description})),Object(H.jsx)(B.a,{control:Object(H.jsx)(G.a,Object(A.a)({checked:b.allDay},v("allDay"))),label:"All day"}),Object(H.jsx)(U.a,{label:"Start date",value:b.start,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return O("start",e)},renderInput:function(e){return Object(H.jsx)(z.a,Object(A.a)(Object(A.a)({},e),{},{fullWidth:!0}))}}),Object(H.jsx)(U.a,{label:"End date",value:b.end,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return O("end",e)},renderInput:function(e){return Object(H.jsx)(z.a,Object(A.a)(Object(A.a)({},e),{},{fullWidth:!0,error:Boolean(p.end&&u.end),helperText:p.end&&u.end,sx:{mb:3}}))}}),Object(H.jsx)(_.a,Object(A.a)(Object(A.a)({},v("textColor")),{},{colors:K}))]}),Object(H.jsxs)(L.a,{children:[!l&&Object(H.jsx)(q.a,{title:"Delete Event",children:Object(H.jsx)(N.a,{onClick:g,children:Object(H.jsx)(f.Icon,{icon:M.a,width:20,height:20})})}),Object(H.jsx)(P.a,{sx:{flexGrow:1}}),Object(H.jsx)(y.a,{type:"button",variant:"outlined",color:"inherit",onClick:a,children:"Cancel"}),Object(H.jsx)(J.a,{type:"submit",variant:"contained",loading:x,loadingIndicator:"Loading...",children:"Add"})]})]})})}var Y=n(30),Z=n(5),$=n(4087),ee=n.n($),te=n(4088),ne=n.n(te),ae=n(4089),re=n.n(ae),ce=n(4090),ie=n.n(ce),oe=n(2801),le=n.n(oe),se=n(162),de=n.n(se),be=n(8),ue=n(4218),fe=n(603),je=n(379),pe=n(36),he=[{value:"dayGridMonth",label:"Month",icon:ie.a},{value:"timeGridWeek",label:"Week",icon:ne.a},{value:"timeGridDay",label:"Day",icon:ee.a},{value:"listWeek",label:"Agenda",icon:re.a}],xe=Object(be.a)("div")((function(e){var t=e.theme;return Object(Z.a)({display:"flex",alignItems:"center",flexDirection:"column",padding:t.spacing(3,0)},t.breakpoints.up("sm"),{flexDirection:"row",padding:t.spacing(1.75,3),justifyContent:"space-between"})}));function ve(e){var t=e.date,n=e.view,a=e.onNextDate,r=e.onPrevDate,c=e.onToday,i=e.onChangeView,o=Object(Y.a)(e,["date","view","onNextDate","onPrevDate","onToday","onChangeView"]);return Object(H.jsxs)(xe,Object(A.a)(Object(A.a)({},o),{},{children:[Object(H.jsx)(pe.j,{width:"smDown",children:Object(H.jsx)(V.a,{direction:"row",spacing:1.5,children:he.map((function(e){return Object(H.jsx)(q.a,{title:e.label,children:Object(H.jsx)(ue.a,{value:n,selected:e.value===n,onChange:function(){return i(e.value)},sx:{width:32,height:32,padding:0},children:Object(H.jsx)(f.Icon,{icon:e.icon,width:20,height:20})})},e.value)}))})}),Object(H.jsx)(fe.a,{variant:"h5",sx:{my:{xs:1,sm:0}},children:Object(je.a)(t)}),Object(H.jsxs)(P.a,{sx:{display:"flex",alignItems:"center"},children:[Object(H.jsx)(N.a,{onClick:r,children:Object(H.jsx)(f.Icon,{icon:le.a,width:18,height:18})}),Object(H.jsx)(pe.d,{size:"small",color:"error",variant:"contained",onClick:c,sx:{mx:.5},children:"Today"}),Object(H.jsx)(N.a,{onClick:a,children:Object(H.jsx)(f.Icon,{icon:de.a,width:18,height:18})})]})]}))}var Oe=n(25),ge=Object(be.a)("div")((function(e){var t=e.theme;return{width:"calc(100% + 2px)",marginLeft:-1,marginBottom:-1,"& .fc":{"--fc-list-event-dot-width":"8px","--fc-border-color":t.palette.divider,"--fc-event-border-color":t.palette.info.light,"--fc-now-indicator-color":t.palette.error.main,"--fc-today-bg-color":t.palette.action.selected,"--fc-page-bg-color":t.palette.background.default,"--fc-neutral-bg-color":t.palette.background.neutral,"--fc-list-event-hover-bg-color":t.palette.action.hover,"--fc-highlight-color":Object(Oe.a)(t.palette.primary.main,.08)},"& .fc .fc-license-message":{display:"none"},"& .fc a":{color:t.palette.text.primary},"& .fc .fc-col-header ":{boxShadow:"inset 0 -1px 0 ".concat(t.palette.divider),"& th":{borderColor:"transparent"},"& .fc-col-header-cell-cushion":Object(A.a)(Object(A.a)({},t.typography.subtitle2),{},{padding:"13px 0"})},"& .fc .fc-event":{borderColor:"transparent",backgroundColor:"transparent"},"& .fc .fc-event .fc-event-main":{padding:"2px 4px",borderRadius:4,backgroundColor:t.palette.common.white,transition:t.transitions.create("filter"),"&:hover":{filter:"brightness(0.92)"},"&:before,&:after":{top:0,left:0,width:"100%",height:"100%",content:"''",borderRadius:4,position:"absolute",boxSizing:"border-box"},"&:before":{zIndex:8,opacity:.32,border:"solid 1px currentColor"},"&:after":{zIndex:7,opacity:.24,backgroundColor:"currentColor"}},"& .fc .fc-event .fc-event-main-frame":{fontSize:13,lineHeight:"20px",filter:"brightness(0.24)"},"& .fc .fc-daygrid-event .fc-event-title":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},"& .fc .fc-event .fc-event-time":{padding:0,overflow:"unset",fontWeight:t.typography.fontWeightBold},"& .fc .fc-popover":{border:0,overflow:"hidden",boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper},"& .fc .fc-popover-header":Object(A.a)(Object(A.a)({},t.typography.subtitle2),{},{padding:t.spacing(1),backgroundColor:t.palette.grey[50012],borderBottom:"solid 1px ".concat(t.palette.divider)}),"& .fc .fc-popover-close":{opacity:.48,transition:t.transitions.create("opacity"),"&:hover":{opacity:1}},"& .fc .fc-more-popover .fc-popover-body":{padding:t.spacing(1.5)},"& .fc .fc-popover-body":{"& .fc-daygrid-event.fc-event-start, & .fc-daygrid-event.fc-event-end":{margin:"2px 0"}},"& .fc .fc-day-other .fc-daygrid-day-top":{opacity:1,"& .fc-daygrid-day-number":{color:t.palette.text.disabled}},"& .fc .fc-daygrid-day-number":Object(A.a)(Object(A.a)({},t.typography.body2),{},{padding:t.spacing(1,1,0)}),"& .fc .fc-daygrid-event":{marginTop:4},"& .fc .fc-daygrid-event.fc-event-start, & .fc .fc-daygrid-event.fc-event-end":{marginLeft:4,marginRight:4},"& .fc .fc-daygrid-more-link":Object(A.a)(Object(A.a)({},t.typography.caption),{},{color:t.palette.text.secondary}),"& .fc .fc-timegrid-axis-cushion":Object(A.a)(Object(A.a)({},t.typography.body2),{},{color:t.palette.text.secondary}),"& .fc .fc-timegrid-slot-label-cushion":Object(A.a)({},t.typography.body2),"& .fc-direction-ltr .fc-list-day-text, .fc-direction-rtl .fc-list-day-side-text, .fc-direction-ltr .fc-list-day-side-text, .fc-direction-rtl .fc-list-day-text":Object(A.a)({},t.typography.subtitle2),"& .fc .fc-list-event":Object(A.a)(Object(A.a)({},t.typography.body2),{},{"& .fc-list-event-time":{color:t.palette.text.secondary}}),"& .fc .fc-list-table":{"& th, td":{borderColor:"transparent"}}}})),ye=function(e){var t=e.calendar,n=t.events,a=t.selectedEventId;return a?n.find((function(e){return e.id===a})):null};function me(){var e=Object(k.c)(),t=Object(v.a)(),n=Object(O.a)(t.breakpoints.down("sm")),a=Object(x.useRef)(null),p=Object(j.b)().enqueueSnackbar,A=Object(x.useState)(new Date),R=Object(i.a)(A,2),W=R[0],E=R[1],M=Object(x.useState)(n?"listWeek":"dayGridMonth"),T=Object(i.a)(M,2),V=T[0],z=T[1],B=Object(k.d)(ye),G=Object(k.d)((function(e){return e.calendar})),L=G.events,q=G.isOpenModal,N=G.selectedRange;Object(x.useEffect)((function(){e(Object(C.e)())}),[e]),Object(x.useEffect)((function(){var e=a.current;if(e){var t=e.getApi(),r=n?"listWeek":"dayGridMonth";t.changeView(r),z(r)}}),[n]);var P=function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.event;try{e(Object(C.i)(a.id,{allDay:a.allDay,start:a.start,end:a.end})),p("Update event success",{variant:"success"})}catch(r){console.error(r)}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.event;try{e(Object(C.i)(a.id,{allDay:a.allDay,start:a.start,end:a.end})),p("Update event success",{variant:"success"})}catch(r){console.error(r)}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),J=function(){e(Object(C.a)())};return Object(H.jsx)(S.a,{title:"Calendar | Minimal-UI",children:Object(H.jsxs)(g.a,{maxWidth:"xl",children:[Object(H.jsx)(I.a,{heading:"Calendar",links:[{name:"Dashboard",href:D.b.root},{name:"Calendar"}],moreLink:"https://fullcalendar.io/docs/react",action:Object(H.jsx)(y.a,{variant:"contained",startIcon:Object(H.jsx)(f.Icon,{icon:h.a,width:20,height:20}),onClick:function(){e(Object(C.f)())},children:"New Event"})}),Object(H.jsx)(m.a,{children:Object(H.jsxs)(ge,{children:[Object(H.jsx)(ve,{date:W,view:V,onNextDate:function(){var e=a.current;if(e){var t=e.getApi();t.next(),E(t.getDate())}},onPrevDate:function(){var e=a.current;if(e){var t=e.getApi();t.prev(),E(t.getDate())}},onToday:function(){var e=a.current;if(e){var t=e.getApi();t.today(),E(t.getDate())}},onChangeView:function(e){var t=a.current;t&&(t.getApi().changeView(e),z(e))}}),Object(H.jsx)(o.a,{weekends:!0,editable:!0,droppable:!0,selectable:!0,events:L,ref:a,rerenderDelay:10,initialDate:W,initialView:V,dayMaxEventRows:3,eventDisplay:"block",headerToolbar:!1,allDayMaintainDuration:!0,eventResizableFromStart:!0,select:function(t){var n=a.current;n&&n.getApi().unselect();e(Object(C.h)(t.start,t.end))},eventDrop:U,eventClick:function(t){e(Object(C.g)(t.event.id))},eventResize:P,height:n?"auto":720,plugins:[l.a,s.b,b.a,d.a,u.a]})]})}),Object(H.jsxs)(F.b,{open:q,onClose:J,children:[Object(H.jsx)(w.a,{children:B?"Edit Event":"Add Event"}),Object(H.jsx)(X,{event:B,range:N,onCancel:J})]})]})})}}}]);
//# sourceMappingURL=99.3b41bb2d.chunk.js.map