import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) { }

  getApiCall(url: any)  {
    return this.http.get(url)
  }

}


// ng g c modules/movie-app/movie-search  // to generate component inside the module 
//ng g s modules/movie-app/api-service // to generate service inside the module

