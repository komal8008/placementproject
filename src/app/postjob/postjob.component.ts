import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  constructor(public userservice: UserService) { }

  ngOnInit(): void {
  }
postjob(F:NgForm)
{
  console.log(F.value);
  this.userservice.posting(F.value).subscribe((res) => {
    console.log(res);
  }, (err) => {
      console.log(err);
  });
}
}
