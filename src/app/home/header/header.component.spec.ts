import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {AuthGuard} from '../../auth/auth.guard';
import {AppComponent} from '../../app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from '../../auth/auth.interceptor';
import {UserComponent} from '../../user/user.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {SignInComponent} from '../../user/sign-in/sign-in.component';
import {BrowserModule} from '@angular/platform-browser';
import {FooterComponent} from '../footer/footer.component';
import {HomeComponent} from '../home/home.component';
import {SignUpComponent} from '../../user/sign-up/sign-up.component';
import {UserService} from '../../user/shared/user.service';
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
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
