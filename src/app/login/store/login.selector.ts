import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "./login.reducer";

export const selectLogin = createFeatureSelector<LoginState>('login');

export const selectValue = createSelector(
    selectLogin,
    loginStatte => loginStatte
)