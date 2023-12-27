import HomeScreen from "../component/pages/homeScreen/homeScreen.jsx";
import RepositoryPage from "../component/pages/repositories/mainPageOfRepositories.jsx";
import { Routes, Route } from "react-router-dom";
// import { Context1 } from "../component/context/context.js";
// import { useState } from "react";
import React from 'react';

import InsideRepositories from "../component/pages/repositories/renderRepositories/insideRepositories/insideRepositories.jsx";


export function App() {


    // let [rec , setSet] = useState("")

    return (
        // <Context1.Provider value = {{
        //     rec1: rec,
        //     setSet1: setSet
        // }}>
            <Routes>
                
                <Route path="/:username" element={ <HomeScreen/>}/>
                
                {/* <Route path="" element={ <HomeScreen/>}/> */}

               <Route path="/:username/repository" element= { <RepositoryPage/>}/> 
               {/* <Route path="/:username/repository" element= { <RepositoryPage/>}/>  */}
               <Route path ="/:username/:nameOfRepository" element = {<InsideRepositories/>}/>
               

            </Routes>
            

        // </Context1.Provider>
        
        
    );
  }