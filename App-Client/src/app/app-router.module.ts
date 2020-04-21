import { MapsComponent } from './maps/maps.component';
import { OperatorsComponent } from './operators/operators.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsertableComponent } from './usertable/usertable.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: UsertableComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'operators',
    component: OperatorsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
