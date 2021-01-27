import { useMessages } from "./MessageProvider.js"
import { Message } from "./Message.js"

const contentTarget = document.querySelector(".messages")

/*
    COMPONENT FUNCTION
*/
export const MessageList = () => {
    const allMessages = useMessages()
    render(allMessages)
}

/*
    RENDERING FUNCTION
*/
const render = messageArray => {
    const convertedMessages = messageArray.map(messageObject => {
        const messageHTML = Message(messageObject)
        return messageHTML
    })
    const combinedSections = convertedMessages.join("")
    contentTarget.innerHTML = combinedSections
}

/*
    Color the messages when one of the buttons in the ThemeButtons
    component is clicked.
*/
const eventHub = document.querySelector(".container")

eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color

    contentTarget.classList = []
    contentTarget.classList.add(color)
})