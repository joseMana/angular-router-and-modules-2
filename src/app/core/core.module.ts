import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user.service';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    FooterComponent
  ],
  providers: [
    UserService
  ]
})
export class CoreModule { }
