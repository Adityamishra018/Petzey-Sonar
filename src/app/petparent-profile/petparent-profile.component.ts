import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetParent } from '../Models/petParentProfile.model';
import { Pet } from '../Models/petProfile.model';
import { PostService } from '../Services/post.service';
import { Gender } from '../Models/gender.enum';
import { AzureBlobServiceService } from 'src/app/Services/azure-blob-service.service';



declare var window: any;
@Component({
  selector: 'app-petparent-profile',
  templateUrl: './petparent-profile.component.html',
  styleUrls: ['./petparent-profile.component.scss'],
})
export class PetparentProfileComponent implements OnInit {
  sas =
    "sp=racwdli&st=2022-10-14T04:00:13Z&se=2022-10-20T12:00:13Z&sv=2021-06-08&sr=c&sig=uaInFLodR%2B02yZ6hUKusp9Uaf%2BSFHfS5Rgg5EXgOcho%3D";
  picturesAccount = "imagestoragepetzey";
  container = "/petzeyprofileimages/"; //newcat.jpg";
  relativePath: string = '';
  trima: string;
  private sub: any;
  private sub1: any;

  //this.relativePath = this.blobService.imagePath;//"oordog.jpg"
  imagepath: string =
    'https://' +
    this.picturesAccount +
    '.blob.core.windows.net' +
    this.container +
    this.relativePath +
    '?' +
    this.sas;
  //"../assets/PetIcon.png";

  openDialog() {
    this.router.navigate(['EditOwner']);
  }
  openDialog1() {
    this.router.navigate(['EditPet']);
  }
  posts: any;
  pets: any;
  public curPet: any;
  formModal: any;

  @ViewChild('myData') myData: ElementRef;

  constructor(
    private service: PostService,
    private router: Router,
    private blobService: AzureBlobServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.relativePath = this.route.snapshot.params['filePath']=="null"?"rep.jpg":this.route.snapshot.params['filePath'];
    // this.imagepath="https://"+this.picturesAccount+".blob.core.windows.net"+this.container+this.relativePath+"?"+this.sas;

    this.sub = this.service.getPosts().subscribe((response) => {
      this.posts = response[0];
      this.curPet = new PetParent(
        this.posts.OwnerId,
        this.posts.Name,
        this.posts.MobileNo,
        this.posts.Location
      );
    });
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );

    this.sub1 = this.service.getPets().subscribe((response) => {
      this.pets = response[0];
      this.curPet = new Pet(
        this.pets.PetId,
        this.pets.PetName,
        this.pets.BloodGroup,
        this.pets.DOB,
        this.pets.breed,
        this.pets.ImageUrl
      );
    });
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );

    console.log(this.relativePath);
    this.imagepath =
      'https://' +
      this.picturesAccount +
      '.blob.core.windows.net' +
      this.container +
      this.relativePath +
      '?' +
      this.sas;
  }
  ngAfterViewInit() {
    const divEl: string = this.myData.nativeElement.innerHTML;

    console.log(divEl);

    this.trima = divEl;

    this.relativePath = this.trima.trim();

    console.log(this.relativePath);

    //this.relativePath = this.relativePath.trim();

    this.imagepath =
      'https://' +
      this.picturesAccount +
      '.blob.core.windows.net' +
      this.container +
      this.relativePath +
      '?' +
      this.sas;
  }

  ngAfterViewChecked() {
    this.relativePath = this.trima.trim();

    this.imagepath =
      'https://' +
      this.picturesAccount +
      '.blob.core.windows.net' +
      this.container +
      this.relativePath +
      '?' +
      this.sas;
  }
  openmodal() {
    this.formModal.show();
  }
  closemodel() {
    this.formModal.hide();
  }
  SaveChanges() {
    this.formModal.hide();
  }

  getGender(genderId) {
    return Gender[genderId];
  }
  ngOnDestroy() {
    this.sub.unsubscribe();

    this.sub1.unsubscribe();
  }
}
