(this.webpackJsonppuppies=this.webpackJsonppuppies||[]).push([[0],{14:function(t,e,n){},8:function(t,e,n){"use strict";n.r(e);var r=n(3),i=n(4),s=n(6),a=n(5),c=n(0),o=n(1),u=n.n(o),p=n(7),h=n.n(p),j=(n(14),function(t){Object(s.a)(n,t);var e=Object(a.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={images:[]},i}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.breed,e=this.state.images.map((function(e,n){var r="".concat(t,"-cute-").concat(n);return Object(c.jsx)("img",{src:e,height:"300",alt:r})}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:t}),Object(c.jsx)("br",{}),e]},t)}},{key:"componentDidMount",value:function(){var t=this;if(null!==this.state.breed){var e="https://dog.ceo/api/breed/".concat(this.props.breed,"/images/random/2");fetch(e).then((function(t){return t.json()})).then((function(e){var n=Object.entries(e.message).map((function(t){return t[1]}));t.setState({images:n})}))}}}]),n}(u.a.Component));function b(t){var e=t.puppies.map((function(t){return Object(c.jsx)(j,{breed:t},t)}));return Object(c.jsx)("div",{children:e})}var l=function(t){Object(s.a)(n,t);var e=Object(a.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={items:[]},i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.apiUrl;fetch(e).then((function(t){return t.json()})).then((function(e){for(var n=Object.entries(e.message),r=0;r<n.length;r++){var i=Math.floor(Math.random()*(n.length-r-1)),s=n[i];n[i]=n[r],n[r]=s}var a=n.slice(1,10).map((function(t){return t[0]}));t.setState({items:a})}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Puppies!"}),Object(c.jsx)(b,{puppies:this.state.items},"PuppyMontage")]},"RESTfulList")}}]),n}(u.a.Component);h.a.render(Object(c.jsx)(l,{apiUrl:"https://dog.ceo/api/breeds/list/all"},"list"),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.0678026d.chunk.js.map