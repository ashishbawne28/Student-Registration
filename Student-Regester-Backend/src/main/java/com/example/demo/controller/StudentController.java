
package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Student;
import com.example.demo.service.StudentService;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {

	@Autowired
	private StudentService studentService;

	@PostMapping("/add")
	public ResponseEntity<Student> addStudent(@RequestBody Student student) {

		Student savedStudent = studentService.saveStudent(student);
		return new ResponseEntity(savedStudent, HttpStatus.CREATED);
	}

	@GetMapping("/all")
	public ResponseEntity<List<Student>> getAllStudents() {

		return new ResponseEntity(studentService.getAllStudents(), HttpStatus.OK);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable Integer id, @RequestBody Student student) {

		return new ResponseEntity(studentService.updateStudent(id, student), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> deleteStudent(@PathVariable Integer id) {

	    studentService.deleteStudent(id);

	    return new ResponseEntity<>(HttpStatus.OK);
	}
}
