import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class SharedService {

  currentMonth = new Date();
  currentView = 'month'
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  weeks: any[] = [];

  constructor() {
    this.generateCalendar();
  }

  // ------- Switch To Week View ------- //
  switchToWeekView() {
    this.currentView = 'week';
  }

// ------- Switch To Month View ------- //
  switchToMonthView() {
  this.currentView = 'month';
  }

  // ------- Switch To Day View ------- //
  switchToDayView() {
    this.currentView = 'day';
  }

  // ------- Switch To Year View ------- //
  switchToYearView() {
    this.currentView = 'year';
  }

  generateCalendar() {
    if (this.currentView === 'month' ) {
      const startDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
      const endDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
      const numDays = endDate.getDate();
      const startDay = startDate.getDay();
  
      const weeks: any[] = [];
      let currentWeek: any[] = [];
  
      for (let i = 0; i < startDay; i++) {
        currentWeek.push({ day: '' });
      }
  
      for (let day = 1; day <= numDays; day++) {
        currentWeek.push({ day });
        if (currentWeek.length === 7) {
          weeks.push(currentWeek);
          currentWeek = [];
        }
      }
  
      if (currentWeek.length > 0) {
        weeks.push(currentWeek);
      }
  
      this.weeks = weeks;
    }else if (this.currentView === 'week') {
      const startDate = new Date(this.currentMonth);
      startDate.setDate(startDate.getDate() - startDate.getDay()); // Start from the first day of the week
  
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 6); // End on the last day of the week
  
      const calendar: any[] = [];
      let currentWeek: any[] = [];
  
      let currentDate = new Date(startDate);
  
      while (currentDate <= endDate) {
        currentWeek.push({
          day: currentDate.getDate(),
          date: new Date(currentDate),
          events: [] // You can populate this with events for the day
        });
  
        currentDate.setDate(currentDate.getDate() + 1);
      }
  
      calendar.push(currentWeek);
  
      this.weeks = calendar;
      
    }else if (this.currentView === 'day') {

      const currentDate = new Date();
      this.weeks = [[{ day: currentDate.getDate(), events: [] }]];

    }
    
  }
  previousMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.generateCalendar();
  }

  currentYear: any = '';
  previousYear() {
    this.currentYear = new Date(this.currentMonth.getFullYear() + 1);
    
  }

  nextYear() {
    this.currentYear = new Date(this.currentMonth.getFullYear() + 1);

  }


}
