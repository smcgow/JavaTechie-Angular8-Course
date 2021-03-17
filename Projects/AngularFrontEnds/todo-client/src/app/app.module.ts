import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {HttpClientModule} from '@angular/common/http';
import { OverduePipe } from './overdue.pipe';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { ScorePipe } from './score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    OverduePipe,
    FilterPipe,
    ScorePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
