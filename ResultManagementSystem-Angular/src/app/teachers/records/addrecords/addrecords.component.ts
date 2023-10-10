import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { ShareddataService } from 'src/app/shared/shareddata.service';
@Component({
  selector: 'app-addrecords',
  templateUrl: './addrecords.component.html',
  styleUrls: ['./addrecords.component.css']
})
export class AddrecordsComponent implements OnInit {

  addRecordsForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService, private share: ShareddataService) { }

  ngOnInit(): void {
    this.addRecordsForm = this.formBuilder.group({
      rollno: [''],
      name: [''],
      dob: [''],
      score: ['']

    })
    if (this.share.getUser() === null) {
      this.router.navigate(['']);
    }
  }

  //to insert records
  addRecords() {
    this.api.getRecords().subscribe(res => {
      const record = res.find((a: any) => {
        return a.rollno === this.addRecordsForm.value.rollno
      })
      if (record) {
        alert("This Roll No already exists! Please enter new details");
        this.addRecordsForm.reset();
      }
      else {
        this.api.postRecords(this.addRecordsForm.value).subscribe(res => {
          alert("Record added successfully!");
          this.addRecordsForm.reset();
          this.router.navigate(['teacher/records']);
        }
        )
      }
    },
      err => {
        alert("Some error occured");
      })
  }

}
