
import { useEffect, useState } from "react";
import "../styles/style.css";
import { api } from "../api/api";
import { repositories } from "../api/RepositoresApi";
import RenderRepose from "./renderRepositories/renderrepose";
import Header from "./header/header";
import UserProfile from "./userProfile/userProfile";
import SearchBtn from "./searchBtn/searchBtn";
export default function RepositoryPage() {
    const [rec , setRec] = useState({})
    const [repose , setRepose] = useState([])
    const [searchValue , setSearchValue ] = useState("")


     let username = "mojtabast"








    

    useEffect(() => {
        api(username).then((e) => {
            setRec(e)
        })
        repositories(username).then((e) => {
            setRepose(e)
                
            // for(let i = 0; i<e.length; i++) {
                
                // }
                console.log(rec)
            })
            
        } , [])
        // function focus() {
            
            //     let black  = document.querySelector(".divBlack")
            //     if(button.focus()) {
                //         black.className.add("backgroundBlack")
                //     }
                // }
                // focus()
                
                return(
        <>
            <Header numberOfRepositories = {repose.length}/>
            <div className="main">
                <div className="wrapper">
                    <div className="flexing">

                        <UserProfile avatar_url = {rec.avatar_url} name = {rec.name} login = {rec.login} bio = {rec.bio} followers_url = {rec.followers_url} followers = {rec.followers} following_url = {rec.following_url} following = {rec.following} blog = {rec.blog}  />
                        
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