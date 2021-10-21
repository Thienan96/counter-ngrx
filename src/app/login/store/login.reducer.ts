import { createReducer, on } from "@ngrx/store"
import { loginFailed, loginSuccessed } from "./login.action"

export interface LoginState {
    username: string,
    password: string,
    error: string,
}

export const initLoginState: LoginState = {
    username: '',
    password: '',
    error: ''
}

export const loginReducer = createReducer(
    initLoginState,
    on(loginSuccessed, (state: LoginState, { username, password }) => ({ ...state, username, password })),
    on(loginFailed, (state: LoginState, { error }) => ({ ...state, error: error }))
)