import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { counterReducer } from './counter/store/counter.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CounterModule,
    LoginModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    // Instrumentation must be imported after importing StoreModule
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }