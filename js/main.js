import{ getAllMissions} from "./modules/missions.js";

let dataCrew
let body = document.querySelector("body")
dataCrew.forEach(val => {
    plantilla+= `
    <div>
        <img src="${val.image}"referrerpolicy="no-referrer">
        <p>${val.name}</p>
    </div>` 
})