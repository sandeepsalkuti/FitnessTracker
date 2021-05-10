import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthService } from '../auth.service';
import { UIService } from '../../shared/ui.service';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;
  isLoading$: Observable<boolean>;
  userData: {}

  constructor(
    private authService: AuthService,
    private uiService: UIService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      name: form.value.name,
      birthdate: form.value.birthdate,
      tel: form.value.tel,
      email: form.value.email,
      password: form.value.password
    });
    this.userData = {
      name: form.value.name,
      birthdate: form.value.birthdate,
      tel: form.value.tel,
      email: form.value.email,
      }
      this.addUser(this.userData);
    // localStorage.setItem('userData',JSON.stringify(this.userData));
    // JSON.parse(localStorage.getItem('userData'));
  }
  addUser(user){
    let users=[];
    if(localStorage.getItem('userData')){
      users = JSON.parse(localStorage.getItem('userData'));
      users = [user,...users];
    }
    else{
      users=[user];
    }
    localStorage.setItem('userData',JSON.stringify(users));
  }
}
