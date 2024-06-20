import { useState } from 'react'
import FormMessage from './FormMessage'

const AppMessage = () => {
    const [messages, setMessages] = useState([
        {text: 'Oi, sou a primeira mensagem', sending: false, key: 1},
    ])

    async function deliverMessage(message) {
        // hook
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // dado final
        return message
    }

    async function sendMessage(formData) {
        const sentMessage = await deliverMessage(formData.get('message'))

        setMessages((messages) => [
            ...messages, 
            { text: sentMessage, sending: false },
        ])
    }

  return (
    <FormMessage messages={messages} sendMessage={sendMessage}/>
  )
}

export default AppMessage
