import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { NumberOnlyDirective } from '../directives/number-only.directive';


@NgModule({
  declarations: [
    NumberOnlyDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    NumberOnlyDirective
  ]
})
export class SharedModule {}
