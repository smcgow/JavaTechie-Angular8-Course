import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  public doRegistration(user){
    return this.http.post('http://localhost:9093/register', user, {responseType: 'text' as 'json' });
  }

  public getUsers(){
    return this.http.get('http://localhost:9093/findAllUsers');
  }

  public findUser(email){
    return this.http.get('http://localhost:9093/findUser/' + email);
  }

  public deleteUser(id){
    return this.http.delete('http://localhost:9093/cancel/' + id);
  }
}
