package com.example.Mother;

public class Home {
	private Long id;
	private String name;
	private String place;
	private String number;
	public Home(long id, String name, String place, String number) {
		super();
		this.id = id;
		this.name = name;
		this.place = place;
		this.number = number;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	

}
