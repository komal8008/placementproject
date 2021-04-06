import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-wantjob',
  templateUrl: './wantjob.component.html',
  styleUrls: ['./wantjob.component.css']
})
export class WantjobComponent implements OnInit {
  jobdata:any=[];
  constructor(private userservice:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

      this.userservice.getdata('value').subscribe((res)=>{

        this.jobdata=res;


        console.log(res);
      });
    }
  }
