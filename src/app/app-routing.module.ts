import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  {path: '', component:PortfolioComponent},
  {path: 'about', component:AboutComponent},
  {path: 'item', component: ItemComponent},
  {path: '**', pathMatch: 'full', redirectTo:''}, //redirecciona a PortFolio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
