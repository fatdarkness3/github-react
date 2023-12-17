
import { useEffect, useState } from "react";
import "../../styles/style.css";
import { api } from "../../api/userInfo";
import { repositories } from "../../api/RepositoresApi";
import RenderRepose from "./renderRepositories/renderrepose";
import Header from "./header/header";
import UserProfile from "./userProfile/userProfile";
import SearchBtn from "./searchBtn/searchBtn";
import { MoonLoader } from "react-spinners";
export default function RepositoryPage() {
    const [rec , setRec] = useState({})
    const [repose , setRepose] = useState([])
    const [searchValue , setSearchValue ] = useState("")
    const [firstLoading , setFirstLoading] = useState(false)
    const [error , setError] = useState(false)

     let username = "fatdarkness3";








    

    useEffect(() => {



        setFirstLoading(true)
        api(username).then((e) => {
            setRec(e)
        })
        .catch(() =>{
            setError(true)
        })

        setError(false)

        repositories(username).then((e) => {
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
                    
                    <Header numberOfRepositories = {repose.length}/>
                    <div className="main">
                        <div className="wrapper">
                            <div className="flexing">
                            {error ? <h1 color="#fff">error</h1>  : 
                            <UserProfile avatar_url = {rec.avatar_url} name = {rec.name} login = {rec.login} bio = {rec.bio} followers_url = {rec.followers_url} followers = {rec.followers} following_url = {rec.following_url} following = {rec.following} blog = {rec.blog}  />}
                                
                                
                                <div className="p2">
                                    <SearchBtn setSearchValue = {setSearchValue}/>
                                    <div className="repose">
                                        {repose.map((e , id) => {
                                            if(searchValue  == e.name.charAt(length.toString) || searchValue  == e.name ) {
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