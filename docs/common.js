"use strict";var log=console.log.bind(console),e=function(e){return document.querySelector(e)},es=function(e){return document.querySelectorAll(e)},closest=function(e,n){return e.closest(n)},remove=function(e){return e.remove()},bindAll=function(e,n,t){for(var o=0;o<e.length;o++)e[o].addEventListener(n,t)},removeClassAll=function(e,n){for(var t=0;t<e.length;t++)e[t].classList.remove(n)},shuffle=function(e){for(var n=e.length;n;n--){var t=Math.floor(Math.random()*n),o=[e[t],e[n-1]];e[n-1]=o[0],e[t]=o[1]}return e},animate=function(n,t,e,o){null!==n&&(n.style.transition="all "+e,Object.keys(t).forEach(function(e){n.style[e]=t[e]}),o())},debounce=function(e,n){return function(){clearTimeout(e._timebar),e._timebar=setTimeout(function(){e.apply(null)},n||1e3)}},throttle=function(e,n){return function(){e._lock||(e._lock=!0,e._lock=setTimeout(function(){delete e._lock,e.apply(null)},n||1500))}};