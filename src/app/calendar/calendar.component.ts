import { Component, Renderer2, RendererFactory2 } from '@angular/core';
import { SharedService } from '../shared.service';
import { AppointmentsService } from '../appointment.service';
import { Appointment  } from "../appointment.model";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {
[x: string]: any;
  selectedDate: Date = new Date();
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2, public sharedService: SharedService, private appointmentsService: AppointmentsService) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

    // === Appointment form condition === //
    showAppointmentForm = this.appointmentsService.showAppointmentForm;

    appointmentDate: string | null = null;
    selectedAppointment: Appointment | null = null;
    

    onAddAppointment(appointment: Appointment) {
      if (!appointment.title) {
        appointment.title = 'Unknown Title'; 
      }
      if (this.appointmentDate) {
        appointment.date = this.appointmentDate;
        this.selectedAppointment = appointment;
      }
      this.showAppointmentForm = false;
    }

    onCloseForm() {
      this.showAppointmentForm = false;
    }

  // ----------- DAY CHANGE -------------//
  dateChanged(event: any) {
    console.log("Date changed", event);
  }

  // ----------- MONTH CHANGE -------------//
  ngAfterViewInit() {
    const monthPrevBtn = document.querySelectorAll(
      '.mat-calendar-previous-button'
    );
    const monthNextBtn = document.querySelectorAll('.mat-calendar-next-button');

    if (monthPrevBtn) {
      Array.from(monthPrevBtn).forEach((button) => {
        this.renderer.listen(button, 'click', (event: any) => {
        });
      });
    }

    if (monthNextBtn) {
      Array.from(monthNextBtn).forEach((button) => {
        this.renderer.listen(button, 'click', (event: any) => {
        });
      });
    }
  }

  handleMonthSelected(event: any) {
    console.log("Month changed", event);
  }

  // ---------YEAR CHANGE ----------//

  handleYearSelected(event: any) {
    console.log("Year changed", event);
}



}
