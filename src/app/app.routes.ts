import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CategoryComponent } from './category/category.component';
import { CategoryproductsComponent } from './categoryproducts/categoryproducts.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
import { adminGuard, userGuard } from './service/guard.service';
import { AdminComponent } from './admin/admin/admin.component';
import { AdmincategoryComponent } from './admin/admincategory/admincategory.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { EditcategoryComponent } from './admin/editcategory/editcategory.component';
import { AdminproductComponent } from './admin/adminproduct/adminproduct.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';

export const routes: Routes = [
    // Public routes
    {path:'register', component: RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'productlist',component:ProductlistComponent},
    {path:'home',component:HomeComponent},
    {path:'product/:productId',component:ProductdetailsComponent},
    {path:'category', component: CategoryComponent},
    {path: 'products/:categoryId', component: CategoryproductsComponent},
    {path:'cart',component:CartComponent},


    //User Routes
    {path:'profile', component: ProfileComponent, canActivate:[userGuard]},
    {path:'add-address', component: AddressComponent, canActivate:[userGuard]},
    {path:'edit-address', component: AddressComponent, canActivate:[userGuard]},
    
    //Admin Routes
    {path: 'admin', component: AdminComponent, canActivate:[adminGuard]},
    {path: 'admin/categories', component: AdmincategoryComponent, canActivate:[adminGuard]},
    {path: 'admin/add-category', component: AddcategoryComponent,canActivate:[adminGuard]},
    {path: 'admin/edit-category/:categoryId', component: EditcategoryComponent, canActivate:[adminGuard]},
    {path:'admin/products', component: AdminproductComponent, canActivate:[adminGuard]},
    {path:'admin/add-product', component: AddproductComponent, canActivate:[adminGuard]},
    {path:'admin/edit-product/:productId', component: EditproductComponent, canActivate:[adminGuard]},
    
    
];
