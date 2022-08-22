import React from 'react'

function Userbookrow(props) {
    let p=props.data
    const buy= event=>
    {
      let m=avilablecopy
      event.currentTarget.disabled=true;
     let settle={bookname,authorname,added,available}
  if(avilable!="0")
  {
    fetch(`http://localhost:8080/bookbuyupdate/${id}`,{
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
  let a=userInfo.id;
    // console.log(a)
  console.log(props.item.id)
  // const current=new Date();
  const date=new Date(Date.now()).toISOString().substring(0,10);
  const nextdate=new Date(Date.now()+12096e5);
  console.log(date)
  const returndate=nextdate.toISOString().substring(0,10)
  console.log(returndate)
  let uid=a
  let isbn=props.item.id;
  const user={isbn,uid,bookname,authorname,date,returndate}
  fetch("http://localhost:8080/buybookinsert",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
        }).then(() => {
        })
  //////////////////////////////////
  }
  if(avilablecopy==="0")
  {
    alert("No Books are Available")
  }
    }
      let d
    function update(book)
    {
      d=book.id
      console.log("Haiiii")
      console.log(d)
      setBookname(book.bookname)
      setAuthorname(book.author)
      setadded(book.totalcopy)
      setavilable(book.avilablecopy)
       setAvilablecopy(avilablecopy-1)
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
            <button onClick={buy}>BUY</button>
        }
    </td> }
    </tr>
  )
}
export default Userbookrow