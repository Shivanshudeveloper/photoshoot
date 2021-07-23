(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[137],{4365:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return U}));var r=a(5),n=a(27),i=a(7),s=a(2781),o=a(2759),c=a(2768),l=a(389),d=a(625),u=a(54),j=a(26),m=a(555),b=a(393),h=a(36),x=a(3),p=a(16),O=a.n(p),f=a(28),g=a(17),y=a(239),v=a(1),w=a(25),N=a(163),k=a(238),S=a(405),q=a.n(S),P=a(201),T=a.n(P),F=a(427),R=a.n(F),C=a(2664),W=a(2737),B=a(2776),I=a(2772),L=a(392),V=a(2728),z=a(168),A=a(0);function E(){var e=Object(u.a)().register,t=Object(z.a)(),a=Object(N.b)(),r=a.enqueueSnackbar,n=a.closeSnackbar,i=Object(v.useState)(!1),s=Object(g.a)(i,2),o=s[0],c=s[1],l=y.e().shape({firstName:y.g().min(2,"Too Short!").max(50,"Too Long!").required("First name required"),lastName:y.g().min(2,"Too Short!").max(50,"Too Long!").required("Last name required"),email:y.g().email("Email must be a valid email address").required("Email is required"),password:y.g().required("Password is required")}),d=Object(k.d)({initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:l,onSubmit:function(){var a=Object(f.a)(O.a.mark((function a(i,s){var o,c;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=s.setErrors,c=s.setSubmitting,a.prev=1,a.next=4,e(i.email,i.password,i.firstName,i.lastName);case 4:r("Register success",{variant:"success",action:function(e){return Object(A.jsx)(h.k,{size:"small",onClick:function(){return n(e)},children:Object(A.jsx)(w.Icon,{icon:T.a})})}}),t.current&&c(!1),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),console.error(a.t0),t.current&&(o({afterSubmit:a.t0.message}),c(!1));case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e,t){return a.apply(this,arguments)}}()}),j=d.errors,m=d.touched,b=d.handleSubmit,p=d.isSubmitting,S=d.getFieldProps;return Object(A.jsx)(k.b,{value:d,children:Object(A.jsx)(k.a,{autoComplete:"off",noValidate:!0,onSubmit:b,children:Object(A.jsxs)(C.a,{spacing:3,children:[j.afterSubmit&&Object(A.jsx)(W.a,{severity:"error",children:j.afterSubmit}),Object(A.jsxs)(C.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(A.jsx)(B.a,Object(x.a)(Object(x.a)({fullWidth:!0,placeholder:"First name"},S("firstName")),{},{error:Boolean(m.firstName&&j.firstName),helperText:m.firstName&&j.firstName})),Object(A.jsx)(B.a,Object(x.a)(Object(x.a)({fullWidth:!0,placeholder:"Last name"},S("lastName")),{},{error:Boolean(m.lastName&&j.lastName),helperText:m.lastName&&j.lastName}))]}),Object(A.jsx)(B.a,Object(x.a)(Object(x.a)({fullWidth:!0,autoComplete:"username",type:"email",placeholder:"Email address"},S("email")),{},{error:Boolean(m.email&&j.email),helperText:m.email&&j.email})),Object(A.jsx)(B.a,Object(x.a)(Object(x.a)({fullWidth:!0,autoComplete:"current-password",type:o?"text":"password",placeholder:"Password"},S("password")),{},{InputProps:{endAdornment:Object(A.jsx)(I.a,{position:"end",children:Object(A.jsx)(L.a,{edge:"end",onClick:function(){return c((function(e){return!e}))},children:Object(A.jsx)(w.Icon,{icon:o?q.a:R.a})})})},error:Boolean(m.password&&j.password),helperText:m.password&&j.password})),Object(A.jsx)(V.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:p,children:"Register"})]})})})}var _=a(576),D=a(312),G=Object(i.a)(b.a)((function(e){var t=e.theme;return Object(r.a)({},t.breakpoints.up("md"),{display:"flex"})})),J=Object(i.a)(s.a)((function(e){return{width:"100%",maxWidth:464,display:"flex",flexDirection:"column",justifyContent:"center",margin:e.theme.spacing(2,0,2,2),backgroundImage:'url("https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621399609/photoshooted/background_lv9tfq.svg")',backgroundSize:"cover",backgroundPosition:"right",backgroundRepeat:"no-repeat",padding:"0 2% 0 2%"}})),H=Object(i.a)("div")((function(e){return{maxWidth:480,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(12,0)}}));function U(){var e=Object(u.a)().method;return Object(A.jsxs)(G,{title:"Register | Photoshooted",children:[Object(A.jsx)(D.a,{}),Object(A.jsxs)(m.a,{children:[Object(A.jsx)("span",{style:{fontFamily:"VarelaRound"},children:"Already have an account? \xa0"}),Object(A.jsx)(o.a,{style:{fontFamily:"VarelaRound"},underline:"none",variant:"subtitle2",component:n.b,to:j.a.login,children:"Login"})]}),Object(A.jsx)(h.j,{width:"mdDown",children:Object(A.jsx)(J,{children:Object(A.jsx)("img",{alt:"register",src:"https://res.cloudinary.com/dx9dnqzaj/image/upload/v1620378009/photoshooted/Photoshooted_logo_white_bg96p5.png"})})}),Object(A.jsx)(c.a,{children:Object(A.jsxs)(H,{children:[Object(A.jsx)(l.a,{sx:{mb:5,display:"flex",alignItems:"center"},children:Object(A.jsxs)(l.a,{style:{textAlign:"center",color:"rgb(104, 82, 237)"},sx:{flexGrow:1},children:[Object(A.jsx)(d.a,{className:"forheadingscolors",style:{fontFamily:"'Varela Round', sans-serif"},variant:"h4",gutterBottom:!0,children:"Get started absolutely free."}),Object(A.jsx)(d.a,{style:{fontFamily:"VarelaRound"},sx:{color:"text.secondary"},children:"Free forever. No credit card needed."})]})}),"firebase"===e&&Object(A.jsx)(_.a,{}),Object(A.jsx)(E,{}),Object(A.jsxs)(d.a,{variant:"body2",align:"center",sx:{color:"text.secondary",mt:3},children:["By registering, I agree to Photoshooted\xa0",Object(A.jsx)(o.a,{underline:"always",sx:{color:"text.primary"},children:"Terms of Service"}),"\xa0and\xa0",Object(A.jsx)(o.a,{underline:"always",sx:{color:"text.primary"},children:"Privacy Policy"}),"."]}),Object(A.jsx)(h.j,{width:"smUp",children:Object(A.jsxs)(d.a,{variant:"subtitle2",sx:{mt:3,textAlign:"center"},children:["Already have an account?\xa0",Object(A.jsx)(o.a,{to:j.a.login,component:n.b,children:"Login"})]})})]})})]})}}}]);
//# sourceMappingURL=137.6c796021.chunk.js.map