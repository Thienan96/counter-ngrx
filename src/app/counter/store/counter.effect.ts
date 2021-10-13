import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { asyncMultiply, asyncMultiplySuccess } from "./counter.actions";
import { selectValue } from "./counter.selector";
import { map, switchMap } from "rxjs/operators"
import { timer } from "rxjs";

@Injectable()
export class CounterEffects {
    constructor(
        private actions$: Actions,
        private store: Store
    ) { }
    multiply$ = createEffect(() =>
        this.actions$.pipe(
            ofType(asyncMultiply),
            concatLatestFrom(() => this.store.select(selectValue)),
            switchMap(([{ multiplier }, currentValue]) => {
                return timer(1000).pipe(map(() => asyncMultiplySuccess({ value: multiplier * currentValue })))
            })
        )
    );

}