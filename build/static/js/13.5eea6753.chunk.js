(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{186:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",function(){return r})},45:function(e,t,a){"use strict";a.r(t);var r=a(186),n=a(0),c=a.n(n),s=a(72),i=a(20),l=a(41),o=a(188),u=a.n(o);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}t.default=function(e){var t=e.nlp2API.status,a=Object(n.useContext)(i.a),o=a.state,p=a.dispatch,d=function(){if(o.wallet){var e=l.a.getInvokeScript.draw([o.wallet.address]);p.openInvoker(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach(function(t){Object(r.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e))}else p.openInvoker()};return c.a.createElement("div",{className:"card",style:{height:"100%"}},c.a.createElement("div",{className:"card-image is-centered is-flex",style:{justifyContent:"center",padding:10}},c.a.createElement("figure",{className:"image is-128x128"},c.a.createElement("img",{alt:"draw",src:"/assets/draw.svg"}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",{className:"title is-5"},"Draw lottery"),c.a.createElement("p",{className:"subtitle is-6"},"Next drawing will be available at"," ",u()(t.nextDrawingAt).format("MM-DD hh:mm:ss")),c.a.createElement("div",{className:"content is-small"},c.a.createElement("ul",null,c.a.createElement("li",null,"Earn 5% of total ticket sales of the current game"),c.a.createElement("li",null,"You need to participate the current game to be qualified"),c.a.createElement("li",null,"First come first serve basis"))),c.a.createElement(s.a,{date:t.nextDrawingAt,renderer:function(e){return e.hours,e.minutes,e.seconds,e.completed?c.a.createElement("button",{onClick:d,className:"button is-primary"},"Draw"):c.a.createElement("button",{disabled:!0,className:"button is-primary"},"Draw")}})))}}}]);
//# sourceMappingURL=13.5eea6753.chunk.js.map