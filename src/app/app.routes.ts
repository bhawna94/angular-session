import {HomeComponent} from './home/home.component';
import {LoginComponent} from './user/login/login.component';
import {SignupComponent} from './user/signup/signup.component';
import {Routes} from '@angular/router';

export const appRoutes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    children : [{
      path: 'login:/id',
      component: LoginComponent},
      {
        path: 'signup',
        component: SignupComponent}
        ]
    }];
