import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public userservice: UserService,
    private router: Router) { }

  showmessage = false;
  errorMessage = false;

  resData: any = [];
  error = '';
  id!: string;

    ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  login(f: NgForm)
  {
    console.log(f.value);
    this.userservice.loginUser(f.value).subscribe((res)=>{
      console.log(res);
      this.resData = res;
      // console.log(this.resData.token);
      this.userservice.setToken(this.resData.token);
      this.id = this.resData.data._id;
      // this.router.navigateByUrl('/profile');
      this.router.navigate(['/'],{"queryParams":{id: this.id}});

this.showmessage=true;
    },
    (err)=>{
      this.errorMessage=true;
      this.error=err;
      console.log(err);
      this.simpleAlert();    })
  }
  simpleAlert(){
    Swal.fire('OOPS!!!     Please Enter correct password');
  }
}
