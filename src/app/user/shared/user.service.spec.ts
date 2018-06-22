import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserComponent} from '../user.component';
import {SignInComponent} from '../sign-in/sign-in.component';
import {AuthGuard} from '../../auth/auth.guard';
import {HomeComponent} from '../../home/home/home.component';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {AppComponent} from '../../app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from '../../home/header/header.component';
import {AuthInterceptor} from '../../auth/auth.interceptor';
import {BrowserModule} from '@angular/platform-browser';
import {FooterComponent} from '../../home/footer/footer.component';
import {APP_BASE_HREF} from '@angular/common';
const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent} ]},
  { path: 'register', component: UserComponent,
    children: [{ path: '', component: SignUpComponent} ]},

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];
describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        UserComponent,
        SignUpComponent,
        SignInComponent,
        DashboardComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
      ],
      providers: [UserService, AuthGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        {provide: APP_BASE_HREF, useValue : '/'}],
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
