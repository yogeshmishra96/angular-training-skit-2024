import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component';
import { FacilityCardComponent } from './components/facility-card/facility-card.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ReviewComponent } from './components/review/review.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
// import { MovieAppModule } from './modules/movie-app/movie-app.module';
@NgModule({
  declarations: [
    AppComponent,
    FacilityCardComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    HomeComponent,
    HowItWorksComponent,
    ExploreComponent,
    ReviewComponent,
    BlogComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
