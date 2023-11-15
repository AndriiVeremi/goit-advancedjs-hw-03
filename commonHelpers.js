import{a as l,S as u,i as d}from"./assets/vendor-33682a3e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();l.defaults.headers.common["x-api-key"]="live_YGiFEHjPi1lBCUuzNbWelyd7J1oPEfn9W20OXOYFFrZcwqF6HuW05CNOxCFEtTY7";async function f(){return await l.get("https://api.thecatapi.com/v1/breeds").then(e=>e.data)}async function m(e){return await l.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`).then(r=>r.data)}const o={breedSelect:document.querySelector(".js-breed-select"),catInfo:document.querySelector(".cat-info"),loader:document.querySelector(".loader")};function a(e,r){e.classList.toggle("hidden",!r)}a(o.breedSelect,!1);a(o.loader,!0);const p=new u({select:o.breedSelect});async function h(){try{a(o.loader,!0),a(o.catInfo,!1);const e=o.breedSelect.value,r=await m(e);g(r)}catch{d.show({position:"topRight",message:"Oops! Something went wrong! Try reloading the page!"})}a(o.loader,!1)}function g(e){const r=e[0].url,s=e[0].breeds[0],c=`<div class="card">
  <img class="img" src="${r}" alt="${s.name}"/>
      <div class="info">
        <h2 class="name">${s.name}</h2>
        <p><b class="description">Description:</b> ${s.description}</p>
        <p><b class="temperament">Temperament:</b> ${s.temperament}</p>   
       </div>
</div>`;o.catInfo.innerHTML=c,a(o.catInfo,!0)}async function y(){try{await f().then(e=>{const r=e.map(({id:s,name:c})=>({value:s,text:c}));console.log(r),p.setData(Array.from(r))}),a(o.breedSelect,!0),o.breedSelect.addEventListener("change",h)}catch{d.show({position:"topRight",message:"Oops! Something went wrong! Try reloading the page!"})}a(o.loader,!1)}y();
//# sourceMappingURL=commonHelpers.js.map
