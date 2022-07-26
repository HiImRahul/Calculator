package com.example.Mother;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class controller {
	
	@GetMapping("/cus")
	public List<Home> getAllProduct()
	{
		return service.GetAllProduct();
		
	}

	@GetMapping("/cus/{productId}")
	public Home getById(@PathVariable Long productId)
	{
		return service.GetById(productId);
	}
	@PostMapping("/addProduct")
	public Home addProduct(@RequestBody Home Prodt) 
	{
		return service.addproducts(Prodt);
	}
	@PutMapping("/update/{productId}")
	public Home updateProduct(@PathVariable Long productId,@RequestBody Home Prodt)
	{
		return service.update( productId,Prodt);
	}
	@DeleteMapping("/delete/{productId}")
	public Home delete(@PathVariable Long productId)
	{
		return service.delete(productId);
	}
	
}
