import {MessageInterface} from "../../interfaces/Message"

export enum ActionTypes {
    SET_MESSAGES,
    FETCH_MESSAGES
}

export type Action =
    { type: ActionTypes.SET_MESSAGES, messages: Array<MessageInterface> } |
    { type: ActionTypes.FETCH_MESSAGES }

export const setMessages = (messages: Array<MessageInterface>): Action => ({
    type: ActionTypes.SET_MESSAGES,
    messages
})

export const fetchMessages = (): Action => ({
    type: ActionTypes.FETCH_MESSAGES,
})
