import React from 'react';
import MyProfileRow from './MyProfileRow';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function MyProfile() {
    const navigate=useNavigate();
    const [Book ,setBook]=useState([]);
    // const [pageNumber, setPageNumber] = useState(0);
    // const usersPerPage = 10;
    // const pagesVisited = pageNumber * usersPerPage;
    let userInfo=localStorage.getItem("UserInfo");
    userInfo=JSON.parse(userInfo);
    console.log(userInfo.uid)
    let uid=userInfo.uid
    // const [Book ,setBook]=useState([]);
    // const fetchData=(props)=>{
    //     fetch(`http://localhost:8080/findid/${props.data.id}`) .then(response=> response.json())
    //         .then((data)=>{
    //             let bookd=data.results
    //             setBook(data.map((data)=> {return <MyProfileRow data={data} fetchData={fetchData} />}))
    //             console.log(data.id)
    //             console.log(data.id)
    //         })
    //     }
        useEffect(()=>{
            fetchData()
        },[])
        const fetchData=()=>{
            fetch(`http://localhost:8080/getuserbook/${uid}`)
            .then((res)=>
            res.json())
            .then((result)=>{
                console.log(result);
                //getData(response);
                setBook(()=>result.map((data,index)=>{
                    console.log(data)
                    return <MyProfileRow data={data} key={index} refresh={refresh}/>
               }))
            })
        }
        function refresh()
        {
          fetch(`http://localhost:8080/getuserbook/${uid}`)
          .then((res) =>
              res.json())
          .then((result) => {
              console.log(result);
               setBook(()=> result.map((data,index) => {
                console.log(data)
                return <MyProfileRow data={data} key={index} refresh={refresh} />
              }))
          })
        }
        const back=(event)=>{
            event.preventDefault();
            navigate('/user')
        }
      return (
        <div className='div1'>
            <h1 id='heading'>My Books</h1>
            <button className='button' onClick={back}>Back</button>
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
                        Date of Purchase
                    </th>
                    <th>
                        Date of return
                    </th>
                    <th>
                        Return
                    </th>
            </tr>
            {Book}
        </table>
    </div>
  )
}
export default MyProfile







