import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultCoffeeComponent } from './body/default-coffee/default-coffee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboardCoffee',
    pathMatch: 'full'
  },
  {
    path: 'dashboardCoffee',
    component: DefaultCoffeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
