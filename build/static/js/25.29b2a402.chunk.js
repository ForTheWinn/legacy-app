(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{51:function(e,t,n){"use strict";n.r(t);var a=n(13),c=n(14),r=n(24),l=n(23),s=n(25),i=n(0),o=n.n(i),u=n(8),m=n(31),d=n(16),h=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(r.a)(this,Object(l.a)(t).apply(this,arguments))).state={account:void 0,isLoading:!0,errorMsg:""},e.onStart=function(t){e.props.onConnected(t)},e}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.plugin;m.a.providers[t].getAccount().then(function(t){e.setState({account:t,isLoading:!1})}).catch(function(t){e.setState({errorMsg:t.message,isLoading:!1})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.account,a=t.isLoading,c=t.errorMsg;return o.a.createElement("div",null,!n&&o.a.createElement("div",null,o.a.createElement("button",{className:"button is-light is-small",onClick:function(){return e.props.history.goBack()}},o.a.createElement(d.b,null),"Back to menu"),o.a.createElement("hr",null)),o.a.createElement("div",{className:"has-text-centered is-flex",style:{justifyContent:"center",alignItems:"center"}},a?o.a.createElement("div",null,"Connecting.."):c?o.a.createElement("div",null,o.a.createElement(d.d,{className:"has-text-danger is-size-1"}),o.a.createElement("br",null),c):o.a.createElement("div",null,o.a.createElement(d.h,{className:"has-text-info is-size-1"}),o.a.createElement("br",null),"Great, we've connected!",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){n&&e.onStart(n)},className:"button is-small is-link"},"Start"))))}}]),t}(i.Component);t.default=Object(u.f)(h)}}]);
//# sourceMappingURL=25.29b2a402.chunk.js.map