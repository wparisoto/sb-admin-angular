import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login/:to', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  // {path: 'restaurants/:id', component: RestaurantDetailComponent,
  //     children: [
  //         {path: '', redirectTo: 'menu', pathMatch: 'full'},
  //         {path: 'menu', component: MenuComponent},
  //         {path: 'reviews', component: ReviewsComponent}
  //     ]
  // },
  // {path: 'restaurants', component: RestaurantsComponent},
  // {path: 'order', loadChildren: './order/order.module#OrderModule', canLoad: [LoggedinGuard], canActivate: [LoggedinGuard]},
  // {path: 'order-sumary', component: OrderSumaryComponent},
  // {path: 'about', loadChildren: './about/about.module#AboutModule'},
  // {path: '**', component: NotFoundComponent}
];
