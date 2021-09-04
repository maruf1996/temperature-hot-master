const API_KEY=`ef7f01762e0ed77da84925e5ea5d348d`;
const searchTemperature=()=>{
    const city=document.getElementById('city_name').value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);

    fetch(url)
    .then(res=> res.json())
    .then(data=>displayTemperatue(data))
}

const setInnerText=(id,text)=>{
    document.getElementById(id).innerText=text;
}

const displayTemperatue=temperature=>{
    setInnerText('city',temperature.name);
    setInnerText('temperature',temperature.main.temp);
    setInnerText('condition',temperature.weather[0].main);
    console.log(temperature);
    // set weather icon 
    const url=`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const img=document.getElementById('weather_icon');
    img.setAttribute('src',url);
}