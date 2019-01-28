import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { BsComponentModule } from '../layout/bs-component/bs-component.module';

@NgModule({
  imports: [CommonModule, TranslateModule, LoginRoutingModule, BsComponentModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
