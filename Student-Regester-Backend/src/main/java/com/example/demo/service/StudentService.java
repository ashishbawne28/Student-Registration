
package com.example.demo.service;

import java.util.List;
import com.example.demo.entity.Student;

public interface StudentService {

	Student saveStudent(Student student);

	List<Student> getAllStudents();

	Student getStudentById(Integer id);

	Student updateStudent(Integer id, Student student);

	void deleteStudent(Integer id);
}
