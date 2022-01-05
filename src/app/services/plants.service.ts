import { ThrowStmt } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';

@Injectable()
export class PlantsService {

  // tag = "add-plant";
  myPlants = new Array();
  
  plants  = [
    {
      "name": "Croton",
      "fragment": "",
      "water": "When soil is dry (about weekly)",
      "placement": "Sunlight",
      "maintenence": "Mist leaves once per week",
      "origin": "India and Malaysia",
      "photo": "assets/imgs/croton.jpeg"
    },
    {
      "name": "Dracaenda Marginata",
      "water": "Once a week or bi-weekly",
      "placement": "sunlight and light shade",
      "maintenence": "Dust and remove dead leaves",
      "origin": "Madagascar",
      "photo": "assets/imgs/DracaendaMarginata.jpeg"
    },
    {
      "name": "Golden Pothos",
      "water": "1-2 weeks",
      "placement": "Bright, indirect light, will tolerate medium light",
      "maintenence": "",
      "origin": "Solomon Islands",
      "photo": "assets/imgs/goldenpathos.jpeg"

    }
    ,
    {
      "name": "Lucky Bamboo",
      "water": "Every 7-10 days, slightly damp water",
      "placement": "Moderate or indirect sunlight",
      "maintenence": "Clean growing container every few months",
      "origin": "Southeast Asia",
      "photo": "assets/imgs/luckybamboo.jpeg"
    }
    ,
    {
      "name": "Lemon Lime Dracaena",
      "water": "When soil is dry",
      "placement": "Full sunlight",
      "maintenence": "Trim dead leaves",
      "origin": "Africa, Central America and Asia",
      "photo": "assets/imgs/lemonlimedra.jpeg"
    }
    ,
    {
      "name": "Majesty Palm",
      "water": "1-2 weeks",
      "placement": "Bright, indirect light",
      "maintenence": "Fertilize every few months, skip this in the winter",
      "origin": "Madagascar",
      "photo": "assets/imgs/majestypalm.jpeg"
    }
    ,
    {
      "name": "Moth Orchid",
      "water": "10-14 days",
      "placement": "Keep them warm in good sunlight",
      "maintenence": "Dust leaves",
      "origin": "Southeastern Asia and parts of Australia",
      "photo": "assets/imgs/mothorchid.jpeg"
    }
    ,
    {
      "name": "Peace Lily",
      "water": "When soil is cry, once a week",
      "placement": "Birght spot out of direct sun",
      "maintenence": "Dust and trim dead leaves",
      "origin": "Colombia and Venezuela",
      "photo": "assets/imgs/peacelily.jpeg"
    }
    ,
    {
      "name": "Snake Plant",
      "water": "Every two weeks, during winter once a month",
      "placement": "Indirect light",
      "maintenence": "Fertilize during growing seasone",
      "origin": "Africa",
      "photo": "assets/imgs/snakeplant.jpeg"
    },
    {
      "name": "Spider Plant",
      "water": "Once a week",
      "placement": "Bright moderate light",
      "maintenence": "In winter allow soil to dry more often",
      "origin": "South Africa",
      "photo": "assets/imgs/spiderplant.jpg"
    }
  ];

  constructor() { 
    this.formatFragments();
    let x = localStorage.getItem('my-plants');
    if (x) {
      this.myPlants = [];
      let frags = JSON.parse(x);
      for(let frag of frags) {
        let plant = this.findPlantFromFragment(frag);
        if(plant) {
          this.myPlants.push(plant);
        }
      }
    }
  }

  formatFragments() {
    for (let plant of this.plants) {
      plant.fragment = plant.name.toLowerCase();
      plant.fragment = plant.fragment.replace(" ", "-");
      plant.fragment = plant.fragment.replace(" ", "-");
    } 
  }

  getPlants() {
    return this.plants;
  }

  findPlantFromFragment(fragment: string) {
    for (let plant of this.plants) {
      if (plant.fragment == fragment) {
        return plant;
      }
    }
    return null;
  }

  public addNewPlant(fragment: string) {

    let fragments = [];
    for(let plant of this.myPlants) {
      fragments.push(plant.fragment);
    }
    fragments.push(fragment);
    localStorage.setItem('my-plants', JSON.stringify(fragments));

    this.myPlants.push(this.findPlantFromFragment(fragment));
  }

  public removePlant(fragment: string) {
    for (let i = 0; i < this.myPlants.length; i++) {
      if (this.myPlants[i] == this.findPlantFromFragment(fragment)) {
        this.myPlants.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('my-plants', JSON.stringify(fragment));
      
  }

}
