const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();

const lastupdated = document.querySelector("#lastupdated");
lastupdated.textContent = document.lastModified;


