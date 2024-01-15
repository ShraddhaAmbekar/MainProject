import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'landing', component:LandingComponent},
  {path:'login', component:LoginComponent},
  {path:'signUp', component:SignUpComponent},
  {path:'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'owner', loadChildren:()=>import('./owner/owner.module').then(m=>m.OwnerModule)},
  {path:'user', loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
