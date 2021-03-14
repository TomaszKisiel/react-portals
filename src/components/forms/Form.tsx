import React, {useEffect, useState} from 'react'
import {FormEntryInterface} from "../../interfaces/FormEntry"

import Row from "./Row"
import "./Form.css"

type Props = {
    id: number
}

const Form = ({id}: Props) => {
    const [form, setForm] = useState<FormEntryInterface[]>([])

    console.log( id )

    useEffect(() => {
        const mockFetch = setTimeout(() => {
            if (id === 1) {
                setForm([
                    {role: "Master", assignees: ["John Doy", "Adam Smith"]},
                    {role: "Manager", assignees: [null, null, null]},
                    {role: "Support", assignees: ["Kali Ya", null, null, null]},
                    {role: "Back Office", assignees: ["Kali Ya", "Yuno Thacher"]},
                    {role: "Speaker", assignees: ["Rufus Alia", "Kimiko Satire"]}
                ])
            } else if (id === 2) {
                setForm([
                    {role: "Group I", assignees: ["John Doy", null, null, null]},
                    {role: "Group II", assignees: ["Rufus Alia", "Kimiko Satire", null, null]},
                    {role: "Group III", assignees: ["Kali Ya", null, null, null]},
                    {role: "Not grouped", assignees: ["Sari Yobuu", null, null, null]}
                ])
            }
        }, 1000)

        return () => clearTimeout(mockFetch)
    }, [])

    return (
        <form className="form">
            {form.map((row, index) => (
                <Row key={index} role={row.role} assignees={row.assignees}/>
            ))}
        </form>
    )
}

export default Form
