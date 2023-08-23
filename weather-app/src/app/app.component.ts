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

	geolocationService = inject(GeolocationService);
	navigator = inject(NAVIGATOR);
	constructor(
	) {
	}

	ngOnInit() {
		this.navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
			console.log('start tracking your position');
			this.geolocationService.subscribe(console.log);
		})
	}
}
