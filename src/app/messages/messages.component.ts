import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  messages:any
  
  constructor(private base:BaseService){
      this.base.getMessages().subscribe(
        (res)=>this.messages=res
      )
  }
}
