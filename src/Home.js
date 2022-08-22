import React, { useState , useEffect} from "react";
import './HomeCSS.css';
import {useNavigate} from "react-router-dom";
import BookRow from "./BookRow";
import ReactPaginate from "react-paginate";

function Home(){


    const [result,getResult]=new useState([])




    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;
    
    const navigate = useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        navigate('/Admin')

    }
    let userInfo=localStorage.getItem("userInfo");
userInfo=JSON.parse(userInfo);
    const [Book ,getBook]=useState([]);
    const fetchData=()=>{
      fetch("http://localhost:8080/find").then(response=> response.json())
          .then((data)=>{
            
            getBook(data)

            //  let bookd=data.results
             // setBook(data.map((data)=> {return <BookRow data={data} />}))
            //   console.log(data.id)
            //   console.log(data.id)
          })
      }

      const list=Book.slice(pagesVisited,pagesVisited+usersPerPage).map((data)=><BookRow data= {data} fetchData={fetchData} />
      )
      useEffect(()=>{
          fetchData();
      },[])
      function logout()
      {
localStorage.clear(userInfo)
navigate('/login');
      }

// const logout=()=>{
//   localStorage.clear(userinfo)
//   navigate('/Login')
// }
const pageCount = Math.ceil(Book.length / usersPerPage);
const changePage = ({ selected }) => {
  setPageNumber(selected);
};

    return(
        <div className="div1">
            {/* <h1 id="heading"></h1><br></br> */}
            <button className="button" role="button" onClick={handleSubmit}>Add Book</button><br></br><br></br>
            <button className="button"onClick={logout}>logout</button>
            <br></br><br></br>
            <table className="table">
                    <tr>
                    <th>
                        ISBN no
                    </th>
                    <th>
                        Book Name
                    </th>
                    <th>
                        Author
                    </th>
                    <th>
                        Total no.of copies
                    </th>
                    <th>
                        Available copies
                    </th>
                    <th>
                        Genre
                    </th>
                    <th style={{"color":"green"}}>
                        Update
                    </th>
                    <th style={{"color":"red"}}>
                        Delete
                    </th>
                    </tr>
                    {list}
            </table>
            <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
            
        </div>
    )
}
export default Home;

