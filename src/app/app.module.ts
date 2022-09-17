import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BoardsModule } from './boards/boards.module';
import { NavComponent } from './nav/nav.component';
import { EntranceComponent } from './entrance/entrance.component';
import { BoardsComponentt } from './boards/boards.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ModalService } from './services/modal.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SharedModule } from './shared/shared.module';
import { BoardServices } from './services/boards.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EntranceComponent,
    BoardsComponentt,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    DragDropModule,
    SharedModule,
    BoardsModule
  ],
  providers: [AuthService, BoardServices, ModalService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
