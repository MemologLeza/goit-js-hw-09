!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body"),a=null;function r(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.setAttribute("disabled","disabled"),t.addEventListener("click",(function(){a=setInterval(r,1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(a),e.setAttribute("disabled","disabled"),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.51758de8.js.map