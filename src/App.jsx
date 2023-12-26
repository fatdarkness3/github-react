import HomeScreen from "../component/pages/homeScreen/homeScreen.jsx";
import RepositoryPage from "../component/pages/repositories/mainPageOfRepositories.jsx";
import { Routes, Route } from "react-router-dom";
import { Context1 } from "../component/context/context.js";

export function App() {


    const [rec , setRec] = useState({})
    return (
        <Context1.Provider value = {{
            rec: rec,
            setRec: setRec
        }}>
            <Routes>
                <Route path="/" element={ <HomeScreen/>}/>
                <Route path="/:username" element={ <HomeScreen/>}/>

               <Route path="/repository" element= { <RepositoryPage/>}/> 
               <Route path="/repository/:username" element= { <RepositoryPage/>}/> 

            </Routes>
            

        </Context1.Provider>
        
        
    );
  }