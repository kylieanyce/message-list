import { useMessages } from "./MessageProvider.js"
import { Message } from "./Message.js"

const contentTarget = document.querySelector(".messages")


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

const eventHub = document.querySelector(".container")

eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color
    // console.log(event.detail.color)
    contentTarget.classList = []
    contentTarget.classList.add(color)
})