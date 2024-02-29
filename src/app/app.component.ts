import { Component } from '@angular/core';
import { TeacherService } from './api/teacher.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent {
	listTTeacher: any[] = [];

	constructor(
		private teacherService: TeacherService
	) {}

	ngOnInit() {
		this.teacherService.getAll().subscribe({
			next: (response: any) => {
				this.listTTeacher = response.listTTeacher;
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}