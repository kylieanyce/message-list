const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".themes")


//This event hub is here because the button html lives here. This event 
//is waiting for a button click on a specific color
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("btnTheme--")) {
        const [prefix, chosenColor] = clickEvent.target.id.split("--")

        const colorChosenEvent = new CustomEvent("colorChosen", {
            detail: {
                color: chosenColor
            }
        })
//The event hub with a dispatch sends the detail to the other event hub
//to then be rendered on DOM
        eventHub.dispatchEvent(colorChosenEvent)
    }
})

export const ThemeButtons = () => {
    contentTarget.innerHTML = `
        <button class="btnTheme" id="btnTheme--red">Red</button>
        <button class="btnTheme" id="btnTheme--purple">Purple</button>
        <button class="btnTheme" id="btnTheme--blue">Blue</button>
        <button class="btnTheme" id="btnTheme--green">Green</button>
    `
}