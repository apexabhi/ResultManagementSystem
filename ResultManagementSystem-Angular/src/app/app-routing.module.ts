import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './teachers/login/login.component';
import { SignupComponent } from './teachers/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './teachers/records/records.component';
import { AddrecordsComponent } from './teachers/records/addrecords/addrecords.component';
import { FindresultComponent } from './students/findresult/findresult.component';
import { ShowresultComponent } from './students/showresult/showresult.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LogoutComponent } from './logout/logout.component';

//routes used in the assignment
const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'teacher/login',component:LoginComponent
  },
  {
    path:'teacher/signup',component:SignupComponent
  },
  {
    path:'teacher/records',component:RecordsComponent
  },
  {
    path:'teacher/records/add',component:AddrecordsComponent
  },
  {
    path:'student/searchresult',component:FindresultComponent
  },
  {
    path:'student/showresult',component:ShowresultComponent
  },
  {
    path:'logout',component:LogoutComponent
  },
  {
    path:'**',component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
