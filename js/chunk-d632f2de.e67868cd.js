(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d632f2de"],{"2b56":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lend"},[r("h1",[t._v("Emprestar um item")]),r("p",[t._v("Selecione qual item está sendo emprestado e para quem.")]),r("custom-alert"),r("b-form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[r("b-form-group",{attrs:{id:"itemInputGroup",label:"Item:","label-for":"itemInput"}},[r("b-form-select",{attrs:{id:"itemInput",options:t.items,required:""},model:{value:t.form.item_id,callback:function(e){t.$set(t.form,"item_id",e)},expression:"form.item_id"}})],1),r("b-form-group",{attrs:{id:"thirdpartyInputGroup",label:"Tomador:","label-for":"thirdpartyInput"}},[r("b-form-select",{attrs:{id:"thirdpartyInput",options:t.thirdparties,required:""},model:{value:t.form.thirdparty_id,callback:function(e){t.$set(t.form,"thirdparty_id",e)},expression:"form.thirdparty_id"}})],1),r("b-button",{attrs:{type:"submit",variant:"success"}},[t._v("Confirmar")])],1)],1)},i=[],a=(r("55dd"),r("7f7f"),r("5d73")),o=r.n(a),s=r("7c15"),u=r("c1df"),c=r.n(u),d={name:"Lend",data:function(){return{api:new s["a"]("/lendings"),thirdparties:[],items:[],categories:{},form:{item_id:null,user_id:this.$store.getters.userId,thirdparty_id:null,date_start:null,date_end:null}}},mounted:function(){this.getThirdparties()},methods:{getThirdparties:function(){var t=this,e=new s["a"]("/thirdparties");e.get().then(function(e){var r=!0,n=!1,i=void 0;try{for(var a,s=o()(e.data);!(r=(a=s.next()).done);r=!0){var u=a.value;t.thirdparties.push({value:u.id,text:"".concat(u.first_name," ").concat(u.last_name," - ").concat(u.email)})}}catch(c){n=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}t.getCategories()})},getCategories:function(){var t=this,e=new s["a"]("/categories");e.get().then(function(e){var r=!0,n=!1,i=void 0;try{for(var a,s=o()(e.data);!(r=(a=s.next()).done);r=!0){var u=a.value;t.categories[u.id]=u.name}}catch(c){n=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}t.getItems()})},getItems:function(){var t=this,e=new s["a"]("/items");e.get().then(function(e){console.log(e.data);var r=!0,n=!1,i=void 0;try{for(var a,s=o()(e.data);!(r=(a=s.next()).done);r=!0){var u=a.value;console.log(u.id);var c="".concat(t.categories[u.category_id]," - ").concat(u.name);null!=u.registry&&(c+=" (".concat(u.registry,")")),t.items.push({value:u.id,text:c})}}catch(d){n=!0,i=d}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}t.items=t.items.sort(function(t,e){return t.text>e.text?1:-1})})},handleSubmit:function(){var t=this,e=c()();this.form.date_start=e.format("YYYY-MM-DDTHH:mm"),this.form.date_end=e.add(7,"days").format("YYYY-MM-DDTHH:mm"),this.api.create(this.form).then(function(e){t.lendItem()}).catch(function(e){400===e.response.status&&t.$store.commit("setError",e.response.data.message)})},lendItem:function(){var t=this,e=new s["a"]("/items");e.getOne(this.form.item_id).then(function(r){var n=r.data;n.available=!1,delete n.id,e.update(t.form.item_id,n).then(function(e){t.$router.push({name:"home"})}).catch(function(e){400===e.response.status&&t.$store.commit("setError",e.response.data.message)})})}}},l=d,f=(r("6c97"),r("2877")),m=Object(f["a"])(l,n,i,!1,null,null,null);e["default"]=m.exports},"2f21":function(t,e,r){"use strict";var n=r("79e5");t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},"469f":function(t,e,r){r("6c1c"),r("1654"),t.exports=r("7d7b")},"55dd":function(t,e,r){"use strict";var n=r("5ca1"),i=r("d8e8"),a=r("4bf8"),o=r("79e5"),s=[].sort,u=[1,2,3];n(n.P+n.F*(o(function(){u.sort(void 0)})||!o(function(){u.sort(null)})||!r("2f21")(s)),"Array",{sort:function(t){return void 0===t?s.call(a(this)):s.call(a(this),i(t))}})},"5d73":function(t,e,r){t.exports=r("469f")},"6c97":function(t,e,r){"use strict";var n=r("bcdd"),i=r.n(n);i.a},"7d7b":function(t,e,r){var n=r("e4ae"),i=r("7cd6");t.exports=r("584a").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},"7f7f":function(t,e,r){var n=r("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in i||r("9e1e")&&n(i,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},bcdd:function(t,e,r){}}]);
//# sourceMappingURL=chunk-d632f2de.e67868cd.js.map