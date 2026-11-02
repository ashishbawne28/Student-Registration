
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) {}

  // Save Student
  saveStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(
      `${this.apiUrl}/add`,
      student
    );
  }

  // Add Student
  addStudent(student: Student): Observable<Student> {
    return this.saveStudent(student);
  }


getAllStudents(): Observable<Student[]> {
  return this.http.get<Student[]>(`${this.apiUrl}/all`);
}

  // Update Student
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(
      `${this.apiUrl}/update/${id}`,
      student
    );
  }

  // Delete Student
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/delete/${id}`
    );
  }

}
