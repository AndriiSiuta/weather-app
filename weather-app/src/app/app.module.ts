import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiKitModule } from '@ui-kit/ui-kit.module';
import { CoreModule } from '@core/core.module';
import { CORE_CONFIG } from '@core/model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		UiKitModule,
		CoreModule.forRoot(CORE_CONFIG),
		AppRoutingModule,
		FontAwesomeModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
