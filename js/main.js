import{ getAllMissions} from "./modules/missions.js";

let dataCrew
let body = document.querySelector("body")
dataCrew.forEach(val => {
    plantilla+= `
    <div>
        <img src="${val.image.replace("https://i.imgur.com/","https://imgur.com")}">
        <p>${val.name}</p>
    </div>    
})