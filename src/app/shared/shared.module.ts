import { NgModule, ModuleWithProviders } from '@angular/core';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notifications.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../security/auth.interceptor';
import { LoginService } from '../login/LoginService';

@NgModule({
  declarations: [
    InputComponent,
    SnackbarComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SnackbarComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        NotificationService,
        LoginService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi : true}
      ]
    };
  }
}
