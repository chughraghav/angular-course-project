import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HttpService } from './http.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'moviesList', component : MoviesListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
