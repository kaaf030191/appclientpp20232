import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable({
	providedIn: 'root'
})

export class TeacherService {
	constructor(
		private httpClient: HttpClient
	) {}

	getAll(): Observable<any> {
		return this.httpClient.get(`http://localhost/apirestpp20232/public/api/teacher/getall`, httpOptions);
	}
}