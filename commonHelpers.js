import{a as s,S as l}from"./assets/vendor-65b0d63f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();s.defaults.headers.common["x-api-key"]="live_YGiFEHjPi1lBCUuzNbWelyd7J1oPEfn9W20OXOYFFrZcwqF6HuW05CNOxCFEtTY7";async function d(){return await s.get("https://api.thecatapi.com/v1/breeds").then(t=>t.data)}async function u(t){return await s.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`).then(r=>r.data)}const i={breedSelect:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info")},f=new l({select:i.breedSelect});async function m(){try{const t=i.breedSelect.value,r=await u(t);console.log(r)}catch(t){console.log(t)}}async function y(){try{await d().then(t=>{const r=t.map(({id:n,name:c})=>({value:n,text:c}));console.log(r),f.setData(Array.from(r))}),i.breedSelect.addEventListener("change",m)}catch(t){console.log(t)}}y();
//# sourceMappingURL=commonHelpers.js.map
