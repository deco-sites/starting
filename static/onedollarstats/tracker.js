"use strict";(()=>{function r(e){return e.getAttribute("data-hash-routing")!==null}function s(e){console.warn(`Ignoring event: ${e}`)}function c(e,t){if(navigator.sendBeacon!==void 0){if(navigator.sendBeacon(e,JSON.stringify(t)))return;console.warn("sendBeacon() didn't queue the request, falling back to fetch()")}fetch(e,{body:JSON.stringify(t),headers:{"Content-Type":"application/json"},keepalive:!0,method:"POST"}).catch(i=>console.error(`fetch() failed: ${i.message}`))}async function n(){if(!o&&n.lastPage===location.pathname)return s("Pathname has not changed");n.lastPage=location.pathname;let e=new URL(location.href),t=document.referrer?new URL(document.referrer):void 0;t&&(t.search="");let i={t:"PageView",u:e.href,h:o,r:t&&t.hostname!==e.hostname?t.href:void 0};c("https://collector.deco.cx/events",i)}(t=>t.lastPage=null)(n||={});var u=document.currentScript,o=r(u);if(window.history.pushState){let e=window.history.pushState;window.history.pushState=function(t,i,a){e.apply(this,[t,i,a]),n()},window.addEventListener("popstate",n)}document.visibilityState!=="visible"?document.addEventListener("visibilitychange",()=>{!n.lastPage&&document.visibilityState==="visible"&&n()}):n();})();