!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{document.querySelectorAll(".popup").forEach(e=>e.addEventListener("click",t=>{const n=e.querySelectorAll("input"),r=t.target;(r.classList.contains("popup")||r.classList.contains("popup-close"))&&(r.classList.contains("popup-close")&&t.preventDefault(),document.body.style.overflow="auto",e.style.display="none",n.forEach(e=>e.value=""))}))};var o=e=>{e.style.display="block",document.body.style.overflow="hidden"};var c=e=>{const t=document.querySelector(".director-form"),n=document.querySelector(".popup-consultation"),r=document.querySelector(".consult-question");t.addEventListener("submit",t=>{let c=r.value;return t.preventDefault(),r.value&&o(n),e(c)})};var u=()=>{const e=document.querySelector(".popup-check");document.querySelector(".check-btn").addEventListener("click",t=>{o(e)})};var l=()=>{const e=document.querySelector(".sentence"),t=document.querySelector(".popup-discount");e.addEventListener("click",e=>{const n=e.target;if(n.classList.contains("discount-btn")&&o(t),n.classList.contains("add-sentence-btn")){document.querySelectorAll(".invisible-card").forEach(e=>e.style.cssText="display: block!important;"),n.style.display="none"}})};var s=()=>{const e=document.querySelector(".popup-call");document.querySelectorAll(".call-btn").forEach(t=>{t.addEventListener("click",t=>{t.preventDefault(),o(e)})})};var i=class{constructor(e){this.form=e,this.inputs=this.form.querySelectorAll("input"),this.patterns=[["name",/^[а-яА-Я]*$/],["phone",/^\+?\d*$/]]}init(){let e=[],t=0;return this.inputs.forEach(t=>{e.push(this.checkInputs(t))}),e.forEach(e=>{!1===e&&t++}),t=0===t,t}checkInputs(e){let t=!1;return this.patterns.forEach(n=>{n[0]===e.id.match(/^[a-z]*/g)[0]&&(t=n[1].test(e.value))}),t}};var a=(e={})=>{const t=document.querySelectorAll(".form"),n=document.createElement("div");n.style.cssText="\n        font-size: 18px;\n        font-weight: 700;\n        ";t.forEach(t=>t.addEventListener("submit",r=>{r.preventDefault();const o=t.querySelectorAll("input");if(t.insertAdjacentElement("beforeend",n),!0!==new i(t).init())return void(n.innerHTML="Ошибка ввода!");n.innerHTML="Загрузка...";const c=setTimeout(()=>{n.innerHTML="",o.forEach(e=>e.value="")},3e3),u=()=>{n.innerHTML="Ошибка отправки!"};setTimeout(()=>{(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:JSON.stringify(e)}))((()=>{let t={};o.forEach(e=>{t[e.id.match(/^[a-z]*/)]=e.value});for(let n of Object.keys(e))t[n]=e[n];return console.log(t),t})()).then(e=>{if(200!==e.status)throw u;n.innerHTML="Спасибо! Мы скоро с вами свяжемся."}).catch(e=>e()).finally(()=>c)},1e3)}))};document.addEventListener("DOMContentLoaded",()=>{let e={};s(),u(),l(),c(t=>{e.questionConsult=t}),r(),a(e)})}]);