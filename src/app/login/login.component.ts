import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NotificationService } from '../shared/messages/notifications.service';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  navigateTo: string;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    });

    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
    .subscribe(token => {
      console.log(token);
      //this.router.navigate([atob(this.navigateTo)]);
      this.router.navigate(['/dashboard']);
    });

    // .subscribe(
    //   user => this.notificationService.notify(`Bem-Vindo, ${user.name}`),
    //   response => this.notificationService.notify(response.error.message),
    //   () => {
    //     this.router.navigate([atob(this.navigateTo)]);
    //   }
    // );
  }
}
