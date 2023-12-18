export default function propsForUserProfile(props) {
    let obj = {
        image: props.avatar_url , 
        name: props.name ,
        login: props.login ,
        bio: props.bio , 
        followers_url: props.followers_url , 
        followers: props.followers , 
        following_url: props.following_url , 
        following: props.following , 
        blog : props.blog , 

    }
    return obj;
}