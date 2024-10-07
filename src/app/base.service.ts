import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  url="http://172.16.16.148:7178/api/Messages/"
  messages= new Subject()

  constructor(private http:HttpClient) { 
    this.loadMessages();
    
    setInterval(()=>{
      this.http.get(this.url).forEach(
        (res)=>this.messages.next(res)
      )
    },1000)

  }

  pushMessage(message:string){
    var body={username:"JAttila", uzi:message}
    this.http.post(this.url, body).forEach(
      (res)=>console.log("Sikeres üzenetüldés: ", res)
    )
  }

  loadMessages(){
    console.log("this", this)
    this.http.get(this.url).forEach(
      (res)=>this.messages.next(res)
    )
  }
  getMessages(){
    return this.messages
  }

}
