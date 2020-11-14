package com.skilldistillery.winetracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity 
public class Wine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String type;
	private String color;
	private String flavor;
	private String description;
	private Double rating;
	private Double cost;
	
	@Column(name="year_produced")
	private String yearProduced;
	
	private String review;
	private String image;
	
	
	public Wine() {
		super();
	}

	public Wine(int id, String name, String type, String color, String flavor, String description, Double rating,
			Double cost, String yearProduced, String review, String image) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.color = color;
		this.flavor = flavor;
		this.description = description;
		this.rating = rating;
		this.cost = cost;
		this.yearProduced = yearProduced;
		this.review = review;
		this.image = image;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getFlavor() {
		return flavor;
	}

	public void setFlavor(String flavor) {
		this.flavor = flavor;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getRating() {
		return rating;
	}

	public void setRating(Double rating) {
		this.rating = rating;
	}

	public Double getCost() {
		return cost;
	}

	public void setCost(Double cost) {
		this.cost = cost;
	}

	public String getYearProduced() {
		return yearProduced;
	}

	public void setYearProduced(String yearProduced) {
		this.yearProduced = yearProduced;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}


	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Wine [id=").append(id).append(", name=").append(name).append(", type=").append(type)
				.append(", color=").append(color).append(", flavor=").append(flavor).append(", description=")
				.append(description).append(", rating=").append(rating).append(", cost=").append(cost)
				.append(", yearProduced=").append(yearProduced).append(", review=").append(review).append(", image=")
				.append(image).append("]");
		return builder.toString();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Wine other = (Wine) obj;
		if (id != other.id)
			return false;
		return true;
	}


	

}
