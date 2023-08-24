import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser, IWeatherResponse, IWeatherState, WeatherCodeToIconMap } from '@core/model';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent {
	@Input()
	weatherState!: IWeatherState;

	@Input()
	lsState!: IWeatherState | null;

	@Input()
	showMap = true;

	@Output()
	saveUserClick = new EventEmitter<IWeatherState>();

	@Output()
	showLocationClick = new EventEmitter<IWeatherState>();

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

	saveUser() {
		this.saveUserClick.emit(this.weatherState);
	}

	isSave() {
		if (!this.lsState) {
			return true
		}

		return !this.lsState.saved;
	}

	get iconClass() {
		return WeatherCodeToIconMap.get(this.weatherState.weather.current_weather.weathercode) || 'sun';
	}

	showLocation() {
		this.showLocationClick.next(this.weatherState);
	}

	constructor(
		library: FaIconLibrary
	) {
		library.addIconPacks(fas, far);
	}
}
