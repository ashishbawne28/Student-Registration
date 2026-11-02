import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentRegister } from './student-register/student-register';
import { StudentList } from './student-list/student-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentRegister, StudentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}