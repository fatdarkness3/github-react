

export default function UserProfile(props) {
   return(
   <>
    
    <div className="p1">
                            <div className="userImage">
                                <img src={props.profile.image}/>
                            </div>
                            <div className="userName">
                                <p>{props.profile.name}</p>
                            </div>
                            <div className="login">
                                <h5>{props.profile.login}</h5>
                            </div>
                            <div className="button-follow">
                                <button type="button" class="btn btn-secondary btn-sm">follow</button>
                            </div>
                            <div className="bio">
                                <h6>{props.profile.bio}</h6>
                            </div>
                            <div className="followers"> 
                                   
                                        <a className="a" href={props.profile.followers_url}>
                                             
                                                <i style={{ fontSize: "13px",}} class="fa fa-users"></i>
                                                <span>{props.profile.followers}</span>
                                                <p>followers</p>
                                            
                                            
                                        </a> 
                                    
                                    <span>.</span>
                                    
                                        <a className="a" href={props.profile.following_url}>
                                            
                                                <span>{props.profile.following}</span>
                                                <p>following</p>
                                            
                                        </a>
                                    
                            </div>
                            <div className="blog">
                               { !props.blog ? ""  : 
                               <>
                               
                               <i className="fa fa-chain"></i>
                               <a href={props.profile.blog}>{props.profile.blog}</a>
                                
                               
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