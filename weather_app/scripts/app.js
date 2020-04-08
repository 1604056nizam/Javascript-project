 const cityform=document.querySelector('form');
 const card= document.querySelector(".card");
 const details= document.querySelector(".details");
 const time= document.querySelector("img.time");
 const icon= document.querySelector(".icon img");


 const updatUI=(data)=>{
     //const citydets= data.citydets;
     //const weather=data.weather;


     // destructuring the variables which exactly works like the previous 2 lines
     const {citydets,weather}=data;
     console.log(citydets,weather);


    //udate detail class of index file
    details.innerHTML=`
    <h5 class="my-3">${citydets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>
            </div>
    `


    //vanishing the display none class
    if(card.classList.contains('d-none'))
    {
        card.classList.remove('d-none');
    }

    //image icon
    const iconsrc=`img/icons/${weather.WeatherIcon}.svg`;
    //console.log(weather.WeatherIcon);
    icon.setAttribute('src',iconsrc);
 

   // let timesrc=null;
    const timesrc=(weather.IsDayTime==true)?'img/day.svg':'img/night.svg';
    /*if(weather.IsDayTime==true)
    {
        timesrc='img/day.svg'
    }
    else
    {
        timesrc='img/night.svg'
        
    }*/
    time.setAttribute('src',timesrc);


 };

const updatecity=async (city)=>{


    const citydets= await getCity(city);
    const weather= await getwhether(citydets.Key);

    return{
        citydets:citydets,
        weather:weather
    };
}


 cityform.addEventListener('submit',e=>{
     //prevent default action
     e.preventDefault();

     //get city value
     const city=cityform.city.value.trim();
     cityform.reset();

    //update the ui with new city 
    updatecity(city)
    .then(data=>updatUI(data))
    .catch(err =>console.log(err));

 })