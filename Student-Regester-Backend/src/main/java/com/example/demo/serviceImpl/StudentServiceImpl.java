package com.example.demo.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Student;
import com.example.demo.repository.StudentRepository;
import com.example.demo.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;

	@Override
	public Student saveStudent(Student student) {

		student.setId(null);
		return studentRepository.save(student);
	}

	@Override
	public List<Student> getAllStudents() {

		return studentRepository.findAll();
	}

	@Override
	public Student getStudentById(Integer id) {

		return studentRepository.findById(id).orElse(null);
	}

	@Override
	public Student updateStudent(Integer id, Student student) {

		Student existingStudent = studentRepository.findById(id).orElseThrow(() -> new RuntimeException("Student not found with ID: " + id));

		existingStudent.setStudentCode(student.getStudentCode());
		existingStudent.setFullName(student.getFullName());
		existingStudent.setEmail(student.getEmail());
		existingStudent.setAddress(student.getAddress());
		existingStudent.setMobile(student.getMobile());
		existingStudent.setNumber(student.getNumber());
		existingStudent.setCourse(student.getCourse());
		existingStudent.setCity(student.getCity());
		existingStudent.setCollegeName(student.getCollegeName());

		return studentRepository.save(existingStudent);
	}

	@Override
	public void deleteStudent(Integer id) {
		studentRepository.deleteById(id);
	}
}
