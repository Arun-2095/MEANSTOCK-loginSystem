import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthguardService } from './service/authguard.service';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'home' ,
    component : HomeComponent
  },
  {
    path: 'admin',
    component : AdminComponent
  },
  {
    path: 'dashboard',
    component : DashboardComponent,
    canActivate : [AuthguardService]
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'registration',
    component : RegistrationComponent
  },
  {
    path: 'profile/?username',
    component : ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
