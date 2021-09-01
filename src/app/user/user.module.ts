import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
