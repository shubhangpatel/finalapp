import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"signUp",component:SignupComponent,title:"sign up page"},
    
    
    {path:"deleteData",component:DeleteComponent,title:"Unsubscribed success"},
    {path:"login",component:LoginComponent,title:'Welcome to login page'}


];
