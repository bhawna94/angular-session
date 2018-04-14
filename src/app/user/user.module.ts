
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import {RouterModule} from '@angular/router';
import {routes} from './user.routes';

@NgModule({
  imports: [CommonModule,
    FormsModule, RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, SignupComponent],
  exports: [LoginComponent, SignupComponent]
})
export class UserModule {}
