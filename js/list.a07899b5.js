(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{"1a33":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"list"}},[e("div",{staticClass:"container d-flex align-items-center flex-column"},[e("h5",{staticClass:"title"},[t._v("Todo List")]),e("b-input-group",{staticClass:"addInput",attrs:{size:"lg"}},[e("b-form-input",{staticClass:"col-10 my-3 mx-auto",attrs:{placeholder:"請輸入事項名稱..."},on:{keydown:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.addTodo(o)}},model:{value:t.newtodo,callback:function(o){t.newtodo=o},expression:"newtodo"}})],1),e("b-btn",{staticClass:"col-12 my-3 btn1",attrs:{variant:"light"},on:{click:t.addTodo}},[t._v("新增")]),t.todos.length?e("ul",{staticClass:"col-12"},[e("draggable",t._b({staticClass:"dragwrap",model:{value:t.todos,callback:function(o){t.todos=o},expression:"todos"}},"draggable",t.dragOption,!1),t._l(t.todos,(function(o,n){return e("li",{key:n},[o.edit?e("input",{directives:[{name:"model",rawName:"v-model",value:o.model,expression:"todo.model"}],staticClass:"editInput",attrs:{type:"text"},domProps:{value:o.model},on:{input:function(e){e.target.composing||t.$set(o,"model",e.target.value)}}}):t._e(),o.edit?e("div",{staticClass:"editBtns"},[e("button",{staticClass:"btn-save",on:{click:function(o){return t.saveTodo(n)}}},[e("font-awesome-icon",{attrs:{icon:["fas","check"]}})],1),e("button",{staticClass:"btn-cancel",on:{click:function(o){return t.cancelTodo(n)}}},[e("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1)]):e("p",[t._v(t._s(o.name))]),o.edit?t._e():e("div",{staticClass:"editBtns"},[e("button",{staticClass:"btn-edit",on:{click:function(o){return t.editTodo(n)}}},[e("font-awesome-icon",{attrs:{icon:["fas","pen"]}})],1),e("button",{staticClass:"btn-del",on:{click:function(o){return t.delTodo(n)}}},[e("font-awesome-icon",{attrs:{icon:["fas","trash-alt"]}})],1)])])})),0)],1):e("span",{staticClass:"empitySpan"},[t._v("朋友你好，"),e("br"),t._v("你的清單空空如也 ...")])],1)])},s=[],i={data:function(){return{newtodo:"",dragOption:{animation:200}}},methods:{addTodo:function(){this.newtodo.length>0&&this.$store.commit("addTodo",this.newtodo),this.newtodo=""},delTodo:function(t){this.$store.commit("delTodo",t)},editTodo:function(t){this.$store.commit("editTodo",t)},cancelTodo:function(t){this.$store.commit("cancelTodo",t)},saveTodo:function(t){this.$store.commit("saveTodo",t)}},computed:{todos:{get:function(){return this.$store.getters.todos},set:function(t){this.$store.commit("dragTodo",t)}}}},a=i,d=e("2877"),c=Object(d["a"])(a,n,s,!1,null,null,null);o["default"]=c.exports}}]);
//# sourceMappingURL=list.a07899b5.js.map