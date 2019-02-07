import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputComponent } from '../layout/bs-component/components';
import { LoggedinGuard } from '../shared/services/loggedin.guard';
import { LoginService } from '../shared/services/login.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NotificationService } from '../shared/messages/notifications.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, InputComponent],
  providers: [LoginService, LoggedinGuard, NotificationService]
})
export class LoginModule {}
