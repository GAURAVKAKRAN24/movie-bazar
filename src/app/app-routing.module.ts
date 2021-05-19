import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesGuard } from './guads/movies.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'signin', component : SignupComponent},
  {path : 'movies', canActivate : [MoviesGuard] , component : MovieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
