import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from './store/login.action';
import { selectValue } from './store/login.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  loginState$ = this._store.select(selectValue);
  constructor(private _formBuilder: FormBuilder, private _store: Store) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.formLogin = this._formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    this._store.dispatch(login({ ...this.formLogin.value }));
  }

}