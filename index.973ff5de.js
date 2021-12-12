var links=document.querySelectorAll(".menu li a");function getActiveLink(e){var t=e.currentTarget.location.hash;links.forEach((function(e){e.classList[e.hash===t?"add":"remove"]("active"),t||links.item("#about").classList.add("active")}))}window.addEventListener("hashchange",getActiveLink),window.addEventListener("load",getActiveLink);
//# sourceMappingURL=index.973ff5de.js.map
