webpackJsonp([1],{"85VR":function(t,e){},"8nEN":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-wrapper"},[e("h1",[this._v("To-Do")])])}]};var s=n("VU/8")({data:function(){return{text:"hello"}}},i,!1,function(t){n("RD2v")},"data-v-3ed4db95",null).exports,r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._v("\n  Desgin By Forter\n")])},staticRenderFns:[]};var a=n("VU/8")({},r,!1,function(t){n("Y1+5")},"data-v-13f69f52",null).exports,c=n("mvHQ"),l=n.n(c),u=function(){return JSON.parse(window.localStorage.getItem("todos")||"[]")},d=function(t){window.localStorage.setItem("todos",l()(t))},f={props:{todo:{id:Number,content:String,isCompleted:Boolean}},methods:{toDel:function(){this.$emit("toDel",this.todo.id)},toUpdate:function(){this.$emit("toUpdate",this.todo)}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"item-in-out"}},[n("li",{class:{completed:t.todo.isCompleted}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.isCompleted,expression:"todo.isCompleted"}],staticClass:"check-btn",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.todo.isCompleted)?t._i(t.todo.isCompleted,null)>-1:t.todo.isCompleted},on:{click:t.toUpdate,change:function(e){var n=t.todo.isCompleted,o=e.target,i=!!o.checked;if(Array.isArray(n)){var s=t._i(n,null);o.checked?s<0&&t.$set(t.todo,"isCompleted",n.concat([null])):s>-1&&t.$set(t.todo,"isCompleted",n.slice(0,s).concat(n.slice(s+1)))}else t.$set(t.todo,"isCompleted",i)}}}),t._v(" "),n("label",[t._v(t._s(t.todo.content))]),t._v(" "),n("div",{staticClass:"del-btn",on:{click:t.toDel}})])])},staticRenderFns:[]};var p=n("VU/8")(f,m,!1,function(t){n("OjP3")},"data-v-04e2010b",null).exports,v={props:{filter:String,todos:Array},data:function(){return{states:["All","Active","Completed"]}},computed:{activeNum:function(){return this.todos.filter(function(t){return!t.isCompleted}).length}},methods:{toggleState:function(t,e){this.$emit("toggleState",e);var n=t.target;$(".line").width($(n).innerWidth()).css("left",$(n).position().left)},clear:function(){this.$emit("clear")}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-wrapper"},[n("span",[t._v(t._s(t.activeNum)+" Items")]),t._v(" "),n("ul",{staticClass:"nav-list"},[t._l(t.states,function(e,o){return n("li",{key:o,class:{clicked:t.filter===e},on:{click:function(n){t.toggleState(n,e)}}},[t._v(t._s(e))])}),t._v(" "),n("span",{staticClass:"line"})],2),t._v(" "),n("div",{staticClass:"clear",on:{click:t.clear}},[t._v("Clear")])])},staticRenderFns:[]};var _=n("VU/8")(v,h,!1,function(t){n("8nEN")},"data-v-55c40c38",null).exports,g=u(),C=g[0]?g[0].id+1:0,y={components:{item:p,tab:_},data:function(){return{title:"接下来要做什么？",todos:g,filter:"All"}},computed:{filteredTodos:function(){if("All"===this.filter)return this.todos;var t="Completed"===this.filter;return this.todos.filter(function(e){return e.isCompleted===t})}},methods:{addToDo:function(t){""!==t.target.value&&(this.todos.unshift({id:C++,content:t.target.value.trim(),isCompleted:!1}),t.target.value="",this.$notify({content:"你又多一件事待做！"}))},delToDo:function(t){this.todos.splice(this.todos.findIndex(function(e){return e.id===t}),1),this.$notify({content:"你又少一件事待做了..."})},updateToDo:function(t){this.todos.map(function(e){return e.id===t.id?t:e}),this.$notify({content:"厉害厉害，做完了一件事！"})},toggleToDos:function(t){this.filter=t},clearCompleted:function(){this.todos=this.todos.filter(function(t){return!t.isCompleted}),this.$notify({content:"厉害炸了，这么多完成的事被清除！"})}},watch:{todos:{handler:function(){d(this.todos)},deep:!0}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-wrapper"},[n("input",{attrs:{type:"text",placeholder:t.title},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addToDo(e):null}}}),t._v(" "),n("tab",{attrs:{filter:t.filter,todos:t.todos},on:{toggleState:t.toggleToDos,clear:t.clearCompleted}}),t._v(" "),n("ul",t._l(t.filteredTodos,function(e){return n("item",{key:e.id,tag:"li",attrs:{todo:e},on:{toDel:t.delToDo,toUpdate:t.updateToDo}})}))],1)},staticRenderFns:[]};var T={name:"App",components:{appHeader:s,appFooter:a,todo:n("VU/8")(y,b,!1,function(t){n("n3qD")},"data-v-4e0a5bbf",null).exports}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("app-header"),this._v(" "),e("todo"),this._v(" "),e("app-footer")],1)},staticRenderFns:[]};var k=n("VU/8")(T,D,!1,function(t){n("zLQ0")},null,null).exports,w={name:"Notification",props:{content:{type:String,required:!0},btn:{type:String,default:"Close"}},data:function(){return{visible:!1}},mounted:function(){this.visible=!0},computed:{style:function(){return{}}},methods:{notificationClose:function(){this.$emit("notifyClose")},afterEnter:function(){},afterLeave:function(){this.$emit("notifyClosed")},createTimeout:function(){},clearTimeout:function(){}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"notify-in-out"},on:{"after-enter":t.afterEnter,"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"notification",style:t.style,on:{mouseover:t.clearTimeout,mouseout:t.createTimeout}},[n("span",{staticClass:"content"},[t._v(t._s(t.content))]),t._v(" "),n("a",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.notificationClose(e)}}},[t._v(t._s(t.btn))])])])},staticRenderFns:[]};var E=n("VU/8")(w,x,!1,function(t){n("85VR")},"data-v-8423691a",null).exports,S=n("Dd8w"),A=n.n(S),H=n("+6Bu"),N=n.n(H),R={extends:E,data:function(){return{verticalOffsetHeight:0,autoTime:3e3,height:0}},computed:{style:function(){return{position:"fixed",right:"2em",bottom:this.verticalOffsetHeight+"px"}}},mounted:function(){this.createTimeout()},beforeDestroy:function(){this.clearTimeout()},methods:{createTimeout:function(){var t=this;this.autoTime&&(this.timer=setTimeout(function(){t.visible=!1},this.autoTime))},clearTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){this.timer&&clearTimeout(this.timer)}),afterEnter:function(){this.height=this.$el.offsetHeight}}},U=o.a.extend(R),F=[],O=1,V=function(t){var e=t.autoTime,n=N()(t,["autoTime"]),o=new U({data:{autoTime:void 0===e?3e3:e},propsData:A()({},n)}),i="notification_"+O++;o.id=i,o.vm=o.$mount(),document.body.appendChild(o.vm.$el);var s=0;return F.forEach(function(t){s+=t.$el.offsetHeight+16}),s+=16,o.verticalOffsetHeight=s,F.push(o),o.vm.$on("notifyClosed",function(){!function(t){if(t){var e=F.length,n=F.findIndex(function(e){return e.id===t.id});if(F.splice(n,1),e>1)for(var o=t.vm.height,i=n;i<e-1;i++)F[i].verticalOffsetHeight=parseInt(F[i].verticalOffsetHeight)-o-16}}(o),document.body.removeChild(o.vm.$el),o.vm.$destroy()}),o.vm.$on("notifyClose",function(){o.vm.visible=!1}),o.vm};o.a.config.productionTip=!1,o.a.config.devtools=!1,o.a.use(function(t){t.component(E.name,E),t.prototype.$notify=V}),new o.a({el:"#app",components:{App:k},template:"<App/>"})},OjP3:function(t,e){},RD2v:function(t,e){},"Y1+5":function(t,e){},n3qD:function(t,e){},zLQ0:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.67468a74d767bb081512.js.map