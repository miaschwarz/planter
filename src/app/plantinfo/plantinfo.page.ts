import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../services/plants.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-plantinfo',
  templateUrl: './plantinfo.page.html',
  styleUrls: ['./plantinfo.page.scss'],
})
export class PlantinfoPage implements OnInit {
  plant: any;

  constructor(public route: ActivatedRoute, public plants: PlantsService) { }

  ngOnInit() {
    let fragment = this.route.snapshot.paramMap.get('fragment');
    this.plant = this.plants.findPlantFromFragment(fragment);
  }

}
