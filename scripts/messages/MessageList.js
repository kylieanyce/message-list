import { useMessages } from "./MessageProvider.js"
import { Message } from "./Message.js"

const contentTarget = document.querySelector(".messages")
const eventHub = document.querySelector(".container")


export const MessageList = () => {
    const allMessages = useMessages()
    render(allMessages)
}


const render = messageArray => {
    const convertedMessages = messageArray.map(messageObject => {
        const messageHTML = Message(messageObject)
        return messageHTML
    })
    const combinedSections = convertedMessages.join("")
    contentTarget.innerHTML = combinedSections
}

//This event hub is here listening for what color was chosen, 
//so it can be used in the render and messageList functions
//to render to DOM
eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color
    // console.log(event.detail.color)
    contentTarget.classList = []
    contentTarget.classList.add(color)
})