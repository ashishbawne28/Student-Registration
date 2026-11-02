
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Student } from '../model/student';
import { StudentService } from '../service/student-service';

@Component({
  selector: 'app-student-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-register.html',
  styleUrl: './student-register.css'
})
export class StudentRegister {

  student: Student = new Student();

  submitted: boolean = false;

  constructor(private studentService: StudentService) {}

  saveStudent(): void {

    this.submitted = true;

    // Check all validations
    if (
      !this.student.fullName?.trim() ||
      !/^[a-zA-Z ]{3,50}$/.test(this.student.fullName.trim()) ||

      !this.student.email?.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.student.email.trim()) ||

      !/^[6-9][0-9]{9}$/.test(this.student.mobile || '') ||

      !this.student.course?.trim() ||

      !this.student.city?.trim() ||
      !/^[a-zA-Z ]+$/.test(this.student.city.trim()) ||

      !this.student.collegeName?.trim() ||
      this.student.collegeName.trim().length < 3
    ) {
      return;
    }

    this.studentService.getAllStudents().subscribe({

      next: (students) => {

        const maxNumber = students.reduce((max, student) => {

          const number = Number(
            student.studentCode?.replace('STU', '') || 0
          );

          return Math.max(max, number);

        }, 0);

        const nextNumber = maxNumber + 1;

        this.student.studentCode =
          'STU' + String(nextNumber).padStart(3, '0');

        this.studentService.addStudent(this.student).subscribe({

          next: (response) => {

            alert('Student registered successfully!');

            console.log('Saved Student:', response);

            this.student = new Student();
            this.submitted = false;

          },

          error: (error) => {

            console.error('Save Error:', error);
            alert('Unable to register student!');

          }

        });

      },

      error: (error) => {

        console.error('Fetch Error:', error);
        alert('Unable to fetch student records!');

      }

    });

  }
}
