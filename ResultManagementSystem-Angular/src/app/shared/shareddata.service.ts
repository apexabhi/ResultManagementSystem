//service to share data among componenets
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {
  sturecord!:any
  sessionuser!:any
  constructor() { }
  setStuRecord(data:any){
    localStorage.setItem('recobj',JSON.stringify(data));
    var temp=JSON.parse(localStorage.getItem('recobj')||'[]');
    this.sturecord=temp;
    console.log(temp.name);
  }

  getStuRecord(){
    this.sturecord=JSON.parse(localStorage.getItem('recobj')||'[]');
    return this.sturecord;
  }

  setUser(data:any){
    localStorage.setItem('user',JSON.stringify(data));
    var temp=JSON.parse(localStorage.getItem('user')||'[]');
    this.sessionuser=temp;
  }

  getUser(){
    this.sessionuser=JSON.parse(localStorage.getItem('user')||'[]');
    return this.sessionuser;
  }

}
