import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrl: './send.component.css'
})
export class SendComponent {
  message:string=""
  userName=""
  constructor(private base:BaseService, private auth:AuthService){
    this.auth.getUserName().subscribe(
      (res)=>this.userName=res
    )
  }

  pushMessage(){
    if (this.userName!=""){
      this.base.pushMessage(this.userName, this.message)
      this.message=""
    }
  }
}
