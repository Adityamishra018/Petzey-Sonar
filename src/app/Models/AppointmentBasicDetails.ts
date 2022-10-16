import { Time } from "@angular/common";
import { Medicine } from "./Medicine.model";
import { PrescriptionDTO } from "./PrescriptionDTO.model";
import { Symptom } from "./Symptom.Model";
import { Test } from "./Test.model";
import { Vitals } from "./Vitals.model";

export class AppointmentBasicDetails {
  appointmentID: number;
  appointmentDate: Date;
  appointmentTime: Time;
  PetIssues: string;
  Reason: string;
  petId: number;
  vetId: number;
  prescription: PrescriptionDTO;
  symptom: Symptom[];
  vitals: Vitals;
  tests: Test[];


  constructor(
    appointmentID: number,
    appointmentDate: Date,
    appointmentTime: Time,
    PetIssues: string,
    Reason: string,
    petId: number,
    vetId: number,
    prescription: PrescriptionDTO,
    symptom: Symptom[],
    vitals: Vitals,
    tests: Test[],
  ) {
    this.appointmentDate = appointmentDate,
      this.appointmentID = appointmentID,
      this.appointmentTime = appointmentTime,
      this.PetIssues = PetIssues,
      this.Reason = Reason,
      this.petId = petId,
      this.vetId = vetId,
      this.prescription = prescription,
      this.symptom = symptom,
      this.tests = tests,
      this.vitals = vitals;
  }
}
