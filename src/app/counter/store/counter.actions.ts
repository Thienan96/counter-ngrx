import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter] increment');
export const decrement = createAction('[Counter] decrement');
export const multiply = createAction('[Counter] multiply', props<{ multiplier: number }>());
export const asyncMultiply = createAction('[Counter] async multiply', props<{ multiplier: number }>());
export const asyncMultiplySuccess = createAction('[Counter] async multiply success', props<{ value: number }>()); // value is the computed value
export const reset = createAction('[Counter] reset');
