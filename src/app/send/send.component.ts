import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrl: './send.component.css'
})
export class SendComponent {
  message:string=""

  constructor(private base:BaseService){}

  pushMessage(){
    this.base.pushMessage(this.message)
    this.message=""
  }
}
