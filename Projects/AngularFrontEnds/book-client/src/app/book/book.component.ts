import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;
  constructor(private service: BookService) { }

  ngOnInit(): void {
    const response = this.service.getBooks().subscribe(data => this.books = data);
    // response.subscribe((data) => console.log(data))
    // response.subscribe((data) => this.books = data)
  }

}
