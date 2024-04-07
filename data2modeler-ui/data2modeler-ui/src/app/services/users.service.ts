import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-control-Allow-Origin': '*'
    })
  }
  constructor(private httpClient:HttpClient) { }

  verifyUserName(user : string){
    let url = environment.BASE_URL + environment.USER.VERIFY_USERNAME +"?username="+user;
    return this.httpClient.get(url).pipe(
      map((response: any) => {
        const typedResponse = response as { status: number, taken: boolean, message: string };
        return !typedResponse.taken;
      })
    );
  }

  addUser(user : {}){
    let url = environment.BASE_URL + environment.USER.USER + environment.USER.ADD_USER;
    return this.httpClient.post(url, user);
  }

  verifyUser(username : string, password : string){
    let url = environment.BASE_URL + environment.USER.USER + environment.USER.LOGIN;
    console.log(url,"\n" ,username, password);
    
    return this.httpClient.post(url,{username : username, password : password});  
  }
}
