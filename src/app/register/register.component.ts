import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userservice: UserService) { }



  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onSubmit(F: NgForm)
  {
    if (F.valid)
    {
    console.log(F.value);
    // tslint:disable-next-line: deprecation
    this.userservice.addNewUser(F.value).subscribe((res) => {
      console.log(res);
    }, (err) => {
        console.log(err);
    });
  }
  }

}
