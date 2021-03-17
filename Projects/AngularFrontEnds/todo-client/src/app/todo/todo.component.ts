import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  search = '';
  amount = 500;
  todos: any;

  constructor(private service: TodoService) { }

  ngOnInit(): void {
      this.service.getToDos().subscribe((data) => this.todos = data);
  }

}
