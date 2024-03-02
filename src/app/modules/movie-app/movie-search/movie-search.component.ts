import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiServiceService } from '../api-service.service'
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  username: string = '';
  movieName: string = '';
  movieDetails: any = '';
  showElement: boolean = false;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  value: string = 'second';
  isActive: boolean = false;
  isDisabled: boolean = false;
  textColor: string = 'blue';
  fontSize: number = 16;
  name: string = '';
  today: Date = new Date();
  object: any = { key1: 'value1', key2: 'value2' };
  myForm: FormGroup;


  constructor(private _apiCall: ApiServiceService,
              private _formBuilder: FormBuilder) {
         // Initialize form with form builder
    this.myForm = this._formBuilder.group({
      name: ['', Validators.required], // Name field with required validation
      email: ['', [Validators.required, Validators.email]], // Email field with required and email format validation
      password: ['', [Validators.required, Validators.minLength(6)]] // Password field with required and minimum length validation
    });

  }

  ngOnInit() {
    // this.searchMovie()
  }

  // Function to handle form submission
  submitForm() {
    if (this.myForm.valid) {
      // Form is valid, handle submission here
      console.log(this.myForm.value);
    } else {
      // Form is invalid, display error messages or take appropriate action
      console.log("Form is invalid");
    }
  }

  searchMovie() {
    const apiKey = 'd144a6a5';
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${this.movieName}`;
    this._apiCall.getApiCall(apiUrl).subscribe({
      next: (value) => this.formatMovieData(value),
      error: (error) => console.error('Observable error:', error),
      complete: () => console.log('Observable completed'),
    });
  }

// 154 min
  formatMovieData(value : any) {
    value.Runtime = value.Runtime.split(" ")[0];
    this.movieDetails   = value
  }

  handleClick() {
    console.log('Button clicked!');
  }

  handleMouseOver() {
    console.log('Mouse over event');
  }

  handleMouseOut() {
    console.log('Mouse out event');
  }

  handleKeyDown(event: KeyboardEvent) {
    console.log('Key down event:', event.key);
  }

  handleKeyUp(event: KeyboardEvent) {
    console.log('Key up event:', event.key);
  }

  handleFocus() {
    console.log('Input focused');
  }

  handleBlur() {
    console.log('Input blurred');
  }

  handleChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected value:', selectedValue);
  }

  handleSubmit() {
    console.log('Form submitted');
  }
}


// ng generate pipe modules/movie-app/minutesToHours

// 1. directive
// 2. events 
// 3. pipe + custom pipe 
// 4. service 
// 5. child to parent 

///ng generate directive modules/movie-app/border-on-hover
