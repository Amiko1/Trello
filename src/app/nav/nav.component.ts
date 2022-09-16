import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  isUserAuthenticated = false;
  private userSub!: Subscription;

  constructor(public modal: ModalService, private authService: AuthService) { }
  
  ngOnInit(): void {
     this.authService.user.subscribe(user => {
      this.isUserAuthenticated = !!user
    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  openModal($event: Event) {
    $event.preventDefault()

    this.modal.toggleModal('auth')
  }

  onLogout() {

  }

}
