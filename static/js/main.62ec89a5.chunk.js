(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{10:function(e,t,i){},11:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i(1),s=i.n(c),a=i(3),r=i.n(a),o=i(4),l=(i(10),i.p+"static/media/counter.a43549b6.gif"),d=i.p+"static/media/vga.e9b42c46.gif",u=i.p+"static/media/filler.d77bc6c0.png",b=[{title:"2 Digit Counter",image:l,description:"A simple two digit counter implemented in Verilog."},{title:"VGA",image:d,description:"VGA signal generation of a square that bounces off the bounds."},{title:"Project 3",image:u,description:"Description 3"},{title:"Project 4",image:u,description:"Description 4"}];function g(e,t){return-1===t?e=0===e?b.length-1:e-1:1===t&&(e=(e+1)%b.length),e}function j(e,t){return g(e,"FORWARD"===t?1:-1)}function m(e,t){var i=s.a.createRef();return Object(n.jsxs)("div",{ref:i,className:"slide",focus:t,style:{"--offset":t},children:[Object(n.jsx)("div",{className:"slideBackground",style:{backgroundImage:"url('".concat(e.image,"')")}}),Object(n.jsx)("div",{className:"slideContent",style:{backgroundImage:"url('".concat(e.image,"')")}}),Object(n.jsxs)("div",{className:"slideContentInner",children:[Object(n.jsx)("h2",{className:"slideTitle",children:e.title}),Object(n.jsx)("p",{className:"slideDesc",children:e.description})]})]})}function f(){var e=s.a.useReducer(j,0),t=Object(o.a)(e,2),i=t[0],c=t[1];return Object(n.jsxs)("div",{className:"slides",children:[Object(n.jsx)("button",{onClick:function(){c("BACKWARD")}}),m(b[g(i,-1)],-1),m(b[i],0),m(b[g(i,1)],1),Object(n.jsx)("button",{onClick:function(){c("FORWARD")}})]})}r.a.render(Object(n.jsx)(f,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.62ec89a5.chunk.js.map