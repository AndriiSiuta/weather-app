import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USER_API_URL } from '@core/tokens';
import { map, Observable } from 'rxjs';
import { IUser, IUserResponse } from '@core/model';

@Injectable()

export class UserApiService {
	constructor(
		private readonly http: HttpClient,
		@Inject(USER_API_URL) private readonly userApiUrl: string
	) {
	}

	getUser(): Observable<IUser[]> {
		return this.http.get<IUserResponse>(`${this.userApiUrl}?results=20`).pipe(
			map((response) => response.results)
		);
	}
}
