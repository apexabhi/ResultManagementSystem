import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareddataService } from 'src/app/shared/shareddata.service';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder, private router:Router, private share:ShareddataService,private api:ApiService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      userid:[''],
      pwd:['']
    })
    if(this.share.getUser()!==null){
      this.router.navigate(['teacher/records']);
    }
  }

  //function to check whether credentials entered are valid or not
  logIn(){
    this.api.getCredentials().subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.userid === this.loginForm.value.userid && a.pwd === this.loginForm.value.pwd
      })
      if(user || (this.loginForm.value.userid==="admin" && this.loginForm.value.pwd==="admin")){
        alert("Login successful");
        this.loginForm.reset();
        this.share.setUser(user);
        console.log(user);
        this.router.navigate(['teacher/records']);
      }
      else{
        alert("User not found!");
      }
    },
    err=>{
      alert("Error");
    }
    )
  }

}
