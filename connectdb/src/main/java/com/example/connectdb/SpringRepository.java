package com.example.connectdb;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface SpringRepository extends MongoRepository <Spring,String>{}