import React from "react"
import "./Header.css"

const Header = ({ children }: React.PropsWithChildren<any>) => {
    return (
        <header className="header">
            { children }
        </header>
    )
}

export default Header
