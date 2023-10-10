import { Component, OnInit } from '@angular/core';
import { ShareddataService } from '../shared/shareddata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private share: ShareddataService, private router: Router) { }

  //logout fumctionality
  ngOnInit(): void {
    this.share.setUser(null);
    console.log(this.share.getUser());
    this.router.navigate(['']);
  }

}
