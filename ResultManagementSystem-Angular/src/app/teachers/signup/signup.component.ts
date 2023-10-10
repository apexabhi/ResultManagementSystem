import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userid: [''],
      pwd: ['']

    })
  }

  //to add teacher user
  // signUp() {
  //   this.api.postCredentials(this.signupForm.value).subscribe(res => {
  //     alert("Registration successful");
  //     this.signupForm.reset();
  //     this.router.navigate(['teacher/login'])
  //   }
  //   )
  // }

}
