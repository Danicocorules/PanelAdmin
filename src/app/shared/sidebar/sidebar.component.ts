import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[] = [];

  constructor( private sidebarServ: SidebarService ) {

    this.menuItems = this.sidebarServ.menu;

  }

  ngOnInit(): void {
  }

}
