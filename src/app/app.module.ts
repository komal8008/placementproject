import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { PlamsgComponent } from './plamsg/plamsg.component';
import { VissionComponent } from './vission/vission.component';
import { DepartmentComponent } from './department/department.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { FormsModule} from '@angular/forms';
import { WantjobComponent } from './wantjob/wantjob.component';

import { PostjobComponent } from './postjob/postjob.component';
import { SlideComponent } from './slide/slide.component';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,

    PlamsgComponent,

    VissionComponent,

    DepartmentComponent,

    RecruiterComponent,

    WantjobComponent,

    PostjobComponent,

    SlideComponent,

    ProfileComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
