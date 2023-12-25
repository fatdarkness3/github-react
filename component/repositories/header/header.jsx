import { useState } from "react"



export default function Header(props) {


    const [params , setParams] = useState("")
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
                            <div className="f"  >
                                <form onSubmit={(e) => {
                                    
                                   
                                }}>
                                <button type="button" class="btn btn-outline-secondary bbb" >
                                    <i class="fa fa-search"></i>
                                    <input onChange={(e) => {
                                        
                                        let val = e.target.value
                                        val = props.params

                                    }} className="input" type="search" placeholder="Type / to search "/>
                                    
                                </button>
                                </form>
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
                                                        <div className="absolute">{props.numberOfRepositories}</div>
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
        
        </>
    )
}