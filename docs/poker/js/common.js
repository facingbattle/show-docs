"use strict";var log=void 0,e=function(e){return document.querySelector(e)},es=function(e){return document.querySelectorAll(e)},closest=function(e,t){return e.closest(t)},remove=function(e){return e.remove()},bindAll=function(e,t,n){for(var o=0;o<e.length;o++)e[o].addEventListener(t,n)},removeClassAll=function(e,t){for(var n=0;n<e.length;n++)e[n].classList.remove(t)},shuffle=function(e){for(var t=e.length;t;t--){var n=Math.floor(Math.random()*t),o=[e[n],e[t-1]];e[t-1]=o[0],e[n]=o[1]}return e},animate=function(t,n,e,o){null!==t&&(t.style.transition="all "+e,Object.keys(n).forEach(function(e){t.style[e]=n[e]}),o())},debounce=function(e,t){return function(){clearTimeout(e._timebar),e._timebar=setTimeout(function(){e.apply(null)},t||1e3)}},throttle=function(e,t){return function(){e._lock||(e._lock=!0,e._lock=setTimeout(function(){delete e._lock,e.apply(null)},t||1500))}};