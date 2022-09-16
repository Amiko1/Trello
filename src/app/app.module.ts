import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NavComponent } from './nav/nav.component';
import { EntranceComponent } from './entrance/entrance.component';
import { TasksComponent } from './tasks/tasks.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ModalService } from './services/modal.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EntranceComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
  ],
  providers: [AuthService, ModalService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
