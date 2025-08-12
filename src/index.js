import "./styles.css"

console.log("test js")


async function fetchWeatherApiAsync(searchTerm = 'rouen') {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(searchTerm)}?unitGroup=us&key=FDCWNZ8N7997VKBEFJLLDZXYM&contentType=json`, { mode: "cors" });
    const dataApi = await response.json();
    return dataApi;
}

async function getgif(searchTerm = 'sunny') {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=lFYBk5P3EiVHuqWQdGsFKb504e7WUU11&s=${encodeURIComponent(searchTerm)}`, {mode: 'cors'});
    const gifData = await response.json();
    return gifData;
  }



async function run(){
    let searchTerm = 'miami'
    const value = await fetchWeatherApiAsync(searchTerm);
    const image = await getgif(value.currentConditions.conditions)
    console.log(value)
    console.log(value.address)
    console.log(value.currentConditions.temp)
    console.log(value.currentConditions.conditions)
    console.log(value.description);
    console.log(image.data.images.original.url)
    const mainContent = document.createElement("div")

    const imagePlaceDom = document.createElement("img")
    imagePlaceDom.src = image.data.images.original.url
    document.body.appendChild(mainContent)
    mainContent.appendChild(imagePlaceDom)
    
}
run()


