export default function UserProfile(props) {
   return(
   <>
    
    <div className="p1">
                            <div className="userImage">
                                <img src={props.avatar_url}/>
                            </div>
                            <div className="userName">
                                <p>{props.name}</p>
                            </div>
                            <div className="login">
                                <h5>{props.login}</h5>
                            </div>
                            <div className="button-follow">
                                <button type="button" class="btn btn-secondary btn-sm">follow</button>
                            </div>
                            <div className="bio">
                                <h6>{props.bio}</h6>
                            </div>
                            <div className="followers"> 
                                   
                                        <a className="a" href={props.followers_url}>
                                             
                                                <i style={{ fontSize: "13px",}} class="fa fa-users"></i>
                                                <span>{props.followers}</span>
                                                <p>followers</p>
                                            
                                            
                                        </a> 
                                    
                                    <span>.</span>
                                    
                                        <a className="a" href={props.following_url}>
                                            
                                                <span>{props.following}</span>
                                                <p>following</p>
                                            
                                        </a>
                                    
                            </div>
                            <div className="blog">
                                <i className="fa fa-chain"></i>
                                <a href={props.blog}>{props.blog}</a>
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