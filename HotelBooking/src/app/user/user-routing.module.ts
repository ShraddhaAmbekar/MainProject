import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserSuccessComponent } from './user-success/user-success.component';

const routes: Routes = [
  {path:'userLanding', component:UserLandingComponent},
  {path:'userSuccess', component:UserSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
