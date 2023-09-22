import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {

  @Input() selectedDate: string | null = null;
  @Output() closeForm = new EventEmitter<void>();

  @Output() addAppointment = new EventEmitter<Appointment>();
  // newAppointment: Appointment = new Appointment();

  newAppointment: Appointment = {
    title: '',
    date: this.selectedDate || '', 
    startTime: new Date(), 
    endTime: new Date(), 
  }

  constructor() {
    this.newAppointment.startTime = new Date();
    this.newAppointment.endTime = new Date();
  }

  onSubmit() {
    if (!this.newAppointment.startTime) {
      this.newAppointment.startTime = new Date();
    }
  
    if (!this.newAppointment.endTime) {
      this.newAppointment.endTime = new Date(); 
    }
  
    this.addAppointment.emit(this.newAppointment);
  
   
    this.newAppointment = {
      title: '',
      date: this.selectedDate || '',
      startTime: new Date(),
      endTime: new Date(),
    };
  }

  onClose(){
    this.closeForm.emit();
  }
}
