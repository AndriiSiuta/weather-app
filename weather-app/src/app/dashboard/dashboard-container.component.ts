import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WeatherStateService } from '@core/weather-state.service';
import { UserStateService } from '@core/user-state.service';
import { map, mergeMap, Observable, switchMap, toArray } from 'rxjs';
import { IWeatherState } from '@core/model';

@Component({
	selector: 'app-dashboard-container',
	templateUrl: './dashboard-container.component.html',
	styleUrls: ['./dashboard-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardContainerComponent {
	weatherStateService = inject(WeatherStateService);
	userStateService = inject(UserStateService);

	state$!: Observable<IWeatherState[]>;

	ngOnInit() {
		this.state$ = this.userStateService.getUserState().pipe(
			switchMap((users) => {
				return users.map((user) => {
					return this.weatherStateService.getWeatherState({
						longitude: +user.location.coordinates.longitude,
						latitude: +user.location.coordinates.latitude
					}).pipe(
						map((weather) => ({
							user: user,
							weather: weather
						}))
					)
				})
			}),
			mergeMap((w) => w),
			toArray()
		)
	}
}
