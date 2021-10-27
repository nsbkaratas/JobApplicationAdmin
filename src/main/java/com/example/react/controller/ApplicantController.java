package com.example.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.react.model.Applicants;
import com.example.react.repository.ApplicantRepository;


import com.example.react.exception.ResourceNotFoundException;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ApplicantController {

	@Autowired
	private ApplicantRepository applicantRepo;

	//get all applicants
	
	@GetMapping("/allapplicants")
	public List<Applicants> getAllStudents()
	{
		return applicantRepo.findAll();
	}
	
	//add applicants
	@PostMapping("/addapplicants")
    public Applicants newApplicant(@RequestBody Applicants applicant)
    {
		return applicantRepo.save(applicant);
    }
	
	
	@GetMapping("/allapplicants/{id}")
	public ResponseEntity<Applicants> getApplicantById(@PathVariable int id)
	{
		Applicants app= applicantRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Applicant not found"));
		return ResponseEntity.ok(app);                     
	}
	

	@PutMapping("/allapplicants/{id}")
	public ResponseEntity<Applicants> updateApplicant(@PathVariable int id, @RequestBody Applicants applicant)
	{
		Applicants app = applicantRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Applicant not found"));
	    app.setF_Name(applicant.getF_Name());
	    app.setL_Name(applicant.getL_Name());
	    app.setE_mail(applicant.getE_mail());
	    app.setPhone(applicant.getPhone());
	    app.setState(applicant.getState());
	    app.setCity(applicant.getCity());
	    app.setAddress(applicant.getAddress());
	    app.setPosition(applicant.getPosition());
	    app.setAdditional_Info(applicant.getAdditional_Info());
	    app.setResume(applicant.getResume());
	    app.setComment(applicant.getComment());
	    
	    Applicants updatedApplicant=applicantRepo.save(app);
	    return ResponseEntity.ok(updatedApplicant);
	}
	

	
	@DeleteMapping("/allapplicants/{id}")
	public String deleteApplicant(@PathVariable int id)
	{
		applicantRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Applicant not found"));
	    applicantRepo.deleteById(id);
	    return "The applicant with id: "+ id +" is removed from the database.";
	}
	
}
