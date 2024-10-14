import { afterRender, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BaseService } from '../base.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  messages:any
  reflesh=true

  
  constructor(private base:BaseService)
    {
      afterRender(
        ()=> {if (this.reflesh) document.getElementById("vege")?.scrollIntoView(
          {behavior:"smooth",
          block:"start",
          inline:"nearest"}
        )}
      )


      this.base.getMessages().subscribe(
        (res:any)=>{
          if (this.reflesh){
            console.log("afterView:",this.reflesh)
            this.messages=[]
            for (const key in res) {
              let seged:any=res[key]
              seged.key=key
              this.messages.push(seged)            
            }
          }
        }
      )
  }
  

  deleteMessage(message:any){
    this.base.deleteMessage(message)
    this.reflesh=true;
  }
  updateMessage(message:any){
    this.base.updateMessage(message)
    this.reflesh=true;
  }
  klikTextArea(){
    this.reflesh=false;
    console.log("KlikTextArea",this.reflesh)
  }
}
