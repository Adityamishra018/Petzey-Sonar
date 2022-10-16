import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-appointment-status-card',
  templateUrl: './appointment-status-card.component.html',
  styleUrls: ['./appointment-status-card.component.scss']
})
export class AppointmentStatusCardComponent implements OnInit {

  allAppointments: any;
  total: number = 0;
  cancelled: number = 0;
  confirmed: number = 0;
  closed: number = 0;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.GetAppointmentsByDoctor(11).subscribe((appointments) => {
      this.allAppointments = appointments;
      this.total = this.allAppointments.length;
      this.cancelled = this.allAppointments.filter(appointment => appointment.Status == "Cancelled").length;
      this.confirmed = this.allAppointments.filter(appointment => appointment.Status == "Confirmed").length;
      this.closed = this.allAppointments.filter(appointment => appointment.Status == "Closed").length;
    });

  }

}
