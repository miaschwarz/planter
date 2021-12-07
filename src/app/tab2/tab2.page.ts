import { Component } from '@angular/core';
import { PlantsService } from '../services/plants.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchTerm: string;
  

  constructor(public plants: PlantsService) {
  }

}
