import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PetParent } from 'src/app/Models/petParentProfile.model';
import { PostService } from 'src/app/Services/post.service';
@Component({
  selector: 'app-editowner',
  templateUrl: './editowner.component.html',
  styleUrls: ['./editowner.component.scss']
})
export class EditownerComponent implements OnInit {

  constructor(private petprofileService: PostService, private route: Router) { }
  posts: any;

  formModal: any;
  temp: any;
  CurOwner: any;
  ngOnInit(): void {
    this.petprofileService.getPosts()
      .subscribe((response) => {
        this.temp = response[0];
        this.CurOwner = new PetParent(this.temp.OwnerId, this.temp.Name, this.temp.MobileNo, this.temp.Location);

      });
  }

  UpdateOwner(data: any) {
    this.CurOwner = data;
    this.petprofileService.EditOwner(this.CurOwner).subscribe((data) => { console.log(data) });
    this.route.navigate(["petparentprofile"])
  }

}
