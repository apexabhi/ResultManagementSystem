import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { ShareddataService } from 'src/app/shared/shareddata.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-findresult',
  templateUrl: './findresult.component.html',
  styleUrls: ['./findresult.component.css']
})
export class FindresultComponent implements OnInit {

  searchForm!:FormGroup
  rdata!:any
  constructor(private formBuilder:FormBuilder,private api:ApiService, private share:ShareddataService, private router:Router) { }

  ngOnInit(): void {
    this.searchForm=this.formBuilder.group({
      rollno:[''],
      dob:['']
    })
  }

  //function to check whether result exists or not
  findResult(){
    this.api.getRecords().subscribe(res=>{
      const record=res.find((a:any)=>{
        return a.rollno===this.searchForm.value.rollno && a.dob===this.searchForm.value.dob
      })
      if(record){
        alert("Record Found");
        this.searchForm.reset();
        this.rdata=record;
        this.share.setStuRecord(this.rdata);
        this.router.navigate(['student/showresult']);
      }
      else{
        alert("No record found");
      }
    },
    err=>{
      alert("Some error occured");
    })
  }

}
