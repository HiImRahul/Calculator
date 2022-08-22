import React from 'react'
import {useNavigate} from 'react-router-dom'



function BookRow(props) {
    
     const navigate=useNavigate();
     let d=props.data
     console.log(d)
    const update=(event)=>{
        event.preventDefault();
        localStorage.setItem("upbookdata",JSON.stringify(d))
        navigate("/update")
   }

   const dele=(event)=>{
    event.preventDefault();
    fetch(`http://localhost:8080/deleting/${props.data.id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
      })
      .then( ()=>{alert("Deleted");
      props.fetchData();
      
    })
    }
  return (
        <tr>
                    <td>
                        {props.data.isbn}
                    </td>
                    <td>
                        {props.data.bookname}
                   </td>
                    <td>
                        {props.data.authorname}
                    </td>
                    <td>
                        {props.data.added}
                    </td>
                    <td>
                        {props.data.available}
                    </td>
                    { <td>
                        {props.data.genre}
                    </td> }
                    { <td>
                        {
                            <button style={{"color":"green"}} onClick={update}>Update</button>
                        }
                    </td> }
                    { <td>
                        {
                            <button style={{"color":"red"}} onClick={dele}>Delete</button>
                        }
                    </td> }
                    </tr>
  )
}
export default BookRow







