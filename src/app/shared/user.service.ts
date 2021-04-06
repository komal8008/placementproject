import { Injectable } from '@angular/core';
import { job, loginUser, User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   newUser: User = {
      name: '',
      email: '',
      password: '',
      contact: ''
  };

  existingUser: loginUser = {
    email: '',
    password: ''
  };
  newJob: job = {
    name: '',
    des: ''
  };
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  addNewUser(user: User)
  {
   return this.http.post(environment.apiBaseUrl + 'newUser', user);
  }

  // tslint:disable-next-line: typedef
  loginUser(verifyUser: loginUser)
  {
   return this.http.post(environment.apiBaseUrl + 'auth', verifyUser);
  }

  // tslint:disable-next-line: typedef
  getselectedUser(id: string)
  {
    return this.http.get(environment.apiBaseUrl + 'SelectUser/' + id);
  }


  // store token variables
  // tslint:disable-next-line: typedef
  setToken(token: string)
  {
    localStorage.setItem('token', token);
  }

  // tslint:disable-next-line: typedef
  getToken()
  {
    return localStorage.getItem('token');
  }

  // tslint:disable-next-line: typedef
  removeToken()
  {
    localStorage.removeItem('token');
  }


  // user id stroage

  // tslint:disable-next-line: typedef
  setUserId(id: string)
  {
    localStorage.setItem('userid', id);
  }

  // Token verification

  // tslint:disable-next-line: typedef
  getPayload()
  {
    const token = JSON.stringify(this.getToken());
    const userPayload = atob(token.split('.')[1]);
    if (userPayload)
    {
      return JSON.parse(userPayload);
    }
    else{
      return null;
    }

  }

  // tslint:disable-next-line: typedef
  isLoggedIn()
  {
    const userpayload = this.getPayload();
    if (userpayload)
    {
      return userpayload.exp > Date.now() / 1000;
    }
    else
    {
      return null;
    }
  }
  posting(job: job){
    return this.http.post(environment.apiBaseUrl + 'newJob', job);
  }
  getdata(v:string){

    return this.http.post(environment.apiBaseUrl + 'jobs' , v );
  }

}
