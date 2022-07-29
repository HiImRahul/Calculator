package com.example.connectdb;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SpringController {
	@Autowired
	private SpringRepository repository;
	
	@GetMapping("/mdb/list")
	public List<Spring> findall()
	{
		return repository.findAll();
	}
	
	@GetMapping("/mdb/listid/{id}")
	public Optional<Spring> findbyid(@PathVariable String id)
	{
		return repository.findById(id);
		
	}
	@PostMapping("/mdb/create")
	public ResponseEntity<String> createdata(@RequestBody Spring spring)
	{
		 repository.save(spring);
		//return new ResponseEntity<>("Data Inserted",HttpStatus.OK);
		return new ResponseEntity<>("Data inserted",HttpStatus.OK);
	}
	
	@PutMapping("/mdb/update/{id}")
	public ResponseEntity<String> updateinfo(@PathVariable String id,
			                                 @RequestBody Spring spring)
	{
		spring.setId(id);
		repository.save(spring);
		return new ResponseEntity<>("Data Updated",HttpStatus.OK);
		
	}
	
	@DeleteMapping("/mdb/delete/{id}")
	public ResponseEntity<String> deleteId(@PathVariable String iD)
	{
		repository.deleteById(iD);
		return new ResponseEntity<>("Data deleted",HttpStatus.OK);
	}
	
	

}
