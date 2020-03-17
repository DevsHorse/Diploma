!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{document.querySelectorAll(".popup").forEach(e=>e.addEventListener("click",t=>{const n=e.querySelectorAll("input"),o=t.target;(o.classList.contains("popup")||o.classList.contains("popup-close"))&&(o.classList.contains("popup-close")&&t.preventDefault(),document.body.style.overflow="auto",e.style.display="none",n.forEach(e=>{e.value="",e.style.borderColor="",e.nextElementSibling.innerHTML=""}))}))};var r=e=>{e.style.display="block",document.body.style.overflow="hidden"};var c=class{constructor(e){this.form=e,this.isValidSubmit=!1,this.inputs=this.form.querySelectorAll("input"),this.patterns=[["name",/^[а-яА-ЯёЁ]*$/,'Ввод только "киррилица"'],["phone",/^\+?\d*$/,'Ввод только "+" и "цифры"'],["question",/^[а-яА-ЯёЁ0-9\?-\s]*$/,'Ввод только "киррилица"']],this.cssPatterns={default:"height: 20px;\n      font-size: 16px;\n      color: red;\n      margin: -10px 0 5px;",question:"position: absolute;\n      font-size: 20px;\n      font-weight: 700;\n      color: #ff0f15;\n      text-shadow: 0 0 10px #fff;\n      margin: -75px 10px 15px;"}}init(e){this.inputs.forEach(t=>{const n=document.createElement("div");n.style.cssText="question"===e?this.cssPatterns.question:this.cssPatterns.default,t.insertAdjacentElement("afterend",n),t.addEventListener("input",()=>{const e=this.checkInputs(t);this.message(n,t,e)})})}checkInputs(e){let t=!1;return this.patterns.forEach(n=>{n[0]===e.id.match(/^[a-z]*/g)[0]&&(t=n[1].test(e.value))}),t}message(e,t,n){!1===n?(this.patterns.forEach(n=>{n[0]===t.id.match(/^[a-z]*/g)[0]&&(e.innerHTML=n[2])}),t.style.borderColor="red"):(e.innerHTML="",t.style.borderColor="")}submitValidate(){let e=0;return this.inputs.forEach(t=>{""!==t.nextElementSibling.textContent&&e++}),!(e>0)}};var s=e=>{const t=document.querySelector(".director-form"),n=document.querySelector(".popup-consultation"),o=document.querySelector(".consult-question"),s=new c(t);s.init("question"),t.addEventListener("submit",t=>{let c=o.value;return t.preventDefault(),o.value&&!0===s.submitValidate()&&r(n),e(c)})};var i=()=>{const e=document.querySelector(".popup-check");document.querySelector(".check-btn").addEventListener("click",t=>{r(e)})};var a=()=>{const e=document.querySelector(".sentence"),t=document.querySelector(".popup-discount");e.addEventListener("click",e=>{const n=e.target;if(n.classList.contains("discount-btn")&&r(t),n.classList.contains("add-sentence-btn")){document.querySelectorAll(".invisible-card").forEach(e=>e.style.cssText="display: block!important;"),n.style.display="none"}})};var l=class{constructor(){this.type=document.querySelector(".checkbox-type").hasAttribute("checked"),this.bottom=document.querySelector(".checkbox-three").hasAttribute("checked"),this.diameter=document.querySelector(".diameter"),this.diameter2=document.querySelector(".diameter2"),this.rings=document.querySelector(".number-of-rings"),this.rings2=document.querySelector(".number-of-rings2"),this.distance=document.querySelector(".distance-to-home").value,this.price=document.getElementById("calc-result").value,this.data={}}init(){return this.type=!0===this.type?"Однокамерный":"Двухкамерный",this.bottom=!0===this.bottom?"есть":"нет",this.data["Тип"]=this.type,this.data["Приемный"]={"Диаметр":this.diameter.value,"Кольца":this.rings.value},"Двухкамерный"===this.type&&(this.data["Дренажный"]={"Диаметр":this.diameter2.value,"Кольца":this.rings2.value}),this.data["Днище"]=this.bottom,this.data["Расстояние до дома"]=this.distance,this.data["Примерная сумма"]=this.price,this.data}};var u=e=>{const t=document.querySelector(".popup-call");document.querySelectorAll(".call-btn").forEach(n=>{n.addEventListener("click",o=>{if(o.preventDefault(),n.classList.contains("construct-btn")){if(document.querySelector(".distance-to-home").value){const n=(new l).init();r(t),e(n)}}else r(t)})})};var d=(e={})=>{const t=document.querySelectorAll(".form"),n=document.createElement("div");n.style.cssText="\n        font-size: 18px;\n        font-weight: 700;\n        ";t.forEach(t=>{const o=new c(t);o.init(),t.addEventListener("submit",r=>{r.preventDefault();const c=t.querySelectorAll("input");if(t.insertAdjacentElement("beforeend",n),!0!==o.submitValidate())return;n.innerHTML="Загрузка...";const s=setTimeout(()=>{n.innerHTML="",c.forEach(e=>e.value="")},3e3),i=()=>{n.innerHTML="Ошибка отправки!"};setTimeout(()=>{(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:JSON.stringify(e)}))((()=>{let t={};c.forEach(e=>{t[e.id.match(/^[a-z]*/)]=e.value});for(let n of Object.keys(e))t[n]=e[n];return console.log(t),t})()).then(e=>{if(200!==e.status)throw i;n.innerHTML="Спасибо! Мы скоро с вами свяжемся."}).catch(e=>e()).finally(()=>s)},1e3)})})};var m=()=>{document.querySelector(".questions").addEventListener("click",e=>{e.preventDefault();let t=e.target;const n=document.querySelectorAll(".collapse2");"A"===t.tagName&&(t=t.parentNode.parentNode),"H4"===t.tagName&&(t=t.parentNode);const o=t.nextElementSibling;t.closest(".panel-heading")&&"DIV"===t.nodeName&&n.forEach(e=>{e.id!==o.id&&e.classList.remove("show")})})};var p=()=>{document.querySelector(".constructor").addEventListener("click",e=>{e.preventDefault();let t=e.target;const n=document.querySelectorAll(".collapse1"),o=document.querySelector(".checkbox-type"),r=(document.querySelector(".checkbox-three"),document.querySelector(".collapseTwo-two"));if(t.closest(".onoffswitch")&&"LABEL"===t.parentNode.tagName&&t.parentNode.previousElementSibling.toggleAttribute("checked"),o.hasAttribute("checked")?r.style.display="none":r.style.display="block",t.closest(".panel-heading")){"SPAN"===t.tagName&&(t=t.parentNode.parentNode.parentNode),"A"===t.tagName&&(t=t.parentNode.parentNode),"H4"===t.tagName&&(t=t.parentNode);const e=t.nextElementSibling;n.forEach(t=>{t.id!==e.id&&t.classList.remove("show")})}if(t.closest(".construct-btn")&&("SPAN"===t.tagName&&(t=t.parentNode),"A"===t.tagName)){t.parentNode.parentNode.classList.remove("show")}})};var h=e=>{const t=document.getElementById("calc-result"),n=document.querySelector(".panel-group");let o=0;const r=()=>{let e=0;o=0;const t=document.querySelector(".diameter"),n=document.querySelector(".diameter2"),r=document.querySelector(".number-of-rings"),c=document.querySelector(".number-of-rings2"),s=document.querySelector(".checkbox-type"),i=document.querySelector(".checkbox-three"),a=(t,n)=>{const r=t.value.match(/^[0-9]{1}\.[0-9]{1}|[0-9]{1}/)[0];"diameter"===n&&"2"===r&&(o+=.2*e),"rings"===n&&("2"===r&&(o+=.3*e),"3"===r&&(o+=.5*e))};e=s.hasAttribute("checked")?1e4:15e3,o=e,a(t,"diameter"),a(n,"diameter"),a(r,"rings"),a(c,"rings"),i.hasAttribute("checked")&&(o+=1e4===e?1e3:2e3)};n.addEventListener("click",e=>{r();let n,c=0;const s=()=>{n=requestAnimationFrame(s),c+=500,c>=o&&(t.value=o,cancelAnimationFrame(n)),t.value=c};n=requestAnimationFrame(s)});document.querySelectorAll(".onoffswitch").forEach(e=>e.addEventListener("click",e=>{const t=((e,t)=>{const n=e=>e.parentElement&&t(e.parentElement)?e.parentElement:"BODY"===e.tagName?null:n(e.parentElement);return n(e)})(e.target,e=>e.classList.contains("onoffswitch"));t&&setTimeout(()=>{t.querySelector(".onoffswitch-checkbox");r()},200)}))};document.addEventListener("DOMContentLoaded",()=>{let e={};h(),u(t=>{console.log(t),e.calcValues=t}),i(),a(),s(t=>{e.questionConsult=t}),o(),m(),p(),d(e)})}]);