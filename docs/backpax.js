!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Backpax=e():t.Backpax=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="bundle",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},r=function(t,e,n){var o;return void 0===n&&(n=!1),function(){var r=n&&!o;clearTimeout(o),o=setTimeout(function(){o=void 0,n||t()},e),r&&t()}},i={speed:"auto"},a=function(){function t(t,e){void 0===e&&(e={});var n=this;t instanceof NodeList?this.elements=t:this.elements=document.querySelectorAll(t),this.options=Object.assign({},i,e),this.move=0,this.setup(),window.requestAnimationFrame?requestAnimationFrame(this.run.bind(this)):setInterval(this.run.bind(this),1e3/60),window.addEventListener("resize",r(function(){[].forEach.call(n.elements,function(t){var e=t.dataset.id;if(e){var o=document.getElementById(e);o&&n.setBestImg(t,o)}})},100))}return t.prototype.setBestImg=function(t,e){var n=window.innerWidth,o=t.dataset.img,r=Object.keys(t.dataset).reduce(function(e,n){if(/img-\d*/.test(n)){var o=n.match(/img-(\d*)/);if(o&&o[1]){var r=parseInt(o[1],10);e.push({point:r,src:t.dataset[n]})}}return e},[]);r.sort(function(t,e){return t.point<e.point?-1:1});var i=r.find(function(t){return n<t.point});i&&(o=i.src),e.style.backgroundImage="url("+o+")",this.setImgRatio(t,o)},t.prototype.setup=function(){var t=this;[].forEach.call(this.elements,function(e){e.style.position="relative",e.style.overflow="hidden";var n=(Date.now().toString(36)+Math.random().toString(36).substr(2,5)).toUpperCase();e.dataset.id=n;var o=document.createElement("div");e.insertBefore(o,null),t.setBestImg(e,o),o.id=n,o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.width="100%",o.style.height="100vh",o.style.backgroundRepeat="no-repeat",o.style.backgroundPosition="bottom center",o.style.backgroundSize="cover",o.style.transformStyle="preserve-3d",o.style.backfaceVisibility="hidden"})},t.prototype.setImgRatio=function(t,e){var n=new Image;n.onload=function(){var e=n.width/n.height;t.dataset.ratio=""+e;var o=t.dataset.id,r=document.getElementById(o);r&&(r.style.height=window.innerWidth/e+"px")},n.src=e},t.prototype.run=function(){var t=this,e=o();[].forEach.call(this.elements,function(n){var r,i=n.dataset.id,a=document.getElementById(i),s={top:(r=n.getBoundingClientRect()).top+o(),left:r.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)};if(a&&s){var u=s.top,d=parseFloat(n.dataset.ratio),c=window.innerHeight,l=n.offsetHeight,f=a.offsetHeight;if(!(e+c<u)){var p=e+c-u,m=l-f,y=t.options.speed;if("auto"===y){if(!d)return;y=(f-l)/(c+l/2)}n.dataset.speed&&(y=parseInt(n.dataset.speed,10));var v=m+p*y;p!==t.move&&(a.style.transform="translate3d(0px, "+Math.round(v)+"px, 0px)"),t.move=p}}}),window.requestAnimationFrame&&requestAnimationFrame(this.run.bind(this))},t}();e.default=a}]).default});