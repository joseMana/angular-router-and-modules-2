import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterDeactivateGuard } from './core/guards/register-deactivate.guard';
import { UserGuard } from './core/guards/user.guard';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'register',
    component: RegistrationComponent,
    canDeactivate: [RegisterDeactivateGuard] 
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [UserGuard]
      }
    ]
  },  
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
