(this.webpackJsonpmodum=this.webpackJsonpmodum||[]).push([[0],{11:function(e,t,a){e.exports=a(32)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),c=a.n(s),o=(a(16),a(1)),i=a(5),l=(a(17),a(18),a(3)),u=[function(e){return localStorage.getItem(e)},function(e,t){localStorage.setItem(e,t)}],m=Object(o.a)(u,2),d=m[0],f=m[1],p=[{username:"Safiye",password:"93c58fd44c8e57a9c07c2705b62667c6fcaae6ee8a6b62ae77bff052ad650840"},{username:"Naz",password:"b28f6c253f56082a4f8182fd18f6f715dfd530d5ca727ee9bc6a967ea28ab849"}],E=function(){return!(!d("userId")||"undefined"===d("userId"))},h=a(33),b=function(e){var t=e.state,a=e.dispatch;return r.a.createElement("header",{className:"AppHeader"},r.a.createElement("div",{className:"HeaderContent WidthContent"},r.a.createElement(l.a,{to:"/Matics"},r.a.createElement("span",{style:{cursor:"pointer"}},"Matics")),r.a.createElement("div",{className:"UserPanel"},t.user.userId&&r.a.createElement("button",{className:"Btn Transparent Primary WithIcon LightGrey"},r.a.createElement(h.a,{size:25,className:"Icon",color:"#000"}),t.user.userName),r.a.createElement("button",{className:"Btn Transparent Primary",onClick:function(){E?(a({type:"SET_USER_LOGGED_OUT"}),Object(l.c)("/Matics/login")):Object(l.c)("/Matics/login")}},t.user.userId?"Log Out":"Log In"))))},g=function(){return r.a.createElement("div",{className:"WidthContent"},"Home")},v=(a(27),a(6)),O=a.n(v),N=a(34);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=function(e){e.state;var t=e.dispatch,a=r.a.useState({username:"",password:""}),n=Object(o.a)(a,2),s=n[0],c=n[1],u=r.a.useState(!1),m=Object(o.a)(u,2),d=m[0],E=m[1],b=r.a.useState([]),g=Object(o.a)(b,2),v=g[0],y=g[1],S=function(){var e=[];return s.username||e.push("username"),s.password||e.push("password"),y(e),!(e.length>0)},I=function(e){var t=e.currentTarget.id,a=e.currentTarget.value;t&&c((function(e){return w({},e,Object(i.a)({},t,a))}))};return r.a.createElement("div",{className:"Login WidthContent"},r.a.createElement("form",{className:"LoginForm",onSubmit:function(e){if(e.preventDefault(),S()){var a=w({},s,{password:O()(s.password)}),n=!1,r=!0,c=!1,o=void 0;try{for(var i,u=p[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var m=i.value;JSON.stringify(m)===JSON.stringify(a)&&(n=!0)}}catch(b){c=!0,o=b}finally{try{r||null==u.return||u.return()}finally{if(c)throw o}}if(n){E(!1);var d=a.username,h=O()(a.password);f("userId",h),f("userName",d),t({type:"SET_USER_DETAILS",user:{userId:h,userName:d}}),Object(l.c)("dashboard")}else E(!0)}}},r.a.createElement("span",{className:"Title"},"Log In"),r.a.createElement("span",{className:"WarningMessage"},v.length>0&&"Hey! Fill in the details...",d&&"Wrong login deets..."),r.a.createElement("div",{className:"FormField WithIcon"},r.a.createElement(h.a,{className:"Icon",color:"#2c3539",size:20}),r.a.createElement("input",{id:"username",type:"text",className:v.includes("username")?"EditBox Warning":"EditBox",placeholder:"Username",value:s.username,onChange:I})),r.a.createElement("div",{className:"FormField WithIcon"},r.a.createElement(N.a,{className:"Icon",color:"#2c3539",size:20}),r.a.createElement("input",{id:"password",type:"password",className:v.includes("password")?"EditBox Warning":"EditBox",placeholder:"Password",value:s.password,onChange:I})),r.a.createElement("div",{className:"ButtonContainer"},r.a.createElement("button",{type:"submit",className:"Btn Primary"},"Log In"))))},I=(a(30),a(31),function(e){var t=e.order,a=e.coefficients,n=e.answer;if(a.length!==t+1)throw new Error("Wrong number of coefficients: ".concat(a.length," for polynomial of order: ").concat(t));return r.a.createElement("div",{className:"EquationField"},r.a.createElement("div",{className:"Inner"},function(){for(var e=[],s=0,c=t;c>=0;c--)0!==a[s]&&(a[s]<0?e.push(r.a.createElement("div",{className:"Operator"},"-")):c!==t&&e.push(r.a.createElement("div",{className:"Operator"},"+")),e.push(r.a.createElement("div",{className:c>1?"Term WithPower":"Term"},r.a.createElement("span",{className:c>0?"Coefficient":"Constant"},1!==a[s]&&Math.abs(a[s])),c>0&&r.a.createElement("span",{className:"Variable"},"x"),c>1&&r.a.createElement("span",{className:"Power"},c)))),s+=1;return e.push(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Operator"},"="),r.a.createElement("div",{className:"Constant"},n))),e}()))}),j=function(e,t){if(t<0)throw new Error("Cannot have negative highest number: ".concat(t));return Math.round(Math.random()*(Math.abs(e)+t)-Math.abs(e))},P=function(){var e=r.a.useState({answers:[],coefficients:[]}),t=Object(o.a)(e,2),a=t[0],n=t[1],s=r.a.useState(!1),c=Object(o.a)(s,2),i=c[0],u=c[1];r.a.useEffect((function(){u(!1),n(function(){var e={answers:[],coefficients:[]};e.answers=[j(-9,9),j(-9,9)];var t=Object(o.a)(e.answers,2),a=t[0],n=t[1];return e.coefficients=[1,a+n,a*n],e}())}),[i]);return r.a.createElement("div",{className:"Dashboard WidthContent"},r.a.createElement("span",{className:"Title"},r.a.createElement("h1",null,"Dashboard")),r.a.createElement("div",{className:"EqnGenerator"},r.a.createElement("div",{className:"Eqn"},a.coefficients.length>0&&r.a.createElement(I,{order:2,coefficients:a.coefficients,answer:0})),r.a.createElement("div",{className:"BtnContainer"},r.a.createElement("button",{className:"Btn Grey",onClick:function(){return u(!0)}},"Generate New Equation"))),r.a.createElement("div",{className:"UserDash"},function(e){d("userId")&&"undefined"!==d("userId")||Object(l.c)("/Matics/login");var t=p.find((function(t){return O()(t.password)===e}));if(t)switch(t.username){case"Naz":return r.a.createElement("span",null,"Naz");case"Safiye":return r.a.createElement("span",null,"Safiye");default:return r.a.createElement("span",null,"NO USER FOUND")}}(d("userId"))))},T=function(){return r.a.createElement("div",{className:"Assignments"},r.a.createElement("span",{className:"Title"},"Assignments"),r.a.createElement("div",{className:"Body"},"Body"))};function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W={userId:"",userName:""},_=function(e,t){switch(t.type){case"SET_USER_DETAILS":return C({},e,{user:t.user});case"SET_USER_LOGGED_OUT":return f("userName",""),f("userId",""),C({},e,{user:W})}},B={user:W},U=function(){var e=r.a.useReducer(_,B),t=Object(o.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){var e="undefined"!==localStorage.getItem("userId")?localStorage.getItem("userId"):null,t="undefined"!==localStorage.getItem("userName")?localStorage.getItem("userName"):null;n(e&&t?{type:"SET_USER_DETAILS",user:{userId:e,userName:t}}:{type:"SET_USER_LOGGED_OUT"})}),[n]),r.a.createElement("div",{className:"App"},r.a.createElement(b,{state:a,dispatch:n}),r.a.createElement(l.b,{basepath:"/Matics"},r.a.createElement(g,{path:"/"}),r.a.createElement(S,{path:"login",state:a,dispatch:n}),r.a.createElement(P,{path:"dashboard"}),r.a.createElement(T,{path:"assignments"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.392d111d.chunk.js.map