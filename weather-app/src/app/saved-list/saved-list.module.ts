import { NgModule } from '@angular/core';
import { SavedListRoutingModule } from './saved-list-routing.module';
import { SavedListContainerComponent } from './saved-list-container.component';
import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { UiKitModule } from '@ui-kit/ui-kit.module';

@NgModule({
	imports: [SavedListRoutingModule, JsonPipe, AsyncPipe, NgIf, NgForOf, UiKitModule],
	exports: [],
	declarations: [
		SavedListContainerComponent
	]
})

export class SavedListModule {
}
