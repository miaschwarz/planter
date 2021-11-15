import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantinfoPage } from '../plantinfo/plantinfo.page';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'plantinfo',
    component: PlantinfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
