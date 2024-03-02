import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

interface Facility {
  icon: string;
    facility: string;
    listing: string;
}

@Component({
  selector: 'app-facility-card',
  templateUrl: 'facility-card.component.html',
  styleUrls: ['./facility-card.component.css']
})
export class FacilityCardComponent implements OnChanges {
  @Input() cardData: Facility | undefined;
  // title : string = "hi";
  // @Input() dataFromParent : string | undefined;
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Message from child to parent!');
  }

  ngOnChanges(changes: SimpleChanges) {
    // Log changes for debugging
    console.log('Input changes:', changes);
  }
 
  ngOnInit() {

   
  }

}


