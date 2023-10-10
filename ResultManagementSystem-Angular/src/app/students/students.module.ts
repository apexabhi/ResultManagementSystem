import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsRoutingModule } from './students-routing.module';
import { FindresultComponent } from './findresult/findresult.component';
import { ShowresultComponent } from './showresult/showresult.component';
@NgModule({
  declarations: [
    FindresultComponent,
    ShowresultComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
