package com.skilldistillery.winetracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.winetracker.entities.Wine;

public interface WineRepository extends JpaRepository<Wine, Integer> {

	List<Wine> findByNameLikeOrTypeLike(String keyword1, String keyword2);
	List<Wine> findByYearProducedLike(String year);
	List<Wine> findByRating(Double rating);
	List<Wine> findByCostBetween(double low, double high);
	
}
