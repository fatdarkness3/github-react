
import { useEffect, useState } from "react";
import "../styles/style.css";
import { api } from "../api/api";
import { repositories } from "../api/RepositoresApi";
import RenderRepose from "./renderrepose";
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
                                <button type="button" class="btn btn-outline-secondary bbb" >
                                    <i class="fa fa-search"></i>
                                </button>
                                <input className="input" type="search" placeholder="type"/>
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
                                                    <i class="fa fa-book"></i>
                                                    <h6>Overview</h6>
                                                </div>
                                                <div className="backgroundBlack"></div>
                                            </button>
                                            
                                        </li>
                                        <li>
                                            <button className="focus">
                                            <div className="give-position">
                                                    <i class="fa fa-save"></i>
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
                                                    <i class="fa fa-columns"></i>
                                                    <h6>Project</h6>
                                                </div>
                                                <div className="backgroundBlack"></div>
                                            </button>
                                                

                                        </li>
                                        <li>
                                            <button className="focus">
                                                <div className="give-position">
                                                    <i class="fa fa-dropbox"></i>
                                                    <h6>package</h6>
                                                </div>
                                                <div className="backgroundBlack"></div>
                                            </button>
                                            
                                                
                                        </li>
                                        <li>
                                            <button className="focus">
                                            <div className="give-position">
                                                    <i class="fa fa-star-o"></i>
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
                            <div className="login">
                                <h5>{rec.login}</h5>
                            </div>
                            <div className="button-follow">
                                <button type="button" class="btn btn-secondary btn-sm">follow</button>
                            </div>
                            <div className="bio">
                                <h6>{rec.bio}</h6>
                            </div>
                            <div className="followers"> 
                                   
                                        <a className="a" href={rec.followers_url}>
                                             
                                                <i style={{ fontSize: "13px",}} class="fa fa-users"></i>
                                                <span>{rec.followers}</span>
                                                <p>followers</p>
                                            
                                            
                                        </a> 
                                    
                                    <span>.</span>
                                    
                                        <a className="a" href={rec.following_url}>
                                            
                                                <span>{rec.following}</span>
                                                <p>following</p>
                                            
                                        </a>
                                    
                            </div>
                            <div className="blog">
                                <i className="fa fa-chain"></i>
                                <a href={rec.blog}>{rec.blog}</a>
                            </div>
                            <div className="achievements">
                                <h6>Achievements</h6>

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
                                        <p>Type </p>
                                        
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                    
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm">
                                    <div className="givFlex">
                                        <p>Language </p>
                                        
                                        <i class="fa fa-sort-down"></i> 
                                    </div>
                                
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm">
                                    <div className="givFlex">
                                        <p>Sort</p>
                                        
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                    
                                </button>
                                
                            </div>
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