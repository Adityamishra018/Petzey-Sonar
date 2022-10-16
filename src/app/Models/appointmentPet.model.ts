import { Gender } from "./gender.enum";
import { PetAllergy } from "./PetAllergy";
import { SpeciesType } from "./Species.enum";
export class Pet {
  PetId: Number;
  Gender: Gender;
  PetName: string;
  BloodGroup: string;
  DOB: Date;
  Allergies: PetAllergy[];
  Species: SpeciesType;
  Breed: string;
  ImageUrl: string;
  constructor(PetId: Number,
    Gender: Gender,
    PetName: string,
    BloodGroup: string,
    DOB: Date,
    Allergies: PetAllergy[],
    Species: SpeciesType,
    Breed: string,
    ImageUrl: string) {
    this.PetId = PetId;
    this.PetName = PetName;
    this.Gender = Gender;
    this.DOB = DOB;
    this.BloodGroup = BloodGroup;
    this.Species = Species;
    this.Breed = Breed;
    this.ImageUrl = ImageUrl;
    this.Allergies = Allergies;
  }

}
