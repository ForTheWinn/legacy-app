(window.webpackJsonp=window.webpackJsonp||[]).push([[8,28,57],{194:function(e,t,a){"use strict";var l=a(13),n=a(14),r=a(24),c=a(23),m=a(25),s=a(0),i=a.n(s),u=a(201),d=a.n(u),E=a(16);t.a=function(e,t){return function(a){function s(){var e,t;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),m=0;m<a;m++)n[m]=arguments[m];return(t=Object(r.a)(this,(e=Object(c.a)(s)).call.apply(e,[this].concat(n)))).state={data:void 0},t.onOpen=function(e){t.setState({data:e})},t.onClose=function(){t.setState({data:void 0})},t}return Object(m.a)(s,a),Object(n.a)(s,[{key:"render",value:function(){var a=this.state.data;return i.a.createElement("div",{className:"is-relative"},i.a.createElement("div",{className:d()(a?"is-hidden":"")},i.a.createElement(e,Object.assign({},this.props,{onClick:this.onOpen}))),a?i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("button",{onClick:this.onClose,type:"button",className:"button is-small is-light"},i.a.createElement(E.b,null)," Back to list"),i.a.createElement("div",{style:{padding:"15px"}},i.a.createElement(t,Object.assign({},this.props,{data:a}))))):null)}}]),s}(i.a.PureComponent)}},58:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(216),c=a(194),m=a(98),s=a(95),i=a(70),u=Object(c.a)(m.default,s.default);t.default=Object(i.a)(function(e){var t=e.nlp2API;return console.log("Display: Results"),n.a.createElement("div",{className:"box"},n.a.createElement(r.a,{pageSize:30,load:t.getResults},n.a.createElement(u,null)))})},95:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(188),c=a.n(r);t.default=function(e){var t=e.data,a=t.gameNo,l=t.winningNumbers,r=t.caster,m=t.totalTickets,s=t.totalVerifiedTickets,i=t.ftxWinners,u=t.cneoWinners,d=t.cgasWinners,E=t.createdAt;return n.a.createElement("div",{className:"content"},n.a.createElement("h6",null,"Game no"),n.a.createElement("p",null,a),n.a.createElement("h6",null,"Winning numbers"),n.a.createElement("p",null,l.join(",")),n.a.createElement("h6",null,"Drawing caster"),n.a.createElement("p",null,r),n.a.createElement("h6",null,"Verification status"),n.a.createElement("p",null,"".concat(Math.round(s/m*100),"% (").concat(s,"/").concat(m,")")),n.a.createElement("h6",null,"Drawing at"),n.a.createElement("p",null,c.a.unix(E).format("YYYY-MM-DD hh:mm:ss A")),s===m?n.a.createElement("div",null,n.a.createElement("h6",null,"Winners"),n.a.createElement("table",{className:"table is-bordered is-striped has-mobile-cards"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Matched"),n.a.createElement("th",null,"FTX tickets"),n.a.createElement("th",null,"CNEO tickets"),n.a.createElement("th",null,"CGAS tickets"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{"data-label":"Matched"},"5 numbers"),n.a.createElement("td",{"data-label":"FTX"},i[3]),n.a.createElement("td",{"data-label":"CNEO"},u[3]),n.a.createElement("td",{"data-label":"CGAS"},d[3])),n.a.createElement("tr",null,n.a.createElement("td",{"data-label":"Matched"},"4 numbers"),n.a.createElement("td",{"data-label":"FTX"},i[2]),n.a.createElement("td",{"data-label":"CNEO"},u[2]),n.a.createElement("td",{"data-label":"CGAS"},d[2])),n.a.createElement("tr",null,n.a.createElement("td",{"data-label":"Matched"},"3 numbers"),n.a.createElement("td",{"data-label":"FTX"},i[1]),n.a.createElement("td",{"data-label":"CNEO"},u[1]),n.a.createElement("td",{"data-label":"CGAS"},d[1])),n.a.createElement("tr",null,n.a.createElement("td",{"data-label":"Matched"},"2 numbers"),n.a.createElement("td",{"data-label":"FTX"},i[0]),n.a.createElement("td",{"data-label":"CNEO"},u[0]),n.a.createElement("td",{"data-label":"CGAS"},d[0]))))):null)}},98:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(188),c=a.n(r);a(95);t.default=function(e){var t=e.items,a=e.onClick;return n.a.createElement("table",{className:"table is-fullwidth has-mobile-cards is-hoverable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Draw #"),n.a.createElement("th",null,"Winning numbers"),n.a.createElement("th",null,"Played at"))),n.a.createElement("tbody",null,t&&t.length>0?t.map(function(e){var t=e.winningNumbers,l=e.gameNo,r=e.createdAt;return n.a.createElement("tr",{onClick:function(){return a(e)},key:l},n.a.createElement("td",{"data-label":"Game #"},l),n.a.createElement("td",{"data-label":"Winning numbers"},t.join(",")),n.a.createElement("td",null,c.a.unix(r).format("YYYY-MM-DD hh:mm:ss A")))}):n.a.createElement("tr",null,n.a.createElement("td",{colSpan:3},"No draws"))))}}}]);
//# sourceMappingURL=8.45c88a73.chunk.js.map