(this.webpackJsonpmodum=this.webpackJsonpmodum||[]).push([[0],{11:function(e,t,a){e.exports=a(28)},16:function(e,t,a){},17:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),o=(a(16),a(3)),i=a(6),l=(a(17),a(2)),u=a(4),m=a.n(u),f=[function(e){return localStorage.getItem(e)},function(e,t){localStorage.setItem(e,t)}],d=Object(o.a)(f,2),E=d[0],p=d[1],h=[{username:"Safiye",password:"93c58fd44c8e57a9c07c2705b62667c6fcaae6ee8a6b62ae77bff052ad650840"},{username:"Naz",password:"b28f6c253f56082a4f8182fd18f6f715dfd530d5ca727ee9bc6a967ea28ab849"}],b=function(){var e=E("userName"),t=E("userId"),a=!1;return!(!t||!e)&&(h.forEach((function(e){m()(e.password)===t&&(a=!0)})),a)},v=a(31),N=a(32),g=a(34),O=function(e){var t=e.state,a=e.dispatch,n=r.a.useState(!1),s=Object(o.a)(n,2),c=s[0],i=s[1],u=r.a.useRef(null);r.a.useEffect((function(){var e=function(e){return function(e,t){t.current&&!t.current.contains(e.target)&&i(!1)}(e,u)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[c]);var m=function(){a({type:"SET_USER_LOGGED_OUT"})};return r.a.createElement("div",{className:"UserMenu"},r.a.createElement("button",{className:"Btn Transparent Primary WithIcon Left Right LightGrey",onClick:function(){i(!c)}},r.a.createElement(v.a,{size:25,className:"Icon Left",color:"#000"}),t.user.userName,r.a.createElement(N.a,{size:25,className:"Icon Right Lower",color:"#000",style:{top:"8px"}})),r.a.createElement(g.a,{in:c,timeout:100},(function(e){return r.a.createElement("div",{className:"UserMenuDropdown "+e,ref:u},r.a.createElement("ul",{className:"Menu"},r.a.createElement("li",{className:"Item",onClick:function(){i(!1),Object(l.d)("/Matics/dashboard")}},"Dashboard"),r.a.createElement("li",{className:"Item",onClick:function(){i(!1),Object(l.d)("/Matics/assignments")}},"Assignments"),r.a.createElement("li",{className:"Item",onClick:m},"Log Out")))})))},y=function(e){var t=e.state,a=e.dispatch;return r.a.createElement("header",{className:"AppHeader"},r.a.createElement("div",{className:"HeaderContent WidthContent"},r.a.createElement(l.a,{to:"/Matics"},r.a.createElement("span",{style:{cursor:"pointer"}},"Matics")),r.a.createElement("div",{className:"UserPanel"},t.user.userId?r.a.createElement(O,{state:t,dispatch:a}):r.a.createElement(l.a,{to:"/Matics/login"},r.a.createElement("button",{className:"Btn Primary"},"Log In")))))},w=function(){return r.a.createElement("div",{className:"WidthContent"},"Home")},j=a(33);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){e.state;var t=e.dispatch,a=r.a.useState({username:"",password:""}),n=Object(o.a)(a,2),s=n[0],c=n[1],u=r.a.useState(!1),f=Object(o.a)(u,2),d=f[0],E=f[1],N=r.a.useState([]),g=Object(o.a)(N,2),O=g[0],y=g[1];r.a.useEffect((function(){b()&&Object(l.d)("/Matics/dashboard")}));var w=function(){var e=[];return s.username||e.push("username"),s.password||e.push("password"),y(e),!(e.length>0)},S=function(e){var t=e.currentTarget.id,a=e.currentTarget.value;t&&c((function(e){return I({},e,Object(i.a)({},t,a))}))};return r.a.createElement("div",{className:"Login WidthContent"},r.a.createElement("form",{className:"LoginForm",onSubmit:function(e){if(e.preventDefault(),w()){var a=I({},s,{password:m()(s.password)}),n=!1,r=!0,c=!1,o=void 0;try{for(var i,u=h[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var f=i.value;JSON.stringify(f)===JSON.stringify(a)&&(n=!0)}}catch(v){c=!0,o=v}finally{try{r||null==u.return||u.return()}finally{if(c)throw o}}if(n){E(!1);var d=a.username,b=m()(a.password);p("userId",b),p("userName",d),t({type:"SET_USER_DETAILS",user:{userId:b,userName:d}}),Object(l.d)("dashboard")}else E(!0)}}},r.a.createElement("span",{className:"Title"},"Log In"),r.a.createElement("span",{className:"WarningMessage"},O.length>0&&"Hey! Fill in the details...",d&&"Wrong login deets..."),r.a.createElement("div",{className:"FormField WithIcon"},r.a.createElement(v.a,{className:"Icon",color:"#2c3539",size:20}),r.a.createElement("input",{id:"username",type:"text",className:O.includes("username")?"EditBox Warning":"EditBox",placeholder:"Username",value:s.username,onChange:S})),r.a.createElement("div",{className:"FormField WithIcon"},r.a.createElement(j.a,{className:"Icon",color:"#2c3539",size:20}),r.a.createElement("input",{id:"password",type:"password",className:O.includes("password")?"EditBox Warning":"EditBox",placeholder:"Password",value:s.password,onChange:S})),r.a.createElement("div",{className:"ButtonContainer"},r.a.createElement("button",{type:"submit",className:"Btn Primary"},"Log In"))))},D=function(e){var t=e.order,a=e.coefficients,n=e.answer;if(a.length!==t+1)throw new Error("Wrong number of coefficients: ".concat(a.length," for polynomial of order: ").concat(t));return r.a.createElement("div",{className:"EquationField"},r.a.createElement("div",{className:"Inner"},function(){for(var e=[],s=0,c=t;c>=0;c--)0!==a[s]&&e.push(r.a.createElement(r.a.Fragment,{key:s},a[s]<0?r.a.createElement("div",{className:"Operator"},"-"):c!==t&&r.a.createElement("div",{className:"Operator"},"+"),r.a.createElement("div",{className:c>1?"Term WithPower":"Term"},r.a.createElement("span",{className:c>0?"Coefficient":"Constant"},c>0?1!==a[s]&&Math.abs(a[s]):Math.abs(a[s])),c>0&&r.a.createElement("span",{className:"Variable"},"x"),c>1&&r.a.createElement("span",{className:"Power"},c)))),s+=1;return e.push(r.a.createElement(r.a.Fragment,{key:t+1},r.a.createElement("div",{className:"Operator"},"="),r.a.createElement("div",{className:"Constant"},n))),e}()))},T=function(e,t){if(t<0)throw new Error("Cannot have negative highest number: ".concat(t));return Math.round(Math.random()*(Math.abs(e)+t)-Math.abs(e))},C=function(){var e={answers:[],coefficients:[]};e.answers=[T(-9,9),T(-9,9)];var t=Object(o.a)(e.answers,2),a=t[0],n=t[1];return e.coefficients=[1,a+n,a*n],e},L=function(e){var t=e.state,a=r.a.useState({answers:[],coefficients:[]}),n=Object(o.a)(a,2),s=n[0],c=n[1];r.a.useEffect((function(){c(C())}),[]),r.a.useEffect((function(){b()||Object(l.d)("/Matics/login")}),[t.user]);return r.a.createElement("div",{className:"Dashboard WidthContent"},r.a.createElement("span",{className:"Title"},r.a.createElement("h1",null,"Dashboard")),r.a.createElement("div",{className:"EqnGenerator"},r.a.createElement("div",{className:"Eqn"},s.coefficients.length>0&&r.a.createElement(D,{order:2,coefficients:s.coefficients,answer:0})),r.a.createElement("div",{className:"BtnContainer"},r.a.createElement("button",{className:"Btn Grey",onClick:function(){return c(C())}},"Generate New Equation"))),r.a.createElement("div",{className:"UserDash"},function(e){var t=h.find((function(t){return m()(t.password)===e}));if(t)switch(t.username){case"Naz":return r.a.createElement("span",null,"Naz");case"Safiye":return r.a.createElement("span",null,"Safiye");default:return r.a.createElement("span",null,"NO USER FOUND")}}(E("userId"))))},M=function(){return r.a.createElement("div",{className:"Assignments"},r.a.createElement("span",{className:"Title"},"Assignments"),r.a.createElement("div",{className:"Body"},"Body"))};function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W={userId:"",userName:""},_=function(e,t){switch(t.type){case"SET_USER_DETAILS":return k({},e,{user:t.user});case"SET_USER_LOGGED_OUT":return p("userName",""),p("userId",""),k({},e,{user:W})}},B={user:W},R=function(e){var t=e.location,a=r.a.useReducer(_,B),n=Object(o.a)(a,2),s=n[0],c=n[1];return r.a.useEffect((function(){if(b()){var e={userName:E("userName")?E("userName"):"",userId:E("userId")?E("userId"):""};c({type:"SET_USER_DETAILS",user:{userId:e.userId,userName:e.userName}})}else c({type:"SET_USER_LOGGED_OUT"})}),[c,t]),r.a.createElement("div",{className:"App"},r.a.createElement(y,{state:s,dispatch:c}),r.a.createElement(l.c,{basepath:"/Matics"},r.a.createElement(w,{path:"/"}),r.a.createElement(P,{path:"login",state:s,dispatch:c}),r.a.createElement(L,{path:"dashboard",state:s}),r.a.createElement(M,{path:"assignments"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.b,null,(function(e){return r.a.createElement(R,{location:e})})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.c076dfa9.chunk.js.map