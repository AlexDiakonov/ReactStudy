(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(14),a(1)),i=a(4),u=a(5),s=a(8),d=a(7);function m(e){var t=e.options,a=e.onLeaveFeedback;return l.a.createElement("div",null,t.map((function(e){return l.a.createElement("button",{key:e,onClick:function(){return a(e)},id:e},e.toUpperCase())})))}var v=a(6),b=a.n(v);function E(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,o=e.positivePercentage;return l.a.createElement("div",{className:b.a.statContainer},l.a.createElement("h2",null,"Statistics"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Good:",t)),l.a.createElement("li",null,l.a.createElement("span",null,"Neutral:",a)),l.a.createElement("li",null,l.a.createElement("span",null,"Bad:",n)),l.a.createElement("li",null,l.a.createElement("span",null,"Total:",r)),l.a.createElement("li",null,l.a.createElement("span",null,"Positive Feedback:",o?Math.round(o):"0","%"))))}function f(e){var t=e.children;return l.a.createElement("section",null,t)}function h(){return l.a.createElement("h2",null,"No feedback given")}var p=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){"good"===t&&e.setState(Object(c.a)({},t,e.state.good+1)),"neutral"===t&&e.setState(Object(c.a)({},t,e.state.neutral+1)),"bad"===t&&e.setState(Object(c.a)({},t,e.state.bad+1))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=Object.keys(this.state),t=this.state,a=t.good,n=t.neutral,r=t.bad,o=a+n+r,c=a/o*100;return l.a.createElement("div",{className:"feedBackContainer"},l.a.createElement("h2",null,"Please leave feedback"),l.a.createElement(f,null,l.a.createElement(m,{options:e,onLeaveFeedback:this.onLeaveFeedback}),0===o?l.a.createElement(h,null):l.a.createElement(E,{good:a,neutral:n,bad:r,total:o,positivePercentage:c})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports={statContainer:"Components_statContainer__PZluf"}},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.9fa4f967.chunk.js.map