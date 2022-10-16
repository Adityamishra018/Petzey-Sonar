export class Medicine {
  MedicineId: number;
  Name: string;
  Dosage: string;
  Instruction: string;
  Days: string;

  constructor(
    MedicineId: number,
    Name: string,
    Dosage: string,
    Instruction: string,
    Days: string
  ) {
    this.MedicineId = MedicineId;
    this.Name = Name;
    this.Days = Days;
    this.Instruction = Instruction;
    this.Dosage = Dosage;
  }
}
