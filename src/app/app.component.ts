import { Component } from '@angular/core';
import { TeacherService } from './api/teacher.service';
import { GetTeacherStatusService } from './observable/get-teacher-status.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent {
	listTTeacher: any[] = [];

	constructor(
		private getTeacherStatusService: GetTeacherStatusService,
		private teacherService: TeacherService
	) {}

	ngOnInit() {
		this.getTeacherStatusService.onChange().subscribe({
			next: (response: number) => {
				console.log(response + '...');
			},
			error: (error: any) => {
				console.log(error);
			}
		});

		this.getTeacherStatusService.onChange().subscribe({
			next: (response: number) => {
				console.log(response + '!!!');
			},
			error: (error: any) => {
				console.log(error);
			}
		});

		// this.teacherService.getAll().subscribe({
		// 	next: (response: any) => {
		// 		this.listTTeacher = response.listTTeacher;
		// 	},
		// 	error: (error: any) => {
		// 		console.log(error);
		// 	}
		// });
	}
}