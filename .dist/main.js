!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{document.querySelectorAll(".popup").forEach(e=>e.addEventListener("click",t=>{const n=e.querySelectorAll("input"),o=t.target;(o.classList.contains("popup")||o.classList.contains("popup-close"))&&(o.classList.contains("popup-close")&&t.preventDefault(),document.body.style.overflow="auto",e.style.display="none",n.forEach(e=>e.value=""))}))};var r=e=>{e.style.display="block",document.body.style.overflow="hidden"};var c=class{constructor(e){this.form=e,this.inputs=this.form.querySelectorAll("input"),this.patterns=[["name",/^[а-яА-ЯёЁ]*$/],["phone",/^\+?\d*$/],["question",/^[а-яА-ЯёЁ0-9\?-\s]*$/]]}init(){let e=[],t=0;return this.inputs.forEach(t=>{e.push(this.checkInputs(t))}),e.forEach(e=>{!1===e&&t++}),t=0===t,t}checkInputs(e){let t=!1;return this.patterns.forEach(n=>{n[0]===e.id.match(/^[a-z]*/g)[0]&&(t=n[1].test(e.value))}),t}};var l=e=>{const t=document.querySelector(".director-form"),n=document.querySelector(".popup-consultation"),o=document.querySelector(".consult-question");t.addEventListener("submit",l=>{let s=o.value;l.preventDefault();const u=new c(t);return o.value&&!0===u.init()&&r(n),e(s)})};var s=()=>{const e=document.querySelector(".popup-check");document.querySelector(".check-btn").addEventListener("click",t=>{r(e)})};var u=()=>{const e=document.querySelector(".sentence"),t=document.querySelector(".popup-discount");e.addEventListener("click",e=>{const n=e.target;if(n.classList.contains("discount-btn")&&r(t),n.classList.contains("add-sentence-btn")){document.querySelectorAll(".invisible-card").forEach(e=>e.style.cssText="display: block!important;"),n.style.display="none"}})};var i=()=>{const e=document.querySelector(".popup-call");document.querySelectorAll(".call-btn").forEach(t=>{t.addEventListener("click",t=>{t.preventDefault(),r(e)})})};var a=(e={})=>{const t=document.querySelectorAll(".form"),n=document.createElement("div");n.style.cssText="\n        font-size: 18px;\n        font-weight: 700;\n        ";t.forEach(t=>t.addEventListener("submit",o=>{o.preventDefault();const r=t.querySelectorAll("input");if(t.insertAdjacentElement("beforeend",n),!0!==new c(t).init())return void(n.innerHTML="Ошибка ввода!");n.innerHTML="Загрузка...";const l=setTimeout(()=>{n.innerHTML="",r.forEach(e=>e.value="")},3e3),s=()=>{n.innerHTML="Ошибка отправки!"};setTimeout(()=>{(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:JSON.stringify(e)}))((()=>{let t={};r.forEach(e=>{t[e.id.match(/^[a-z]*/)]=e.value});for(let n of Object.keys(e))t[n]=e[n];return console.log(t),t})()).then(e=>{if(200!==e.status)throw s;n.innerHTML="Спасибо! Мы скоро с вами свяжемся."}).catch(e=>e()).finally(()=>l)},1e3)}))};var d=()=>{document.querySelector(".questions").addEventListener("click",e=>{e.preventDefault();const t=e.target,n=document.querySelectorAll(".panel-collapse");if(t.closest(".panel-heading")&&"A"===t.nodeName){n.forEach(e=>e.classList.remove("in")),t.parentNode.parentNode.nextElementSibling.classList.add("in")}})};document.addEventListener("DOMContentLoaded",()=>{let e={};i(),s(),u(),l(t=>{e.questionConsult=t}),o(),d(),a(e)})}]);