requestAnimationFrame(() => { document.querySelector("#year_container").innerHTML = new Date().getFullYear() });
requestAnimationFrame(() => { document.querySelector("#lastModified").innerHTML = "Last Modification: " + document.lastModified });


