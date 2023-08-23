import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser, IWeatherResponse, IWeatherState } from '@core/model';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent {
	@Input() weatherState!: IWeatherState;

	get user(): IUser {
		return this.weatherState.user;
	}

	get weather(): IWeatherResponse {
		return this.weatherState.weather;
	}

	get lowestTemp(): number {
		return Math.min(...this.weather.hourly.temperature_2m);
	}

	get highestTemp(): number {
		return Math.max(...this.weather.hourly.temperature_2m);
	}

	ngOnInit() {
		console.log(this.weatherState);
	}
}
