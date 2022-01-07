import { Component } from '@angular/core';
import { PlantsService } from './services/plants.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public plantsService: PlantsService) {
    setTimeout(() => {
      plantsService.scheduleInitial();
    }, 3 * 1000);
  }
}
