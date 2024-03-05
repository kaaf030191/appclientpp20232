import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TeacherService } from '../api/teacher.service';

@Injectable({
	providedIn: 'root'
})

export class GetTeacherStatusService {
	private myObservable$ = new Subject<any[]>();

	private listTTeacher: any[] = [];

	constructor(
		private teacherService: TeacherService
	) {
		this.myLogic();
	}

	private myLogic(): void {
		setTimeout(() => {
			this.teacherService.getAll().subscribe({
				next: (response: any) => {
					this.listTTeacher = response.listTTeacher;

					this.myObservable$.next(this.listTTeacher);
				},
				error: (error: any) => {
					console.log(error);
				}
			});

			this.myLogic();
		}, 3000);
	}

	onChange(): Observable<any[]> {
		return this.myObservable$.asObservable();
	}
}