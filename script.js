const form = document.querySelector("form")
const imgContainer = document.querySelector(".img-container")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let query = form.querySelector("input").value;
    if(query==""){
        query="marvel"
    }
    tvMazeApi(query)
})

async function tvMazeApi(query){
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const movies = await req.json()
    makeImages(movies)
}

function makeImages(movies){
    for(let movie of movies){
        let imgSRC = movie.show.image.medium
        const image = document.createElement("img");
        imgContainer.appendChild(image)
        image.src = imgSRC;
    }
}