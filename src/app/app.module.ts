import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { counterReducer } from './counter/store/counter.reducer';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
  }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CounterModule,
    RouterModule.forRoot(routes),
    // Instrumentation must be imported after importing StoreModule
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }