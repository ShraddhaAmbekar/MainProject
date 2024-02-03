import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { NumberOnlyDirective } from '../directives/number-only.directive';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    NumberOnlyDirective,
    SearchPipe,
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
    NumberOnlyDirective,
    SearchPipe
  ]
})
export class SharedModule {}
