import { Medicine } from "./Medicine.model";
import { SymptomDTO } from "./SymptomDTO.model";
import { TestDTO } from "./TestDTO.model";

export class PrescriptionDTO {
  Prescriptionid: number;
  BPM: number;
  BreathesPerMin: number;
  Temp: number;
  Symptoms: SymptomDTO[];
  Tests: TestDTO[];
  Medicines: Medicine[];
  constructor(
    Presid: number,
    BPM: number,
    BreathesPerMin: number,
    Temp: number,
    Symptoms: SymptomDTO[],
    Tests: TestDTO[],
    Medicines: Medicine[],
  ) {
    this.Prescriptionid = Presid;
    this.BPM = BPM;
    this.BreathesPerMin = BreathesPerMin;
    this.Temp = Temp;
    this.Symptoms = Symptoms;
    this.Tests = Tests;
    this.Medicines = Medicines;
  }
}
