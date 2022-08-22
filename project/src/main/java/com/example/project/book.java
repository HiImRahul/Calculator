package com.example.project;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection="book")
public class book {
	@Id
	private String id;
	private String bookname;
	private String authorname;
	private String isbn;
	private String added;
	private String genre;
	private String available;
	public book(String id, String bookname, String authorname, String isbn, String added, String genre,
			String available) {
		super();
		this.id = id;
		this.bookname = bookname;
		this.authorname = authorname;
		this.isbn = isbn;
		this.added = added;
		this.genre = genre;
		this.available = available;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getBookname() {
		return bookname;
	}
	public void setBookname(String bookname) {
		this.bookname = bookname;
	}
	public String getAuthorname() {
		return authorname;
	}
	public void setAuthorname(String authorname) {
		this.authorname = authorname;
	}
	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	public String getAdded() {
		return added;
	}
	public void setAdded(String added) {
		this.added = added;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getAvailable() {
		return available;
	}
	public void setAvailable(String available) {
		this.available = available;
	}
	
	
}
