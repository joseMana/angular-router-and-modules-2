import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserCardComponent } from './user-card/user-card.component';
import { LoggerService } from './services/logger.service';
import { AdminRoutingModule } from './admin-routing.module';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
    AdminComponent,
    UserCardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    UserModule
  ],
  providers: [
    LoggerService
  ]
})
export class AdminModule { }
