!function(t){function i(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}var r={};i.m=t,i.c=r,i.d=function(t,r,e){i.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},i.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(r,"a",r),r},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=0)}([function(t,i,r){"use strict";r(1)},function(t,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Game=void 0;var e=r(2),s=r(3),n=function(){this.board=document.querySelectorAll("#board div"),this.section=document.querySelector("#board"),this.over=document.querySelector("#over"),this.tablePoints=document.querySelector("#score"),this.furry=new e.Furry,this.coin=new s.Coin,this.score=0;var t=this;this.index=function(t,i){return t+10*i},this.showFurry=function(){this.hideVisibleFurry(),this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},this.showCoin=function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")},this.hideVisibleFurry=function(){var t=document.querySelector(".furry");null!=t&&t.classList.remove("furry")},this.moveFurry=function(){"right"===this.furry.direction?this.furry.x=this.furry.x+1:"left"===this.furry.direction?this.furry.x=this.furry.x-1:"top"===this.furry.direction?this.furry.y=this.furry.y+1:"down"===this.furry.direction&&(this.furry.y=this.furry.y-1),this.gameOver(),this.checkCoinCollision(),this.showFurry()},this.startGame=function(){this.idSetInterval=setInterval(function(){t.moveFurry()},250)},this.turnFurry=function(t){switch(t.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="down";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="top"}},this.checkCoinCollision=function(){if(this.furry.x===this.coin.x&&this.furry.y===this.coin.y){this.score++;document.querySelector(".coin").classList.remove("coin"),t.coin=new s.Coin,t.showCoin();var i=document.querySelectorAll(".points");i[0].innerText=this.score,i[1].innerText=this.score}},this.gameOver=function(){(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9)&&(clearInterval(this.idSetInterval),this.hideVisibleFurry(),this.tablePoints.classList.add("invisible"),this.section.classList.add("invisible"),this.over.classList.remove("invisible"))}},o=new n;o.showFurry(),o.showCoin(),o.startGame(),document.addEventListener("keydown",function(t){o.turnFurry(t)}),i.Game=n},function(t,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=function(){this.x=0,this.y=0,this.direction="right"};i.Furry=e},function(t,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=function(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())};i.Coin=e}]);