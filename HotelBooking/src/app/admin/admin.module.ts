import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { SharedModule } from '../shared/shared.module';
import { AdminSuccessComponent } from './admin-success/admin-success.component';


@NgModule({
  declarations: [
    AdminLandingComponent,
    AdminSuccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
