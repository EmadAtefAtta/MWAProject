import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { ProtectedGuard } from './_guards/protected.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addAdmin', component: AdminAddProductComponent, canActivate: [ProtectedGuard] },
  {path:'listAdmin',component: AdminListComponent , canActivate: [ProtectedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
