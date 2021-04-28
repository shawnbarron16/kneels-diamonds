import { KneelDiamonds } from "./KneelDiamonds.js"
import { addCustomOrder } from "./database.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()


document.addEventListener(
    "click",
    (clivkEvent) => {
        if (clivkEvent.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

document.addEventListener(
    "stateChanged",
    (event) => {
        renderAllHTML()
    }
)
