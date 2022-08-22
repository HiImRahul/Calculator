import { useState } from "react";
import React from 'react'
import {useNavigate} from 'react-router-dom'

function Update() {
  
  let upbookdata=localStorage.getItem("upbookdata")
  upbookdata=JSON.parse(upbookdata)
  console.log(upbookdata)
  let bookn=upbookdata.bookname;
  let isbn1=upbookdata.isbn;
  let authorN=upbookdata.authorname;
  let noofcopies=upbookdata.added;
  let gn=upbookdata.genre;
    const [bookname,setBookName]=useState(bookn);
    const [authorname,setAuthorName]=useState(authorN);
    const [isbn,setisbn]=useState(isbn1);
    const [added,setAdded]=useState(noofcopies);
    const [genre,setGenre]=useState(gn);
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        let bookdata={isbn,bookname,authorname,added,genre}
        event.preventDefault();
        alert ('Updated successfully')
        navigate("/Home")
        fetch("http://localhost:8080/update",{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(bookdata),
      }).then(() => {
        console.log("added")
        localStorage.removeItem("upbookdata")
        
    })
    }
  return (
    <div >
        <h1 class="border-2 border-black rounded px-4 py-4 " >Edit Book</h1>
            <br></br>
            <br></br>
        <form>
        
                <label>ISBN Number</label><br></br>
                <input type='text' name='isbn' value={isbn}onChange={(e)=>{setisbn(e.target.value)}}
                class="appearance-none border-2 border-black-200 rounded-lg px-4 py-3 placeholder-black-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" 
                ></input><br></br><br></br>
                <label>Book Name</label><br></br>
                <input type='text' name='bookName' value={bookname}onChange={(e)=>{setBookName(e.target.value)}}
                class="appearance-none border-2 border-black-200 rounded-lg px-4 py-3 placeholder-black-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" 
                ></input><br></br><br></br>
                <label>Author Name</label><br></br>
                <input type='text' name='authorName' value={authorname}onChange={(e)=>{setAuthorName(e.target.value)}}
                class="appearance-none border-2 border-black-200 rounded-lg px-4 py-3 placeholder-black-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" 
                ></input><br></br><br></br>
                <label>Number of copies added</label><br></br>
                <input type='text' name='added' value={added} onChange={(e)=>{setAdded(e.target.value)}}
                class="appearance-none border-2 border-black-200 rounded-lg px-4 py-3 placeholder-black-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" 
                ></input><br></br><br></br>
                <label>Genre</label><br></br>
                <input type='text' name='genre'value={genre} onChange={(e)=>{setGenre(e.target.value)}}
                class="appearance-none border-2 border-black-200 rounded-lg px-4 py-3 placeholder-black-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" 
                ></input><br></br><br></br>
                <input type='submit' onClick={handleSubmit}class="appearance-none border-2 border-black-200 rounded-lg px-4 py-3 placeholder-black-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"  ></input>
                
                
            </form>
    </div>
  )
}
export default Update






