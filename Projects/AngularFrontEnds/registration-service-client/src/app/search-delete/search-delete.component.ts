import { Component, OnInit } from '@angular/core';
import {UserRegistrationService} from '../user-registration.service';
import {User} from '../user';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {


  users: any;
  email: string;

  constructor(private service: UserRegistrationService) { }


  public delteUser(id: number){
    const resp = this.service.deleteUser(id);
    resp.subscribe((data) => this.users = data);
    const response = this.service.getUsers();
    response.subscribe(data => this.users = data);
  }

  public findUserByEmailId(){
    const resp = this.service.findUser(this.email);
    resp.subscribe((data) => this.users = data);
    console.log(this.users);
  }

  ngOnInit(): void {
      const response = this.service.getUsers();
      response.subscribe(data => this.users = data);
  }


}
