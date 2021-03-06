import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../services/plants.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plantinfo',
  templateUrl: './plantinfo.page.html',
  styleUrls: ['./plantinfo.page.scss'],
})
export class PlantinfoPage implements OnInit {

  plant: any;

  constructor(public router: Router, public route: ActivatedRoute, public plantsService: PlantsService) { }

  ngOnInit() {
    let fragment = this.route.snapshot.paramMap.get('fragment');
    this.plant = this.plantsService.findPlantFromFragment(fragment);
  }

  addNewPlant() {
    this.plantsService.addNewPlant(this.plant.fragment);
    this.router.navigateByUrl(`tab1`);
  }

  goBack() {
    this.router.navigateByUrl(`plants`);
  }


}
