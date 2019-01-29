import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BsComponentComponent } from '../layout/bs-component/bs-component.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, TranslateModule, LoginRoutingModule],
  declarations: [LoginComponent, BsComponentComponent]
})
export class LoginModule {}
