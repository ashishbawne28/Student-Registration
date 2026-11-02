
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentService } from '../service/student-service';
import { Student } from '../model/student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {

  students: Student[] = [];

  isEditPopupOpen = false;

  submitted: boolean = false;

  selectedStudent: Student = new Student();

  constructor(
    private studentService: StudentService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  // Get All Students
  getAllStudents(): void {

    this.studentService.getAllStudents().subscribe({

      next: (data: Student[]) => {

        console.log('Students from Backend:', data);

        this.students = [...data];

        console.log('Students Count:', this.students.length);

        this.cdr.detectChanges();

      },

      error: (error) => {
        console.error('Fetch Error:', error);
      }

    });

  }

  // Delete Student
  deleteStudent(id: number): void {

    if (confirm('Are you sure you want to delete this student?')) {

      this.studentService.deleteStudent(id).subscribe({

        next: () => {

          alert('Student deleted successfully!');

          this.getAllStudents();

        },

        error: (error) => {

          console.error('Delete Error:', error);

          alert('Unable to delete student!');

        }

      });

    }

  }

  // Edit Student
  editStudent(student: Student): void {

    this.selectedStudent = { ...student };

    this.submitted = false;

    this.isEditPopupOpen = true;

  }

  // Close Edit Popup
  closeEditPopup(): void {

    this.isEditPopupOpen = false;

    this.selectedStudent = new Student();

    this.submitted = false;

  }

  // Update Student
  updateStudent(): void {

    this.submitted = true;

    // Validation
    if (
      !this.selectedStudent.fullName?.trim() ||
      !/^[a-zA-Z ]{3,50}$/.test(this.selectedStudent.fullName.trim()) ||

      !this.selectedStudent.email?.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.selectedStudent.email.trim()) ||

      !/^[6-9][0-9]{9}$/.test(this.selectedStudent.mobile || '') ||

      !this.selectedStudent.course?.trim() ||

      !this.selectedStudent.city?.trim() ||
      !/^[a-zA-Z ]+$/.test(this.selectedStudent.city.trim()) ||

      !this.selectedStudent.collegeName?.trim() ||
      this.selectedStudent.collegeName.trim().length < 3
    ) {
      return;
    }

    if (this.selectedStudent.id == null) {

      alert('Student ID not found!');

      return;

    }

    this.studentService.updateStudent(
      this.selectedStudent.id,
      this.selectedStudent
    ).subscribe({

      next: () => {

        alert('Student updated successfully!');

        this.closeEditPopup();

        this.getAllStudents();

      },

      error: (error) => {

        console.error('Update Error:', error);

        alert('Unable to update student!');

      }

    });

  }

}
