import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Enrollment } from "../Models/Enrollment";

@Injectable({
    providedIn: 'root'
})
export class EnrollmentService {
    private apiUrl = 'https://localhost:7065/api/Enrollment';

    constructor(private http: HttpClient) {}

    getEnrollments(): Observable<Enrollment[]> {
        return this.http.get<Enrollment[]>(this.apiUrl);
    }

    getMyEnrollments(): Observable<Enrollment[]> {
        return this.http.get<Enrollment[]>(`${this.apiUrl}/my`);
    }

    createEnrollment(enrollment: { userId: number, courseId: number, status: string }): Observable<Enrollment> {
        return this.http.post<Enrollment>(this.apiUrl, enrollment);
    }

    deleteEnrollment(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
