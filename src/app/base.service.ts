import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  url="http://172.16.16.148:7178/api/Messages/"
  firebaseUrl="https://chat-4b282-default-rtdb.europe-west1.firebasedatabase.app/messages"
  messages= new Subject()

  constructor(private http:HttpClient) { 
    // this.loadMessages();
    setInterval(
    ()=>this.http.get(this.firebaseUrl+".json").forEach(
      (res)=>{this.messages.next(res)}), 1000)

    // setInterval(()=>{
    //   this.http.get(this.firebaseUrl+".json").forEach(
    //     (res)=>{this.messages.next(res)}
    //   )
    // },1000)

  }

  pushMessage(message:string){
    var body={username:"JAttila", uzi:message}
    this.http.post(this.firebaseUrl+".json", body).forEach(
      (res)=>console.log("Sikeres üzenetüldés: ", res)
    )
  }

  // loadMessages(){
  //   console.log("this", this)
  //   this.http.get(this.url).forEach(
  //     (res)=>this.messages.next(res)
  //   )
  // }
  getMessages(){
    return this.messages
  }

  deleteMessage(message:any){
    this.http.delete(this.firebaseUrl+"/"+message.key+".json").forEach(
      (res)=>console.log("Törlés: ",res)
    )
  }
  updateMessage(message:any){
    let key=message.key
    delete message.key
    this.http.put(this.firebaseUrl+"/"+key+".json", message).forEach(
      (res)=>console.log("Update: ",res)
    )
  }
}
