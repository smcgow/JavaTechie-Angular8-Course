import { Component, OnInit } from '@angular/core';
import { User} from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {
    id: 123456,
    name: 'Stephen',
    email: 'stephen@live.ie',
    mobile: 8871662525
  };
  constructor() { }

  ngOnInit(): void {
  }

}
