import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { MEAT_API } from '../../app.api';
import { User } from './user.model';

@Injectable()
export class LoginService {
  user: User;
  lastUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => (this.lastUrl = e.url));
  }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string) {
    const body = JSON.stringify({ username: email, password: password });
    return this.http.post(`http://localhost:5000/login`, body)
    .pipe(
      tap(token => {
        console.log(token);
      })
    );

    // const url = `${MEAT_API}/login`;
    // const url = `http://localhost:5000/login`;

    // const body = JSON.stringify({ username: email, password: password });
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    // this.http.post(url, body, { headers: headers })
    // .subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   (err: HttpErrorResponse) => {
    //     if (err.error instanceof Error) {
    //       console.log('Client-side error occured.');
    //     } else {
    //       console.log('Server-side error occured.');
    //     }
    //   }
    // );

    // const headers = new HttpHeaders({
    //   authorization: 'Basic ' + btoa(email + ':' + password)
    // });

    // this.http.post(url, { username: email, password: password }).pipe(
    //   tap(user => {
    //     console.log(user);
    //   })
    // );

    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    // .subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log(err);
    //   },
    //   () => {
    //     console.log('complete');
    //   }
    // );
  }

  // login(email: string, password: string): Observable<User> {
  //   const headers = new HttpHeaders();
  //   headers.set('Content-Type', 'application/json');
  //   const body = JSON.stringify({username: email,
  //     password: password});

  //     return this.http.post<User>(`http://localhost:5000/login`, body, {headers: headers})
  //         .pipe(tap(user => {
  //           this.user = user;
  //         }));
  // }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)]);
  }

  logout() {
    this.user = undefined;
  }
}
