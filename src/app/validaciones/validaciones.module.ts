import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDataComponent } from './form-data/form-data.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormDataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    FormDataComponent
  ]
})
export class ValidacionesModule { }
