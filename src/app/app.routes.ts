import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
    {path:'register', component: RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'productlist',component:ProductlistComponent},
    {path:'home',component:HomeComponent},
    {path:'product/:productId',component:ProductdetailsComponent},
    {path:'category', component: CategoryComponent},
    
];
