import { NgModule } from '@angular/core';
import { DashboardContainerComponent } from './dashboard-container.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardComponent } from './card/card.component';
import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';

@NgModule({
	imports: [DashboardRoutingModule, NgIf, AsyncPipe, NgForOf, JsonPipe],
  declarations: [
    DashboardContainerComponent,
    CardComponent,
  ]
})

export class DashboardModule {
}
