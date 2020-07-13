import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { CourseListComponent } from './courses/course-list.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo: 'welcome', pathMatch: 'full'},
      {path:'login', component: LoginComponent},
      {path:'about', component: AboutComponent},
      {path:'courses', component: CourseListComponent}
    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    CourseListComponent,
    AboutComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
