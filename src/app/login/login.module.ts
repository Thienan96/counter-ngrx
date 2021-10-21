import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "./login.component";
import { LoginEffects } from "./store/login.effect";
import { loginReducer } from "./store/login.reducer";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
]
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([LoginEffects]),
        StoreModule.forFeature('login', loginReducer),
    ],
    exports: [LoginComponent]
})
export class LoginModule { }
