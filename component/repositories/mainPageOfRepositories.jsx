
import { useEffect, useState } from "react";
import "../../styles/style.css";
import { api } from "../../api/userInfo";
import { repositories } from "../../api/RepositoresApi";
import RenderRepose from "./renderRepositories/renderrepose";
import Header from "./header/header";
import UserProfile from "./userProfile/userProfile";
import SearchBtn from "./searchBtn/searchBtn";
import { MoonLoader } from "react-spinners";
import propsForUserProfile from "./userProfile/propsForUserProfile/propsForUserProfile";
import { useParams } from "react-router-dom";


export default function RepositoryPage() {
    
    const [rec , setRec] = useState({})
    const [repose , setRepose] = useState([])
    const [searchValue , setSearchValue ] = useState("")
    const [firstLoading , setFirstLoading] = useState(false)
    const [error , setError] = useState(false)

    

     let params = useParams()
     let a = params.username
     
    


    


    

    useEffect(() => {

        

        setFirstLoading(true)
        api(a).then((e) => {
            setRec(e)
        })
        .catch(() =>{
            setError(true)
        })

        setError(false)

        repositories(a).then((e) => {
            setRepose(e)
            })
            .finally(() => {
                {setFirstLoading(false)}
            })
            
            

        } , [])
        
        if(firstLoading == true) {
            return <div className="loading"><MoonLoader color="#36d7b7" /></div> 
        } else {
            
            return(
                <>
                    
                    <Header params = {a} numberOfRepositories = {repose.length}/>
                    <div className="main">
                        <div className="wrapper">
                            <div className="flexing">

        
                                

                            {error ? <h1 color="#fff">error</h1>  : 
                            
                            <UserProfile profile = {propsForUserProfile(rec)} />}

                                
                                <div className="p2">
                                    <SearchBtn setSearchValue = {setSearchValue}/>
                                    <div className="repose">
                                        {repose.map((e , id) => {
                                            if(e.name.includes(searchValue ) || searchValue  == e.name ) {
                                                let result1 = new Date(e.updated_at).toLocaleDateString('en-GB');
                                            
                                                return <RenderRepose id = {id}   pushed_at = {result1} language = {e.language} type={e.private} name={e.name}/>
                                            }else if (searchValue == "" || !searchValue) {
                                                let result1 = new Date(e.updated_at).toLocaleDateString('en-GB');
                                            
                                                return <RenderRepose id = {id}   pushed_at = {result1} language = {e.language} type={e.private} name={e.name}/>
                                            }
                                            
                                            
                                            
                                        })}
                                            
                                       
                                            
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                        
                    </div>
                </>
                
            )
        
        
           }    
}