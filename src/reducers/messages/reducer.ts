import {Action, ActionTypes} from "./action"
import {MessageInterface} from "../../interfaces/Message"

export type State = {
    messages: Array<MessageInterface>,
    fetching: boolean
}

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionTypes.SET_MESSAGES: {
            return {
                ...state,
                fetching: false,
                messages: action.messages
            }
        }
        case ActionTypes.FETCH_MESSAGES: {
            return {
                ...state,
                fetching: true
            }
        }
        default:
            return state
    }
}

