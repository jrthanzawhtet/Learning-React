package com.jdc.spring.location.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Region {
	
	@Id
	private int id;
	@Column(nullable = false, name = "name")
	private String name;
    @Column(name = "burmesename")
	private String burmeseName;
    @Column(name = "capital")
	private String capital;

}
