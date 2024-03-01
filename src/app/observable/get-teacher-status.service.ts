import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class GetTeacherStatusService {
	private myObservable$ = new Subject<number>();

	constructor() {
		this.myLogic();
	}

	private myLogic(): void {
		setTimeout(() => {
			let numberTemp: number = parseInt((Math.random() * 10).toString());

			this.myObservable$.next(numberTemp);

			this.myLogic();
		}, 3000);
	}

	onChange(): Observable<number> {
		return this.myObservable$.asObservable();
	}
}