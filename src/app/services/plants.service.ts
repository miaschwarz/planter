import { Component, Injectable, OnInit } from '@angular/core';

@Injectable()
export class PlantsService {

  plants  = [
    {
      "name": "Croton",
      "water": "Once Per Week",
      "placement": "Direct Sun",
      "origin": "South Africa"
    },
    {
      "name": "Dracaenda Marginata",
      "fragment": "dracaenda-marginata",
      "water": "",
      "placement": "",
      "origin": ""
    },
    {
      "name": "Golden Pothos",
      "water": "",
      "placement": "",
      "origin": ""
    }
    ,
    {
      "name": "Lucky Bamboo",
      "water": "",
      "placement": "",
      "origin": ""
    }
    ,
    {
      "name": "Lemon Lime Dracaena",
      "water": "",
      "placement": "",
      "origin": ""
    }
    ,
    {
      "name": "Majesty Palm",
      "water": "",
      "placement": "",
      "origin": ""
    }
    ,
    {
      "name": "Moth Orchid",
      "water": "",
      "placement": "",
      "origin": ""
    }
    ,
    {
      "name": "Peace Lily",
      "water": "",
      "placement": "",
      "origin": ""
    }
    ,
    {
      "name": "Snake Plant",
      "water": "",
      "placement": "",
      "origin": ""
    },
    {
      "name": "Spider Plant",
      "water": "",
      "placement": "",
      "origin": ""
    }
  ];

  constructor() { }

  getPlants() {
    return this.plants;
  }

  findPlantFromFragment(fragment: string) {
    console.log(fragment);
    return this.plants[0];
  }

}
