import{S as c}from"./assets/vendor-338edac8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(s){const t="43339285-ea15b1a3e45dc18314900d076",o="https://pixabay.com/api/",i=new URLSearchParams({key:t,q:s,orientation:"horizontal",image_type:"photo",safesearch:!0});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function d(s){return s.map(t=>`
    <li class="gallary-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" title="${t.tags}">
      </a>
      <div class="image-details">
        <ul>
         <li>
           <h3>Likes:</h3>
           <p>${t.likes}</p>
         </li>
         <li>
           <h3>Views:</h3>
           <p>${t.views}</p>
         </li>  
         <li>
           <h3>Comments:</h3>
           <p>${t.comments}</p>
         </li>  
         <li>
           <h3>Downloads:</h3>
           <p>${t.downloads}</p>
         </li>
        </ul>
      </div>
    </li>
  `).join("")}const a=document.querySelector(".gallary"),f=document.querySelector(".js-form"),l=document.querySelector(".loader");function h(){l.classList.remove("is-hidden")}function p(){l.classList.add("is-hidden")}f.addEventListener("submit",m);function m(s){s.preventDefault();const t=s.currentTarget.elements.search.value.trim();h(),a.innerHTML="",u(t).then(o=>{if(o.hits.length===0)return iziToast.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});a.innerHTML=d(o.hits),new c(".gallary a")}).catch(o=>{console.log(o)}).finally(()=>{p()})}
//# sourceMappingURL=commonHelpers.js.map
