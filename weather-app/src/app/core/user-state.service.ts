import { Injectable } from '@angular/core';
import { UserApiService } from '@core/user-api.service';
import { Observable } from 'rxjs';
import { IUser } from '@core/model';

@Injectable()

export class UserStateService {
	constructor(
		private readonly userApiService: UserApiService
	) {
	}

	getUserState(): Observable<IUser[]> {
		return this.userApiService.getUser();
	}
}
