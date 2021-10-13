import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CounterComponent } from "./counter.component";
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
        StoreModule.forRoot({ counter: counterReducer }),
    ],
    exports: [CounterComponent]
})
export class CounterModule { }
