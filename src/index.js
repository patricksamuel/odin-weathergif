import "./styles.css"

console.log("test js")


async function fetchWeatherApiAsync(searchTerm = 'rouen') {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchTerm}?unitGroup=us&key=FDCWNZ8N7997VKBEFJLLDZXYM&contentType=json`, { mode: "cors" });
    const dataApi = await response.json();
    return dataApi;
}

async function getvalue(){
    const value = await fetchWeatherApiAsync('rouen');
    console.log(value)
    console.log(value.address)
    console.log(value.currentConditions.temp)
    console.log(value.description);
    
}
getvalue()


