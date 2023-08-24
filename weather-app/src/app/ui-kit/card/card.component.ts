import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  IUser,
  IWeatherResponse,
  IWeatherState,
  WeatherCodeToIconMap,
} from '@core/model';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  removeUserClick = new EventEmitter<IWeatherState>();

  @Output()
  showLocationClick = new EventEmitter<IWeatherState>();

  get saved(): boolean {
    return this.lsState?.saved || false;
  }

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

  get iconClass() {
    return (
      WeatherCodeToIconMap.get(
        this.weatherState.weather.current_weather.weathercode,
      ) || 'sun'
    );
  }

  saveUser() {
    this.saveUserClick.emit(this.weatherState);
  }

  removeUser() {
    this.removeUserClick.emit(this.weatherState);
  }

  showLocation(): void {
    this.showLocationClick.next(this.weatherState);
  }

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
