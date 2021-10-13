import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { asyncMultiply, decrement, increment, multiply, reset } from './store/counter.actions';
import { selectDecrementCount, selectIncrementCount, selectValue } from './store/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  value$ = this.store.select(selectValue);
  incrementCount$ = this.store.select(selectIncrementCount);
  decrementCount$ = this.store.select(selectDecrementCount);
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  multiply() {
    const times = Math.floor(Math.random() * 10) + 1;
    console.log('multiply number: ', times);
    this.store.dispatch(multiply({ multiplier: times }))
  }

  asyncmultiply() {
    const times = Math.floor(Math.random() * 10) + 1;
    console.log('multiply number: ', times);
    this.store.dispatch(asyncMultiply({ multiplier: times }))
  }

  reset() {
    this.store.dispatch(reset());
  }
}
