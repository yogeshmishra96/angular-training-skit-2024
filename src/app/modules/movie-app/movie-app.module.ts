import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieRoutingModule } from './movie-app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ApiServiceService } from './api-service.service';
import { MinutesToHoursPipe } from './minutes-to-hours.pipe';
import { HighlightDirective } from './border-on-hover.directive' 
import { ReactiveFormsModule } from '@angular/forms'; // for form 


@NgModule({
  declarations: [
    MovieSearchComponent,
    MinutesToHoursPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers : [
    ApiServiceService

  ]
})
export class MovieAppModule { }
