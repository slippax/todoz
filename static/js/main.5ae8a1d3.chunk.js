(this.webpackJsonptodoz=this.webpackJsonptodoz||[]).push([[0],{16:function(e,t,n){e.exports={pageWrapper:"views_pageWrapper__1o1b-",goWrapper:"views_goWrapper__3hgNM",goText:"views_goText__3nIJV",minusButton:"views_minusButton__2J7mb",completedWrapper:"views_completedWrapper__2YSbp",completedText:"views_completedText__1fUJv"}},27:function(e,t,n){e.exports={list:"TodoItemList_list__31Abh",itemBox:"TodoItemList_itemBox__iXUao",button1:"TodoItemList_button1__1PjE8",button2:"TodoItemList_button2__3EIwJ",boxApart:"TodoItemList_boxApart__bVTTb"}},28:function(e,t,n){e.exports={list:"TodoItemListCompleted_list__1le2D",itemBox:"TodoItemListCompleted_itemBox__2Js2m",button2:"TodoItemListCompleted_button2__29ibD",button1:"TodoItemListCompleted_button1__3yQHU",boxApart:"TodoItemListCompleted_boxApart__lP-ma"}},29:function(e,t,n){e.exports={progress:"ItemCounter_progress__3IoFi",onGo:"ItemCounter_onGo__2UnQ3",onGO:"ItemCounter_onGO__XGJqd",completed:"ItemCounter_completed__2a7ni",progressButton:"ItemCounter_progressButton__1vZmp",completedButton:"ItemCounter_completedButton__1EhQI"}},41:function(e,t,n){e.exports={todoButton:"TodoItem_todoButton__2ZIsq",textArea:"TodoItem_textArea__fLO_J",form:"TodoItem_form__c9YXL"}},45:function(e,t,n){e.exports={titleText:"TitleMenu_titleText__1hEvy",descriptionText:"TitleMenu_descriptionText__2Vz6t"}},58:function(e,t,n){e.exports=n(70)},63:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),l=n.n(r),c=(n(63),n(47)),i=n(11),m=0,u=function(e){return{type:"DELETE_TODO",payload:e}},s=function(e){return{type:"COMPLETE_TODO",id:e}},d=n(102),p=n(103),E=n(41),_=n.n(E),f=n(12),b=n(13),T=n.n(b),v=function(){var e=Object(i.b)(),t=[],n=[],a=function(t){(console.log(t),0!==t.length)&&(t!==n&&t.trim()&&(n=t,e({type:"ADD_TODO",id:m++,payload:t})))};return o.a.createElement("div",{className:_.a.form},o.a.createElement(T.a,{top:!0},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(t),e.target.reset()}},o.a.createElement("span",{className:_.a.textArea},o.a.createElement(d.a,{variant:"outlined",id:"outlined-search",onChange:function(e){t=e.target.value}})),o.a.createElement("span",{className:_.a.todoButton},o.a.createElement(p.a,{variant:"outlined",color:"default",type:"submit"},o.a.createElement(f.c,null))))))},O=n(27),g=n.n(O),x=n(39),N=n.n(x),C=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.todos})).filter((function(e){return!1===e.completed})),n=t.map((function(t){return o.a.createElement("div",{key:t.id},o.a.createElement("div",{className:g.a.itemBox},o.a.createElement("li",{onClick:function(){return e(s(t.id))}},t.item),o.a.createElement("button",{className:g.a.button1,onClick:function(){return e(s(t.id))}},o.a.createElement(f.a,null)),o.a.createElement("button",{className:g.a.button2,onClick:function(){return e(u(t.id))}},o.a.createElement(f.f,null))),o.a.createElement("div",{className:g.a.boxApart}))}));return o.a.createElement("div",null,o.a.createElement(T.a,{top:!0},o.a.createElement("div",{className:g.a.list},o.a.createElement(N.a,{spy:t},o.a.createElement("ul",null,n)))))},I=n(28),h=n.n(I),D=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.todos})).filter((function(e){return!0===e.completed})),n=t.map((function(t){return o.a.createElement("div",{key:t.id},o.a.createElement("div",{className:h.a.itemBox},o.a.createElement("li",{onClick:function(){return e(u(t.id))}},t.item),o.a.createElement("button",{className:h.a.button1,onClick:function(){return e({type:"REVERT_TODO",id:t.id})}},o.a.createElement(f.d,null)),o.a.createElement("button",{className:h.a.button2,onClick:function(){return e(u(t.id))}},o.a.createElement(f.f,null))),o.a.createElement("div",{className:h.a.boxApart}))}));return o.a.createElement("div",null,o.a.createElement(T.a,{top:!0},o.a.createElement("div",{className:h.a.list},o.a.createElement(N.a,{spy:t},o.a.createElement("ul",null,n)))))},B=n(45),w=n.n(B),k=function(){return o.a.createElement("div",{className:w.a.titleText},o.a.createElement(T.a,{cascade:!0},o.a.createElement("h1",null,"Todoz"),o.a.createElement("p",{className:w.a.descriptionText},"Add a todo below to begin")))},y=n(29),L=n.n(y),j=n(46),A=n.n(j),W=function(e){var t=Object(i.c)((function(e){return e.todos})),n=t.filter((function(e){return!1===e.completed})),a=t.filter((function(e){return!0===e.completed})),r=n.length,l=a.length;return o.a.createElement(T.a,{top:!0},o.a.createElement("div",{className:L.a.progress},o.a.createElement("span",{className:L.a.onGO},o.a.createElement(A.a,{spy:r}),"IN PROGRESS: ",o.a.createElement("strong",null,r)),o.a.createElement("div",null,o.a.createElement("button",{className:L.a.progressButton},o.a.createElement(f.e,{size:"2em",onClick:e.progressClicked}))),o.a.createElement("span",{className:L.a.completed},o.a.createElement(A.a,{spy:l}),"COMPLETED: ",o.a.createElement("strong",null,l)),o.a.createElement("div",null,o.a.createElement("button",{className:L.a.completedButton},o.a.createElement(f.e,{size:"2em",onClick:e.completedClicked})))))},S=n(16),J=n.n(S),z=function(){var e=Object(a.useState)(!0),t=Object(c.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(!0),i=Object(c.a)(l,2),m=i[0],u=i[1];return o.a.createElement("div",{className:J.a.pageWrapper},o.a.createElement(k,null),o.a.createElement("div",{className:J.a.inputBox},o.a.createElement(v,null),o.a.createElement(W,{progressClicked:function(){return r(!n)},completedClicked:function(){return u(!m)}})),o.a.createElement(T.a,{top:!0,cascade:!0},n?o.a.createElement("span",{className:J.a.goWrapper},o.a.createElement("h3",{className:J.a.goText},o.a.createElement("button",{className:J.a.minusButton,onClick:function(){return r(!n)}},o.a.createElement(f.b,{size:"1.2em"})),"ON THE GO"," "),o.a.createElement(C,null)):o.a.createElement("div",null),m?o.a.createElement("span",{className:J.a.completedWrapper},o.a.createElement("h3",{className:J.a.completedText},o.a.createElement("button",{className:J.a.minusButton,onClick:function(){return u(!m)}},o.a.createElement(f.b,{size:"1.2em"})),"COMPLETED"," "),o.a.createElement(D,null)):o.a.createElement("div",null)))};var G=function(){return o.a.createElement("div",null,o.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(23),M=n(34),P=n(52),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(P.a)(e),[{id:t.id,item:t.payload,completed:!1}]);case"DELETE_TODO":return e.filter((function(e){return e.id!==t.payload}));case"COMPLETE_TODO":case"REVERT_TODO":return e.map((function(e){return e.id===t.id?Object(M.a)(Object(M.a)({},e),{},{completed:!e.completed}):e}));default:return e}},X=Object(R.b)({todos:V}),U=Object(R.c)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(o.a.createElement(i.a,{store:U},o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.5ae8a1d3.chunk.js.map