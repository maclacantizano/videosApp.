import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'viuva-negra',
    loadChildren: () => import('./filmes/viuva-negra/viuva-negra.module').then( m => m.ViuvaNegraPageModule)
  },
  {
    path: 'mulher-maravilha',
    loadChildren: () => import('./filmes/mulher-maravilha/mulher-maravilha.module').then( m => m.MulherMaravilhaPageModule)
  },
  {
    path: 'din-e-o-dragao-genial',
    loadChildren: () => import('./filmes/din-e-o-dragao-genial/din-e-o-dragao-genial.module').then( m => m.DinEODragaoGenialPageModule)
  },
  {
    path: 'hotel-transilvania',
    loadChildren: () => import('./filmes/hotel-transilvania/hotel-transilvania.module').then( m => m.HotelTransilvaniaPageModule)
  },
  {
    path: 'crepusculo-amanhecer',
    loadChildren: () => import('./filmes/crepusculo-amanhecer/crepusculo-amanhecer.module').then( m => m.CrepusculoAmanhecerPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
