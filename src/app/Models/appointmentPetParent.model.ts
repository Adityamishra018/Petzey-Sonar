import { Pet } from "./appointmentPet.model";

export class PetParent {
  OwnerId: Number;
  Name: string;
  MobileNo: string;
  Location: string;
  ImageUrl: string;
  Pets: Pet[];
  constructor(OwnerId: Number,
    Name: string,
    MobileNo: string,
    Location: string,
    ImageUrl: string,
    Pets: Pet[]) {
    this.OwnerId = OwnerId;
    this.Name = Name;
    this.MobileNo = MobileNo;
    this.Location = Location;
    this.ImageUrl = ImageUrl;
    this.Pets = Pets;
  }
}
