"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var Poker=function e(){_classCallCheck(this,e),this.pokerType=["a","b","c","d"],this.pokerNum=[0,1,2,3,4,5,6,7,8,9,10,11,12],this.pokerTotal=0,this.pokerList=[],this.pokerSendNum=0,this.pokerDifficult=1,this.moveLeft=0,this.moveTop=0,this.moveDom=null,this.pokerDoneGroupNum=0},renderView=function(){for(var n=e("#id-div-poker"),o="",t="",a=1;a<=10;a++)o+='\n            <div class="poker-place" style="left: '.concat(120*a-100,'px" data-poker-column="').concat(a-1,'"></div>\n        '),t+='\n            <div class="poker-column" style="left: '.concat(120*a-100,'px" data-poker-column="').concat(a-1,'"></div>\n        ');n.insertAdjacentHTML("beforeend",o+t)},chooseGameDifficulty=function(e){notice({title:"请选择游戏难度",textAlign:!0,btnOne:"简单(单色)",btnOneCallback:function(){e.pokerDifficult=1,e.pokerType=["c","c","c","c"],initGame(e)},btnTwo:"中等(双色)",btnTwoCallback:function(){e.pokerDifficult=2,e.pokerType=["c","d","c","d"],initGame(e)},btnFour:"困难(四色)",btnFourCallback:function(){e.pokerDifficult=3,e.pokerType=["a","b","c","d"],initGame(e)}})},initRandomPoker=function(e){for(var n=[],o=0;o<e.pokerType.length;o++)for(var t=0;t<e.pokerNum.length;t++){var a=e.pokerType[o]+"-"+e.pokerNum[t];n.push(a,a)}e.pokerTotal=n.length,e.pokerList=shuffle(n.slice(0))},renderPokerCard=function(n){for(var o=e(".poker-deck"),t="",a=0;a<n.pokerTotal;a++){var r=n.pokerTotal-1-a,i=n.pokerList[a];t+='\n        <div\n          class="poker-cell"\n          data-is-open="no" data-index="'.concat(r,'" data-card="').concat(i,'"\n          style="left: ').concat(2*a+"px",';"\n        >\n          <div class="img-container">\n            <img src="./img/').concat(i,'.png" alt="" data-name="face">\n            <img src="./img/f-1.png" alt="" data-name="back" />\n          </div>\n        </div>\n        ')}o.insertAdjacentHTML("beforeend",t)},sendPokerFirst=function(o){var t=0,a=null;setTimeout(function(){a=setInterval(function(){var e,n;t<54?(e=Math.floor(t/10),animateSendPoker(t,{top:30*e,left:120*(n=t%10),pokerRow:e,pokerColumn:n}),t+=1,o.pokerSendNum+=1):(clearInterval(a),setTimeout(function(){for(var e=44;e<54;e++)animateOpenPoker(e)},200))},5)},200)},animateSendPoker=function(n,o,t){var a=e('.poker-cell[data-index="'.concat(n,'"]')),r=o.top,n=o.left,i=o.pokerRow,c=o.pokerColumn;animate(a,{top:r,left:n},"linear",function(){a.dataset.pokerRow=i,a.dataset.pokerColumn=c;var n=a.outerHTML;e('.poker-column[data-poker-column="'.concat(c,'"]')).insertAdjacentHTML("beforeend",n),a.remove(),t&&t()})},animateOpenPoker=function(n){e('.poker-cell[data-index="'.concat(n,'"]')).dataset.isOpen="yes"},initGame=function(e){initRandomPoker(e),renderPokerCard(e),sendPokerFirst(e)};