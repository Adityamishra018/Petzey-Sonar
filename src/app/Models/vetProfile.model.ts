import { Contact } from "./VetContact";

export class VetProfile {
  VetId: number;
  doctor_name: string;
  ContactDetails: Contact;
  doctor_speciality: string;
  doctor_npi_no: number;
  doctor_imageURL: string;

  constructor(VetId: number, Name: string, doctor_speciality: string, doctor_npi_no: number, contactDetails: Contact) {
    this.VetId = VetId;
    this.doctor_name = Name;
    this.ContactDetails = contactDetails;
    this.doctor_speciality = doctor_speciality;
    this.doctor_npi_no = doctor_npi_no;

  }
}
