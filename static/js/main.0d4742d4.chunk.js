(this.webpackJsonptodoz=this.webpackJsonptodoz||[]).push([[0],{26:function(e,t,a){e.exports={list:"TodoItemList_list__31Abh",itemBox:"TodoItemList_itemBox__iXUao",button1:"TodoItemList_button1__1PjE8",button2:"TodoItemList_button2__3EIwJ",boxApart:"TodoItemList_boxApart__bVTTb"}},27:function(e,t,a){e.exports={list:"TodoItemListCompleted_list__1le2D",itemBox:"TodoItemListCompleted_itemBox__2Js2m",button2:"TodoItemListCompleted_button2__29ibD",button1:"TodoItemListCompleted_button1__3yQHU",boxApart:"TodoItemListCompleted_boxApart__lP-ma"}},28:function(e,t,a){e.exports={pageWrapper:"views_pageWrapper__1o1b-",goWrapper:"views_goWrapper__3hgNM",goText:"views_goText__3nIJV",completedWrapper:"views_completedWrapper__2YSbp",completedText:"views_completedText__1fUJv"}},41:function(e,t,a){e.exports={todoButton:"TodoItem_todoButton__2ZIsq",textArea:"TodoItem_textArea__fLO_J"}},42:function(e,t,a){e.exports={progress:"ItemCounter_progress__3IoFi",onGO:"ItemCounter_onGO__XGJqd",completed:"ItemCounter_completed__2a7ni"}},45:function(e,t,a){e.exports={titleText:"TitleMenu_titleText__1hEvy",descriptionText:"TitleMenu_descriptionText__2Vz6t"}},59:function(e,t,a){e.exports=a(71)},64:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),l=a.n(r),c=(a(64),a(11)),i=0,m=function(e){return{type:"DELETE_TODO",payload:e}},u=function(e){return{type:"COMPLETE_TODO",id:e}},s=a(106),d=a(107),p=a(41),E=a.n(p),_=a(16),f=a(22),b=a.n(f),T=function(){var e=Object(c.b)(),t=function(t){e({type:"ADD_TODO",id:i++,payload:t})},a=[];return o.a.createElement("div",{className:E.a.form},o.a.createElement(b.a,{top:!0},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(a),e.target.reset()}},o.a.createElement("span",{className:E.a.textArea},o.a.createElement(s.a,{variant:"outlined",onChange:function(e){a=e.target.value}})),o.a.createElement("span",{className:E.a.todoButton},o.a.createElement(d.a,{variant:"outlined",color:"primary",type:"submit"},o.a.createElement(_.b,null))))))},O=a(26),v=a.n(O),x=a(40),N=a.n(x),g=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.todos})).filter((function(e){return!1===e.completed})),a=t.map((function(t){return o.a.createElement("div",{key:t.id},o.a.createElement("div",{className:v.a.itemBox},o.a.createElement("li",{onClick:function(){return e(u(t.id))}},t.item),o.a.createElement("button",{className:v.a.button1,onClick:function(){return e(u(t.id))}},o.a.createElement(_.a,null)),o.a.createElement("button",{className:v.a.button2,onClick:function(){return e(m(t.id))}},o.a.createElement(_.d,null))),o.a.createElement("div",{className:v.a.boxApart}))}));return o.a.createElement("div",null,o.a.createElement(N.a,{spy:t},o.a.createElement("div",{className:v.a.list},o.a.createElement("ul",null,a))))},h=a(27),y=a.n(h),D=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.todos})).filter((function(e){return!0===e.completed})),a=t.map((function(t){return o.a.createElement("div",{key:t.id},o.a.createElement("div",{className:y.a.itemBox},o.a.createElement("li",{onClick:function(){return e(m(t.id))}},t.item),o.a.createElement("button",{className:y.a.button1,onClick:function(){return e({type:"REVERT_TODO",id:t.id})}},o.a.createElement(_.c,null)),o.a.createElement("button",{className:y.a.button2,onClick:function(){return e(m(t.id))}},o.a.createElement(_.d,null))),o.a.createElement("div",{className:y.a.boxApart}))}));return o.a.createElement("div",null,o.a.createElement(N.a,{spy:t},o.a.createElement("div",{className:y.a.list},o.a.createElement("ul",null,a))))},I=a(45),w=a.n(I),C=a(52),L=a.n(C),j=function(){return o.a.createElement("div",{className:w.a.titleText},o.a.createElement(L.a,{cascade:!0},o.a.createElement("h1",null,"Todoz"),o.a.createElement("p",{className:w.a.descriptionText},"Add a todo below to begin")))},k=a(42),A=a.n(k),B=a(46),W=a.n(B),J=function(){var e=Object(c.c)((function(e){return e.todos})),t=e.filter((function(e){return!1===e.completed})),a=e.filter((function(e){return!0===e.completed})),n=t.length,r=a.length;return o.a.createElement(b.a,{top:!0},o.a.createElement("div",{className:A.a.progress},o.a.createElement("p",{className:A.a.onGO},o.a.createElement(W.a,{spy:n},o.a.createElement("strong",null,n))," ","IN PROGRESS"),o.a.createElement("p",{className:A.a.completed},o.a.createElement(W.a,{spy:r},o.a.createElement("strong",null,r))," ","COMPLETED")))},M=a(28),P=a.n(M),R=a(53),S=a(105),V=function(){var e=Object(R.a)({typography:{button:{fontFamily:"Permanent Marker"}}});return o.a.createElement(S.a,{theme:e},o.a.createElement("div",{className:P.a.pageWrapper},o.a.createElement(j,null),o.a.createElement(T,null),o.a.createElement(J,null),o.a.createElement(b.a,{top:!0,cascade:!0},o.a.createElement("span",{className:P.a.goWrapper},o.a.createElement("h3",{className:P.a.goText},"ON THE GO"),o.a.createElement(g,null)),o.a.createElement("span",{className:P.a.completedWrapper},o.a.createElement("h3",{className:P.a.completedText},"COMPLETED"),o.a.createElement(D,null)))))};var G=function(){return o.a.createElement("div",null,o.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(21),U=a(33),z=a(54),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(z.a)(e),[{id:t.id,item:t.payload,completed:!1}]);case"DELETE_TODO":return e.filter((function(e){return e.id!==t.payload}));case"COMPLETE_TODO":case"REVERT_TODO":return e.map((function(e){return e.id===t.id?Object(U.a)(Object(U.a)({},e),{},{completed:!e.completed}):e}));default:return e}},F=Object(X.b)({todos:q}),H=Object(X.c)(F,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(o.a.createElement(c.a,{store:H},o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.0d4742d4.chunk.js.map