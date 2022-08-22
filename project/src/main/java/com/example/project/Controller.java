package com.example.project;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class Controller {
	
	@Autowired
	private Userrepo Userrepo;
	@Autowired
	private Bookrepo bookrepo; 
	@Autowired
	private Purchasedrepo purchasedrepo; 
	 
	@GetMapping("/mdb/list")
	public List<User> findall()
	{
		return Userrepo.findAll();
	}
	@PostMapping("/mdb/create")
	public void createdata(@RequestBody User User)
	{
		 System.out.println("checking");
		
		 Userrepo.insert(User);
		//return new ResponseEntity<>("Data Inserted",HttpStatus.OK);
		 System.out.println(User);
		
	}
	@GetMapping("/count")
	public int listUser()
	{
		List<User> data=Userrepo.findAll();
		int number=data.size();
		return number;
	}
	@PostMapping("/mdb/Login")
	public User Logindata(@RequestBody User User)
	{
		 String name=User.getName();
		 String password=User.getPassword();
	
		 System.out.println(User.getName());
		 System.out.println(User.getPassword());
		 
	List<User> data= Userrepo.findAll();
	User v = null;
	
	for(int i=0;i<data.size();i++) {
		
	
		User x=data.get(i);
		String name1=x.getName();
		
		String password1=x.getPassword();
		
		System.out.println(x.getName());
		 System.out.println(x.getPassword());
		
		if(Objects.equals(name1,name) && Objects.equals(password1,password))
		{
			v=x;
			break;
//		    System.out.println("true");
		}
		else
		{
			v=null;
			
		}
		
	}
	return v;
	}
	@PostMapping("/addbook")
	public void addBook(@RequestBody book book)
	{
		bookrepo.save(book);

	}
	@GetMapping("/bookcount")
	public int listBook()
	{
		List<book> bookdata=bookrepo.findAll();
		int num=bookdata.size();
		return num;
	}
	@GetMapping("/find")
	public List<book>findBook()
	{
		return bookrepo.findAll();
	}
	@PutMapping("/update")
	public ResponseEntity<String> updateinfo(
	        @RequestBody book spring)
	{
		List<book> data=bookrepo.findbyisbn(spring.getIsbn());
		book bm=data.get(0);
		bm.setAuthorname(spring.getAuthorname());
		bm.setBookname(spring.getBookname());
		bm.setAdded(spring.getAdded());
		bm.setGenre(spring.getGenre());
	    bookrepo.save(bm);
	    return new ResponseEntity<>("Data Updated",HttpStatus.OK);
	}


	@DeleteMapping("/deleting/{id}")
	public void deleteBook(@PathVariable ("id") String id)
	{
		bookrepo.deleteById(id);
	}
	@PostMapping("/buybookinsert")
	private ResponseEntity<String> bookinsert(@RequestBody PurchasedBook purchasedBook)
	{
		purchasedrepo.save(purchasedBook);
	    return new ResponseEntity<>("Book Inserted",HttpStatus.OK);
	}
	@PutMapping("/bookbuyupdate/{isbn}")
	public ResponseEntity<String> bookbuyupdate(@PathVariable("isbn") String isbn, @RequestBody book bookModel) {
		System.out.println("HAIIIIIIIIIII");
		System.out.println(isbn);
		Optional<book> addbookData= bookrepo.findByIsbn(isbn);
		
	  if (addbookData.isPresent()) {
		book BookModel = addbookData.get();
			 BookModel.setBookname(bookModel.getBookname());
			 BookModel.setAuthorname(bookModel.getAuthorname());
			 BookModel.setAdded(bookModel.getAdded());
			 int a=Integer.parseInt(bookModel.getAvailable());
			  if(a>=1)
			  {
				  String b=Integer.toString(a-1);
				BookModel.setAvailable(b);
				System.out.println(BookModel.getAvailable());
			  }
			  else{
				BookModel.setAvailable("0");
			  }
			  bookrepo.save(BookModel);
		return new ResponseEntity<>(BookModel.getAvailable(), HttpStatus.OK);
	  } else {
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	  }
	}
@DeleteMapping("deletebuybook/{isbn}")
	public String buybookdelete(@PathVariable ("isbn") String isbn)
	{
	    purchasedrepo.deleteByIsbn(isbn);
		System.out.println("Book DELETING");
		System.out.println(isbn);
		//
		////////////////////////updatereturn book
		Optional<book> addbookData = bookrepo.findByIsbn(isbn);
	  if (addbookData.isPresent()) {
		 book Bookmodel = addbookData.get();
			  int a=Integer.parseInt(Bookmodel.getAvailable());
//			  System.out.println("helloooooo");
//			  System.out.println(a);
				String b=Integer.toString(a+1);
//				System.out.println("bookkkkkkkkk");
//				System.out.println(b);
				Bookmodel.setAvailable(b);
				System.out.println(Bookmodel.getAvailable());
			  bookrepo.save(Bookmodel);
	}
	return "sucess";
	}
@GetMapping("findbyidd/{isbn}")
public Optional<book>findbyisbn(@PathVariable String isbn)
{
	return bookrepo.findById(isbn);
}
@DeleteMapping("api/deletebook/{id}")
public String bookdelete(@PathVariable ("id") String id)
{
	bookrepo.deleteById(id);
	System.out.println(id);
	return "success";
}
@GetMapping("/getuserbooklimit/{uid}")
private String getuserbooklimit(@PathVariable String uid)
{
	System.out.println(uid);
	List<PurchasedBook> data=purchasedrepo.findByuid(uid);
	String rply="null";
	int size=data.size();
	System.out.println("RETURN BOOK LIMIT");
	System.out.println(size);
	if(size<=1)
	{
		rply="valid";
	}
return rply;
}
@GetMapping("/getuserbook/{uid}")
private List<PurchasedBook> getuserbook(@PathVariable String uid)
{
	System.out.println(uid);
	System.out.println(purchasedrepo.findByuid(uid));
return purchasedrepo.findByuid(uid);
}
//@PostMapping("/buybookinsert")
//private ResponseEntity<String> bookinsertt(@RequestBody PurchasedBook purchasedBook)
//{
//	purchasedrepo.save(purchasedBook);
//	return new ResponseEntity<>("Book Inserted",HttpStatus.OK);
//}


}
