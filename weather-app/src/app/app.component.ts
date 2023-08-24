import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserStateService } from '@core/user-state.service';
import { GEOLOCATION, NAVIGATOR } from '@core/tokens';
import { GeolocationService } from '@core/geolocation.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	title = 'weather-app';

	constructor(
	) {
	}

}
