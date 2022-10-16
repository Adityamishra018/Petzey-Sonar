export class PetParent {
  OwnerId: Number;
  Name: string;
  MobileNo: string;
  Location: string;
  constructor(OwnerId: Number, Name: string, MobileNo: string, Location: string) {
    this.OwnerId = OwnerId;
    this.Name = Name;
    this.MobileNo = MobileNo;
    this.Location = Location;
  }
}
