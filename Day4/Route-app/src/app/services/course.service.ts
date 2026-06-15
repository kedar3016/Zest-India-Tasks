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
}