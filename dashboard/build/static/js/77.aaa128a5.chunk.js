(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[77],{2772:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));var r=o(3),a=o(30),i=o(31),n=o(2648),l=o(380),c=o(608),s=o(2745),d=o(36),b=o(0);function p(e){var t=e.links,o=e.action,p=e.heading,u=e.moreLink,m=void 0===u?[]:u,j=e.sx,g=Object(a.a)(e,["links","action","heading","moreLink","sx"]);return Object(b.jsxs)(n.a,{sx:j,mb:5,spacing:2,children:[Object(b.jsxs)(n.a,{direction:"row",alignItems:"center",children:[Object(b.jsxs)(l.a,{sx:{flexGrow:1},children:[Object(b.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:p}),Object(b.jsx)(d.c,Object(r.a)({links:t},g))]}),o&&Object(b.jsx)(l.a,{sx:{flexShrink:0},children:o})]}),Object(i.isString)(m)?Object(b.jsx)(s.a,{href:m,target:"_blank",variant:"body2",children:m}):m.map((function(e){return Object(b.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2774:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"d",(function(){return l})),o.d(t,"c",(function(){return c})),o.d(t,"e",(function(){return s})),o.d(t,"b",(function(){return d}));var r=o(31),a=o(2793),i=o.n(a);function n(e){return i()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function l(e){return i()(e/100).format("0.0%")}function c(e){return i()(e).format()}function s(e){return Object(r.replace)(i()(e).format("0.00a"),".00","")}function d(e){return i()(e).format("0.0 b")}},2825:function(e,t,o){"use strict";o.d(t,"b",(function(){return W})),o.d(t,"c",(function(){return B})),o.d(t,"a",(function(){return L}));var r=o(3),a=o(30),i=o(5),n=o(31),l=o(25),c=o(2796),s=o(389),d=o.n(s),b=o(196),p=o.n(b),u=o(2729),m=o(2716),j=o(8),g=o(22),h=o(2748),q=o(380),x=o(608),f=o(2745),O=o(2742),v=o(377),k=o(2739),w=o(2740),y=o(4225),N=o(2648),S=o(299),R=o(2774),C=o(36),_=o(158),z=o(614),I=o(0),P=Object(j.a)("div")((function(e){var t=e.theme;return Object(i.a)({outline:"none",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,1),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function W(e){var t=e.error,o=e.showPreview,i=void 0!==o&&o,s=e.files,b=e.onRemove,j=e.onRemoveAll,W=e.sx,T=Object(a.a)(e,["error","showPreview","files","onRemove","onRemoveAll","sx"]),B=s.length>0,D=Object(c.a)(Object(r.a)({},T)),A=D.getRootProps,F=D.getInputProps,H=D.isDragActive,E=D.isDragReject,L=D.fileRejections,M=function(){return Object(I.jsx)(h.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(g.a)(e.palette.error.main,.08)}},children:L.map((function(e){var t=e.file,o=e.errors,r=t.path,a=t.size;return Object(I.jsxs)(q.a,{sx:{my:1},children:[Object(I.jsxs)(x.a,{variant:"subtitle2",noWrap:!0,children:[r," - ",Object(R.b)(a)]}),o.map((function(e){return Object(I.jsxs)(x.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},r)}))})};return Object(I.jsxs)(q.a,{sx:Object(r.a)({width:"100%"},W),children:[Object(I.jsxs)(P,Object(r.a)(Object(r.a)({},A()),{},{sx:Object(r.a)(Object(r.a)({},H&&{opacity:.72}),(E||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(I.jsx)("input",Object(r.a)({},F())),Object(I.jsx)(z.k,{sx:{width:220}}),Object(I.jsxs)(q.a,{sx:{p:3,ml:{md:2}},children:[Object(I.jsx)(x.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(I.jsxs)(x.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(I.jsx)(f.a,{underline:"always",children:"browse"}),"\xa0thorough your machine"]})]})]})),L.length>0&&Object(I.jsx)(M,{}),Object(I.jsx)(O.a,{disablePadding:!0,sx:Object(r.a)({},B&&{my:3}),children:Object(I.jsx)(u.a,{children:s.map((function(e){var t=e.name,o=e.size,a=e.preview,c=Object(n.isString)(e)?e:t;return i?Object(I.jsxs)(v.b,Object(r.a)(Object(r.a)({component:m.a.div},_.w),{},{sx:{p:0,m:.5,width:80,height:80,borderRadius:1.5,overflow:"hidden",position:"relative",display:"inline-flex"},children:[Object(I.jsx)(h.a,{variant:"outlined",component:"img",src:Object(n.isString)(e)?e:a,sx:{width:"100%",height:"100%",objectFit:"cover",position:"absolute"}}),Object(I.jsx)(q.a,{sx:{top:6,right:6,position:"absolute"},children:Object(I.jsx)(C.k,{size:"small",onClick:function(){return b(e)},sx:{p:"2px",color:"common.white",bgcolor:function(e){return Object(g.a)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return Object(g.a)(e.palette.grey[900],.48)}}},children:Object(I.jsx)(l.Icon,{icon:p.a})})})]}),c):Object(I.jsxs)(v.b,Object(r.a)(Object(r.a)({component:m.a.div},_.w),{},{sx:{my:1,py:.75,px:2,borderRadius:1,border:function(e){return"solid 1px ".concat(e.palette.divider)},bgcolor:"background.paper"},children:[Object(I.jsx)(k.a,{children:Object(I.jsx)(l.Icon,{icon:d.a,width:28,height:28})}),Object(I.jsx)(w.a,{primary:Object(n.isString)(e)?e:t,secondary:Object(n.isString)(e)?"":Object(R.b)(o),primaryTypographyProps:{variant:"subtitle2"},secondaryTypographyProps:{variant:"caption"}}),Object(I.jsx)(y.a,{children:Object(I.jsx)(C.k,{edge:"end",size:"small",onClick:function(){return b(e)},children:Object(I.jsx)(l.Icon,{icon:p.a})})})]}),c)}))})}),B&&Object(I.jsxs)(N.a,{direction:"row",justifyContent:"flex-end",children:[Object(I.jsx)(S.a,{onClick:j,sx:{mr:1.5},children:"Remove all"}),Object(I.jsx)(S.a,{variant:"contained",children:"Upload files"})]})]})}var T=Object(j.a)("div")((function(e){var t=e.theme;return Object(i.a)({outline:"none",display:"flex",overflow:"hidden",textAlign:"center",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,0),borderRadius:t.shape.borderRadius,transition:t.transitions.create("padding"),backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function B(e){var t=e.error,o=e.file,i=e.sx,l=Object(a.a)(e,["error","file","sx"]),s=Object(c.a)(Object(r.a)({multiple:!1},l)),d=s.getRootProps,b=s.getInputProps,p=s.isDragActive,u=s.isDragReject,m=s.fileRejections,j=function(){return Object(I.jsx)(h.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(g.a)(e.palette.error.main,.08)}},children:m.map((function(e){var t=e.file,o=e.errors,r=t.path,a=t.size;return Object(I.jsxs)(q.a,{sx:{my:1},children:[Object(I.jsxs)(x.a,{variant:"subtitle2",noWrap:!0,children:[r," - ",Object(R.b)(a)]}),o.map((function(e){return Object(I.jsxs)(x.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},r)}))})};return Object(I.jsxs)(q.a,{sx:Object(r.a)({width:"100%"},i),children:[Object(I.jsxs)(T,Object(r.a)(Object(r.a)({},d()),{},{sx:Object(r.a)(Object(r.a)(Object(r.a)({},p&&{opacity:.72}),(u||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),o&&{padding:"12% 0"}),children:[Object(I.jsx)("input",Object(r.a)({},b())),Object(I.jsx)(z.k,{sx:{width:220}}),Object(I.jsxs)(q.a,{sx:{p:3,ml:{md:2}},children:[Object(I.jsx)(x.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(I.jsxs)(x.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(I.jsx)(x.a,{variant:"body2",component:"span",sx:{color:"primary.main"},children:"browse"}),"\xa0thorough your machine"]})]}),o&&Object(I.jsx)(q.a,{component:"img",alt:"file preview",src:Object(n.isString)(o)?o:o.preview,sx:{top:8,borderRadius:1,objectFit:"cover",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"}})]})),m.length>0&&Object(I.jsx)(j,{})]})}var D=o(2890),A=o.n(D),F=Object(j.a)("div")((function(e){var t=e.theme;return{width:144,height:144,margin:"auto",borderRadius:"50%",padding:t.spacing(1),border:"1px dashed ".concat(t.palette.grey[50032])}})),H=Object(j.a)("div")({zIndex:0,width:"100%",height:"100%",outline:"none",display:"flex",overflow:"hidden",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center","& > *":{width:"100%",height:"100%"},"&:hover":{cursor:"pointer","& .placeholder":{zIndex:9}}}),E=Object(j.a)("div")((function(e){var t=e.theme;return{display:"flex",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",color:t.palette.text.secondary,backgroundColor:t.palette.background.neutral,transition:t.transitions.create("opacity",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&:hover":{opacity:.72}}}));function L(e){var t=e.error,o=e.file,i=e.caption,s=e.sx,d=Object(a.a)(e,["error","file","caption","sx"]),b=Object(c.a)(Object(r.a)({multiple:!1},d)),p=b.getRootProps,u=b.getInputProps,m=b.isDragActive,j=b.isDragReject,f=b.fileRejections,O=function(){return Object(I.jsx)(h.a,{variant:"outlined",sx:{py:1,px:2,my:2,borderColor:"error.light",bgcolor:function(e){return Object(g.a)(e.palette.error.main,.08)}},children:f.map((function(e){var t=e.file,o=e.errors,r=t.path,a=t.size;return Object(I.jsxs)(q.a,{sx:{my:1},children:[Object(I.jsxs)(x.a,{variant:"subtitle2",noWrap:!0,children:[r," - ",Object(R.b)(a)]}),o.map((function(e){return Object(I.jsxs)(x.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},r)}))})};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(F,{sx:s,children:Object(I.jsxs)(H,Object(r.a)(Object(r.a)({},p()),{},{sx:Object(r.a)(Object(r.a)({},m&&{opacity:.72}),(j||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(I.jsx)("input",Object(r.a)({},u())),o&&Object(I.jsx)(q.a,{component:"img",alt:"avatar",src:Object(n.isString)(o)?o:o.preview,sx:{zIndex:8,objectFit:"cover"}}),Object(I.jsxs)(E,{className:"placeholder",sx:Object(r.a)({},o&&{opacity:0,color:"common.white",bgcolor:"grey.900","&:hover":{opacity:.72}}),children:[Object(I.jsx)(q.a,{component:l.Icon,icon:A.a,sx:{width:24,height:24,mb:1}}),Object(I.jsx)(x.a,{variant:"caption",children:o?"Update photo":"Upload photo"})]})]}))}),i,f.length>0&&Object(I.jsx)(O,{})]})}},2857:function(e,t,o){"use strict";o.d(t,"b",(function(){return Ne})),o.d(t,"a",(function(){return _e}));var r=o(30),a=o(3),i=o(2844),n=o.n(i),l=o(8),c=o(25),s=o(2949),d=o.n(s),b=o(2888),p=o.n(b),u=o(2950),m=o.n(u),j=o(2951),g=o.n(j),h=o(2952),q=o.n(h),x=o(2953),f=o.n(x),O=o(2954),v=o.n(O),k=o(2955),w=o.n(k),y=o(2956),N=o.n(y),S=o(2957),R=o.n(S),C=o(2958),_=o.n(C),z=o(2959),I=o.n(z),P=o(2960),W=o.n(P),T=o(2961),B=o.n(T),D=o(2962),A=o.n(D),F=o(2963),H=o.n(F),E=o(2964),L=o.n(E),M=o(2965),U=o.n(M),V=o(2966),J=o.n(V),X=o(2967),Q=o.n(X),$=o(2968),K=o.n($),G=o(2969),Y=o.n(G),Z=o(2970),ee=o.n(Z),te=o(2971),oe=o.n(te),re=o(2972),ae=o.n(re),ie=o(2973),ne=o.n(ie),le=o(2974),ce=o.n(le),se=o(2975),de=o.n(se),be=Object(l.a)("div")((function(e){var t=e.theme,o="rtl"===t.direction;return{"& .ql-snow.ql-toolbar button:hover .ql-fill, .ql-snow .ql-toolbar button:hover .ql-fill, .ql-snow.ql-toolbar button:focus .ql-fill, .ql-snow .ql-toolbar button:focus .ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill":{fill:t.palette.primary.main},"& .ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover, .ql-snow.ql-toolbar button:focus, .ql-snow .ql-toolbar button:focus, .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active, .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover, .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active, .ql-snow.ql-toolbar .ql-picker-item:hover, .ql-snow .ql-toolbar .ql-picker-item:hover, .ql-snow.ql-toolbar .ql-picker-item.ql-selected, .ql-snow .ql-toolbar .ql-picker-item.ql-selected":{color:t.palette.primary.main},"& .ql-snow.ql-toolbar button:hover .ql-stroke, .ql-snow .ql-toolbar button:hover .ql-stroke, .ql-snow.ql-toolbar button:focus .ql-stroke, .ql-snow .ql-toolbar button:focus .ql-stroke, .ql-snow.ql-toolbar button.ql-active .ql-stroke, .ql-snow .ql-toolbar button.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow.ql-toolbar button:hover .ql-stroke-miter, .ql-snow .ql-toolbar button:hover .ql-stroke-miter, .ql-snow.ql-toolbar button:focus .ql-stroke-miter, .ql-snow .ql-toolbar button:focus .ql-stroke-miter, .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter":{stroke:t.palette.primary.main},"& .ql-stroke":{stroke:t.palette.text.primary},"& .ql-fill, .ql-stroke.ql-fill":{fill:t.palette.text.primary},"& .ql-picker, .ql-picker-options, .ql-picker-item, .ql-picker-label, button":{"&:focus":{outline:"none"}},"& .ql-toolbar.ql-snow":{border:"none",borderBottom:"solid 1px ".concat(t.palette.grey[50032]),"& .ql-formats":{"&:not(:last-child)":{marginRight:t.spacing(2)}},"& button":{padding:0,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,color:t.palette.text.primary},"& .ql-picker-label":Object(a.a)(Object(a.a)({},t.typography.subtitle2),{},{color:t.palette.text.primary}),"& .ql-picker-label svg":{right:o&&"0 !important",left:o&&"auto !important"},"& .ql-color,& .ql-background,& .ql-align ":{"& .ql-picker-label":{padding:0,display:"flex",alignItems:"center",justifyContent:"center"}},"& .ql-expanded":{"& .ql-picker-label":{borderRadius:4,color:t.palette.text.disabled,borderColor:"transparent !important",backgroundColor:t.palette.action.focus,"& .ql-stroke":{stroke:t.palette.text.disabled}},"& .ql-picker-options":{padding:0,marginTop:4,border:"none",maxHeight:200,overflow:"auto",boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper},"& .ql-picker-item":{color:t.palette.text.primary},"&.ql-align":{"& .ql-picker-options":{padding:0,display:"flex"},"& .ql-picker-item":{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center"}},"&.ql-color, &.ql-background":{"& .ql-picker-options":{padding:8},"& .ql-picker-item":{margin:3,borderRadius:4,"&.ql-selected":{border:"solid 1px black"}}},"&.ql-font, &.ql-size, &.ql-header":{"& .ql-picker-options":{padding:t.spacing(1,0)},"& .ql-picker-item":{padding:t.spacing(.5,1.5)}}}}}})),pe=o(0),ue=void 0,me=["Roboto","Raleway","Montserrat","Lato","Rubik"],je=["8px","9px","10px","12px","14px","16px","20px","24px","32px","42px","54px","68px","84px","98px"],ge=["Heading 1","Heading 2","Heading 3","Heading 4","Heading 5","Heading 6"],he=i.Quill.import("attributors/style/size");he.whitelist=je,i.Quill.register(he,!0);var qe=i.Quill.import("attributors/style/font");qe.whitelist=me,i.Quill.register(qe,!0);var xe=i.Quill.import("ui/icons");function fe(e){return d.a.renderToString(Object(pe.jsx)(c.Icon,{icon:e,width:18,height:18}))}xe.bold=fe(N.a),xe.italic=fe(B.a),xe.underline=fe(U.a),xe.strike=fe(oe.a),xe.link=fe(q.a),xe.image=fe(f.a),xe.code=fe(f.a),xe["code-block"]=fe(p.a),xe.list.bullet=fe(K.a),xe.list.ordered=fe(Y.a),xe.indent["+1"]=fe(ne.a),xe.indent[-1]=fe(ae.a),xe.script.sub=fe(v.a),xe.script.super=fe(R.a),xe.direction[""]=fe(ce.a),xe.direction.rtl=fe(de.a),xe.color=fe(H.a),xe.background=fe(A.a),xe.video=fe(_.a),xe.blockquote=fe(I.a),xe.clean=fe(W.a),xe.formula=fe(w.a),xe.align[""]=fe(L.a),xe.align.center=fe(Q.a),xe.align.justify=fe(ee.a),xe.align.right=fe(J.a);var Oe=function(){ue.quill.history.undo()},ve=function(){ue.quill.history.redo()},ke=["align","background","blockquote","bold","bullet","code","code-block","color","direction","font","formula","header","image","indent","italic","link","list","script","size","strike","table","underline","video"];function we(e){var t=e.id,o=e.isSimple,i=Object(r.a)(e,["id","isSimple"]);return Object(pe.jsx)(be,Object(a.a)(Object(a.a)({},i),{},{children:Object(pe.jsxs)("div",{id:t,children:[Object(pe.jsxs)("div",{className:"ql-formats",children:[!o&&Object(pe.jsxs)("select",{className:"ql-font",defaultValue:"",children:[Object(pe.jsx)("option",{value:"",children:"Font"}),me.map((function(e){return Object(pe.jsx)("option",{value:e,children:e},e)}))]}),!o&&Object(pe.jsx)("select",{className:"ql-size",defaultValue:"16px",children:je.map((function(e){return Object(pe.jsx)("option",{value:e,children:e},e)}))}),Object(pe.jsxs)("select",{className:"ql-header",defaultValue:"",children:[ge.map((function(e,t){return Object(pe.jsx)("option",{value:t+1,children:e},e)})),Object(pe.jsx)("option",{value:"",children:"Normal"})]})]}),Object(pe.jsxs)("div",{className:"ql-formats",children:[Object(pe.jsx)("button",{type:"button",className:"ql-bold"}),Object(pe.jsx)("button",{type:"button",className:"ql-italic"}),Object(pe.jsx)("button",{type:"button",className:"ql-underline"}),Object(pe.jsx)("button",{type:"button",className:"ql-strike"})]}),!o&&Object(pe.jsxs)("div",{className:"ql-formats",children:[Object(pe.jsx)("select",{className:"ql-color"}),Object(pe.jsx)("select",{className:"ql-background"})]}),Object(pe.jsxs)("div",{className:"ql-formats",children:[Object(pe.jsx)("button",{type:"button",className:"ql-list",value:"ordered"}),Object(pe.jsx)("button",{type:"button",className:"ql-list",value:"bullet"}),!o&&Object(pe.jsx)("button",{type:"button",className:"ql-indent",value:"-1"}),!o&&Object(pe.jsx)("button",{type:"button",className:"ql-indent",value:"+1"})]}),!o&&Object(pe.jsxs)("div",{className:"ql-formats",children:[Object(pe.jsx)("button",{type:"button",className:"ql-script",value:"super"}),Object(pe.jsx)("button",{type:"button",className:"ql-script",value:"sub"})]}),!o&&Object(pe.jsxs)("div",{className:"ql-formats",children:[Object(pe.jsx)("button",{type:"button",className:"ql-code-block"}),Object(pe.jsx)("button",{type:"button",className:"ql-blockquote"})]}),Object(pe.jsxs)("div",{className:"ql-formats",children:[Object(pe.jsx)("button",{type:"button",className:"ql-direction",value:"rtl"}),Object(pe.jsx)("select",{className:"ql-align"})]}),Object(pe.jsxs)("div",{className:"ql-formats",children:[Object(pe.jsx)("button",{type:"button",className:"ql-link"}),Object(pe.jsx)("button",{type:"button",className:"ql-image"}),Object(pe.jsx)("button",{type:"button",className:"ql-video"})]}),Object(pe.jsxs)("div",{className:"ql-formats",children:[!o&&Object(pe.jsx)("button",{type:"button",className:"ql-formula"}),Object(pe.jsx)("button",{type:"button",className:"ql-clean"})]}),!o&&Object(pe.jsxs)("div",{className:"ql-formats",children:[Object(pe.jsx)("button",{type:"button",className:"ql-undo",children:Object(pe.jsx)(c.Icon,{icon:m.a,width:18,height:18})}),Object(pe.jsx)("button",{type:"button",className:"ql-redo",children:Object(pe.jsx)(c.Icon,{icon:g.a,width:18,height:18})})]})]})}))}var ye=Object(l.a)("div")((function(e){var t=e.theme;return{borderRadius:t.shape.borderRadius,border:"solid 1px ".concat(t.palette.grey[50032]),"& .ql-container.ql-snow":Object(a.a)(Object(a.a)({borderColor:"transparent"},t.typography.body1),{},{fontFamily:t.typography.fontFamily}),"& .ql-editor":{minHeight:200,"&.ql-blank::before":{fontStyle:"normal",color:t.palette.text.disabled},"& pre.ql-syntax":Object(a.a)(Object(a.a)({},t.typography.body2),{},{padding:t.spacing(2),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[900]})}}}));function Ne(e){var t=e.id,o=e.error,i=e.value,l=e.onChange,c=e.simple,s=void 0!==c&&c,d=e.sx,b=Object(r.a)(e,["id","error","value","onChange","simple","sx"]),p={toolbar:{container:"#".concat(t),handlers:{undo:Oe,redo:ve}},history:{delay:500,maxStack:100,userOnly:!0},syntax:!0,clipboard:{matchVisual:!1}};return Object(pe.jsxs)(ye,{sx:Object(a.a)(Object(a.a)({},o&&{border:function(e){return"solid 1px ".concat(e.palette.error.main)}}),d),children:[Object(pe.jsx)(we,{id:t,isSimple:s}),Object(pe.jsx)(n.a,Object(a.a)({value:i,onChange:l,modules:p,formats:ke,placeholder:"Write something awesome..."},b))]})}var Se=o(2976),Re={inline:{bold:{icon:"/static/icons/editor/inline_bold.svg",className:"toggle"},italic:{icon:"/static/icons/editor/inline_italic.svg",className:"toggle"},underline:{icon:"/static/icons/editor/inline_underline.svg",className:"toggle"},strikethrough:{icon:"/static/icons/editor/inline_strikethrough.svg",className:"toggle"},monospace:{icon:"/static/icons/editor/monospace.svg",className:"toggle"},superscript:{icon:"/static/icons/editor/superscript.svg",className:"toggle"},subscript:{icon:"/static/icons/editor/subscript.svg",className:"toggle"}},blockType:{className:"dropdown",dropdownClassName:"dropdown__option"},fontSize:{className:"dropdown",dropdownClassName:"dropdown__option"},list:{unordered:{icon:"/static/icons/editor/list_unordered.svg",className:"toggle"},ordered:{icon:"/static/icons/editor/list_ordered.svg",className:"toggle"},indent:{icon:"/static/icons/editor/list_indent.svg",className:"toggle"},outdent:{icon:"/static/icons/editor/list_outdent.svg",className:"toggle"}},textAlign:{left:{icon:"/static/icons/editor/align_left.svg",className:"toggle"},center:{icon:"/static/icons/editor/align_center.svg",className:"toggle"},right:{icon:"/static/icons/editor/align_right.svg",className:"toggle"},justify:{icon:"/static/icons/editor/align_justify.svg",className:"toggle"}},fontFamily:{className:"dropdown",dropdownClassName:"dropdown__option"},colorPicker:{icon:"/static/icons/editor/colorpicker.svg",className:"toggle",popupClassName:"popup popup__colorpicker"},link:{popupClassName:"popup popup__link",link:{icon:"/static/icons/editor/link.svg",className:"toggle"},unlink:{icon:"/static/icons/editor/unlink.svg",className:"toggle"}},emoji:{icon:"/static/icons/editor/emoji.svg",className:"toggle",popupClassName:"popup popup__emoji"},embedded:{icon:"/static/icons/editor/embedded.svg",className:"toggle",popupClassName:"popup popup__embedded"},image:{icon:"/static/icons/editor/image.svg",className:"toggle",popupClassName:"popup popup__image",uploadCallback:function(e){return new Promise((function(t,o){var r=new XMLHttpRequest;r.open("POST","https://api.imgur.com/3/image"),r.setRequestHeader("Authorization","Client-ID XXXXX");var a=new FormData;a.append("image",e),r.send(a),r.addEventListener("load",(function(){var e=JSON.parse(r.responseText);t(e)})),r.addEventListener("error",(function(){var e=JSON.parse(r.responseText);o(e)}))}))},alt:{present:!0,mandatory:!0}},remove:{icon:"/static/icons/editor/remove.svg",className:"toggle"},history:{undo:{icon:"/static/icons/editor/history_undo.svg",className:"toggle"},redo:{icon:"/static/icons/editor/history_redo.svg",className:"toggle"}}};var Ce=Object(l.a)("div")((function(e){var t=e.theme,o="light"===t.palette.mode,r="rtl"===t.direction;return{borderRadius:t.shape.borderRadius,border:"solid 1px ".concat(t.palette.grey[50032]),"& .toggle":{border:"none",borderRadius:6,background:"transparent","&.rdw-option-disabled":{opacity:t.palette.action.disabledOpacity},"& img":{width:16,height:16,filter:o?"none":"invert(100%)"},'&[aria-selected="true"]':{boxShadow:"none",background:t.palette.action.selected},"&:hover":{boxShadow:"none",background:t.palette.action.hover}},"& .dropdown":{minWidth:56,borderRadius:6,boxShadow:"none",background:"transparent",border:"solid 1px ".concat(t.palette.grey[50032]),"&:hover":{boxShadow:"none",background:t.palette.action.hover},"& .rdw-dropdown-selectedtext":{color:t.palette.text.primary},"& .rdw-dropdown-carettoopen":{right:r&&"10%",left:r&&"auto",borderTopColor:t.palette.text.primary},"& .rdw-dropdown-carettoclose":{right:r&&"10%",left:r&&"auto",borderBottomColor:t.palette.text.primary}},"& .dropdown__option":{width:"100%",border:"none",marginTop:t.spacing(1),padding:t.spacing(1,0),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,background:t.palette.background.paper,"& .rdw-dropdownoption-default":{fontSize:14,minHeight:"auto",padding:t.spacing(.5,2)},"& .rdw-dropdownoption-active":{background:t.palette.action.selected},"& .rdw-dropdownoption-highlighted":{background:t.palette.action.hover}},"& .popup":{right:0,padding:0,left:"auto",border:"none",overflow:"hidden",boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,background:t.palette.background.paper,"& .rdw-link-modal-buttonsection, .rdw-embedded-modal-btn-section, .rdw-image-modal-btn-section":{margin:0,display:"flex",marginTop:t.spacing(2),justifyContent:"space-between","& button":{margin:0,fontSize:13,border:"none",fontWeight:"bold",width:"calc(50% - 4px)",color:t.palette.common.white,background:t.palette.primary.main,borderRadius:t.shape.borderRadius,"&:disabled":{color:t.palette.action.disabled,background:t.palette.action.disabledBackground},"&:last-child":{background:"transparent",color:t.palette.text.primary},"&:hover":{boxShadow:"none"},"&:active":{boxShadow:"none"}}},"& input":{height:26,fontSize:14,background:"transparent",padding:t.spacing(0,1.5),color:t.palette.text.primary,borderRadius:t.shape.borderRadius,border:"solid 1px ".concat(t.palette.grey[50032])}},"& .popup__colorpicker":{padding:0,"& .rdw-colorpicker-modal-header":{padding:t.spacing(1),background:t.palette.grey[50012],"& .rdw-colorpicker-modal-style-label":{fontSize:13,padding:t.spacing(.75,0),color:t.palette.text.secondary,borderRadius:t.shape.borderRadius,fontWeight:t.typography.fontWeightMedium},"& .rdw-colorpicker-modal-style-label-active":{borderBottom:"none",boxShadow:t.customShadows.z8,color:t.palette.text.primary,background:t.palette.common.white}},"& .rdw-colorpicker-modal-options":{margin:0,padding:t.spacing(1.5)},"& .rdw-colorpicker-option":{margin:4,width:20,height:20,minWidth:20,borderRadius:6,overflow:"hidden",position:"relative","&:hover":{boxShadow:"none"},"&:before":{zIndex:9,fontSize:0,width:"100%",height:"100%",display:"flex",borderRadius:6,content:'"\\2713"',position:"absolute",alignItems:"center",justifyContent:"center",color:t.palette.common.white,fontWeight:t.typography.fontWeightBold,boxShadow:"inset 0 0 3px 0 rgba(0,0,0,0.12)"},'&[aria-selected="true"]':{boxShadow:"none",borderRadius:"50%","&:before":{fontSize:12}}},"& .rdw-colorpicker-cube":{border:"none"}},"& .popup__link":{height:"auto",padding:t.spacing(2),"& .rdw-link-modal-label":{fontSize:13,fontWeight:t.typography.fontWeightMedium},"& .rdw-link-modal-input":{marginTop:4,marginBottom:12},"& .rdw-link-modal-target-option":{display:"flex",marginBottom:0,alignItems:"center","& > span":{fontSize:14,marginLeft:t.spacing(1)}}},"& .popup__emoji":{overflow:"auto",padding:t.spacing(1)},"& .popup__embedded":{height:"auto","& .rdw-embedded-modal-header":{padding:t.spacing(1),background:t.palette.grey[50012],"& .rdw-embedded-modal-header-label":{display:"none"},"& .rdw-embedded-modal-header-option":{fontSize:13,padding:t.spacing(.75,0),color:t.palette.text.secondary,borderRadius:t.shape.borderRadius,fontWeight:t.typography.fontWeightMedium}},"& .rdw-embedded-modal-link-section":{padding:t.spacing(2,2,0)},"& .rdw-embedded-modal-btn-section":{padding:t.spacing(0,2,2)}},"& .popup__image":{padding:0,"& .rdw-image-modal-header":{margin:0,zIndex:9,fontSize:13,padding:t.spacing(1),background:t.palette.grey[50012],fontWeight:t.typography.fontWeightMedium,"& .rdw-image-modal-header-option":{position:"relative",padding:t.spacing(.75,0)},"& .rdw-image-modal-header-label":{margin:0,width:"100%",height:"100%",border:"none",position:"absolute",background:"transparent"},"& .rdw-image-modal-header-label-highlighted":{zIndex:-1,boxShadow:t.customShadows.z8,background:t.palette.common.white,borderRadius:t.shape.borderRadius}},"& .rdw-image-modal-upload-option":{margin:0,outline:"none",background:"none",padding:t.spacing(2)},"& .rdw-image-modal-upload-option-label":{fontSize:13,textAlign:"center",color:t.palette.text.disabled,borderRadius:t.shape.borderRadius,border:"dashed 1px ".concat(t.palette.grey[50032])},"& .rdw-image-modal-btn-section":{padding:t.spacing(0,2,2)},"& .rdw-image-modal-size, .rdw-image-modal-url-section":{padding:t.spacing(0,2)}},"& .rdw-editor-toolbar":{border:"none",marginBottom:0,background:"transparent",borderBottom:"solid 1px ".concat(t.palette.grey[50032])},"& .rdw-editor-main":{minHeight:200,padding:t.spacing(0,2),"& .public-DraftEditorPlaceholder-root":{color:t.palette.text.disabled}}}}));function _e(e){var t=e.sx,o=Object(r.a)(e,["sx"]);return Object(pe.jsx)(Ce,{sx:t,children:Object(pe.jsx)(Se.Editor,Object(a.a)({toolbar:Re,placeholder:"Write something awesome..."},o))})}},4369:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return J}));var r=o(1),a=o(2697),i=o(37),n=o(2754),l=o(300),c=o(391),s=o(26),d=o(383),b=o(2772),p=o(16),u=o.n(p),m=o(27),j=o(3),g=o(231),h=o(161),q=o(230),x=o(8),f=o(2711),O=o(608),v=o(2734),k=o(2767),w=o(2648),y=o(2762),N=o(2765),S=o(2766),R=o(2744),C=o(2712),_=o(2720),z=o(2764),I=o(2728),P=o(2724),W=o(3265),T=o(2731),B=o(2758),D=o(302),A=o(2857),F=o(2825),H=o(0),E=["Men","Women","Kids"],L=[{group:"Clothing",classify:["Shirts","T-shirts","Jeans","Leather"]},{group:"Tailored",classify:["Suits","Blazers","Trousers","Waistcoats"]},{group:"Accessories",classify:["Shoes","Backpacks and bags","Bracelets","Face masks"]}],M=["Toy Story 3","Logan","Full Metal Jacket","Dangal","The Sting","2001: A Space Odyssey","Singin' in the Rain","Toy Story","Bicycle Thieves","The Kid","Inglourious Basterds","Snatch","3 Idiots"],U=Object(x.a)(O.a)((function(e){var t=e.theme;return Object(j.a)(Object(j.a)({},t.typography.subtitle2),{},{color:t.palette.text.secondary,marginBottom:t.spacing(1)})}));function V(e){var t=e.isEdit,o=e.currentProduct,a=Object(i.h)(),n=Object(h.b)().enqueueSnackbar,l=g.e().shape({name:g.g().required("Name is required"),description:g.g().required("Description is required"),images:g.a().min(1,"Images is required"),price:g.d().required("Price is required")}),c=Object(q.d)({enableReinitialize:!0,initialValues:{name:(null===o||void 0===o?void 0:o.name)||"",description:(null===o||void 0===o?void 0:o.description)||"",images:(null===o||void 0===o?void 0:o.images)||[],code:(null===o||void 0===o?void 0:o.code)||"",sku:(null===o||void 0===o?void 0:o.sku)||"",price:(null===o||void 0===o?void 0:o.price)||"",priceSale:(null===o||void 0===o?void 0:o.priceSale)||"",tags:(null===o||void 0===o?void 0:o.tags)||[M[0]],inStock:Boolean("out_of_stock"!==(null===o||void 0===o?void 0:o.inventoryType)),taxes:!0,gender:(null===o||void 0===o?void 0:o.gender)||E[2],category:(null===o||void 0===o?void 0:o.category)||L[0].classify[1]},validationSchema:l,onSubmit:function(){var e=Object(m.a)(u.a.mark((function e(o,r){var i,l,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.setSubmitting,l=r.resetForm,c=r.setErrors,e.prev=1,e.next=4,Object(D.a)(500);case 4:l(),i(!1),n(t?"Update success":"Create success",{variant:"success"}),a(s.b.eCommerce.list),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),i(!1),c(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,o){return e.apply(this,arguments)}}()}),d=c.errors,b=c.values,p=c.touched,x=c.handleSubmit,O=c.isSubmitting,V=c.setFieldValue,J=c.getFieldProps,X=Object(r.useCallback)((function(e){V("images",e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}),[V]);return Object(H.jsx)(q.b,{value:c,children:Object(H.jsx)(q.a,{noValidate:!0,autoComplete:"off",onSubmit:x,children:Object(H.jsxs)(v.a,{container:!0,spacing:3,children:[Object(H.jsx)(v.a,{item:!0,xs:12,md:8,children:Object(H.jsx)(k.a,{sx:{p:3},children:Object(H.jsxs)(w.a,{spacing:3,children:[Object(H.jsx)(y.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Product Name"},J("name")),{},{error:Boolean(p.name&&d.name),helperText:p.name&&d.name})),Object(H.jsxs)("div",{children:[Object(H.jsx)(U,{children:"Description"}),Object(H.jsx)(A.b,{simple:!0,id:"product-description",value:b.description,onChange:function(e){return V("description",e)},error:Boolean(p.description&&d.description)}),p.description&&d.description&&Object(H.jsx)(N.a,{error:!0,sx:{px:2},children:p.description&&d.description})]}),Object(H.jsxs)("div",{children:[Object(H.jsx)(U,{children:"Add Images"}),Object(H.jsx)(F.b,{showPreview:!0,maxSize:3145728,accept:"image/*",files:b.images,onDrop:X,onRemove:function(e){var t=b.images.filter((function(t){return t!==e}));V("images",t)},onRemoveAll:function(){V("images",[])},error:Boolean(p.images&&d.images)}),p.images&&d.images&&Object(H.jsx)(N.a,{error:!0,sx:{px:2},children:p.images&&d.images})]})]})})}),Object(H.jsx)(v.a,{item:!0,xs:12,md:4,children:Object(H.jsxs)(w.a,{spacing:3,children:[Object(H.jsxs)(k.a,{sx:{p:3},children:[Object(H.jsx)(S.a,{control:Object(H.jsx)(R.a,Object(j.a)(Object(j.a)({},J("inStock")),{},{checked:b.inStock})),label:"In stock",sx:{mb:2}}),Object(H.jsxs)(w.a,{spacing:3,children:[Object(H.jsx)(y.a,Object(j.a)({fullWidth:!0,label:"Product Code"},J("code"))),Object(H.jsx)(y.a,Object(j.a)({fullWidth:!0,label:"Product SKU"},J("sku"))),Object(H.jsxs)("div",{children:[Object(H.jsx)(U,{children:"Gender"}),Object(H.jsx)(C.a,Object(j.a)(Object(j.a)({},J("gender")),{},{row:!0,children:Object(H.jsx)(w.a,{spacing:1,direction:"row",children:E.map((function(e){return Object(H.jsx)(S.a,{value:e,control:Object(H.jsx)(_.a,{}),label:e},e)}))})}))]}),Object(H.jsxs)(z.a,{fullWidth:!0,children:[Object(H.jsx)(I.a,{children:"Category"}),Object(H.jsx)(P.a,Object(j.a)(Object(j.a)({label:"Category",native:!0},J("category")),{},{value:b.category,children:L.map((function(e){return Object(H.jsx)("optgroup",{label:e.group,children:e.classify.map((function(e){return Object(H.jsx)("option",{value:e,children:e},e)}))},e.group)}))}))]}),Object(H.jsx)(W.a,{multiple:!0,freeSolo:!0,value:b.tags,onChange:function(e,t){V("tags",t)},options:M.map((function(e){return e})),renderTags:function(e,t){return e.map((function(e,o){return Object(H.jsx)(T.a,Object(j.a)({size:"small",label:e},t({index:o})),e)}))},renderInput:function(e){return Object(H.jsx)(y.a,Object(j.a)({label:"Tags"},e))}})]})]}),Object(H.jsxs)(k.a,{sx:{p:3},children:[Object(H.jsxs)(w.a,{spacing:3,children:[Object(H.jsx)(y.a,Object(j.a)(Object(j.a)({fullWidth:!0,placeholder:"0.00",label:"Regular Price"},J("price")),{},{InputProps:{startAdornment:Object(H.jsx)(B.a,{position:"start",children:"$"}),type:"number"},error:Boolean(p.price&&d.price),helperText:p.price&&d.price})),Object(H.jsx)(y.a,Object(j.a)(Object(j.a)({fullWidth:!0,placeholder:"0.00",label:"Sale Price"},J("priceSale")),{},{InputProps:{startAdornment:Object(H.jsx)(B.a,{position:"start",children:"$"}),type:"number"}}))]}),Object(H.jsx)(S.a,{control:Object(H.jsx)(R.a,Object(j.a)(Object(j.a)({},J("taxes")),{},{checked:b.taxes})),label:"Price includes taxes",sx:{mt:2}})]}),Object(H.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",size:"large",loading:O,children:t?"Save Changes":"Create Product"})]})})]})})})}function J(){var e=Object(l.c)(),t=Object(i.g)().pathname,o=Object(i.i)().name,p=Object(l.d)((function(e){return e.product})).products,u=t.includes("edit"),m=p.find((function(e){return Object(a.a)(e.name)===o}));return Object(r.useEffect)((function(){e(Object(c.l)())}),[e]),Object(H.jsx)(d.a,{title:"Ecommerce: Create a new product | Minimal-UI",children:Object(H.jsxs)(n.a,{children:[Object(H.jsx)(b.a,{heading:u?"Edit product":"Create a new product",links:[{name:"Dashboard",href:s.b.root},{name:"E-Commerce",href:s.b.eCommerce.root},{name:u?o:"New product"}]}),Object(H.jsx)(V,{isEdit:u,currentProduct:m})]})})}}}]);
//# sourceMappingURL=77.aaa128a5.chunk.js.map