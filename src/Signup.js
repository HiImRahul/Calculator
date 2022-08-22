import React  from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function Signup() {

  const navigate= useNavigate();
  const [uid, setUid]=React.useState('')
  const [name,setName]=React.useState('')
  const [mailid,setMail]=React.useState('')
  const [dob,setDate]=React.useState('')
  const [password,setPassword]=React.useState('')
  const [passwordcon,setConformPassword]=React.useState('')
   

   const [number,setNumber]=React.useState()
   useEffect(()=> {
    fetch("http://localhost:8080/count")
    .then(res=>res.json())
    .then((result)=>{
      // setNumber(result)
      setUid(()=> `UN-${(((result+1)+1000)+"").substring(1)}` )
      console.log(result)
    })
  },[])
    const register = (event) => {
      console.log(uid)
      let id=uid;
      // let type="admin"
      if(password==passwordcon){
      let data={uid,type:"user",name,mailid,dob,password};
        event.preventDefault();
         alert ('your registration have been successful')
        fetch("http://localhost:8080/mdb/create",{
        method:"POST",
        headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},
        body:JSON.stringify(data)
      }).then(() => {
        setNumber(number+1)
       setUid(()=> `UN-${(((number+1)+1000)+"").substring(1)}` )
       console.log(number)
        console.log("added")
       navigate("/login")
      })
    }
    else
     alert('Wrong Password')
  }










  
  // const navigate=useNavigate();
  //   const [uid, SetUid]=useState('') 
  //   const [name,setName]=React.useState('')
  //   const [mailid,setMail]=React.useState('')
  //   const [dob,setDate]= React.useState('')
  //   const [password,setPassword]=React.useState('')


  //   const register= (event)=>{
  //     let data={name,mailid,dob,password}

  //       fetch("http://localhost:8080/mdb/create",{
  //           method:"POST",
  //           headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},
  //           body:JSON.stringify(data)
  //         }).then(()=>{console.log(data);
  //         })
  //           // console.log("added")
  //           // console.log(data)
  //           navigate ("/Login")
            
           
        

  //   }

  

  return (
    <div>
       <h1>{name}</h1>
      <body class="antialiased bg-gradient-to-br from-green-100 to-white">
        <div class="container px-6 mx-auto">
          <div
            class="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center"
          >
            <div class="flex flex-col w-full">
              <div>
                <svg
                  class="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h1 class="text-5xl text-black-800 font-bold">SignUp</h1>
              <p class="w-5/12 mx-auto md:mx-0 text-black-500">

              </p>
            </div>
            <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
              <div class="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                <h2 class="text-2xl font-bold text-gray-800 text-left mb-5">
                  SignUp
                </h2>
                <form action="" class="w-full">
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="username" class="text-gray-500 mb-2"
                    >UserName</label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Please insert your username"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                      onChange={(s)=>{setName(s.target.value)}} />
                      
                  </div>
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="emailid" class="text-gray-500 mb-2"
                    >Mail id</label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Please insert your email"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                      onChange={(s)=>{setMail(s.target.value)}} />
                  </div>
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="username" class="text-gray-500 mb-2"
                    >DOB</label>
                    <input
                      type="date"
                      id="username"
                      placeholder="Please insert date of birth"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" 
                      onChange={(s)=>{setDate(s.target.value)}}/>
                  </div>
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="password" class="text-gray-500 mb-2"
                    >Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Please insert new password"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" 
                      onChange={(s)=>{setPassword(s.target.value)}}/>
                  </div>
                  
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="password" class="text-gray-500 mb-2"
                    >conform Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Please conform your password"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" 
                      onChange={(s)=>{setConformPassword(s.target.value)}}/>
                  </div>

                  <div id="button" class="flex flex-col w-full my-5">
                    <button
                      type="button"
                      class="w-full py-4 bg-green-600 rounded-lg text-green-100"
                      onClick={register} 
                    >
                      <div class="flex flex-row items-center justify-center">
                        <div class="mr-2">
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            ></path>
                          </svg>
                        </div>
                        
                        <div class="font-bold" >Register</div>
                      </div>
                    </button>
                    
                    <a
                        href="/Login"
                        class="w-full text-center font-medium text-gray-500"
                        
                      >Log in!</a> 
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
