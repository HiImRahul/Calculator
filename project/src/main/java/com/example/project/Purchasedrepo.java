package com.example.project;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Purchasedrepo extends MongoRepository<PurchasedBook, String>{
	List<PurchasedBook> findByuid(String uid);
    void deleteByIsbn(String isbn);
}
