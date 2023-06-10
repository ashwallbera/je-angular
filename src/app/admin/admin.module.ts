import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule} from '@angular/material/icon'
import { UserService } from '../services/user.service';
import { QrCodeModule } from 'ng-qrcode';
import { AppMaterialModule } from '../app-material.module';


@NgModule({
  declarations: [
    SidenavComponent,
    MainComponent,
    DashboardComponent,
    EmployeelistComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    QrCodeModule,
    AppMaterialModule
    
  ]
})
export class AdminModule { }
