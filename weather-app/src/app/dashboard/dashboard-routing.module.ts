import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {
}
