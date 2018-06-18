import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const appRoutes: Routes = [
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
   { path: '', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
//  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
