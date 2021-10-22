package com.example.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.react.model.Applicants;
import com.example.react.repository.ApplicantRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ApplicantsController {
	
	@Autowired
	private ApplicantRepository applicantRepo;
	
	@GetMapping("/allapplicants")
	public List<Applicants> getAllStudents(){
		return applicantRepo.findAll();
	}
	
//	@PostMapping("/addapplicants")
//	public Applicants newApplicant(@RequestBody Applicants s) {
//		return applicantRepo.save(s);
//	}
	
	

}
