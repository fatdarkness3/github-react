
import { useEffect, useState } from "react";
import "../styles/style.css";
import { api } from "../api/api";
import { repositories } from "../api/RepositoresApi";
import RenderRepose from "./renderrepose";
export default function RepositoryPage() {
    const [rec , setRec] = useState({})
    const [repose , setRepose] = useState([])
    const [searchValue , setSearchValue ] = useState("")


     let username = "fatdarkness3"








    

    useEffect(() => {
        api(username).then((e) => {
            setRec(e)
        })
        repositories(username).then((e) => {
            setRepose(e)  

            

            const str = 'flexiple';
const str2 = str.charAt(2);
console.log(str2);
                
            // for(let i = 0; i<e.length; i++) {
                
                // }
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
            <header>
                <div className="column">
                    <div className="flex">
                        <div className="cl">

                                    <div className="left">
                                        <button type="button" class="btn btn-outline-secondary">
                                        <i class="bi bi-list"></i>
                                        </button>
                                        <i class="bi bi-github"></i>
                                        <h4>arsam</h4>
                                    </div>
                        </div>
                        


                        <div className="f">
                        
                        <div className="right">
                                <div className="f">
                                <input className="input" type="search" placeholder="type"/>
                                <button type="button" class="btn btn-outline-secondary">
                                    <i class="bi bi-search"></i>
                                </button>
                                </div>
                                
                                    
                                <button type="button" class="btn btn-outline-secondary">
                                    <div className="flex-button">
                                        <h4>+</h4>    
                                        <i style = {{fontSize: "15px",}} class="bi bi-caret-down-fill"></i>
                                    </div>
                            
                                </button>
                                <button type="button" class="btn btn-outline-secondary">
                                    <i class="bi bi-record-circle"></i>
                                </button>
                            
                                <button type="button" class="btn btn-outline-secondary">
                                    <i class="bi bi-arrow-down-up"></i>
                                </button>
                            <button type="button" class="btn btn-outline-secondary">
                                <i class="bi bi-archive"></i>
                            </button>

                        </div>
                        </div>
                    </div>
                    <div className="part2">
                                    <ul>
                                        <li>
                                            <button className="focus">
                                                <div className="give-position">
                                                    <i class="bi bi-book"></i>
                                                    <h6>Overview</h6>
                                                </div>
                                                <div className="backgroundBlack"></div>
                                            </button>
                                            
                                        </li>
                                        <li>
                                            <button className="focus">
                                            <div className="give-position">
                                                    <i class="bi bi-save2-fill"></i>
                                                    <h6>Repositories</h6>
                                                    <div className="first">
                                                        <div className="absolute">{repose.length}</div>
                                                    </div>
                                                </div>
                                                <div className="backgroundBlack"></div>
                                            </button>
                                            
                                                
                                                
                                        </li>
                                        <li>
                                            <button className="focus">
                                            <div className="give-position">
                                                    <i class="bi bi-file-earmark-lock-fill"></i>
                                                    <h6>Project</h6>
                                                </div>
                                                <div className="backgroundBlack"></div>
                                            </button>
                                                

                                        </li>
                                        <li>
                                            <button className="focus">
                                                <div className="give-position">
                                                    <i class="bi bi-box"></i>
                                                    <h6>package</h6>
                                                </div>
                                                <div className="backgroundBlack"></div>
                                            </button>
                                            
                                                
                                        </li>
                                        <li>
                                            <button className="focus">
                                            <div className="give-position">
                                                    <i class="bi bi-star"></i>
                                                    <h6>Star</h6>
                                                </div>
                                            <div className="backgroundBlack"></div>
                                            </button>
                                                
                                            
                                                
                                        </li>
                                    </ul>
                                </div>
                </div>
            </header>
            <div className="main">
                <div className="wrapper">
                    <div className="flexing">
                        <div className="p1">
                            <div className="userImage">
                                <img src={rec.avatar_url}/>
                            </div>
                            <div className="userName">
                                <p>{rec.name}</p>
                            </div>
                            <div className="button-follow">
                            <button type="button" class="btn btn-secondary btn-sm">follow</button>
                                
                            </div>
                            <div className="followers">
                                <i class="bi bi-person"></i>
                                <p><span> {rec.followers} </span>followers <span>.</span>  <span>{rec.following} </span>following:</p>
                            </div>
                            <div className="block-report">
                                <p>block.and.report</p>
                            </div>
                        </div>
                        <div className="p2">
                            <div className="searchBtn">
                                <input type="search" placeholder="Find your repository" class="form-control" id="exampleInputEmail1"
                                 onChange={(e) => {
                                    let a = e.target.value
                                    setSearchValue(a)
                                    
                                }}/>
                                <button type="button" class="btn btn-secondary btn-sm">
                                    <div className="givFlex">
                                        Type 
                                        <i class="bi bi-caret-down-fill"/>
                                    </div>
                                    
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm">
                                    <div className="givFlex">
                                        Language 
                                        <i class="bi bi-caret-down-fill"/>  
                                    </div>
                                
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm">
                                    <div className="givFlex">
                                        Sort 
                                        <i class="bi bi-caret-down-fill"/>
                                    </div>
                                    
                                </button>
                                
                            </div>
                            <div className="repose">
                                {repose.map((e) => {
                                    if(searchValue  == e.name.charAt(length)) {
                                        let result1 = new Date(e.updated_at).toLocaleDateString('en-GB');
                                    
                                        return <RenderRepose   pushed_at = {result1} language = {e.language} type={e.private} name={e.name}/>
                                    }else if (searchValue == "" || !searchValue) {
                                        let result1 = new Date(e.updated_at).toLocaleDateString('en-GB');
                                    
                                        return <RenderRepose   pushed_at = {result1} language = {e.language} type={e.private} name={e.name}/>
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