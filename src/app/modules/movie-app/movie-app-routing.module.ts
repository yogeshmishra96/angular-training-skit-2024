import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';


const routes: Routes = [
  { path : '', component :  MovieSearchComponent }, // http://localhost:4200/movie-app
  { path : 'movie-list', component :  MovieSearchComponent }, // http://localhost:4200/movie-app
  //   { path: '', redirectTo: '/movie-search', pathMatch: 'full' },
//   { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
