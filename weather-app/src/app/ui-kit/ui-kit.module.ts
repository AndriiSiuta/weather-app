import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CardComponent } from '@ui-kit/card/card.component';
import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	imports: [
		RouterLink,
		RouterLinkActive,
		NgIf,
		NgForOf,
		JsonPipe,
		FontAwesomeModule,
	],
	exports: [HeaderComponent, CardComponent],
	declarations: [
		HeaderComponent,
		CardComponent
	]
})

export class UiKitModule {
}
