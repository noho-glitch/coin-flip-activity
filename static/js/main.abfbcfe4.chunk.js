(this["webpackJsonpcoin-flip"]=this["webpackJsonpcoin-flip"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(8),o=n.n(s),r=(n(14),n(1)),c=n(2),l=n(5),u=n(4),h=n(3),d=n(6);var p=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Coin"},a.a.createElement("img",{src:this.props.info.imgSrc,alt:this.props.info.side}))}}]),t}(i.Component),m=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={currCoin:null,nFlips:0,nHeads:0,nTails:0},n.handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"flipCoin",value:function(){var e,t=(e=this.props.coins)[Math.floor(Math.random()*e.length)];this.setState((function(e){return{currCoin:t,nFlips:e.nFlips+1,nHeads:e.nHeads+("heads"===t.side?1:0),nTails:e.nTails+("tails"===t.side?1:0)}}))}},{key:"handleClick",value:function(e){this.flipCoin()}},{key:"render",value:function(){return a.a.createElement("div",{className:"CoinContainer"},a.a.createElement("h2",null,"Let's Flip A Coin!"),a.a.createElement("button",{onClick:this.handleClick},"Flip the coin!"),this.state.currCoin&&a.a.createElement(p,{info:this.state.currCoin}),a.a.createElement("p",null,"Out of ",this.state.nFlips," flips, there have been ",this.state.nHeads," ","heads and ",this.state.nTails," tails."))}}]),t}(i.Component);m.defaultProps={coins:[{side:"heads",imgSrc:"https://www.usmint.gov/wordpress/wp-content/uploads/2020/01/2020-roosevelt-dime-uncirculated-obverse-denver-300x300.jpg"},{side:"tails",imgSrc:"https://www.usmint.gov/wordpress/wp-content/uploads/2020/01/2020-roosevelt-dime-uncirculated-reverse-300x300.jpg"}]};var f=m;n(15);var v=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.abfbcfe4.chunk.js.map