import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ReviewComponent } from './components/review/review.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { 
    path: 'movie-app', 
    loadChildren: () => import('./modules/movie-app/movie-app.module').then(m => m.MovieAppModule)
  },
  { path : 'home', component :  HomeComponent },
  { path : 'how-it-works', component :  HowItWorksComponent },
  { path : 'explore', component :  ExploreComponent },
  { path : 'review', component :  ReviewComponent },
  { path : 'blog', component :  BlogComponent },
  { path : 'contact', component :  ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // http://localhost:4200 or http://kanika.io/
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
