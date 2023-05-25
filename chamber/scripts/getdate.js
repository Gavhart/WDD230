//Footer updated date

//Date displayed in the footer
let d = new Date();
document.querySelector('#copyrightyear').textContent = d.getFullYear();
const datefield = document.querySelector("#updated");

//current date with that object
const fulldate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full"
}).format(d);

datefield.innerHTML = `<em>${fulldate}</em>`;