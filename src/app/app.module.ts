import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NavComponent } from './nav/nav.component';
import { EntranceComponent } from './entrance/entrance.component';
import { BoardsComponentt } from './boards/boards.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ModalService } from './services/modal.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BoardsModalComponent } from './boards/boards-modal/boards-modal.component';
import { SharedModule } from './shared/shared.module';
import { BoardServices } from './services/boards.service';
import { MatSelectModule } from '@angular/material/select'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EntranceComponent,
    BoardsComponentt,
    BoardsModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    DragDropModule,
    SharedModule,
    MatSelectModule
  ],
  providers: [AuthService, BoardServices, ModalService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
