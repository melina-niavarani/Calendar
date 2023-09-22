import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-day-view-calender',
  templateUrl: './day-view-calender.component.html',
  styleUrls: ['./day-view-calender.component.css']
})

export class DayViewCalenderComponent {
  constructor( private sharedService: SharedService) {}

  selectedDate: Date = new Date();
  currentDay = this.sharedService.daysOfWeek[this.sharedService.currentMonth.getDay()]


}
