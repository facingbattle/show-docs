"use strict";function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Map"===(n="Object"===n&&r.constructor?r.constructor.name:n)||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(r,e):void 0}}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function _iterableToArrayLimit(r,e){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,a,o=[],i=!0,u=!1;try{for(n=n.call(r);!(i=(t=n.next()).done)&&(o.push(t.value),!e||o.length!==e);i=!0);}catch(r){u=!0,a=r}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}}function _arrayWithHoles(r){if(Array.isArray(r))return r}var renderHtml=function(r){document.querySelector("#id-router").src=r},responseForPath=function(r){var e={"/":"","/mime":"./mine/index.html","/poker":"./poker/index.html","/node/reptile":"./reptile/index.html"};return r in e?e[r]:"not found"},argsFromQuery=function(r){var n={};return r.split("&").forEach(function(r){var e=_slicedToArray(r.split("="),2),r=e[0],e=e[1];n[r]=e}),n},parsedUrl=function(r){var e="",n={},t=r.indexOf("?");return-1<t?(e=r.slice(0,t),t=r.slice(t+1),n=argsFromQuery(t)):e=r,{path:e,query:n}},render=function(){var r=parsedUrl(location.hash.slice(1)),e=r.path,e=(r.query,responseForPath(e));renderHtml(e)},bindEventHashChange=function(){window.addEventListener("hashchange",function(r){render()})},bindEvents=function(){bindEventHashChange()},setup=function(){render()},__main=function(){setup(),bindEvents()};window.addEventListener("load",function(){__main()});