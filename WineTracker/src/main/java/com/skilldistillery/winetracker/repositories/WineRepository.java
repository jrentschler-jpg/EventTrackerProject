package com.skilldistillery.winetracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.winetracker.entities.Wine;

public interface WineRepository extends JpaRepository<Wine, Integer> {

}
