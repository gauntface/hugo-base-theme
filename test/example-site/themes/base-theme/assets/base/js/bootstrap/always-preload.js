var e;e=function(){document.body.classList.add("u-js-loaded"),function(){const e=document.querySelectorAll("[data-src]");for(const t of e)t.src=t.dataset.src}(),function(){const e=document.querySelectorAll('link[rel="preload"][as="style"]');for(const t of e){const e=document.createElement("link");e.href=t.href,e.rel="stylesheet",document.head.appendChild(e)}}()},window.addEventListener("load",e),"complete"==document.readyState&&e();
