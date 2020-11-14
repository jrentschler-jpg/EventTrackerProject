package com.skilldistillery.winetracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
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
	public Wine findById(@PathVariable Integer id){
		return wineSvc.getByWineId(id);
	 
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
	public Wine createWine(@RequestBody Wine wine) {
		wine = wineSvc.createWine(wine);
		return wine;
	}
	//PUT api/wines/{id}
	@PutMapping("wines/{id}")
	public Wine replaceById(@PathVariable Integer id, 
			@RequestBody Wine wine,
			HttpServletResponse response) {
		wine = wineSvc.replaceById(id, wine);
		return wine;
	}
	//DELETE api/wines/{id}
	@DeleteMapping("wines/{id}")
	public void deleteWine(@PathVariable Integer id,
			HttpServletResponse response) {
		try {
			boolean deleted = wineSvc.deleteReview(id);
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
