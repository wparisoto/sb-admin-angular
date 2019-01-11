import { NgModule, ModuleWithProviders } from '@angular/core';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from '../security/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    InputComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        // LoggedinGuard,
        // LeaveOrderGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi : true}
      ]
    };
  }
}
