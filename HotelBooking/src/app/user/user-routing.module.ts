import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserSuccessComponent } from './user-success/user-success.component';
import { HotelshowComponent } from './hotelshow/hotelshow.component';
import { BookNowComponent } from './book-now/book-now.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:'userLanding', component:UserLandingComponent},
  {path:'userSuccess', component:UserSuccessComponent},
  {path:'hotelshow', component:HotelshowComponent},
  {path:'bookNow', component:BookNowComponent},
  {path:'team', component:TeamComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
