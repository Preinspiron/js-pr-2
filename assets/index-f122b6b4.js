/* empty css               */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const i={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};i.openModalBtn.addEventListener("click",c);i.closeModalBtn.addEventListener("click",c);function c(){i.modal.classList.toggle("is-hidden")}const s={imgMax:document.querySelector(".js-img-max"),imgMinList:document.querySelector(".js-img-list")};s.imgMinList.addEventListener("click",a);function a(o){if(console.log(o.target),o.target.classList.contains("js-img-min")){let n=o.target.src;u(n)}}function u(o){s.imgMax.innerHTML=`<img src="${o}" alt="" width="295" height="387">`}
