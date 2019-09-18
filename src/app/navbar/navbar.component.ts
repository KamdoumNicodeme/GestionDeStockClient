import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  showSidebar: boolean;
  @Output()
  showSideBarchange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

    afficherSideBar() {
      this.showSidebar = !this.showSidebar;
      this.showSideBarchange.emit(this.showSidebar);
    }
}
