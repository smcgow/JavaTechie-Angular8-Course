import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchDeleteComponent} from './search-delete/search-delete.component';
import {RegistrationComponent} from './registration/registration.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'search', component: SearchDeleteComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
