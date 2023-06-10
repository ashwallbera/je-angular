import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QrCodeModule } from 'ng-qrcode';
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AdminModule,
    LoginModule,
    BrowserModule,
    AppRoutingModule,
    QrCodeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    AppMaterialModule

    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
