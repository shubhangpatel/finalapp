import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DeleteComponent } from './delete/delete.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowdataComponent } from './showdata/showdata.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShowdataComponent,CommonModule, RouterOutlet,SignupComponent,HttpClientModule,LoginComponent,DeleteComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finalapp';
  
}
