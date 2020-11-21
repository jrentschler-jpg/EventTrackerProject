package com.skilldistillery.winetracker.services;

import java.util.List;

import com.skilldistillery.winetracker.entities.Wine;

public interface WineService {
	List<Wine> getAllWines();
	Wine getByWineId(int id);
	
	List<Wine> getWinesForKeyword(String keyword);
	List<Wine> getWinesByYearProduced(String yearProduced);
	List<Wine> getWinesByRating(Double rating);
	List<Wine> getWinesByCostRange(double low, double high);
	
	Wine createWine(Wine wine);
	Wine replaceById(int id, Wine wine);
	boolean deleteWine(int id);
}
