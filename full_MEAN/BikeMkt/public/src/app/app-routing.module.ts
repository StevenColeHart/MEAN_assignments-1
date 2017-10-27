import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginRegComponent} from './login-reg/login-reg.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { BrowseComponent } from './dashboard/browse/browse.component';
import { MyListComponent } from './dashboard/my-list/my-list.component';
import {AppComponent} from './app.component'

const routes: Routes = [
  {path: 'loginreg', component: LoginRegComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'browse', component: BrowseComponent},
    {path: 'my-list', component: MyListComponent}
  ]},
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
