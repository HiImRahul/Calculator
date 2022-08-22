import React from "react";
import { useState, useEffect }  from "react";
import {useNavigate} from "react-router-dom";
function AddorEdit()
{
    const navigate=useNavigate()
    const [bookname,setBookName]=useState({});
    const [authorname,setAuthorName]=useState({});
    const [isbnNumber,setIsbnNumber]=useState({});
    const [added,setAdded]=useState({});
    const[available,setAvailable]=useState({});
    const [genre,setGenre]=useState({});
    

    // let id
    const [num,setNumber]=React.useState();

    useEffect(()=> {
        
     fetch("http://localhost:8080/bookcount")
     
     .then(res=>res.json())
     .then((result)=>{
       setNumber(result)
       setIsbnNumber(()=> `BN-${(((num+1)+1000)+"").substring(1)}` )
       console.log(num)
       
     })
   },[num])
   
    const handleSubmit=(event)=>{
      let isbn=isbnNumber
        let bookdata={isbn,bookname,authorname,added,available,genre}
        event.preventDefault();
        alert ('Book added successfully')
        navigate("/home")
        fetch("http://localhost:8080/addbook",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(bookdata)
      }).then(() => {
        console.log("added")
       setNumber(num+1)
       setIsbnNumber(()=> `BN-${(((num+1)+1000)+"").substring(1)}` )
       console.log(num)
       
      })
    }

    return(
        <div>
            <h1 class="border-2 border-black rounded px-4 py-4  "> Add New Book</h1>
            <br></br>
            {/* <form>
            
                <label>Book Name</label><br></br>
                <input type='text' name='bookname' onChange={(e)=>{setBookName(e.target.value)}}></input><br></br><br></br>
                <label>Author Name</label><br></br>
                <input type='text' name='authorname' onChange={(e)=>{setAuthorName(e.target.value)}}></input><br></br><br></br>
                <label>Number of copies added</label><br></br>
                <input type='text' name='added' onChange={(e)=>{setAdded(e.target.value)}}></input><br></br><br></br>
                <label>Genre</label><br></br>
                <input type='text' name='genre' onChange={(e)=>{setGenre(e.target.value)}}></input><br></br><br></br>
                <input type='submit' onClick={handleSubmit} ></input>
                
            </form> */}


<div style={{width:"500px",color:"red"}}>

<form>
  <div className="relative z-5 mb-9 w-full group">
    <input
      type="text"
      name="bookname"
      id="floating_email"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder="Book Name"
      required=""
      onChange={(e)=>{setBookName(e.target.value)}}
      style={{color:"black"}}
      
    />
    <label
      htmlFor="floating_email"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
    Book name
    </label>
  </div>
  <div className="relative z-3 mb-6 w-full group">
    <input
      type="text"
      name="Authorname"
      id="floating_password"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
      style={{color:"black"}}
      onChange={(e)=>{setAuthorName(e.target.value)}}
    />
    <label
      htmlFor="floating_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Author Name
    </label>
  </div>
  <div className="relative z-5 mb-6 w-full group">
    <input
      type="number"
      name="Numberofcopies"
      id="floating_repeat_password"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
      onChange={(e)=>{setAdded(e.target.value)}}
      style={{color:"black"}}
    />
    <label
      htmlFor="floating_repeat_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Number of copies 
    </label>
  </div>

  <div className="relative z-5 mb-6 w-full group">
    <input
      type="number"
      name="Availablecopies"
      id="floating_repeat_password"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
      onChange={(e)=>{setAvailable(e.target.value)}}
      style={{color:"black"}}
    />
    <label
      htmlFor="floating_repeat_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Available copies 
    </label>
  </div>
  
  <div >
    <div className="relative z-0 mb-6 w-full group">
      <input
       type="text"
       name="Authorname"
       id="floating_password"
       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
       placeholder=" "
       required=""
       style={{color:"black"}}
        onChange={(e)=>{setGenre(e.target.value)}}
        
      />
      <label
      htmlFor="floating_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
        Genre
      </label>
    </div>
    
  </div>
  <button
    type="submit"onClick={handleSubmit}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Submit
  </button>
</form>

</div>




        </div>
    )
}
export default AddorEdit;







