import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { SharedModule } from '../shared/shared.module';
import { UserSuccessComponent } from './user-success/user-success.component';
import { HotelshowComponent } from './hotelshow/hotelshow.component';


@NgModule({
  declarations: [
    UserLandingComponent,
    UserSuccessComponent,
    HotelshowComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
