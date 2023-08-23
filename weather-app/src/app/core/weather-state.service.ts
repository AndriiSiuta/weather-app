import { Injectable } from '@angular/core';
import { WeatherApiService } from '@core/weather-api.service';
import { WeatherParams } from '@core/model';

@Injectable()

export class WeatherStateService {
	constructor(
		private readonly weatherApiService: WeatherApiService
	) {
	}

	getWeatherState(params: WeatherParams) {
		return this.weatherApiService.getWeatherByGeo(params);
	}
}
