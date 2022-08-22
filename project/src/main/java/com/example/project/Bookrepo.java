package com.example.project;


import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
@Repository
public interface Bookrepo  extends MongoRepository <book,String>{
	@Query(value = "{isbn:?0}")
	List<book> findbyisbn(String isbn);
	Optional<book> findByIsbn(String isbn);
	}
