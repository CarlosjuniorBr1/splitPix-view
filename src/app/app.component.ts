import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'splitpix-view';

  opened = true; 
  toggleSidebar() {
    this.opened = !this.opened;
  }

  
}
