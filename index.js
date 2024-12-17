const flag=document.querySelector('.flag');
const form =document.querySelector('form');
const contry=document.querySelector('.country');
const subregion=document.querySelector('.subregion');


form.addEventListener('submit', function(e){
    e.preventDefault();
    const input =document.querySelector('.input-box').value;

    fetch(`https://restcountries.com/v3.1/name/${input}`)
    .then(function(data){
        return data.json();
    })
    .then(function(jsondata){
        const flagUrl = jsondata[0].flags.png;
        flag.src = flagUrl;
        contry.innerHTML=jsondata[0].name.common;
        subregion.innerHTML=jsondata[0].subregion;
    });
});