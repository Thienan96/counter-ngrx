import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { login, loginFailed, loginSuccessed } from "./login.action";

@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap(({ username, password }) => {
                return timer(1000).pipe(map(() => {
                    if (username === 'admin' && password === 'admin') {
                        return loginSuccessed({ username, password })
                    } else {
                        return loginFailed({ error: 'username or password incorrect' })
                    }
                }));
            })
        )
    )
}