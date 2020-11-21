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
		Wine wine = null;
		if(wineOpt.isPresent()) {
			wine = wineOpt.get();
		}
//		return wineOpt.get();
		return wine;
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
			if(wine.getName()!= null) {
				managedWine.setName(wine.getName());
			}
			if(wine.getType()!= null) {
				managedWine.setType(wine.getType());
			}
			if(wine.getColor()!= null) {
				managedWine.setColor(wine.getColor());
			}
			if(wine.getFlavor()!= null) {
				managedWine.setFlavor(wine.getFlavor());
			}
			if(wine.getDescription()!= null) {
				managedWine.setDescription(wine.getDescription());
			}
			if(wine.getRating()!= null) {
				managedWine.setRating(wine.getRating());
			}
			if(wine.getCost()!= null) {
				managedWine.setCost(wine.getCost());
			}
			if(wine.getYearProduced()!= null) {
				managedWine.setYearProduced(wine.getYearProduced());
			}
			if(wine.getReview()!= null) {
				managedWine.setReview(wine.getReview());
			}
			if(wine.getImage()!= null) {
				managedWine.setImage(wine.getImage());
			}
				
			wineRepo.saveAndFlush(managedWine);
		}
		return managedWine;
	}
	@Override
	public boolean deleteWine(int id) {
		boolean deleted = false;
		Optional<Wine> wineOpt = wineRepo.findById(id);
		if(wineOpt.isPresent()) {
//			Wine wine = wineOpt.get();
			wineOpt.get();
			wineRepo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}
			
			

}
