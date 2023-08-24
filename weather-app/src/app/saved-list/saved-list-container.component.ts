import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {LocalStorageService} from '@core/localStorage.service';
import {map} from 'rxjs';
import {IWeatherState} from '@core/model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-saved-list-container',
  templateUrl: './saved-list-container.component.html',
  styleUrls: ['./saved-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavedListContainerComponent {
  lsService = inject(LocalStorageService);
  router = inject(Router);
  state$ = this.lsService.state.pipe(
    map((v) => {
      return Object.values(v);
    }),
  );

  handleLocation(state: IWeatherState) {
    this.router.navigate(['map-layer'], {
      queryParams: {
        lat: state.weather.latitude,
        lon: state.weather.longitude,
        userPicture: encodeURIComponent(JSON.stringify(state.user.picture)),
      },
    });
  }

  handleRemove($event: IWeatherState): void {
    this.lsService.removeItem($event);
  }
}
