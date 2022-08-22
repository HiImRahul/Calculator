import React from 'react'
import { useState,useEffect } from 'react'
function Userviewrow(props) {
    let isbn=props.data.isbn;

    // const [isbn,setIsbn]=useState(props.data.isbn);
    const[bookname,setBookname]=new useState(props.data.bookname)
    const[authorname,setAuthorname]=new useState(props.data.authorname)
    const[added,setAdded]=new useState(props.data.added)
    const[available,setAvailable]=new useState(props.data.available)
    const[counter,setCounter]=new useState(props.data.available)
    const[disable,setDisable]= React.useState(false);
    const buy=event=>
  {
    let userInfo=localStorage.getItem("UserInfo");
    userInfo=JSON.parse(userInfo);
    console.log(userInfo.uid)
    let uid=userInfo.uid
    fetch(`http://localhost:8080/getuserbooklimit/${uid}`)
    .then((res) =>
        res.text())
    .then((result) => {
      console.log("LIMIT RESULT")
        console.log(result);
        if(result==="valid")
        {
let m=available
             
            let settle={bookname,authorname,added,available}
if(available!="0")
{
  fetch(`http://localhost:8080/bookbuyupdate/${isbn}`,{
      method:"PUT",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(settle)
    })
    .then((res) =>
            res.text())
        .then((response) => {
          alert('Book purchased')
          props.fetchData()
        })
///////////////
//BUY
console.log("HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
let userInfo=localStorage.getItem("UserInfo");
userInfo=JSON.parse(userInfo);
let a=userInfo.uid;
  // console.log(a)
console.log(props.data.uid)
// const current=new Date();
const dateOfPurchase=new Date(Date.now()).toISOString().substring(0,10);
const nextdate=new Date(Date.now()+12096e5);
console.log(dateOfPurchase)
const dateOfReturn=nextdate.toISOString().substring(0,10)
console.log(dateOfReturn)
let uid=a
// let uid=props.item.uid;
const user={uid,isbn,bookname,authorname,dateOfPurchase,dateOfReturn}
fetch("http://localhost:8080/buybookinsert",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
      }).then(() => {
      })
//////////////////////////////////
}
if(available==="0")
{
  alert("No Books are Avilable")
}

}
if(result==="null")
{
  alert("limit exceed")
}
})

  }
  
    let d
  function update(book)
  {
    d=book.isbn
    console.log("Haiiii")
    console.log(d)
    setBookname(book.bookname)
    setAuthorname(book.authorname)
    setAdded(book.added)
    setAvailable(book.available)
     setAvailable(available-1)
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
    <td>
        {props.data.genre}
    </td>
    { <td>
        {
            <button disabled={disable} onClick={()=>{buy();setDisable(true)}}>BUY</button>
        }
    </td> }
    </tr>
  )
}
export default Userviewrow