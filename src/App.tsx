import React, {useEffect, useReducer} from 'react'
import Header from "./components/common/Header"
import Messages from "./components/messages/Messages"
import './App.css'

import {reducer} from "./reducers/messages/reducer"
import {initialState} from "./reducers/messages/initial"
import {setMessages} from "./reducers/messages/action"
import Loader from "./components/common/Loader"

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const mockFetch = setTimeout(() => {
            dispatch(setMessages([
                {
                    title: "With forms",
                    content: "<div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <strong style='color: red'>eiusmod tempor</strong> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <i>nostrud exercitation</i> ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><div data-form-id='1'></div><div data-form-id='2'></div><div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div></div>"
                },
                {
                    title: "Without form",
                    content: "<div><div>Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></div>"
                }
            ]))
        }, 1500)

        return () => clearTimeout(mockFetch)
    }, [])

    return (
        <>
            <Header>Messages</Header>
            {state.fetching && <Loader/>}
            {!state.fetching && <Messages entries={state.messages}/>}
        </>
    )
}

export default App
