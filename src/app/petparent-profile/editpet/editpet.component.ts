import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Route, Router } from '@angular/router';

import { Pet } from 'src/app/Models/petProfile.model';

import { PostService } from 'src/app/Services/post.service';

import { AzureBlobServiceService } from 'src/app/Services/azure-blob-service.service';

@Component({
  selector: 'app-editpet',

  templateUrl: './editpet.component.html',

  styleUrls: ['./editpet.component.scss'],
})
export class EditpetComponent implements OnInit {
  // SAS (shared access signatures)

  sas ="sp=racwdli&st=2022-10-14T04:00:13Z&se=2022-10-20T12:00:13Z&sv=2021-06-08&sr=c&sig=uaInFLodR%2B02yZ6hUKusp9Uaf%2BSFHfS5Rgg5EXgOcho%3D";

  file: any;

  filePath: string;

  picturesList: string[] = [];

  picturesDownloaded: string[] = [];

  videosList: string[] = [];

  videoDownloaded: any;

  constructor(
    private petprofileService: PostService,
    private route: Router,
    private blobService: AzureBlobServiceService
  ) {}

  curPet: any;

  temp: any;

  formModal: any;
  ngOnInit(): void {
    this.petprofileService.getPets().subscribe((response) => {
      this.temp = response[0];
      this.curPet = new Pet(
        this.temp.PetId,
        this.temp.PetName,
        this.temp.BloodGroup,
        this.temp.DOB,
        this.temp.Breed,
        this.temp.ImageUrl
      );
    });
  }

  UpdateOwner(data: Pet) {
    data.PetId = this.curPet.PetId;
    this.curPet = data;
    this.curPet.ImageUrl=this.filePath;
    this.petprofileService.EditPet(this.curPet).subscribe((data) => {
      console.log(data);
    });
    // this.route.navigate(['petparentprofile', this.filePath]);
    this.route.navigate(["petparentprofile"]);
  }
  onChange(event: any): void {
    this.file = event.target.files[0]; //event.target?.files[0];

    //console.log(this.file);

    // this.file.name="qwerty";

    this.filePath = this.file.name;

    this.blobService.imagePath = this.filePath;

    console.log(this.filePath);

    this.imageSelected(this.file);
  }

  public imageSelected(file: File) {
    this.blobService.uploadImage(this.sas, file, file.name, () => {
      this.reloadImages();
    });
  }

  public deleteImage(name: string) {
    this.blobService.deleteImage(this.sas, name, () => {
      this.reloadImages();
    });
  }
  public downloadImage(name: string) {
    this.blobService.downloadImage(this.sas, name, (blob) => {
      let url = window.URL.createObjectURL(blob);

      window.open(url);
    });
  }

  private reloadImages() {
    this.blobService.listImages(this.sas).then((list) => {
      this.picturesList = list;

      const array: any = [];

      this.picturesDownloaded = array;

      for (let name of this.picturesList) {
        this.blobService.downloadImage(this.sas, name, (blob) => {
          var reader = new FileReader();

          reader.readAsDataURL(blob);

          reader.onloadend = function () {
            array.push(reader.result as string);
          };
        });
      }
    });
  }
}
