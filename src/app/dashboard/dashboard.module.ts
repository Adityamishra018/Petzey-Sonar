import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';

//import { AppointmentConformationComponent } from '/appointment-conformation/appointment-conformation.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { AllAppointmentComponent } from './all-appointment/all-appointment.component';
import { AllPetsVetsComponent } from './all-pets-vets/all-pets-vets.component';
import { AppointmentGridViewVetComponent } from './appointment-grid-view-vet/appointment-grid-view-vet.component';
import { AppointmentGridViewPetComponent } from './appointment-grid-view-pet/appointment-grid-view-pet.component';
import { AddAppointmentsComponent } from './add-appointment/add-appointment.component';
import { CalenderComponent } from './all-appointment/calender/calender.component';
import { MatButtonModule } from '@angular/material/button';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { AppointmentStatusCardComponent } from './appointment-status-card/appointment-status-card.component';
import { AgePipe } from '../CustomPipes/Age.Pipe';



@NgModule({
  declarations: [
    AppointmentGridViewPetComponent,
    AppointmentGridViewVetComponent,
    AllPetsVetsComponent,
    AllAppointmentComponent,
    AgePipe,
    ViewDetailsComponent,
    AddAppointmentsComponent,
    CalenderComponent,
    AppointmentStatusCardComponent
  ],
  imports: [
    MatStepperModule,
    MatSelectModule,
    MatMenuModule,
    MatSliderModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatGridListModule,
    FormsModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatNativeDateModule,
    HttpClientModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatAutocompleteModule,
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    DashboardRoutingModule,
    MatIconModule,
    MatButtonModule,

  ],
  exports: [AgePipe],
  providers: [],
})
export class DashboardModule { }
