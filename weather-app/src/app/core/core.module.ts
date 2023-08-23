import { ModuleWithProviders, NgModule } from '@angular/core';
import { USER_API_URL, WEATHER_API_URL } from './tokens';
import { UserApiService } from '@core/user-api.service';
import { WeatherApiService } from '@core/weather-api.service';
import { HttpClientModule } from '@angular/common/http';
import { UserStateService } from '@core/user-state.service';
import { WeatherStateService } from '@core/weather-state.service';
import { ICoreConfig } from '@core/model';
import { GeolocationService } from '@core/geolocation.service';

@NgModule({
	imports: [HttpClientModule]
})

export class CoreModule {
	static forRoot(config: ICoreConfig): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [
				{
					provide: USER_API_URL,
					useValue: config.userApiUrl
				},
				{
					provide: WEATHER_API_URL,
					useValue: config.weatherApiUrl
				},
				GeolocationService,
				UserApiService,
				UserStateService,
				WeatherApiService,
				WeatherStateService,
			]
		}
	}
}
