package com.example.project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Userrepo  extends MongoRepository <User,String>{



}
