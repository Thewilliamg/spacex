import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";
import { 
    nameRockets 
} from "./title.js";

import { 
    tableRocketColum1, 
    tableRocketColum2
} from "./tables.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum,
    informRocketStages
} from "./inform.js";
import { 
    imageRockets 
} from "./card.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
} from "../modulesComponents/progressBar.js";
///
import { 
    getAllCapsules 
} from "../modules/capsules.js";
import {
    render__description__main,
    render__description__values
} from "../modulesComponents/rocketDescription.js"

export const load = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = `
        <div class="load"></div>
    `;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;


    
}