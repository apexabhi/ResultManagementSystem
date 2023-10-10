import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecordsComponent } from './records/records.component';
import { AddrecordsComponent } from './records/addrecords/addrecords.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    RecordsComponent,
    AddrecordsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent, SignupComponent
  ]
})
export class TeachersModule { }
