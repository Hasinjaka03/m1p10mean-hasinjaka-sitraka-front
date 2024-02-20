import { Component } from '@angular/core';


@Component({
  selector: 'notifications-cmp',
  templateUrl: 'notifications.component.html'
})
export class NotificationsComponent {
  constructor( ) {}

  showNotification(from: string, align: string) {
    const color = Math.floor(Math.random() * 5 + 1);
    let message = '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>';
    let action = ''; // Action button if needed
    let duration = 4000; // Duration in milliseconds

    
  }
}
