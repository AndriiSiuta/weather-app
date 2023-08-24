import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {WeatherStateService} from '@core/weather-state.service';
import {UserStateService} from '@core/user-state.service';
import {map, mergeMap, Observable, switchMap, toArray} from 'rxjs';
import {IWeatherState} from '@core/model';
import {LocalStorageService} from '@core/localStorage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainerComponent implements OnInit {
  weatherStateService = inject(WeatherStateService);
  userStateService = inject(UserStateService);
  lsService = inject(LocalStorageService);
  router = inject(Router);
  state$!: Observable<IWeatherState[]>;
  bhState$ = this.lsService.state;

  ngOnInit() {
    this.state$ = this.userStateService.getUserState().pipe(
      switchMap((users) => {
        return users.map((user) => {
          return this.weatherStateService
            .getWeatherState({
              longitude: +user.location.coordinates.longitude,
              latitude: +user.location.coordinates.latitude,
            })
            .pipe(
              map((weather) => ({
                user: user,
                weather: weather,
                saved: false,
              })),
            );
        });
      }),
      mergeMap((w) => w),
      toArray(),
    );
  }

  handleLocation(state: IWeatherState) {
    this.router.navigate(['map-layer'], {
      queryParams: {
        lat: state.weather.latitude,
        lon: state.weather.longitude,
        userPicture: encodeURIComponent(JSON.stringify(state.user.picture)),
      },
    });
  }

  handleSave(state: IWeatherState) {
    this.lsService.saveItem(state);
  }

  handleRemove($event: IWeatherState) {
    this.lsService.removeItem($event);
  }
}
