const local = 'json/names.json';
fetch(local)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const busi = jsonObject['business']; 
    for (let i = 0; i < busi.length; i++)
  {
        let details = document.createElement('section');
         
        details.setAttribute('class', 'item' + i);

         let h2 = document.createElement('h2');
         let h3 = document.createElement('p');
         let p4 = document.createElement('p');
         let image = document.createElement('img');      

         h2.textContent = busi[i].name;
         h3.textContent = "* Website: " + busi[i].website;
         p4.textContent = "* Phone Number: " + busi[i].number;
        
         image.setAttribute('src', "images/" + busi[i].logo);
         image.setAttribute('alt', "photo of " + busi[i].name);

         details.appendChild(h2);
         details.appendChild(h3);
         details.appendChild(p4);
        details.appendChild(image);

       document.querySelector('div.data').appendChild(details);
   }
  });