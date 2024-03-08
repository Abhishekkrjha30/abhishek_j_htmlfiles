const apikey="46d04397a371b492c079baa2d04dbc02";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon=document.querySelector(".weatherimg");

async function checkweather(city){
    const response = await fetch(apiurl +city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    
    if(data.weather[0].main=="Clouds"){
        weathericon.src="./weatherImg/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="./weatherImg/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="./weatherImg/rain.png"
    }
    else if(data.weather[0].main=="Snow"){
        weathericon.src="./weatherImg/snow.png"
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="./weatherImg/mist.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="./weatherImg/drizzle.png"
    }
    document.querySelector(".weather").style.display="block";
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value); 

})
