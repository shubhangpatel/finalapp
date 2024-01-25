import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { ShowdataComponent } from './showdata/showdata.component';

export const routes: Routes = [
    {path:"signUp",component:SignupComponent,title:"sign up page"},
    
    {path:"showAllData",component:ShowdataComponent,title:"data success"},
    {path:"deleteData",component:DeleteComponent,title:"Unsubscribed success"},
    {path:"login",component:LoginComponent,title:'Welcome to login page'}


];
