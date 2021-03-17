import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../restapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any;
  constructor(private service: RestapiService) { }

  ngOnInit(): void {
  }

  getUsers(){
    const response = this.service.getUsers();
    response.subscribe(data => this.users = data);
  }

}
