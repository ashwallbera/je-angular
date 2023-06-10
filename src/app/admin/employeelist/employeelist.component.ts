import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/services/UserModel';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import * as signalR from '@microsoft/signalr';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss'],
})
export class EmployeelistComponent implements OnInit {
  displayedColumns: string[] = ['name', 'position', 'created', 'action'];
  dataSource: MatTableDataSource<UserModel>;
  user: UserModel[] = [];
  connection: any;

  constructor(public userService: UserService) {
    this.dataSource = new MatTableDataSource();
    this.getUser();
    this.connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Debug)
      .withUrl(environment.api + '/userhub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .build();

    this.connection.on(
      'SendMessage',
      (username: string, message: string) => {
        console.log('message Received');
      }
    );

    this.connection
      .start()
      .then(() => {})
      .catch((err: any) => console.log('error: ' + err.message));
  }

  ngOnInit(): void {}

  getUser() {
    this.userService.getUserList().subscribe((data) => {
      console.log(data);
      this.user = data;
      this.dataSource.data = data;
    });
  }

  public startConnection() {
    // return new Promise((resolve, reject) => {
    // });
    // this.hubConnection = new signalR.HubConnectionBuilder()
    //   //.configureLogging(signalR.LogLevel.Debug)
    //   .withUrl(environment.api + '/userhub', {
    //     skipNegotiation: true,
    //     transport: signalR.HttpTransportType.WebSockets,
    //   })
    //   .build();
    // this.hubConnection.on(
    //   'messageReceived',
    //   (username: string, message: string) => {
    //     console.log('username: ' + username);
    //   }
    // );
    // this.hubConnection
    //   .start()
    //   .then(() => {
    //     console.log('connection established');
    //     // return resolve(true);
    //   })
    //   .catch((err: any) => {
    //     console.log('error occured' + err);
    //     // reject(err);
    //   });
  }
  openAddEmployeeDialog() {
    console.log('sending');
    this.send(this.connection);
  }
  send(connection: any) {
    connection.invoke('SendMessage', 'SendMessage', 'tbMessage.value').then(() => {
      console.log('sending');
    });
  }
}
