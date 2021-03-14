import React from "react"

type Props = {
    role: string,
    assignees: Array<string | null>
}

const Row = ({role, assignees}: Props) => {
    return (
        <div className="form__row">
            <div className="row__role">{role}</div>
            <div className="row__assignee">
                {assignees.map((assignee, index) =>
                    assignee ? (
                        <div key={index}>{assignee}</div>
                    ) : (
                        <div><i>empty</i></div>
                    )
                )}
            </div>
        </div>
    )
}

export default Row
