package com.skilldistillery.winetracker.services;

import java.util.List;

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
		// TODO Auto-generated method stub
		return null;
	}

}
