import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PayrollComponent} from './payroll/payroll.component';
import {LearningComponent} from './learning/learning.component';
import {HrhelpdeskComponent} from './hrhelpdesk/hrhelpdesk.component';
import {ProfileComponent} from './profile/profile.component';
import {TechComponent} from './tech/tech.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'payroll', component: PayrollComponent},
  {path: 'learning', component: LearningComponent},
  {path: 'learning/:technology', component: TechComponent},
  {path: 'hrhelpdesk', component: HrhelpdeskComponent},
  {path: 'profile', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
