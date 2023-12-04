
import { useEffect, useState } from "react";
import "../styles/style.css";
import { api } from "../api/api";
import { repositories } from "../api/RepositoresApi";
import RenderRepose from "./renderrepose";

export default function RepositoryPage() {
    const [rec , setRec] = useState({})
    const [repose , setRepose] = useState({})

    useEffect(() => {
        api().then((e) => {
            console.log(e.name)
            setRec(e)
        })
        repositories().then((e) => {
            console.log(e)
            setRepose(e)
        })
    } , [])
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
                        



                        <div className="right">

                                <input className="input" type="search" placeholder="type"/>

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
                    <div className="part2">
                                    <ul>
                                        <li>
                                        <i class="bi bi-book"></i>
                                            <h6>Overview</h6>
                                        </li>
                                        <li>
                                            <i class="bi bi-save2-fill"></i>
                                            <h6>Repositories</h6>
                                        </li>
                                        <li>
                                            <i class="bi bi-file-earmark-lock-fill"></i>
                                            <h6>Project</h6>

                                        </li>
                                        <li>
                                            <i class="bi bi-box"></i>
                                            <h6>package</h6>
                                        </li>
                                        <li>
                                            <i class="bi bi-star"></i>
                                            <h6>Star</h6>
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
                                <input type="search" placeholder="Find your repository" class="form-control" id="exampleInputEmail1"/>
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
                                <RenderRepose/>
                            </div>
                        </div>
                    </div>
                        
                </div>
                
            </div>
        
        </>
        
    )
}