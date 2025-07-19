import { Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar'  ;
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
function App () {
        return(
          <>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="create" element={<CreateNote/>}/>
          </Routes>
          </>
        );
}
export default App;