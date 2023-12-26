import { useParams } from "react-router-dom";
import Header1 from "../../components/header/header"
import UserProfile from "../../components/userProfile/userProfile";


export default function HomeScreen() {

    const param = useParams()
    let getUserFromParams = param.username

return(
    <>

        <Header1/>
        <UserProfile params = {getUserFromParams}/>
    
    </>
)

}