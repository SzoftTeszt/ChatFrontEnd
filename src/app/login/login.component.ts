import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  host:{
    class:'wrapper'
  },
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName=""

  constructor(private auth:AuthService, private router:Router){}

  login(){
    this.auth.setUserName(this.userName)
    this.router.navigate(["chat"])
  }
}
