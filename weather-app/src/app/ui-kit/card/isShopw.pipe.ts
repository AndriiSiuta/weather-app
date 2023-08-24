import { Pipe, PipeTransform } from '@angular/core';
import { filter, iif, mergeMap, Observable, of } from 'rxjs';
import { IWeatherState } from '@core/model';

@Pipe({
	name: 'filterObs'
})

export class IsShowPipe implements PipeTransform {
	transform(source: Observable<any>, state: IWeatherState): any {
		const uuid = state.user.login.uuid;
		return source.pipe(
			filter((w) => !!w),
			mergeMap((w) => {
				return iif(
					() => w && w[uuid],
					of(w[uuid]),
					of(null)
				)
			})
		)
	}
}
