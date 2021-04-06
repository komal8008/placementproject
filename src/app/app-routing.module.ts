import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { PlamsgComponent } from './plamsg/plamsg.component';
import { VissionComponent } from './vission/vission.component';
import { DepartmentComponent } from './department/department.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { PostjobComponent } from './postjob/postjob.component';
import { SlideComponent } from './slide/slide.component';
import { WantjobComponent } from './wantjob/wantjob.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path:'about',
    component:AboutComponent,
    children:[
      {
      path:'plc',
    component:PlamsgComponent
      },
      {
        path:'vission',
        component:VissionComponent
      },
      {
        path:'',
        component:DepartmentComponent
      },
      {
        path:'rec',
        component:RecruiterComponent
      }

    ]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'post',
    component: PostjobComponent
  },
  {
    path: 'slide',
    component: SlideComponent
  },
  {
    path: 'wantjob',
    component: WantjobComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
