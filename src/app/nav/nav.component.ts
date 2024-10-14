import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  userName:any
  constructor(private auth:AuthService){
    auth.getUserName().subscribe(
      (res)=>this.userName=res
    )
  }

  logout(){
    this.auth.setUserName("")
  }
}
