import HomeScreen from "../component/homeScreen/homeScreen.jsx";
import RepositoryPage from "../component/repositories/mainPageOfRepositories.jsx";
import { Routes, Route } from "react-router-dom";


export function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
               <Route path="/repository" element= { <RepositoryPage/>}/> 
               <Route path="/repository/:username" element= { <RepositoryPage/>}/> 

            </Routes>
            

        </>
        
        
    );
  }