import React, {useEffect, useRef, useState} from "react"
import FormPortal from "../forms/FormPortal"

type Props = {
    title: string,
    content: string
}

const Message = ({ title, content }: Props) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [ formPortals, setFormPortals ] = useState<any[]>([])

    useEffect( () => {
        if( contentRef.current ) {
            const forms = contentRef.current.querySelectorAll<HTMLDivElement>("[data-form-id]")


            const portals: any[] = []
            forms.forEach( ( form, index ) => {
                const id = parseInt( form.dataset.formId || "" )

                if ( id ) {
                    portals.push(<FormPortal key={index} container={ form } formId={ id }   />)
                }
            } )
            setFormPortals( portals )
        }
    }, [contentRef ])

    return (
        <article className="message">
            <header className="message__header">{ title }</header>
            <div className="message__divider"/>
            <main ref={ contentRef } className="message__content" dangerouslySetInnerHTML={{ __html: content }}/>
            { formPortals }
        </article>
    )
}

export default Message
