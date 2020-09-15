(this["webpackJsonpqlicky-admin"]=this["webpackJsonpqlicky-admin"]||[]).push([[0],{72:function(e,t,a){e.exports=a(90)},77:function(e,t,a){},78:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);for(var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(77),a(78),a(28)),l=a(14),s=a(20),m=a(17),u=a(16),p=a(120),d=a(129),h=a(127),g=a(42),v=a(126),w=a(131),E=a(128),f=a(132),y=a(59),b=[{value:"DRY",label:"Set Relay Mapping"},{value:"DIR",label:"Set Directory Mapping"}],C=[{value:"ON",label:"On"},{value:"OFF",label:"Off"}],k=[{value:"RESET",label:"Reset"}],O=[{value:"ON",label:"On"},{value:"OFF",label:"Off"}],R=[],j=1;j<=32;j++)R.push({value:j,label:j});var P=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50;return t&&(e=e.replace(/[^a-z0-9]/gi,"")),e.length>a&&(e=e.slice(0,a)),e},S=a(81),T=a(82),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).generateCommand=function(e){if(!n.state.password||n.state.password.length<8)return alert("Password must be at least 8 characters long"),null;var t={N:1,T:n.props.commandType,V:e};t=JSON.stringify(t),console.log(t);var a=n.state.password+n.state.password,r=btoa(S(t,a,!0));return t="{P}|{".concat(r,"}|").concat(t),console.log(t),t},n.onChange=function(e){var t,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,o=e.target.value;a&&(o=P(o,!0,r)),n.setState((t={},Object(i.a)(t,e.target.name,o),Object(i.a)(t,"code",""),t))},n.displayQRCode=function(e){if(n.state.code&&n.state.code.length>1)return r.a.createElement("div",null,r.a.createElement(T,{includeMargin:!0,value:n.state.code,size:Math.min(.9*n.props.width,480)}))},n.state={code:"",showPassword:!1,password:""},n}return a}(r.a.Component),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).pushEmptyRows=function(e){for(var t=0;t<e;t++)n.mapping.push({value:"",key:""})},n.removeDuplicates=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={},a={},r={},o={};if(n.mapping.forEach((function(e,n){e.key&&(e.key in t?o[n]=!0:t[e.key]=!0),e.value&&(e.value in a?r[n]=!0:a[e.value]=!0)})),(Object.keys(r).length>0||Object.keys(o).length>0)&&alert("WARNING: Duplicate mappings found. Auto-removing."),e){var c=[];n.mapping.forEach((function(e,t){t in o||t in r||c.push(e)})),n.mapping=c,c.length<4&&n.pushEmptyRows(4-c.length),n.setState({mapping:c})}},n.createCode=function(){if(0===n.state.mapping.length)return alert("Empty Key-Value map. Cannot generate QR Code"),null;n.removeDuplicates(!0);var e="";if(n.state.mapping.forEach((function(t,a){""!==t.key&&""!==t.value&&(e="".concat(e,'"').concat(t.key,'":"').concat(t.value,'",'))})),e.length>0){e="{".concat(e.slice(0,-1),"}"),console.log("Mappings: ".concat(JSON.stringify(e)));var t=n.generateCommand(e);t&&n.setState({code:t})}else alert("Empty mapping set")},n.editRow=function(e,t){t?n.state.mapping.length>=16?alert("A maximimum of ".concat(16," allowed per QR Code")):(n.pushEmptyRows(1),n.setState({mapping:n.mapping})):n.state.mapping.length>4&&(n.mapping.pop(),n.setState({mapping:n.mapping}))},n.updateMap=function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=e.target.value;o&&(c=P(c,!0,r)),n.mapping[a][t]=c,n.setState({mapping:n.mapping,code:""})},n.makeOptionRow=function(e,t){if(e)return r.a.createElement(p.a,{container:!0,spacing:5,direction:"row",justify:"center",alignItems:"center",key:"".concat(t)},r.a.createElement(p.a,{item:!0},r.a.createElement(d.a,{name:"".concat(t),value:n.state.mapping[t].key,label:"Floor No",onChange:function(e){return n.updateMap(e,"key",t,20,!0)}})),r.a.createElement(p.a,{item:!0},r.a.createElement(v.a,{style:{minWidth:120}},r.a.createElement(w.a,null,"Pin No"),r.a.createElement(E.a,{name:"".concat(t),value:n.state.mapping[t].value,onChange:function(e){return n.updateMap(e,"value",t)}},n.props.options.map((function(e,t){return r.a.createElement(f.a,{value:e.value,key:"".concat(t)},e.label)}))))))},n.makeFreeTextRow=function(e,t){if(e)return r.a.createElement(p.a,{container:!0,spacing:5,direction:"row",justify:"center",alignItems:"center",key:"".concat(t)},r.a.createElement(p.a,{item:!0},r.a.createElement(d.a,{name:"key-".concat(t),value:n.state.mapping[t].key,label:"Keyword",onChange:function(e){return n.updateMap(e,"key",t,50)}})),r.a.createElement(p.a,{item:!0},r.a.createElement(d.a,{name:"value-".concat(t),value:n.state.mapping[t].value,label:"Floor No",onChange:function(e){return n.updateMap(e,"value",t,20)}})))},n.mapping=[],n.state={mapping:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.mapping=[],this.pushEmptyRows(4),this.setState({mapping:this.mapping})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p.a,{container:!0,spacing:3,direction:"column"},r.a.createElement(p.a,{item:!0},r.a.createElement(d.a,{name:"password",value:this.state.password||"",label:"Password",onChange:this.onChange})),r.a.createElement(p.a,{item:!0},this.state.mapping.map((function(t,a){return e.props.freeRow?e.makeFreeTextRow(t,a):e.makeOptionRow(t,a)}))),r.a.createElement(p.a,{container:!0,spacing:3,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(p.a,{item:!0},r.a.createElement(h.a,{variant:"contained",onClick:function(t){return e.editRow(t,!0)}}," Add ")),r.a.createElement(p.a,{item:!0},r.a.createElement(h.a,{variant:"contained",onClick:function(t){return e.editRow(t,!1)}}," Remove "))),r.a.createElement(p.a,{item:!0},r.a.createElement(h.a,{variant:"contained",onClick:this.createCode}," Generate Code ")),r.a.createElement(p.a,{item:!0},this.displayQRCode())))}}]),a}(N),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).createCode=function(){if(0===n.state.selectedOption.length)return alert("Empty Key-Value map. Cannot generate QR Code"),null;if(n.state.selectedOption){var e=n.generateCommand(n.state.selectedOption);n.setState({code:e})}},n.state={selectedOption:""},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{container:!0,spacing:2,direction:"column"},r.a.createElement(p.a,{item:!0},r.a.createElement(d.a,{name:"password",value:this.state.password||"",label:"Password",onChange:this.onChange})),r.a.createElement(p.a,{item:!0},r.a.createElement(v.a,{style:{minWidth:120}},r.a.createElement(w.a,null,"Select"),r.a.createElement(E.a,{name:"selectedOption",value:this.state.selectedOption,onChange:this.onChange},this.props.options.map((function(e,t){return r.a.createElement(f.a,{value:e.value,key:"".concat(t)},e.label)}))))),r.a.createElement(p.a,{item:!0},r.a.createElement(h.a,{variant:"contained",onClick:this.createCode},"Generate Code")),r.a.createElement(p.a,null,this.displayQRCode())))}}]),a}(N),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).createCode=function(){if(""===n.state.newPassword||""===n.state.confirmPassword)return alert("New password fields cannot be empty"),null;if(n.state.newPassword!==n.state.confirmPassword)return alert("Passwords do not match"),null;if(n.state.newPassword.length>=8){var e=n.generateCommand(n.state.newPassword);n.setState({code:e})}else alert("Password needs to be minimum of 8 characters")},n.state={newPassword:"",confirmPassword:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p.a,{container:!0,spacing:3,direction:"column"},r.a.createElement(p.a,{item:!0},r.a.createElement(d.a,{name:"password",value:this.state.password||"",label:"Old Password",onChange:function(t){return e.onChange(t,!0,50)}})),r.a.createElement(p.a,{item:!0},r.a.createElement(d.a,{name:"newPassword",value:this.state.newPassword||"",label:"New Password",onChange:function(t){return e.onChange(t,!0,50)}})),r.a.createElement(p.a,{item:!0},r.a.createElement(d.a,{name:"confirmPassword",value:this.state.confirmPassword||"",label:"Confirm Password",onChange:function(t){return e.onChange(t,!0,50)}})),r.a.createElement(p.a,{item:!0},r.a.createElement(h.a,{variant:"contained",onClick:this.createCode},"Generate Code")),r.a.createElement(p.a,null,this.displayQRCode())))}}]),a}(N),A="icons/qlicky.png",z="Qlicky Admin",F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChange=function(e){console.log(e.target.value),n.setState(Object(i.a)({},e.target.name,e.target.value))},n.renderCommand=function(){switch(n.state.commandType){case"PASS":return r.a.createElement(M,{commandType:n.state.commandType,width:n.state.width,key:"PASS"});case"DRY":return r.a.createElement(D,{commandType:n.state.commandType,options:R,width:n.state.width,key:"DRY"});case"DIR":return r.a.createElement(D,{commandType:n.state.commandType,freeRow:!0,options:R,width:n.state.width,key:"DIR"});case"WIFI":return r.a.createElement(I,{commandType:n.state.commandType,options:C,width:n.state.width,key:"WIFI"});case"BLE":return r.a.createElement(I,{commandType:n.state.commandType,options:O,width:n.state.width,key:"BLE"});case"SYS":return r.a.createElement(I,{commandType:n.state.commandType,options:k,width:n.state.width,key:"SYS"});default:return null}},n.resize=n.resize.bind(Object(g.a)(n)),n.state={commandType:"DRY"},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize),this.resize()}},{key:"resize",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return isNaN(this.state.width)||isNaN(this.state.height)?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement("title",null,z),r.a.createElement("meta",{name:z,content:z}),r.a.createElement("link",{rel:"icon",type:"image/png",href:A,sizes:"16x16"}),r.a.createElement("link",{rel:"apple-touch-icon",type:"image/png",href:A,sizes:"16x16"})),r.a.createElement(p.a,{container:!0,spacing:3,direction:"column"},r.a.createElement(p.a,{item:!0}," ",r.a.createElement("h2",null," Qlicky Reprogram Tool ")," "),r.a.createElement(p.a,{item:!0},r.a.createElement(v.a,{style:{minWidth:120}},r.a.createElement(w.a,null,"Command"),r.a.createElement(E.a,{name:"commandType",value:this.state.commandType,onChange:this.onChange},b.map((function(e,t){return r.a.createElement(f.a,{value:e.value,key:"".concat(t)},e.label)}))))),r.a.createElement(p.a,{item:!0},this.renderCommand())))}}]),a}(r.a.Component),Q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).verifyPassword=function(e){n.state.password&&"touchless"===n.state.password?n.setState({passwordAccepted:!0}):alert("Incorrect Password!")},n.createReprogramTool=function(e){return r.a.createElement("div",null,r.a.createElement(F,null))},n.createPasswordScreen=function(e){return r.a.createElement("div",null,r.a.createElement(p.a,{container:!0,spacing:3,direction:"column"},r.a.createElement(p.a,{item:!0}," ",r.a.createElement("h2",null," Qlicky Reprogram Tool ")," "),r.a.createElement(p.a,{item:!0}," Please enter password to continue "),r.a.createElement(p.a,{item:!0},r.a.createElement(d.a,{type:"text",name:"password",value:n.state.password,label:"Password",onChange:function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))}})),r.a.createElement(p.a,{item:!0},r.a.createElement(h.a,{variant:"contained",onClick:n.verifyPassword},"Open Tool"))))},n.state={password:"",passwordAccepted:!1},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.passwordAccepted?this.createReprogramTool():this.createPasswordScreen())}}]),a}(r.a.Component),W=a(9);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W.c,null,r.a.createElement(W.a,{exact:!0,path:"/",component:Q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(49),B=r.a.createElement(Y.a,{basename:"/admin"},r.a.createElement(x,null));c.a.render(B,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.ef1a5222.chunk.js.map