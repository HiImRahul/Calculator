import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Update from "./Update";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import AddorEdit from "./AddorEdit";
import Userview from "./Userview";
import MyProfile from "./MyProfile";
function App() {
return (
  <Router>  
           <div className="App">  
            <ul className="App-header">  
              {/* <li>  
                <Link to="/Login">log in</Link>  
              </li>   */}
              <li>  
                <Link to="/"></Link>  
              </li>  
                
            </ul>  
           <Routes> 
                 <Route exact path='/' element={< Signup />}></Route> 
                 <Route exact path='/Login' element={< Login />}></Route>
                 <Route exact path='/Home' element={< Home />}></Route>     
                 <Route exact path='/Admin' element={<AddorEdit />}></Route> 
                 <Route exact path='/update' element={<Update />}></Route>
                 <Route exact path='/user' element={<Userview />}></Route>  
                 <Route exact path='/profile' element={<MyProfile />}></Route> 
          </Routes>  
          </div>  
       </Router>
)  

}

export default App;
