import {paths} from './../app.paths';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { NavComponent } from './components/nav/nav.component';
import { FormbookingComponent } from './components/formbooking/formbooking.component';
import {RouterModule} from '@angular/router'; 
import {FormsModule} from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ViewComponent,
    NavComponent,
    FormbookingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(paths),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
