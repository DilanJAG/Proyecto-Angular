import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { WebModule } from './web/web.module';
import { NopagesFoundComponent } from './nopages-found/nopages-found.component';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  {path: "dashboard", component:DashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path: '**', component: NopagesFoundComponent}


];

@NgModule({
  imports: [
    WebModule,
    AuthModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }