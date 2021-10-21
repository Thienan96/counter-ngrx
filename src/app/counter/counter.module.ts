import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CounterComponent } from "./counter.component";
import { CounterEffects } from "./store/counter.effect";
import { counterReducer } from "./store/counter.reducer";

const routes: Routes = [
    {
        path: '',
        component: CounterComponent
    }
]
@NgModule({
    declarations: [
        CounterComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([CounterEffects]),
        StoreModule.forFeature('counter', counterReducer),
    ],
    exports: [CounterComponent]
})
export class CounterModule { }
