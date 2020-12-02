package com.skilldistillery.winetracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.winetracker.entities.Wine;
import com.skilldistillery.winetracker.services.WineService;

@CrossOrigin({"*", "http://localhost:4205"}) 
@RequestMapping("api")
@RestController
public class WineController {
	
	@Autowired 
	private WineService wineSvc;

	
	@GetMapping("ping")
	public String ping() {
		return "pong";
	}
	
	//GET api/wines
	@GetMapping("wines")
	public List<Wine> lists(){
		return wineSvc.getAllWines();
	}
	//GET api/wines/{id}
	@GetMapping("wines/{id}")
	public Wine findById(@PathVariable Integer id,
			HttpServletResponse response){
		Wine wine = wineSvc.getByWineId(id);
		if(wine == null) {
			response.setStatus(404);
		}
//		return wineSvc.getByWineId(id);
		return wine;
	 
	}
	//GET api/wines/search/{keyword}
	@GetMapping("wines/search/{keyword}")
	public List<Wine> getWinesFromKeyword(@PathVariable String keyword){
		return wineSvc.getWinesForKeyword(keyword);
	}
	//GET api/wines/search/yearProduced/{yearProduced}
	@GetMapping("wines/search/yearProduced/{yearProduced}")
	public List<Wine> getWinesFromYearProduced(@PathVariable String yearProduced){
		return wineSvc.getWinesByYearProduced(yearProduced);
	}
	//GET api/wines/search/rating/{rating}
	@GetMapping("wines/search/rating/{rating}")
	public List<Wine> getWinesByRating(@PathVariable Double rating){
		return wineSvc.getWinesByRating(rating);
	}
	
	//GET api/wines/search/cost/{low}/{high}
	@GetMapping("wines/search/cost/{low}/{high}")
	public List<Wine> getWinesByCost(@PathVariable Double low, @PathVariable Double high){
		return wineSvc.getWinesByCostRange(low, high);
	}
	//POST api/wines
	@PostMapping("wines")
	public Wine createWine(@RequestBody Wine wine,
			HttpServletRequest request,
			HttpServletResponse response) {
		try {
			wine = wineSvc.createWine(wine);
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(wine.getId());
			String urlstr = url.toString();
			response.setHeader("Location", urlstr);
			
		} catch (Exception e) {
			response.setStatus(400);
			wine = null;
		}
		return wine;
	}
	//PUT api/wines/{id}
	@PutMapping("wines/{id}")
	public Wine replaceById(@PathVariable Integer id, 
			@RequestBody Wine wine,
			HttpServletResponse response) {
		try {
			wine = wineSvc.replaceById(id, wine);
			if(wine == null) {
				response.setStatus(404);
//				wine = null;
			}
		} catch (Exception e) {
			response.setStatus(400);
			wine = null;
		}
		return wine;
	}
	//DELETE api/wines/{id}
	@DeleteMapping("wines/{id}")
	public void deleteWine(@PathVariable Integer id,
			HttpServletResponse response) {
		try {
			boolean deleted = wineSvc.deleteWine(id);
			if(deleted) {
				response.setStatus(204);
			}else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			response.setStatus(400);
		}
	}
		
		
}
