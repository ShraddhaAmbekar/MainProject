import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserSuccessComponent } from './user-success/user-success.component';
import { HotelshowComponent } from './hotelshow/hotelshow.component';

const routes: Routes = [
  {path:'userLanding', component:UserLandingComponent},
  {path:'userSuccess', component:UserSuccessComponent},
  {path:'hotelshow', component:HotelshowComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
