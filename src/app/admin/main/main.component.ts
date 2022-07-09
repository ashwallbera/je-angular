import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showFiller = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  changeRouter(s: string){
    
    switch(s){
      case "dashboard":
        this.router.navigate(["dashboard"]);
        console.log(s);
        break;
        case "employee-list":
          this.router.navigate(["employee-list"]);
          console.log(s);
          break;
    }
  }

  sideBarOpen = true;

  toggleSidebar() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
