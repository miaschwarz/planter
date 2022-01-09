import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlantsService } from '../services/plants.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchTerm: string;


  constructor(public router: Router, public plantsService: PlantsService) {
  }

  navTo(plant: any) {
    console.log(plant.fragment);
    this.router.navigateByUrl(`plants/${plant.fragment}`);
  }

}
