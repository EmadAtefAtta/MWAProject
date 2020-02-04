import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

//third part Mat
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { reqJwtInterceptor} from './interceptors/reqJwt.interceptors';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';

import { RouterModule } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AdminAddProductComponent,
    RegisterComponent,
    AdminListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      {path:'product',loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)}
      
    ])
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:reqJwtInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
