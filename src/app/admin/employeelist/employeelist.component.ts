import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/services/UserModel';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  user: UserModel[] = [];
  constructor(public userService:UserService) {
    this.getUser();
   }

  ngOnInit(): void {
   
  }

  getUser(){
    this.userService.getUserList().subscribe((data) =>{
      console.log(data);
      this.user = data;
    });
  }

}
