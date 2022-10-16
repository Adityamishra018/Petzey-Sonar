export class AppointmentDTO {

  constructor(
    public appointmentId: number,
    public doctorId: number,
    public ownerId: number,
    public petId: number,
    public issue: string,
    public reason: string,
    public status: string = "Confirmed",
    public Date: Date | null,
    public prescriptionId: number
  ) {

  }

}
