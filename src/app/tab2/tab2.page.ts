import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchTerm: string;
  plants  = [
    {
      "name": "Croton"
    },
    {
      "name": "Dracaenda Marginata"
    },
    {
      "name": "Golden Pothos"
    }
    ,
    {
      "name": "Lucky Bamboo"
    }
    ,
    {
      "name": "Lemon Lime Dracaena"
    }
    ,
    {
      "name": "Majesty Palm"
    }
    ,
    {
      "name": "Moth Orchid"
    }
    ,
    {
      "name": "Peace Lily"
    }
    ,
    {
      "name": "Snake Plant"
    },
    {
      "name": "Spider Plant"
    }
  ];

  constructor() {}

}
