const APIkey="d1845658f92b31c64bd94f06f7188c9c";
const API_link="https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric";
const apikey="863242cfb2b1d357e6093d9a4df19a4b";


let inp=document.querySelector('.search input');
let inpbtn=document.querySelector('.search button');



async function checkWeather(city){
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`);
    var data =await response.json();
    console.log(data);
    if(data.name==undefined){  //or if(response.status==404)
        document.querySelector('.error').style.cssText="display : block ";
        document.querySelector('.weather').style.display="none";
    }
    else{
        document.querySelector('.city h2').innerHTML=data.name;
        document.querySelector('.city h1').innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector('.col1 h1').innerHTML=data.main.humidity+"%";
        document.querySelector('.col2 h1').innerHTML=data.wind.speed+"km/h";
        document.querySelector('.weather').style.display="block";
        document.querySelector('.error').style.display="none";
    }
}
inpbtn.addEventListener("click",()=>{
    checkWeather(inp.value);
    inp.value='';
});