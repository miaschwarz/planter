import { Component } from '@angular/core';
import { PlantsService } from '../services/plants.service';
import {ActivatedRoute} from '@angular/router';
import { NotificationsService } from '../services/notifications.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public route: ActivatedRoute, public plantsService: PlantsService, private localNotification : NotificationsService) {}

  ngOnInit() {
    let fragment = this.route.snapshot.paramMap.get('fragment');
  }

  removePlant(plant: any) {
    this.plantsService.removePlant(plant.fragment);
  }

  sendLocalNotification () {
    this.localNotification.showLocalNotification ( 6, " TEST NOTIFICATION " , " TITLE " );
  }

}
