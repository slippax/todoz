(this.webpackJsonptodoz=this.webpackJsonptodoz||[]).push([[0],{15:function(e,t,n){e.exports={pageWrapper:"views_pageWrapper__1o1b-",goWrapper:"views_goWrapper__3hgNM",goText:"views_goText__3nIJV",minusButton:"views_minusButton__2J7mb",completedWrapper:"views_completedWrapper__2YSbp",completedText:"views_completedText__1fUJv"}},28:function(e,t,n){e.exports={list:"TodoItemList_list__31Abh",itemBox:"TodoItemList_itemBox__iXUao",button1:"TodoItemList_button1__1PjE8",button2:"TodoItemList_button2__3EIwJ",boxApart:"TodoItemList_boxApart__bVTTb"}},29:function(e,t,n){e.exports={list:"TodoItemListCompleted_list__1le2D",itemBox:"TodoItemListCompleted_itemBox__2Js2m",button2:"TodoItemListCompleted_button2__29ibD",button1:"TodoItemListCompleted_button1__3yQHU",boxApart:"TodoItemListCompleted_boxApart__lP-ma"}},30:function(e,t,n){e.exports={progress:"ItemCounter_progress__3IoFi",onGo:"ItemCounter_onGo__2UnQ3",onGO:"ItemCounter_onGO__XGJqd",completed:"ItemCounter_completed__2a7ni",progressButton:"ItemCounter_progressButton__1vZmp",completedButton:"ItemCounter_completedButton__1EhQI"}},43:function(e,t,n){e.exports={todoButton:"TodoItem_todoButton__2ZIsq",textArea:"TodoItem_textArea__fLO_J"}},46:function(e,t,n){e.exports={titleText:"TitleMenu_titleText__1hEvy",descriptionText:"TitleMenu_descriptionText__2Vz6t"}},60:function(e,t,n){e.exports=n(72)},65:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),l=n.n(r),c=(n(65),n(48)),i=n(11),m=0,u=function(e){return{type:"DELETE_TODO",payload:e}},s=function(e){return{type:"COMPLETE_TODO",id:e}},d=n(104),p=n(105),E=n(43),_=n.n(E),b=n(12),f=n(38),T=n.n(f),v=function(){var e=Object(i.b)(),t=function(t){e({type:"ADD_TODO",id:m++,payload:t})},n=[];return o.a.createElement("div",{className:_.a.form},o.a.createElement(T.a,{top:!0},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(n),e.target.reset()}},o.a.createElement("span",{className:_.a.textArea},o.a.createElement(d.a,{variant:"outlined",id:"outlined-search",onChange:function(e){n=e.target.value}})),o.a.createElement("span",{className:_.a.todoButton},o.a.createElement(p.a,{variant:"outlined",color:"default",type:"submit"},o.a.createElement(b.c,null))))))},O=n(28),x=n.n(O),N=n(24),g=n.n(N),C=n(41),I=n.n(C),h=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.todos})).filter((function(e){return!1===e.completed})),n=t.map((function(t){return o.a.createElement("div",{key:t.id},o.a.createElement("div",{className:x.a.itemBox},o.a.createElement("li",{onClick:function(){return e(s(t.id))}},t.item),o.a.createElement("button",{className:x.a.button1,onClick:function(){return e(s(t.id))}},o.a.createElement(b.a,null)),o.a.createElement("button",{className:x.a.button2,onClick:function(){return e(u(t.id))}},o.a.createElement(b.f,null))),o.a.createElement("div",{className:x.a.boxApart}))}));return o.a.createElement("div",null,o.a.createElement(g.a,null,o.a.createElement("div",{className:x.a.list},o.a.createElement(I.a,{spy:t},o.a.createElement("ul",null,n)))))},D=n(29),B=n.n(D),w=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.todos})).filter((function(e){return!0===e.completed})),n=t.map((function(t){return o.a.createElement("div",{key:t.id},o.a.createElement("div",{className:B.a.itemBox},o.a.createElement("li",{onClick:function(){return e(u(t.id))}},t.item),o.a.createElement("button",{className:B.a.button1,onClick:function(){return e({type:"REVERT_TODO",id:t.id})}},o.a.createElement(b.d,null)),o.a.createElement("button",{className:B.a.button2,onClick:function(){return e(u(t.id))}},o.a.createElement(b.f,null))),o.a.createElement("div",{className:B.a.boxApart}))}));return o.a.createElement("div",null,o.a.createElement(g.a,null,o.a.createElement("div",{className:B.a.list},o.a.createElement(I.a,{spy:t},o.a.createElement("ul",null,n)))))},k=n(46),y=n.n(k),L=n(53),j=n.n(L),A=function(){return o.a.createElement("div",{className:y.a.titleText},o.a.createElement(j.a,{top:!0,cascade:!0},o.a.createElement("h1",null,"Todoz"),o.a.createElement("p",{className:y.a.descriptionText},"Add a todo below to begin")))},W=n(30),S=n.n(W),J=n(47),z=n.n(J),G=function(e){var t=Object(i.c)((function(e){return e.todos})),n=t.filter((function(e){return!1===e.completed})),a=t.filter((function(e){return!0===e.completed})),r=n.length,l=a.length;return o.a.createElement(T.a,{top:!0},o.a.createElement("div",{className:S.a.progress},o.a.createElement("div",{className:S.a.onGO},o.a.createElement(z.a,{spy:r},o.a.createElement("strong",null,r))," ","IN PROGRESS",o.a.createElement("button",{className:S.a.progressButton},o.a.createElement(b.e,{size:"1.5em",onClick:e.progressClicked}))),o.a.createElement("div",{className:S.a.completed},o.a.createElement(z.a,{spy:l},o.a.createElement("strong",null,l))," ","COMPLETED",o.a.createElement("button",{className:S.a.completedButton},o.a.createElement(b.e,{size:"1.5em",onClick:e.completedClicked})))))},R=n(15),M=n.n(R),P=function(){var e=Object(a.useState)(!0),t=Object(c.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(!0),i=Object(c.a)(l,2),m=i[0],u=i[1];return o.a.createElement("div",{className:M.a.pageWrapper},o.a.createElement(A,null),o.a.createElement("div",{className:M.a.inputBox},o.a.createElement(v,null),o.a.createElement(G,{progressClicked:function(){return r(!n)},completedClicked:function(){return u(!m)}})),o.a.createElement(g.a,{cascade:!0},n?o.a.createElement("span",{className:M.a.goWrapper},o.a.createElement("h3",{className:M.a.goText},"ON THE GO"," ",o.a.createElement("button",{className:M.a.minusButton,onClick:function(){return r(!n)}},o.a.createElement(b.b,{size:"1.2em"}))),o.a.createElement(h,null)):o.a.createElement("div",null),m?o.a.createElement("span",{className:M.a.completedWrapper},o.a.createElement("h3",{className:M.a.completedText},"COMPLETED"," ",o.a.createElement("button",{className:M.a.minusButton,onClick:function(){return u(!m)}},o.a.createElement(b.b,{size:"1.2em"}))),o.a.createElement(w,null)):o.a.createElement("div",null)))};var V=function(){return o.a.createElement("div",null,o.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=n(23),X=n(36),Q=n(54),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(Q.a)(e),[{id:t.id,item:t.payload,completed:!1}]);case"DELETE_TODO":return e.filter((function(e){return e.id!==t.payload}));case"COMPLETE_TODO":case"REVERT_TODO":return e.map((function(e){return e.id===t.id?Object(X.a)(Object(X.a)({},e),{},{completed:!e.completed}):e}));default:return e}},H=Object(U.b)({todos:q}),Z=Object(U.c)(H,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(o.a.createElement(i.a,{store:Z},o.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.6f5330bb.chunk.js.map