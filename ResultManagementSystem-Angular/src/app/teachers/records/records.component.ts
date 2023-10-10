import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShareddataService } from 'src/app/shared/shareddata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  recordsData!: any
  editRecordsForm!: FormGroup
  id: any
  constructor(private api: ApiService, private formBuilder: FormBuilder, private share: ShareddataService, private router: Router) { }

  ngOnInit(): void {
    this.getAllRecords();
    this.editRecordsForm = this.formBuilder.group({
      rollno: [''],
      name: [''],
      dob: [''],
      score: ['']
    })
    this.recordsData = []
    if (this.share.getUser() === null) {
      this.router.navigate(['']);
    }
  }

  //to fetch records
  getAllRecords() {
    this.api.getRecords()
      .subscribe(res => {
        this.recordsData = res;
      })
  }

  //to delete records
  deleteRecord(data: any) {
    this.api.deleteRecord(data.id)
      .subscribe(res => {
        alert("Record deleted successfully!");
        this.getAllRecords();
      })
  }

  //to have existing values on edit form
  writeRecord(data: any) {
    this.id = data.id;
    this.editRecordsForm.controls['rollno'].setValue(data.rollno);
    this.editRecordsForm.controls['name'].setValue(data.name);
    this.editRecordsForm.controls['dob'].setValue(data.dob);
    this.editRecordsForm.controls['score'].setValue(data.score);
  }

  //to update/edit record
  updateRecord() {
    this.api.updateRecord(this.editRecordsForm.value, this.id)
      .subscribe(res => {
        alert("Updated successfully!");
        let ref = document.getElementById("closeform")
        ref?.click();
        this.editRecordsForm.reset();
        this.getAllRecords();
      })
  }
}
