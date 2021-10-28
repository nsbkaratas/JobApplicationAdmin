package com.example.react.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table(name="Applicants")
public class Applicants {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String f_Name;
	private String l_Name;
	private String e_mail;
	private String phone;
	private String state;
	private String city;
	private String address;
	private String position;
	private String resume_Link;
	private String comment;
	
	
    public Applicants()
    {
    	
    }

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getF_Name() {
		return f_Name;
	}

	public void setF_Name(String f_Name) {
		this.f_Name = f_Name;
	}

	public String getL_Name() {
		return l_Name;
	}

	public void setL_Name(String l_Name) {
		this.l_Name = l_Name;
	}

	public String getE_mail() {
		return e_mail;
	}

	public void setE_mail(String e_mail) {
		this.e_mail = e_mail;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}
	
	public String getResume_Link() {
		return resume_Link;
	}

	public void setResume_Link(String resume_Link) {
		this.resume_Link = resume_Link;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Applicants(int id, String f_Name, String l_Name, String e_mail, String phone, String state, String city,
			String address, String position, String resume_Link, String comment) {
		super();
		this.id = id;
		this.f_Name = f_Name;
		this.l_Name = l_Name;
		this.e_mail = e_mail;
		this.phone = phone;
		this.state = state;
		this.city = city;
		this.address = address;
		this.position = position;
		this.resume_Link = resume_Link;
		this.comment = comment;
	}
    
   
	
//	@Override
//	public String toString() {
//		return "Student [id=" + id + ", name=" + name + ", grade=" + grade + "]";
//	}
	
}
