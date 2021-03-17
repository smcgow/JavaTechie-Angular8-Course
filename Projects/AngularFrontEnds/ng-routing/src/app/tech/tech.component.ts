import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  technology: string;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.technology = data.get('technology');
      console.log(this.technology);
    });
  }

}
