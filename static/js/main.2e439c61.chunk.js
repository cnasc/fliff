(this.webpackJsonpfliff=this.webpackJsonpfliff||[]).push([[0],{35:function(e,t,n){e.exports=n.p+"static/media/fliff-logomark.68ab0e72.svg"},46:function(e,t,n){e.exports=n(68)},51:function(e,t,n){},53:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),l=n.n(c),s=(n(51),n(10)),o=n.n(s),i=n(13),u=n(32),d=n(33),m=n(44),b=n(34),p=n(45),f=(n(28),n(14)),v=n(15),E=(n(53),n(35)),h=n.n(E),y=function(){return r.a.createElement("header",null,r.a.createElement("h3",{className:"header-subtitle"},"Show me the"),r.a.createElement("h1",{className:"header-title"},r.a.createElement("span",null,"FLi"),r.a.createElement("span",null,"FF")),r.a.createElement(f.b,{to:"/list"},r.a.createElement("img",{src:h.a,alt:"Fliff Logomark"})))};function w(){return r.a.createElement("div",null,r.a.createElement(y,null))}var g=n(38),x=n(43),_=n(22),k=n(16);n(61);function j(e){var t=e.address,n=Object(a.useState)(null),c=Object(k.a)(n,2),l=c[0],s=c[1];return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.length){e.next=11;break}return e.prev=1,e.next=4,window.provider.lookupAddress(t);case 4:(n=e.sent)&&s(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",null,l||t)}function O(){return window.provider}var N=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O().listAccounts();case 2:(t=e.sent).length&&c(t[0]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-container"},r.a.createElement("div",{className:"nav-logo"},r.a.createElement(f.b,{to:"/"},r.a.createElement("span",null,"FLi"),r.a.createElement("span",null,"FF"))),r.a.createElement("div",{className:"address"},r.a.createElement(j,{address:n}))))};n(62);function F(){return r.a.createElement("div",{className:"newdebt"},r.a.createElement(f.b,{className:"newlink",to:"/add"},"+"),r.a.createElement(D,null))}function D(){return r.a.createElement("div",{className:"balancetable"},r.a.createElement("div",{className:"balancetablecell"},r.a.createElement("div",null,"Balance"),r.a.createElement("div",null,"1486.64")),r.a.createElement("div",{className:"balancetablecell"},r.a.createElement("div",null,"Credits"),r.a.createElement("div",{className:"credit"},"1500.01")),r.a.createElement("div",{className:"balancetablecell"},r.a.createElement("div",null,"Debits"),r.a.createElement("div",{className:"debit"},"13.37")))}n(63);function B(){var e=Object(g.a)(['\n  {\n    debtor: debts(where: { _debtor: "','"}) {\n      id\n      amount\n      _debtor\n      _debtee\n    }\n    debtee: debts(where: { _debtee: "','"}) {\n      id\n      amount\n      _debtor\n      _debtee\n    }\n    settler: settlements(where: { _debtor: "','" }) {\n      id\n      amount\n      _debtor\n      _debtee\n    }\n    settlee: settlements(where: { _debtee: "','" }) {\n      id\n      amount\n      _debtor\n      _debtee\n    }\n  }\n']);return B=function(){return e},e}var C=function(e){return Object(_.b)(B(),e,e,e,e)};function S(e){var t=e.address,n=Object(x.a)(C(t)),a=n.loading,c=n.error,l=n.data;if(a)return r.a.createElement("div",{className:"content"},r.a.createElement(N,null),r.a.createElement("h1",null,"Loading..."));if(c)return r.a.createElement("div",{className:"content"},r.a.createElement(N,null),r.a.createElement("h1",null,"It borked."));var s=function(e){var t={};e.debtor.forEach((function(e){var n=parseInt(e.amount);t[e._debtee]?t[e._debtee]+=n:t[e._debtee]=n})),e.settler.forEach((function(e){var n=parseInt(e.amount);t[e._debtee]-=n}));var n={};return e.debtee.forEach((function(e){var t=parseInt(e.amount);n[e._debtor]?n[e._debtor]+=t:n[e._debtor]=t})),e.settlee.forEach((function(e){var t=parseInt(e.amount);n[e._debtor]+=t})),Object.keys(t).forEach((function(e){0===t[e]&&delete t[e]})),Object.keys(n).forEach((function(e){0===n[e]&&delete n[e]})),{credits:n,debts:t}}(l);return r.a.createElement("div",{className:"content"},r.a.createElement(N,null),r.a.createElement(M,{balances:s}),r.a.createElement(F,null))}function M(e){var t=e.balances;return console.log(t),r.a.createElement("div",{className:"balances"},Object.keys(t.debts).map((function(e){return r.a.createElement(I,{address:e,value:t.debts[e],kind:"debt",key:e})})))}function I(e){var t=e.address,n=e.value,a=e.kind;return r.a.createElement("div",{className:"balance"},r.a.createElement("div",null,r.a.createElement(j,{address:t})),r.a.createElement("div",null,"USDC"),r.a.createElement("div",{className:a},r.a.createElement("span",null,(n/10).toFixed(2))))}n(66);var W=[{constant:!0,inputs:[{name:"",type:"address"}],name:"globalBalance",outputs:[{name:"",type:"int256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"stableCoin",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_stableCoin",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"_debtor",type:"address"},{indexed:!0,name:"_debtee",type:"address"},{indexed:!1,name:"_amount",type:"int256"}],name:"DebtAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_debtor",type:"address"},{indexed:!0,name:"_debtee",type:"address"},{indexed:!1,name:"_amount",type:"int256"}],name:"DebtSettled",type:"event"},{constant:!1,inputs:[{name:"amount",type:"int256"},{name:"recipient",type:"address"}],name:"recordDebt",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"person",type:"address"}],name:"getGlobalBalance",outputs:[{name:"",type:"int256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"amount",type:"int256"},{name:"recipient",type:"address"}],name:"debtSettled",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],A=n(21);function L(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),s=Object(k.a)(l,2),u=s[0],d=s[1],m=n.length&&u.length&&u.match(/[0-9]*\.?[0-9]*/);function b(){return(b=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O(),"0x152e5f3bBafF841764071ca1Ef6ebB68cd9Ed71D",a=new A.ethers.Contract("0x152e5f3bBafF841764071ca1Ef6ebB68cd9Ed71D",W,t.getSigner()),e.next=5,a.recordDebt(10*parseInt(u),n);case 5:console.log("We have submitted!");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"content"},r.a.createElement(N,null),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Who?"),r.a.createElement("input",{type:"text",placeholder:"Wallet or ENS address",required:!0,onChange:function(e){e.preventDefault(),c(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"How Much?"),r.a.createElement("input",{type:"text",placeholder:"Amount in USDC",required:!0,pattern:"[0-9]*\\.?[0-9]*",onChange:function(e){e.preventDefault(),d(e.target.value)}})),r.a.createElement("button",{className:"fliff-it ".concat(m?"valid":"invalid"),onClick:function(){return b.apply(this,arguments)}},"Fliff It!"))}var P=n(7),J=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).client=new _.a({uri:"https://api.thegraph.com/subgraphs/id/QmWVv3Y19zTB6JVLQFzcD7BzACMdJVgAyucFUumxFCBVEL"}),n.state={gotProvider:!1,address:null},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window).ethereum){e.next=18;break}return console.log("using modern dapp browser"),t.web3=new t.Web3(t.ethereum),e.prev=4,e.next=7,t.ethereum.enable();case 7:return console.log("enabled"),t.provider=new A.ethers.providers.Web3Provider(t.web3.currentProvider),e.next=11,O().listAccounts();case 11:(n=e.sent).length&&(a=n[0],this.setState({gotProvider:!0,address:a})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0);case 18:case"end":return e.stop()}}),e,this,[[4,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.gotProvider,n=e.address;return t&&n?r.a.createElement(P.a,{client:this.client},r.a.createElement(f.a,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/"},r.a.createElement(w,null)),r.a.createElement(v.a,{exact:!0,path:"/list"},r.a.createElement(S,{address:n})),r.a.createElement(v.a,{exact:!0,path:"/add"},r.a.createElement(L,null))))):r.a.createElement("header",null,"trying to get provider...")}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.2e439c61.chunk.js.map