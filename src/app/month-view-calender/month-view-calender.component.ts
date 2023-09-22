import { Component } from '@angular/core';
import { CdkDragDrop, CdkDragStart, CdkDragEnd } from '@angular/cdk/drag-drop';
import { SharedService } from '../shared.service';
import { AppointmentsService } from '../appointment.service';
import { Appointment  } from "../appointment.model";


@Component({
  selector: 'month-view-calender',
  templateUrl: './month-view-calender.component.html',
  styleUrls: ['./month-view-calender.component.css']
})

export class  MonthViewCalenderComponent {
  [x: string]: any; 

  constructor(
    public sharedService: SharedService, 
    private appointmentsService: AppointmentsService
  ) {};

  daysOfWeek = this.sharedService.daysOfWeek;
  weeks = this.sharedService.weeks

  // === Appointment form condition === //

  showAppointmentForm = this.appointmentsService.showAppointmentForm;
  openAppointmentForm(day: string) {
    this.selectedDate = day;
    this.selectedAppointment = {
      title: '',
      date: this.selectedDate || '',
      startTime: new Date(),
      endTime: new Date(),
    };
    this.showAppointmentForm = true;
  }

  selectedDate: string | null = null;
  selectedAppointment: Appointment | null = null;
  

  onAddAppointment(appointment: Appointment) {
    if (!appointment.title) {
      appointment.title = 'Unknown Title'; 
    }
    if (this.selectedDate) {
      appointment.date = this.selectedDate;
      this.selectedAppointment = appointment;
    }
    this.showAppointmentForm = false;
  }
  onDeleteAppointment() {
    if (this.selectedAppointment) {
      if (this.selectedAppointment.date) { 
        const selectedAppointmentTimestamp = new Date(this.selectedAppointment.date).getTime();
  
        const index = this.appointmentsService.appointments.findIndex(
          (appointment) => {
            if (appointment.date) {
              const appointmentTimestamp = new Date(appointment.date).getTime();
              return appointmentTimestamp === selectedAppointmentTimestamp &&
                appointment.startTime === this.selectedAppointment?.startTime && 
                appointment.endTime === this.selectedAppointment?.endTime; 
            }
            return false; 
          }
        );
  
        if (index !== -1) {
          this.appointmentsService.appointments.splice(index, 1);
        }
      }
  
      this.selectedAppointment = null;
    }
  }

  onCloseForm() {
    this.showAppointmentForm = false;
  }

  // === Drag & Drop === //
  // setSelectedDay(day: string) {
  //   this.selectedDate = day;
  // }

  onDragStarted(event: CdkDragStart, appointment: Appointment) {
    this.selectedAppointment = appointment;
  }

  onDrop(event: CdkDragDrop<string[]> |  any ) {
    const newDate = event.container.data[event.currentIndex];
    
    if (this.selectedAppointment) {
      this.selectedAppointment.date = newDate;
      this.selectedAppointment = null;
    }
  }


}
