import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WEATHER_API_URL } from '@core/tokens';
import { IWeatherResponse, WeatherParams } from '@core/model';

@Injectable()

export class WeatherApiService {
	weatherApiUrl = inject(WEATHER_API_URL);

	constructor(
		private readonly http: HttpClient
	) {
	}

	getWeatherByGeo(params: WeatherParams): Observable<IWeatherResponse> {
		return this.http
			.get<IWeatherResponse>(
				`${this.weatherApiUrl}?latitude=${params.latitude}&longitude=${params.longitude}180&current_weather=true&hourly=temperature_2m`
			);
	}
}
