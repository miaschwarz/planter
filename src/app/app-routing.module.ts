import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'plantinfo',
    loadChildren: () => import('./plantinfo/plantinfo.module').then( m => m.PlantinfoPageModule),
  },
  {
    path: 'plantinfo/:fragment',
    loadChildren: () => import('./plantinfo/plantinfo.module').then( m => m.PlantinfoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
