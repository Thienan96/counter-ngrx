import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.reducer";

export const selectCount = createFeatureSelector<CounterState>('counter');

export const selectValue = createSelector(
    selectCount,
    couterState => couterState.value
)

export const selectIncrementCount = createSelector(
    selectCount,
    countState => countState.incrementCount
)

export const selectDecrementCount = createSelector(
    selectCount,
    countState => countState.decrementCount
)