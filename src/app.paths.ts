
import {ContactComponent} from './app/components/contact/contact.component';
import {HomeComponent} from './app/components/home/home.component';
import { AboutComponent} from './app/components/about/about.component';
import {Routes} from '@angular/router';

export const paths: Routes =[{path:'about', component: AboutComponent},
{path:'home', component: HomeComponent},
{path:'contact',component: ContactComponent}]