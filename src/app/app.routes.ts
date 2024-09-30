import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';

export const routes: Routes = [
    {path:'register', component: RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'productlist',component:ProductlistComponent},
];
