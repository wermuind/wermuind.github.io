(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(){let i=-1;const n=document.querySelectorAll("h2[id],h3[id]"),o=document.querySelectorAll(".table-of-contents li"),r=()=>{var c,s;let e=-1,t=1/0;n.forEach((d,a)=>{const l=Math.abs(d.getBoundingClientRect().top);l<t&&(t=l,e=a)}),e!==-1&&i!==e&&((c=o[i])==null||c.classList.remove("active"),(s=o[e])==null||s.classList.add("active"),i=e)};r(),window.addEventListener("scroll",r)}function u(){for(const i of document.querySelectorAll(".code-block .toolbar")){const n=i.lastElementChild,o=i.nextElementSibling;!n||!o||n.addEventListener("click",()=>p(o))}}function p(i){const n=[...i.childNodes].filter(o=>o instanceof Text||!o.classList.contains("hint")).map(o=>o.textContent).join("");n&&navigator.clipboard.writeText(n).then()}f();u();
