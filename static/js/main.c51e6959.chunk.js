(this.webpackJsonpmodum=this.webpackJsonpmodum||[]).push([[0],{11:function(e,t,a){e.exports=a(28)},16:function(e,t,a){},17:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),o=(a(16),a(3)),i=a(6),l=(a(17),a(2)),u=a(31),m=a(32),d=a(34),f=function(e){var t=e.state,a=e.dispatch,n=r.a.useState(!1),s=Object(o.a)(n,2),c=s[0],i=s[1],f=r.a.useRef(null);r.a.useEffect((function(){var e=function(e){return function(e,t){t.current&&!t.current.contains(e.target)&&i(!1)}(e,f)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[c]);var E=function(){a({type:"SET_USER_LOGGED_OUT"})};return r.a.createElement("div",{className:"UserMenu"},r.a.createElement("button",{className:"Btn LightGrey WithIcon Left Right",onClick:function(){i(!c)}},r.a.createElement(u.a,{size:25,className:"Icon Left",color:"#000"}),t.user.userName,r.a.createElement(m.a,{size:25,className:"Icon Right Lower",color:"#000",style:{top:"8px"}})),r.a.createElement(d.a,{in:c,timeout:100},(function(e){return r.a.createElement("div",{className:"UserMenuDropdown "+e,ref:f},r.a.createElement("ul",{className:"Menu"},r.a.createElement("li",{className:"Item",onClick:function(){i(!1),Object(l.d)("/Matics/dashboard")}},"Dashboard"),r.a.createElement("li",{className:"Item",onClick:function(){i(!1),Object(l.d)("/Matics/assignments")}},"Assignments"),r.a.createElement("li",{className:"Item",onClick:E},"Log Out")))})))},E=function(e){var t=e.state,a=e.dispatch;return r.a.createElement("header",{className:"AppHeader"},r.a.createElement("div",{className:"HeaderContent WidthContent"},r.a.createElement(l.a,{to:"/Matics"},r.a.createElement("span",{style:{cursor:"pointer"}},"Matics")),r.a.createElement("div",{className:"UserPanel"},t.user.userId?r.a.createElement(f,{state:t,dispatch:a}):r.a.createElement(l.a,{to:"/Matics/login"},r.a.createElement("button",{className:"Btn Primary"},"Log In")))))},p=function(){return r.a.createElement("div",{className:"WidthContent"},"Home")},h=a(4),v=a.n(h),b=[function(e){return localStorage.getItem(e)},function(e,t){localStorage.setItem(e,t)}],N=Object(o.a)(b,2),g=N[0],O=N[1],w=[{username:"Safiye",password:"93c58fd44c8e57a9c07c2705b62667c6fcaae6ee8a6b62ae77bff052ad650840"},{username:"Naz",password:"b28f6c253f56082a4f8182fd18f6f715dfd530d5ca727ee9bc6a967ea28ab849"}],y=function(){var e=g("userName"),t=g("userId"),a=!1;return!(!t||!e)&&(w.forEach((function(e){v()(e.password)===t&&(a=!0)})),a)},j=a(33);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){e.state;var t=e.dispatch,a=r.a.useState({username:"",password:""}),n=Object(o.a)(a,2),s=n[0],c=n[1],m=r.a.useState(!1),d=Object(o.a)(m,2),f=d[0],E=d[1],p=r.a.useState([]),h=Object(o.a)(p,2),b=h[0],N=h[1];r.a.useEffect((function(){y()&&Object(l.d)("/Matics/dashboard")}));var g=function(){var e=[];return s.username||e.push("username"),s.password||e.push("password"),N(e),!(e.length>0)},S=function(e){var t=e.currentTarget.id,a=e.currentTarget.value;t&&c((function(e){return I({},e,Object(i.a)({},t,a))}))};return r.a.createElement("div",{className:"Login WidthContent"},r.a.createElement("form",{className:"LoginForm",onSubmit:function(e){if(e.preventDefault(),g()){var a=I({},s,{password:v()(s.password)}),n=!1,r=!0,c=!1,o=void 0;try{for(var i,u=w[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var m=i.value;JSON.stringify(m)===JSON.stringify(a)&&(n=!0)}}catch(p){c=!0,o=p}finally{try{r||null==u.return||u.return()}finally{if(c)throw o}}if(n){E(!1);var d=a.username,f=v()(a.password);O("userId",f),O("userName",d),t({type:"SET_USER_DETAILS",user:{userId:f,userName:d}}),Object(l.d)("dashboard")}else E(!0)}}},r.a.createElement("span",{className:"Title"},"Log In"),r.a.createElement("span",{className:"WarningMessage"},b.length>0&&"Hey! Fill in the details...",f&&"Wrong login deets..."),r.a.createElement("div",{className:"FormField WithIcon"},r.a.createElement(u.a,{className:"Icon",color:"#2c3539",size:20}),r.a.createElement("input",{id:"username",type:"text",className:b.includes("username")?"EditBox Warning":"EditBox",placeholder:"Username",value:s.username,onChange:S})),r.a.createElement("div",{className:"FormField WithIcon"},r.a.createElement(j.a,{className:"Icon",color:"#2c3539",size:20}),r.a.createElement("input",{id:"password",type:"password",className:b.includes("password")?"EditBox Warning":"EditBox",placeholder:"Password",value:s.password,onChange:S})),r.a.createElement("div",{className:"ButtonContainer"},r.a.createElement("button",{type:"submit",className:"Btn Primary"},"Log In"))))},C=function(e){var t=e.state;r.a.useEffect((function(){y()||Object(l.d)("/Matics/login")}),[t.user]);return r.a.createElement("div",{className:"Dashboard WidthContent"},r.a.createElement("span",{className:"Title"},r.a.createElement("h1",null,"Dashboard")),r.a.createElement("div",{className:"CardList"},r.a.createElement("ul",null,r.a.createElement(l.a,{to:"/Matics/equation-generator"},r.a.createElement("li",null,"Equation Generator")))),r.a.createElement("div",{className:"UserDash"},function(e){var t=w.find((function(t){return v()(t.password)===e}));if(t)switch(t.username){case"Naz":return r.a.createElement("span",null,"Naz");case"Safiye":return r.a.createElement("span",null,"Safiye");default:return r.a.createElement("span",null,"NO USER FOUND")}return null}(g("userId"))))},D=function(){return r.a.createElement("div",{className:"Assignments WidthContent"},r.a.createElement("span",{className:"Title"},"Assignments"),r.a.createElement("div",{className:"Body"},"-"))},M=function(e){var t=e.order,a=e.coefficients,n=e.answer;if(a.length!==t+1)throw new Error("Wrong number of coefficients: ".concat(a.length," for polynomial of order: ").concat(t));return r.a.createElement("div",{className:"EquationField"},r.a.createElement("div",{className:"Inner"},function(){for(var e=[],s=0,c=t;c>=0;c--)0!==a[s]&&e.push(r.a.createElement(r.a.Fragment,{key:s},a[s]<0?r.a.createElement("div",{className:"Operator"},"-"):c!==t&&r.a.createElement("div",{className:"Operator"},"+"),r.a.createElement("div",{className:c>1?"Term WithPower":"Term"},r.a.createElement("span",{className:c>0?"Coefficient":"Constant"},c>0?1!==a[s]&&Math.abs(a[s]):Math.abs(a[s])),c>0&&r.a.createElement("span",{className:"Variable"},"x"),c>1&&r.a.createElement("span",{className:"Power"},c)))),s+=1;return e.push(r.a.createElement(r.a.Fragment,{key:t+1},r.a.createElement("div",{className:"Operator"},"="),r.a.createElement("div",{className:"Constant"},n))),e}()))},L=function(e,t){if(t<0)throw new Error("Cannot have negative highest number: ".concat(t));return Math.round(Math.random()*(Math.abs(e)+t)-Math.abs(e))},T=function(){var e={answers:[],coefficients:[]};e.answers=[L(-9,9),L(-9,9)];var t=Object(o.a)(e.answers,2),a=t[0],n=t[1];return e.coefficients=[1,a+n,a*n],e},W=function(){var e=r.a.useState({answers:[],coefficients:[]}),t=Object(o.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){n(T())}),[]),r.a.createElement("div",{className:"WidthContent"},r.a.createElement("h1",null,"Equation Generator"),r.a.createElement("div",{className:"EqnGenerator"},r.a.createElement("div",{className:"Eqn"},a.coefficients.length>0&&r.a.createElement(M,{order:2,coefficients:a.coefficients,answer:0})),r.a.createElement("div",{className:"BtnContainer"},r.a.createElement("button",{className:"Btn Grey",onClick:function(){return n(T())}},"Generate New Equation"))))};function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _={userId:"",userName:""},B=function(e,t){switch(t.type){case"SET_USER_DETAILS":return k({},e,{user:t.user});case"SET_USER_LOGGED_OUT":return O("userName",""),O("userId",""),k({},e,{user:_})}},G={user:_},R=function(e){var t=e.location,a=r.a.useReducer(B,G),n=Object(o.a)(a,2),s=n[0],c=n[1];return r.a.useEffect((function(){return Object(l.d)("/Matics"),function(){Object(l.d)("/Matics")}}),[]),r.a.useEffect((function(){if(y()){var e={userName:g("userName")?g("userName"):"",userId:g("userId")?g("userId"):""};c({type:"SET_USER_DETAILS",user:{userId:e.userId,userName:e.userName}})}else c({type:"SET_USER_LOGGED_OUT"})}),[c,t]),r.a.createElement("div",{className:"App"},r.a.createElement(E,{state:s,dispatch:c}),r.a.createElement(l.c,{basepath:"/Matics"},r.a.createElement(p,{path:"/"}),r.a.createElement(P,{path:"login",state:s,dispatch:c}),r.a.createElement(C,{path:"dashboard",state:s}),r.a.createElement(D,{path:"assignments"}),r.a.createElement(W,{path:"equation-generator"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.b,null,(function(e){return r.a.createElement(R,{location:e})})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.c51e6959.chunk.js.map