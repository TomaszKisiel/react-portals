import React from "react"
import {createPortal} from "react-dom"
import Form from "./Form"

type Props = {
    container: HTMLDivElement,
    formId: number
}

const FormPortal = ({ container, formId}: Props) => {
    return createPortal(
        <Form id={ formId }/> ,
        container
    )
}

export default FormPortal
