import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { LoginComponent } from './Login.component';


@NgModule({
    imports: [CommonModule, FormsModule,  MaterialModule.forRoot()],
    declarations: [LoginComponent],
   
})
export class CalculatorModule { }