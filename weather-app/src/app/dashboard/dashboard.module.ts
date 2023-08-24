import { NgModule } from '@angular/core';
import { DashboardContainerComponent } from './dashboard-container.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { IsShowPipe } from '@ui-kit/card/isShopw.pipe';
import { UiKitModule } from '@ui-kit/ui-kit.module';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

@NgModule({
	imports: [
		DashboardRoutingModule,
		UiKitModule,
		AsyncPipe,
		NgIf,
		NgForOf,
	],
	declarations: [
		DashboardContainerComponent,
		IsShowPipe,
	]
})

export class DashboardModule {
}
