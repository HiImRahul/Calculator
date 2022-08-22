import React, { useState , useEffect} from "react";
import Userviewrow from "./userviewrow";
import {useNavigate} from 'react-router-dom';
import  "./Pagination.css";
import ReactPaginate from "react-paginate";


function Userview() {
    const navigate=useNavigate();
    const [result,getResult]=new useState([])




    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;






  const profile=(event)=>{
    event.preventDefault();
    navigate('/profile')  }
    let userInfo=localStorage.getItem("userInfo");
userInfo=JSON.parse(userInfo);

    const [Book ,getBook]=useState([]);
    const fetchData=()=>{
      fetch("http://localhost:8080/find").then(response=> response.json())
          .then((data)=>{

            //////
            getBook(data)



            /////////
            //  let bookd=data.results
              // getBook(data.map((data)=> {return <Userviewrow data= {data} fetchData={fetchData} />}))
              // console.log(data.isbn)
              // console.log(data.isbn)
          })
      }


      ////////
      const list=Book.slice(pagesVisited,pagesVisited+usersPerPage).map((data)=><Userviewrow data= {data} fetchData={fetchData} />
      )
      /////////
      useEffect(()=>{
          fetchData();
      },[])
      function logout()
      {
localStorage.clear(userInfo)
navigate('/login');
      }
      //////
      const pageCount = Math.ceil(Book.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
      //////
      return (
        <div className='div1'>
            {/* <h1>Book Details</h1><br></br> */}
            <button className='button' onClick={profile} >My Profile</button><br></br><br></br>
          <button className='button'  onClick={logout}>Logout </button><br></br><br></br>
            <table className='table'>
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
                        <th>
                          Purchase
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

export default Userview
