import { inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '@core/tokens';
import { IWeatherState, LS_KEY } from '@core/model';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class LocalStorageService {
  localStorage = inject(LOCAL_STORAGE);
  private readonly state$ = new BehaviorSubject<IWeatherState>(
    this.getItems(LS_KEY)
  );

  constructor() {
  }

  /**
   * Save item to local storage
   * @param val
   */
  saveItem(val: IWeatherState) {
    const lsState = this.getItems();
    // mutation but it's okay
    val.saved = true;
    lsState[val.user.login.uuid] = val;
    const newState = Object.assign({}, lsState);
    this.localStorage.setItem(LS_KEY, JSON.stringify(newState));
    this.state$.next(newState);
  }

  /**
   * Get item from local storage
   * @param key
   */
  getItems(key: string = LS_KEY) {
    return JSON.parse(this.localStorage.getItem(key) || '{}');
  }

  get state() {
    return this.state$.asObservable();
  }
}
