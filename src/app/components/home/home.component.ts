import { Component } from '@angular/core';
interface Facility {
  icon: string;
  facility: string;
  listing: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataforChild : string = "Hello I am coming from parent 1";
  dataforChildTwo : string = "Hello I am coming from parent 2";
  dataforChildThree : string = "Hello I am coming from parent 3";
  receivedMessage: string = '';

  receiveMessage($event: string) {
    this.receivedMessage = $event;
  }
  
  facilityCardData: Facility[] = [{
    icon: "flaticon-restaurant",
    facility: "resturent",
    listing: "150 listings"
  },
  {
    icon: "flaticon-travel",
    facility: "destination",
    listing: "214 listings"
  }, {
    icon: "flaticon-building",
    facility: "hotels",
    listing: "185 listings"
  }, {
    icon: "flaticon-pills",
    facility: "healthcaree",
    listing: "200 listings"
  }, {
    icon: "flaticon-transport",
    facility: "healthcaree",
    listing: "120 listings"
  }]

}
