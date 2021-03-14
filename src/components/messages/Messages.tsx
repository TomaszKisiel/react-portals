import React, {useEffect, useRef, useState} from "react"
import Message from "./Message"
import {MessageInterface} from "../../interfaces/Message"
import "./Messages.css"

type Props = {
    entries: Array<MessageInterface>
}

const Messages = ({entries}: Props) => {
    return (
        <section>
            {entries.map((message, index) => (
                <Message key={index} {...message}/>
            ))}
        </section>
    )
}

export default Messages
