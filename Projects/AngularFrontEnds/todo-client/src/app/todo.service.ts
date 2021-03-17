import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = 'http://localhost:9091/getTodos';
  constructor(private http: HttpClient) {  }

  // tslint:disable-next-line:typedef
  getToDos(){
    return this.http.get(this.apiUrl);
  }
}
