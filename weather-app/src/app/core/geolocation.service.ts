import { Inject, Injectable } from '@angular/core';
import { finalize, Observable, shareReplay } from 'rxjs';
import { GEOLOCATION } from '@core/tokens';

@Injectable()

export class GeolocationService extends Observable<GeolocationPosition> {
	constructor(
		@Inject(GEOLOCATION) geolocationRef: Geolocation
	) {
		let watchId = 0;
		const GEOLOCATION_OPTIONS: PositionOptions = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		}
		super(subscriber => {
			watchId = geolocationRef.watchPosition(
				position => subscriber.next(position),
				positionError => subscriber.error(positionError),
				GEOLOCATION_OPTIONS
			)
		});

		return this.pipe(
			finalize(() => geolocationRef.clearWatch(watchId)),
			shareReplay({ bufferSize: 1, refCount: true })
		)
	}
}
