import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms'
import {MovieService} from './services/movie.service'
import {HttpClientModule} from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginService } from './services/login.service';
import { MoviePreviewComponent } from './movie-list/movie-preview/movie-preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    MovieListComponent,
    MoviePreviewComponent,
    HomeComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents : [
    MoviePreviewComponent
  ],
  providers: [MovieService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
