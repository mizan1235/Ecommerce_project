

import "./Pages/Home.css"
import Home from "./Pages/Home";
import { RecoilRoot } from "recoil";



function App() {

  return (
    <div >
      
     <RecoilRoot>
     
         <Home/>
         {/* <Address/> */}
         {/* <Router>
        <Routes>
           <Route path="/" element={true?<Home/>:<Navigate to ="/login"/>}/>
         <Route path="/login" element={True?<Login/>:<Navigate to="/"/>}/> 
           {/* <Route path="/" element={userInfo===true?<Home/>:<Navigate to ="/login"/>}/>
         <Route path="/login" element={userInfo===false?<Login/>:<Navigate to="/"/>}/>  
        </Routes>
      </Router>  */}
     </RecoilRoot>
       
       
     
    </div>
  );
}

export default App;
