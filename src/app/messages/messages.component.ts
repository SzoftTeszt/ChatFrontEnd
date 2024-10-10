import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

  
  constructor(private base:BaseService, 
    private scroller:ViewportScroller, private router:Router){
      this.base.getMessages().subscribe(
        (res:any)=>{
          this.messages=[]
          for (const key in res) {
            // console.log("Key:", key)
            let seged:any=res[key]
            seged.key=key
            // console.log("Segéd",seged)
            this.messages.push(seged)
              // const element = object[key];
              
           
          }
        }
      )
  }
  le(){
    // this.router.navigate([],{fragment:"#vege"})
    let vmi=document.getElementById("vege")
    console.log("vmi", vmi)
    window.scrollTo(0, (window.document.body.scrollHeight - window.innerHeight));
    // vmi?.scrollIntoView({
    //   behavior:"smooth",
    //   block:"start",
    //   inline:"nearest"
    // })
    // this.scroller.scrollToAnchor("#vege")
  }

  deleteMessage(message:any){
    this.base.deleteMessage(message)
  }
  updateMessage(message:any){
    this.base.updateMessage(message)
  }
  klikTextArea(){
    console.log("Klikk")
  }
}
