import { Component, Injectable, OnInit } from '@angular/core';

@Injectable()
export class PlantsService {

  plants  = [
    {
      "name": "Croton",
      "fragment": "",
      "water": "When soil is dry (about weekly)",
      "placement": "Sunlight",
      "maintenence": "Mist leaves once per week, ",
      "origin": "India and Malaysia"
    },
    {
      "name": "Dracaenda Marginata",
      "water": "Once a week or bi-weekly",
      "placement": "sunlight and light shade",
      "maintenence": "Dust and remove dead leaves",
      "origin": "Madagascar"
    },
    {
      "name": "Golden Pothos",
      "water": "1-2 weeks",
      "placement": "Bright, indirect light, will tolerate medium light",
      "maintenence": "",
      "origin": "Solomon Islands"
    }
    ,
    {
      "name": "Lucky Bamboo",
      "water": "Every 7-10 days, slightly damp water",
      "placement": "Moderate or indirect sunlight",
      "maintenence": "Clean growing container every few months",
      "origin": "Southeast Asia"
    }
    ,
    {
      "name": "Lemon Lime Dracaena",
      "water": "When soil is dry",
      "placement": "Full sunlight",
      "maintenence": "Trim dead leaves",
      "origin": "Africa, Central America and Asia"
    }
    ,
    {
      "name": "Majesty Palm",
      "water": "1-2 weeks",
      "placement": "Bright, indirect light",
      "maintenence": "Fertilize every few months, skip this in the winter",
      "origin": "Madagascar"
    }
    ,
    {
      "name": "Moth Orchid",
      "water": "10-14 days",
      "placement": "Keep them warm in good sunlight",
      "maintenence": "Dust leaves",
      "origin": "Southeastern Asia and parts of Australia"
    }
    ,
    {
      "name": "Peace Lily",
      "water": "When soil is cry, once a week",
      "placement": "Birght spot out of direct sun",
      "maintenence": "Dust and trim dead leaves",
      "origin": "Colombia and Venezuela"
    }
    ,
    {
      "name": "Snake Plant",
      "water": "Every two weeks, during winter onces a month",
      "placement": "Indirect light",
      "maintenence": "Fertilize during growing seasone",
      "origin": "Africa"
    },
    {
      "name": "Spider Plant",
      "water": "Once a week",
      "placement": "Bright moderate light",
      "maintenence": "In winter allow soil to dry more often",
      "origin": "South Africa"
    }
  ];

  constructor() { 
    this.formatFragments();
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

}
