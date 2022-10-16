export class Pet {
  PetId: Number;
  PetName: string;
  BloodGroup: string;
  DOB: Date;
  Breed: string;
  ImageUrl: string;
  constructor(id: Number, name: string, bloodgroup: string, dob: Date, breed: string, image: string) {
    this.PetId = id;
    this.PetName = name;
    this.BloodGroup = bloodgroup;
    this.DOB = dob;
    this.Breed = breed;
    this.ImageUrl = image
  }
}
