package com.skilldistillery.winetracker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.winetracker.services.WineService;

@RequestMapping("api")
@RestController
public class WineController {
	
	@Autowired 
	private WineService wineSvc;

	
	@GetMapping("ping")
	public String ping() {
		return "pong";
	}
	
	
}
