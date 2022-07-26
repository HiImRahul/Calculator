package com.example.Mother;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class service {
	private static Map<Long,Home> Products=new HashMap<>();
	private static long index=5L;
	static 
	{
		Home Pro1=new Home(1L,"rrr","aaa","5555");
		Home Pro2=new Home(2L,"rrr","aaa","4444");
		Home Pro3=new Home(3L,"rrr","aaa","3333");
		Home Pro4=new Home(4L,"rrr","aaa","2222");
		Home Pro5=new Home(5L,"rrr","aaa","1111");
		Products.put(1L, Pro1);
		Products.put(2L, Pro2);
		Products.put(3L, Pro3);
		Products.put(4L, Pro4);
		Products.put(5L, Pro5);
		
	}
	public static Home addproducts (Home prodt)
	{
		index +=1;
		prodt.setId(index);
		Products.put(index, prodt);
		return prodt;
	}
	public static List<Home> GetAllProduct()
	{
		return new ArrayList<>(Products.values());
	}
	public static Home GetById(Long productId)
	{
		return Products.get(productId);
	}
	public static Home delete(Long productId)
	{
		return Products.remove(productId);
	}
	public static Home update(Long productId,Home prodt)
	{ 
		prodt.setId(productId);
		Products.put(productId, prodt);
		return prodt;
		
	}
}
