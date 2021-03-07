import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;
  constructor(private http: HttpClient) { }

  usersUrl = 'https://jsonplaceholder.typicode.com/users';
  ngOnInit(): void {
    const response = this.http.get(this.usersUrl);
    // response.subscribe((data) => console.log(data));
    response.subscribe((data) => this.users = data);
  }

}
