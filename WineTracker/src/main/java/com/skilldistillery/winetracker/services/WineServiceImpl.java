package com.skilldistillery.winetracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.winetracker.entities.Wine;
import com.skilldistillery.winetracker.repositories.WineRepository;



@Service 
public class WineServiceImpl implements WineService {

		@Autowired
		private WineRepository wineRepo;
		
		
		
	@Override
	public List<Wine> getAllWines() {
		return wineRepo.findAll();
	}
	@Override
	public Wine getByWineId(int id) {
		Optional<Wine> wineOpt = wineRepo.findById(id);
		return wineOpt.get();
	}
	@Override
	public List<Wine> getWinesForKeyword(String keyword) {
		keyword = "%" + keyword + "%";
		return wineRepo.findByNameLikeOrTypeLike(keyword, keyword);
	}
	@Override
	public List<Wine> getWinesByYearProduced(String yearProduced) {
		yearProduced = "%" + yearProduced + "%";
		return wineRepo.findByYearProducedLike(yearProduced);
	}
	@Override
	public List<Wine> getWinesByRating(Double rating) {
		return wineRepo.findByRating(rating);
	}
	@Override
	public List<Wine> getWinesByCostRange(double low, double high) {
		return wineRepo.findByCostBetween(low, high);
	}
	@Override
	public Wine createWine(Wine wine) {
		wineRepo.saveAndFlush(wine);
		return wine;
	}
	@Override
	public Wine replaceById(int id, Wine wine) {
		Optional<Wine> updateWine = wineRepo.findById(id);
		Wine managedWine = null;
		if(updateWine.isPresent()) {
			managedWine = updateWine.get();
			managedWine.setName(wine.getName());
			managedWine.setType(wine.getType());
			managedWine.setColor(wine.getColor());
			managedWine.setFlavor(wine.getFlavor());
			managedWine.setDescription(wine.getDescription());
			managedWine.setRating(wine.getRating());
			managedWine.setCost(wine.getCost());
			managedWine.setYearProduced(wine.getYearProduced());
			managedWine.setReview(wine.getReview());
			managedWine.setImage(wine.getImage());
			wineRepo.saveAndFlush(managedWine);
		}
		return managedWine;
	}
	@Override
	public boolean deleteReview(int id) {
		boolean deleted = false;
		Optional<Wine> wineOpt = wineRepo.findById(id);
		if(wineOpt.isPresent()) {
			Wine wine = wineOpt.get();
			wineRepo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}
			
			

}
