package com.example.react.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.react.model.Applicants;

@Repository
public interface ApplicantRepository extends JpaRepository<Applicants,Integer> {
	
	List<Applicants> findByName(String name);
}
