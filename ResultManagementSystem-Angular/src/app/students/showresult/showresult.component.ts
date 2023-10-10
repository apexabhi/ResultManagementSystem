import { Component, OnInit} from '@angular/core';
import { ShareddataService } from 'src/app/shared/shareddata.service';
@Component({
  selector: 'app-showresult',
  templateUrl: './showresult.component.html',
  styleUrls: ['./showresult.component.css']
})
export class ShowresultComponent implements OnInit {

  studentrecord!:any
  constructor(private share:ShareddataService) { }

  ngOnInit(): void {
    this.studentrecord=this.share.getStuRecord();
     console.log(this.studentrecord);
  }


}
