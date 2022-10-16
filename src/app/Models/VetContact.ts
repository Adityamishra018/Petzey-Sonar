export class Contact {
  ContactId: number;
  doctor_phone_number: number;
  doctor_email_id: string;
  doctor_ClinicAddress: string;
  constructor(Id: number, doctor_phone_number: number, doctor_email_id: string, doctor_ClinicAddress: string) {
    this.ContactId = Id;
    this.doctor_phone_number = doctor_phone_number;
    this.doctor_email_id = doctor_email_id;
    this.doctor_ClinicAddress = doctor_ClinicAddress;
  }
}
