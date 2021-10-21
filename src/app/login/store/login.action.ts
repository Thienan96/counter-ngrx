import { createAction, props } from "@ngrx/store";

export const login = createAction('[Login] login', props<{ username: string, password: string }>());
export const loginSuccessed = createAction('[Login] login successed', props<{ username: string, password: string }>());
export const loginFailed = createAction('[Login] login failed', props<{ error: string }>());
