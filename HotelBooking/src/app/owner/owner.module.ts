import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { SharedModule } from '../shared/shared.module';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';


@NgModule({
  declarations: [
    OwnerLandingComponent,
    HotelBookingComponent,
    OwnerSuccessComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
   
  ]
})
export class OwnerModule { }
