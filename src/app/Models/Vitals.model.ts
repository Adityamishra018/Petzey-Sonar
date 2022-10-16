export class Vitals {
  Id: number;
  Ecg: number;
  Temperature: number;
  Respiration_rate: number;
  AppointmentId: number;
  constructor(
    Id: number,
    Ecg: number,
    Temperature: number,
    Respiration_rate: number,
    AppointmentId: number,
  ) {
    this.Id = Id;
    this.AppointmentId = AppointmentId;
    this.Ecg = Ecg;
    this.Respiration_rate = Respiration_rate;
    this.Temperature = Temperature;
  }
}
