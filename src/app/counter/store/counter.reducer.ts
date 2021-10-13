import { createReducer, on } from "@ngrx/store"
import { decrement, increment } from "./counter.actions"

export interface CounterState {
    incrementCount: number;
    decrementCount: number;
    value: number
}
export const initialState: CounterState = {
    incrementCount: 0,
    decrementCount: 0,
    value: 0
}

export const counterReducer = createReducer(
    initialState,
    on(increment, (state: CounterState) => ({ ...state, value: state.value + 1, incrementCount: state.incrementCount + 1 })),
    on(decrement, (state: CounterState) => ({ ...state, value: state.value - 1, decrementCount: state.decrementCount + 1 }))
)