import { useContext, useEffect , useState } from "react"
import { Context1 } from "../../context/context"
import { getAnswerFromApiUserProfile } from "../../getAnswerFromApiUserProfile/getAnswerFromApiUserProfile"


export default function UserProfile(props) {
    
    let cont = useContext(Context1)
    let a = cont.setSet1
    let b = cont.rec1
    
       
    
    let params = props.params


    useEffect(() => {
        getAnswerFromApiUserProfile (a , params )  
    } , [])

    let obj = {
        image: b.avatar_url , 
        name: b.name ,
        login: b.login ,
        bio: b.bio , 
        followers_url: b.followers_url , 
        followers: b.followers , 
        following_url: b.following_url , 
        following: b.following , 
        blog : b.blog , 

    }

   return(
   <>
    
    <div className="p1">
                            <div className="userImage">
                                <img src={obj.image}/>
                            </div>
                            <div className="userName">
                                <p>{obj.name}</p>
                            </div>
                            <div className="login">
                                <h5>{obj.login}</h5>
                            </div>
                            <div className="button-follow">
                                <button type="button" class="btn btn-secondary btn-sm">follow</button>
                            </div>
                            <div className="bio">
                                <h6>{obj.bio}</h6>
                            </div>
                            <div className="followers"> 
                                   
                                        <a className="a" href={obj.followers_url}>
                                             
                                                <i style={{ fontSize: "13px",}} class="fa fa-users"></i>
                                                <span>{obj.followers}</span>
                                                <p>followers</p>
                                            
                                            
                                        </a> 
                                    
                                    <span>.</span>
                                    
                                        <a className="a" href={obj.following_url}>
                                            
                                                <span>{obj.following}</span>
                                                <p>following</p>
                                            
                                        </a>
                                    
                            </div>
                            <div className="blog">
                               { !props.blog ? ""  : 
                               <>
                               
                               <i className="fa fa-chain"></i>
                               <a href={obj.blog}>{obj.blog}</a>
                                
                               
                               </>}
                               
                            </div>
                            <div className="achievements">
                                <h6>Achievements</h6>

                            </div>
                            <div className="block-report">
                                <p>block.and.report</p>
                            </div>
                        </div>
    
    
    </>
   )
}