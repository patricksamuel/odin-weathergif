import "./styles.css"

console.log("test js")


async function fetchWeatherApiAsync(searchTerm = 'rouen') {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(searchTerm)}?unitGroup=us&key=FDCWNZ8N7997VKBEFJLLDZXYM&contentType=json`, { mode: "cors" });
    const dataApi = await response.json();
    return dataApi;
}

async function getgif(searchTerm = 'sunny') {
    //const response = await fetch(`https://api.giphy.com/v2/emoji?api_key=lFYBk5P3EiVHuqWQdGsFKb504e7WUU11&s=${encodeURIComponent(searchTerm)}`, {mode: 'cors'});
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=lFYBk5P3EiVHuqWQdGsFKb504e7WUU11&s=${encodeURIComponent(searchTerm)}`, {mode: 'cors'});

    const gifData = await response.json();
    return gifData;
  }



function run(){
    let searchTerm = ''

    const mainContent = document.querySelector("#heroContent")
    const generatedContent = document.createElement("div");
    mainContent.appendChild(generatedContent);
    const mainTitle = document.querySelector("#mainTitle")
    
    const inputDom = document.querySelector("#inputDom")
    const searchButton = document.querySelector("#searchButton")
    searchButton.addEventListener("click",async (e) => {
        e.preventDefault()
        generatedContent.textContent='';
        console.log("search utton clicked");
        searchTerm = inputDom.value;
        console.log(searchTerm)
        const value = await fetchWeatherApiAsync(searchTerm);
        const image = await getgif(value.currentConditions.conditions);
        console.log(value)
        console.log(value.address)
        console.log(value.currentConditions.temp)
        console.log(value.currentConditions.conditions)
        console.log(value.description);
        console.log(image.data.images.original.url)

        const imagePlaceDom = document.createElement("img")
        imagePlaceDom.src = image.data.images.original.url;
        generatedContent.appendChild(imagePlaceDom);
        mainTitle.textContent = " It is "+value.currentConditions.conditions+" in "+value.address;

    })
    console.log("end of function");

}
run()


