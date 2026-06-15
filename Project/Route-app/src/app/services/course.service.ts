import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../Models/Course";

@Injectable({
    providedIn: 'root'
})

export class CourseService {
    private apiUrl = 'https://localhost:7065/api/Course';
    
    constructor(private http : HttpClient) { }

    getCourses() : Observable<Course[]>{
        return this.http.get<Course[]>(this.apiUrl);
    }
    getCourseById(id : number) : Observable<Course>{
        return this.http.get<Course>(`${this.apiUrl}/${id}`);
    }

    addCourse(course: Omit<Course, 'id'>) : Observable<Course>{
        return this.http.post<Course>(this.apiUrl, course);
    }

    updateCourse(id: number, course: Omit<Course, 'id'>) : Observable<Course>{
        return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
    }

    deleteCourse(id: number) : Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}