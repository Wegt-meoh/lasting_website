"use strict";(self.webpackChunklasting_website=self.webpackChunklasting_website||[]).push([[843],{1843:function(t,e,i){i.r(e),i.d(e,{default:function(){return b}});var n=i(3430),a=i(2791),l=i(184);function r(t){var e=t.children,i=(0,a.useRef)(null);return(0,a.useEffect)((function(){var t=function(t){var e;"f"===t.key&&(null!==document.fullscreenElement?document.exitFullscreen().then((function(t){}),(function(t){})):null===(e=i.current)||void 0===e||e.requestFullscreen().then((function(t){}),(function(t){})))};return document.addEventListener("keyup",t),function(){document.removeEventListener("keyup",t)}})),(0,l.jsx)("div",{ref:i,children:e})}var s=i(7853),h=i(243);function o(t){return JSON.parse(JSON.stringify(t))}var c,f={up:[0,-1],left:[-1,0],down:[0,1],right:[1,0]};function u(t,e,i,n,a,l,r){var s=t.lineWidth,h=t.strokeStyle;t.lineWidth=l,t.strokeStyle=r,t.strokeRect(e+t.lineWidth/2,i+t.lineWidth/2,n-t.lineWidth,a-t.lineWidth),t.lineWidth=s,t.strokeStyle=h}function _(t,e){return[t[0]+e[0],t[1]+e[1]]}function d(t,e){var i=e.beginPoint,n=e.width,a=e.height,l=[i[0]+n,i[1]+a];return t[0]>=i[0]&&t[1]>=i[1]&&t[0]<=l[0]&&t[1]<=l[1]}!function(t){t[t.wall=0]="wall",t[t.road=1]="road",t[t.player=2]="player",t[t.goal=3]="goal",t[t.box=4]="box",t[t.boxOnGoal=5]="boxOnGoal",t[t.playerOnGoal=6]="playerOnGoal"}(c||(c={}));var v={"@":2,"+":6,$:4,"*":5,"#":0,".":3," ":1,"-":1,_:1};function g(t,e){if(t.length%e!==0)return[];for(var i=[],n=[],a=1;a<=t.length;a++)n.push(v[t[a-1]]),a%e===0&&(i.push(n),n=[]);return i}function p(){if(null===localStorage.getItem("finishedLevel"))return{};var t=localStorage.getItem("finishedLevel");return null===t?{}:JSON.parse(t)}var x=[[[0,0,0,0,0,0],[0,1,1,1,1,0],[0,1,4,1,1,0],[0,2,1,1,1,0],[0,1,1,3,1,0],[0,0,0,0,0,0]],[[1,1,0,0,0,0,0,0,0],[1,1,0,1,1,1,1,1,0],[1,0,0,4,0,0,0,1,0],[1,0,1,4,1,1,0,1,0],[1,0,1,1,1,1,0,1,0],[1,0,0,0,4,1,0,1,0],[1,1,1,0,1,1,0,1,0],[0,0,0,0,1,1,0,1,0],[0,1,1,0,1,1,0,1,0],[0,1,3,0,0,1,1,1,0],[0,1,3,1,1,1,2,1,0],[0,1,3,1,1,1,0,0,0],[0,0,0,0,0,0,0]],g("#########@-----##-#-$--##---.#.##-.#$*$##--$-$.##----.-#########",8),[[1,1,0,0,0,0,0,1,1],[0,0,0,1,2,1,0,0,0],[0,1,4,4,4,4,4,1,0],[0,1,3,3,3,3,3,1,0],[0,1,1,1,0,1,1,1,0],[0,0,0,0,0,0,0,0,0]],g("___#####__##---####@$#-##--*$.-##-#-.-###-$-.-#_###--##___####__",8),g("_____#####_________##-@-##_______##--*--##_____##--*$*--##___##--*-*-*--##_##--*-*.*-*--###--*-*-*-*-*--##-#.*$#-#$#.*-##--*-*-*-*-*--###--*-*.#-*--##_##--*-*-*--##___##--*$*--##_____##--*--##_______##---##_________#####_____",15),[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,3,1,1,1,5,1,2,1,5,1,1,1,3,0],[0,1,1,0,1,1,1,1,1,1,1,0,1,1,0],[0,1,4,0,0,5,0,5,0,5,0,0,4,1,0],[0,1,1,0,1,1,1,4,1,1,1,0,1,1,0],[0,1,0,0,1,0,1,3,1,0,1,0,0,1,0],[0,3,4,3,4,1,0,1,0,1,4,3,4,3,0],[0,1,1,1,1,1,0,1,0,1,1,1,1,1,0],[0,0,0,0,0,0,0,5,0,0,0,0,0,0,0],[0,1,1,1,1,3,4,1,4,1,1,1,1,3,0],[0,4,4,0,0,1,0,3,4,4,0,3,1,1,0],[0,1,3,4,3,1,0,1,1,3,1,4,0,4,0],[0,3,3,4,3,5,4,5,4,3,4,3,1,1,0],[0,5,1,1,1,4,1,1,3,1,0,0,1,3,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],g("#############@-$-.---##-.$*$*-#-##-$-.-$-#-##**-#-***-##-*-.-$.*-##-*$#*--*-##-.-*---*-##-*$###*.-##-.------#############",11),g("_#####__####____________________#--#####--#######_______#####__#--------$------#########---#__#--######-#####-#--$-$------#_##$-#----#-------#--$-$--#$$$###-$-#-$--#$###$$-##---###-$---##-#-$-#$##-#-$-###--###-$---$-##---#-#----#-$-###.###-$--$---######---##-#-$-#---.-#.#$######____#-$##--.-#-#-$-*-$---####______#--##-$.#--#@##*##$-----#______#-#####.#--.*#...#---#$-#______#-#--##.-##.*..#$#####--#______#-#-*.*...#...#--$-----##_____##-#-.##.*....#-----#-$-###____#--##-##.#.*.##--#--#$#---#____#----$-#.#.*####--###--$$-#____####---#......*.*-#_#$#---#_______########--###--#_#---###______________####_####_#####___",31)];function y(t){try{return o(x[t])}catch(e){throw alert("get map data error:no such level in map data"),new Error("get map data error:no such level in map data")}}var k=40,w="#bdbdbd",$=function(){function t(e,i){if((0,s.Z)(this,t),this.level=void 0,this.canvas=void 0,this.context=void 0,this.graphStack=void 0,this.finishedLevel=void 0,this.canvas=i,null===this.canvas.getContext("2d"))throw new Error("CanvasRenderingContext2D is null");this.context=this.canvas.getContext("2d"),this.finishedLevel=p(),this.level=e,this.graphStack=[],this.graphStack.push(y(e)),this.canvas.width=this.graphStack[0][0].length*k,this.canvas.height=this.graphStack[0].length*k,this.render()}return(0,h.Z)(t,[{key:"loadLevel",value:function(t){this.level=t,this.graphStack=[],this.graphStack.push(y(t)),this.canvas.width=this.graphStack[0][0].length*k,this.canvas.height=this.graphStack[0].length*k,this.render()}},{key:"back",value:function(){this.graphStack.length<=1||(this.graphStack.pop(),this.render())}},{key:"paintCell",value:function(t,e,i){switch(i){case c.road:break;case c.goal:this.context.fillStyle="#ff0000",this.context.beginPath(),this.context.arc(t*k+20,e*k+20,8,0,2*Math.PI),this.context.closePath(),this.context.fill();break;case c.wall:u(this.context,t*k,e*k,k,k,5,"#5f5f58");break;case c.box:u(this.context,t*k,e*k,k,k,5,"#7e7515");break;case c.boxOnGoal:u(this.context,t*k,e*k,k,k,5,"#7e7515"),this.context.fillStyle="#ff0000",this.context.fillRect(t*k+5,e*k+5,30,30);break;case c.player:this.context.fillStyle="#0000ff",this.context.beginPath(),this.context.arc(t*k+20,e*k+20,16,0,2*Math.PI),this.context.closePath(),this.context.fill();break;case c.playerOnGoal:this.context.fillStyle="#ff0000",this.context.beginPath(),this.context.arc(t*k+20,e*k+20,16,0,2*Math.PI),this.context.closePath(),this.context.fill()}}},{key:"getPlayerPos",value:function(){for(var t=this.graphStack[this.graphStack.length-1],e=0;e<(null===t||void 0===t?void 0:t.length);e++)for(var i=0;i<(null===(n=t[0])||void 0===n?void 0:n.length);i++){var n;if(t[e][i]===c.player||t[e][i]===c.playerOnGoal)return[i,e]}throw new Error("function getPlayerPos: can not found player")}},{key:"getGraphCellValue",value:function(t){var e=this.graphStack[this.graphStack.length-1];if(void 0===e)throw alert("function getMapCell: map is undefined"),new Error("function getMapCell: map is undefined");return e[t[1]][t[0]]}},{key:"setGraphCellValue",value:function(t,e){try{var i=this.graphStack.pop();if(void 0===i)throw alert("function setMapCell: map is undefined"),new Error("function setMapCell: map is undefined");i[t[1]][t[0]]=e,this.graphStack.push(i)}catch(n){throw alert("function setMapCell: error"),new Error("function setMapCell: error")}}},{key:"playerMove",value:function(t){var e=this.getPlayerPos(),i=_(e,f[t]);switch(this.getGraphCellValue(i)){case c.wall:break;case c.road:case c.goal:var n=o(this.graphStack[this.graphStack.length-1]);this.graphStack.push(n),this.setGraphCellValue(i,this.getGraphCellValue(i)===c.road?c.player:c.playerOnGoal),this.setGraphCellValue(e,this.getGraphCellValue(e)===c.playerOnGoal?c.goal:c.road);break;case c.box:case c.boxOnGoal:if(this.boxMovable(i,t)){var a=o(this.graphStack[this.graphStack.length-1]);this.graphStack.push(a);var l=_(i,f[t]);this.setGraphCellValue(l,this.getGraphCellValue(l)===c.goal?c.boxOnGoal:c.box),this.setGraphCellValue(i,this.getGraphCellValue(i)===c.box?c.player:c.playerOnGoal),this.setGraphCellValue(e,this.getGraphCellValue(e)===c.playerOnGoal?c.goal:c.road)}}this.render()}},{key:"boxMovable",value:function(t,e){var i=_(t,f[e]);switch(this.getGraphCellValue(i)){case c.road:case c.goal:return!0;default:return!1}}},{key:"confirm",value:function(t,e){var i=this;this.canvas.width=Math.max(this.canvas.width,400),this.render();var n={width:400,height:60,x:10,y:10,backgroundColor:"#4f4f4f",fontColor:"#ffffff",padding:8},a={width:n.width/2,height:60,y:n.y+n.height,leftX:n.x,rightX:n.x+n.width/2,boderColor:"#000000",backgroundColor:"#4f4f4f",fontOffset:10};n.x=this.canvas.width/2-n.width/2,n.y=this.canvas.height/2-(n.height+a.height)/2,a.y=n.y+n.height,a.leftX=n.x,a.rightX=n.x+n.width/2,this.context.fillStyle=n.backgroundColor,this.context.fillRect(n.x,n.y,n.width,n.height),this.context.fillStyle=n.fontColor,this.context.font="16px serif",this.context.textBaseline="top",this.context.fillText("are you sure go to level ".concat(t,"?"),n.x+n.padding,n.y+n.padding),this.context.fillText("any change that you done will be losed.",n.x+n.padding,n.y+n.padding+14),this.context.fillStyle=a.backgroundColor,this.context.fillRect(a.leftX,a.y,a.width,a.height),u(this.context,a.leftX,a.y,a.width,a.height,4,a.boderColor),this.context.fillStyle=n.fontColor,this.context.fillText("Yes",a.leftX+a.width/2-a.fontOffset,a.y+a.height/2-a.fontOffset),this.context.fillStyle=a.backgroundColor,this.context.fillRect(a.rightX,a.y,a.width,a.height),u(this.context,a.rightX,a.y,a.width,a.height,4,a.boderColor),this.context.fillStyle=n.fontColor,this.context.fillText("No",a.rightX+a.width/2-a.fontOffset,a.y+a.height/2-a.fontOffset);var l=function(t){var e=i.canvas,n=e.offsetTop,l=e.offsetLeft,r=[t.clientX,t.clientY],s={beginPoint:[l+a.leftX,n+a.y],width:a.width,height:a.height},h={beginPoint:[l+a.rightX,n+a.y],width:a.width,height:a.height};d(r,s)||d(r,h)?i.canvas.style.cursor="pointer":i.canvas.style.cursor="default"};this.canvas.addEventListener("click",(function t(n){var r=i.canvas,s=r.offsetTop,h=r.offsetLeft,o=[n.clientX,n.clientY],c={beginPoint:[h+a.leftX,s+a.y],width:a.width,height:a.height},f={beginPoint:[h+a.rightX,s+a.y],width:a.width,height:a.height};d(o,c)?(e(),i.canvas.removeEventListener("click",t),i.canvas.removeEventListener("mousemove",l)):d(o,f)&&(i.render(),i.canvas.removeEventListener("click",t),i.canvas.removeEventListener("mousemove",l))})),this.canvas.addEventListener("mousemove",l)}},{key:"render",value:function(){var t=this,e=0,i=this.graphStack[this.graphStack.length-1];this.context.fillStyle=w,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),null===i||void 0===i||i.forEach((function(i,n){return i.forEach((function(i,a){t.paintCell(a,n,i),i!==c.goal&&i!==c.playerOnGoal||e++}))})),0===e&&this.success()}},{key:"success",value:function(){var t,e=this.canvas,i=e.width,n=e.height;this.context.fillStyle=w,this.context.fillRect(0,0,i,n),this.context.font="60px serif",this.context.fillStyle="#ff0000",this.context.fillText("success",i/2-80,n/2),this.finishedLevel[this.level]=!0,t=this.finishedLevel,localStorage.setItem("finishedLevel",JSON.stringify(t))}}]),t}();function b(){var t=(0,a.useRef)(),e=(0,a.useRef)(null);return(0,a.useEffect)((function(){if(null===e.current)throw new Error("can not get canvas");t.current=new $(0,e.current)}),[e]),(0,a.useEffect)((function(){var e=function(e){var i,n,a,l,r;switch(e.key){case"w":case"ArrowUp":null===(i=t.current)||void 0===i||i.playerMove("up");break;case"a":case"ArrowLeft":null===(n=t.current)||void 0===n||n.playerMove("left");break;case"s":case"ArrowDown":null===(a=t.current)||void 0===a||a.playerMove("down");break;case"d":case"ArrowRight":null===(l=t.current)||void 0===l||l.playerMove("right");break;case"z":null===(r=t.current)||void 0===r||r.back()}};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t]),(0,l.jsx)(r,{children:(0,l.jsxs)("div",{id:"pushBoxGame",children:[(0,l.jsx)("div",{className:"gameUI",children:(0,l.jsx)(m,{gameMaster:t})}),(0,l.jsx)("div",{className:"gameScene",children:(0,l.jsx)("canvas",{ref:e})})]})})}function m(t){var e=t.gameMaster,i=(0,a.useState)(0),r=(0,n.Z)(i,2),s=r[0],h=r[1],o=(0,a.useMemo)((function(){for(var t=p(),i=[],n=function(n){var a="";t[n]&&(a="finished"),s===n&&(a="checked"),i.push((0,l.jsx)("div",{onClick:function(){var t;s!==n&&(null===(t=e.current)||void 0===t||t.confirm(n,(function(){var t;null===(t=e.current)||void 0===t||t.loadLevel(n),h(n)})))},className:a,children:n},n))},a=0;a<x.length;a++)n(a);return i}),[e,s]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"tipContainer",children:[(0,l.jsxs)("div",{children:["up: w /\xa0",(0,l.jsx)("img",{src:"/icons/icons8-present-to-all-48.png",alt:"arrow up img"})]}),(0,l.jsxs)("div",{children:["right: d /\xa0",(0,l.jsx)("img",{src:"/icons/icons8-present-to-all-48.png",alt:"arrow up img"})]}),(0,l.jsxs)("div",{children:["down: s /\xa0",(0,l.jsx)("img",{src:"/icons/icons8-present-to-all-48.png",alt:"arrow up img"})]}),(0,l.jsxs)("div",{children:["left: a /\xa0",(0,l.jsx)("img",{src:"/icons/icons8-present-to-all-48.png",alt:"arrow up img"})]}),(0,l.jsx)("div",{children:"back: z"}),(0,l.jsx)("div",{children:"full screen: f"})]}),(0,l.jsx)("div",{className:"levelSelection",children:o})]})}}}]);
//# sourceMappingURL=843.b383701a.chunk.js.map