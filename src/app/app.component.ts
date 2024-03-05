import { Component } from '@angular/core';
import { GetTeacherStatusService } from './observable/get-teacher-status.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent {
	listTTeacher: any[] = [];

	constructor(
		private getTeacherStatusService: GetTeacherStatusService
	) {}

	ngOnInit() {
		this.getTeacherStatusService.onChange().subscribe({
			next: (response: any[]) => {
				this.listTTeacher = response;
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}