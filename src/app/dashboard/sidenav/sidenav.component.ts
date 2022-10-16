import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideBarService } from 'src/app/Services/sidebar.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  profileImg: string = "null";
  constructor(public side: SideBarService) { }

  ngOnInit(): void {

  }


}
