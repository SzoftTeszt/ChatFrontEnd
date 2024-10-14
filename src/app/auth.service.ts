import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  username=new BehaviorSubject("");

  constructor() { }

  getUserName(){
    return this.username
  }
  setUserName(userName:string){
    this.username.next(userName)
  }

}
