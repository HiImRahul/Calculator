package com.example.project;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection="Purchased")
public class PurchasedBook {
	@Id
	private String id;
	private String uid;
	private String isbn;
	private String bookname;
	private String authorname;
	private String dateOfPurchase;
	private String dateOfReturn;
	public PurchasedBook(String id, String uid, String isbn, String bookname, String authorname, String dateOfPurchase,
			String dateOfReturn) {
		super();
		this.id = id;
		this.uid = uid;
		this.isbn = isbn;
		this.bookname = bookname;
		this.authorname = authorname;
		this.dateOfPurchase = dateOfPurchase;
		this.dateOfReturn = dateOfReturn;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
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
	public String getDateOfPurchase() {
		return dateOfPurchase;
	}
	public void setDateOfPurchase(String dateOfPurchase) {
		this.dateOfPurchase = dateOfPurchase;
	}
	public String getDateOfReturn() {
		return dateOfReturn;
	}
	public void setDateOfReturn(String dateOfReturn) {
		this.dateOfReturn = dateOfReturn;
	}
	

}
