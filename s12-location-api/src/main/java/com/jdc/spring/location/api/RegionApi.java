package com.jdc.spring.location.api;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.spring.location.model.entity.Region;
import com.jdc.spring.location.model.repo.RegionRepo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/regions/")
@RequiredArgsConstructor
public class RegionApi {
	
	private final RegionRepo regionRepo;
	
	@GetMapping("findAll")
	List<Region> findAll(){
		return regionRepo.findAll();
		
	}

}
