import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import {  ValidationService } from './service/validation.service' ;
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { AuthguardService } from './service/authguard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component' ;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgFlashMessagesModule,
    ReactiveFormsModule
  ],
  providers: [ValidationService, AuthService , AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
