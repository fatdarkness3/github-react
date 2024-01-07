import { useEffect, useState } from "react"
import { insideRepositories } from "../../../../../api/insideRepositoriesApi"
import { json, useParams } from "react-router-dom"
import { pushFilesJs } from "../../../../../api/pushFiles"
import InsideRepositoriesComponent from "../../../../components/insideRepositories/insideRepositoriesComponent"
import HeaderForInsiderepositories from "../../../../components/headerForInsiderepositories/headerForInsideRepositories"
import "../../../../../styles/style.css"
import { api } from "../../../../../api/userInfo"


export default function InsideRepositories() {

// let obj = {
//     name1: "pedaret1" , 
//     name2: "pedaret2" , 
//     name3: "pedaret3" , 
//     name4: "pedaret4" , 
//     name5: "pedaret5" , 
// }


const [res , setRes] = useState({})
const [res2 , setRes2] = useState([])
const [req , setReq] = useState({})
const [click , setClick] = useState("")
let param = useParams()
let username  = param.username
let nameOfRepository = param.nameOfRepository
    
    let default_branch = res.default_branch

    useEffect(() => {

        insideRepositories(username , nameOfRepository).then((e) => {
            
            setRes(e)
        })


        

        pushFilesJs( username , nameOfRepository , default_branch ).then((e) => {

            
            setRes2(e.tree)
            
            
        })

        api(username).then((e) => {
            
            setReq(e)

        })

    } , [click])
    
    return (
        <>

        <HeaderForInsiderepositories params={username} nameOfRepository={nameOfRepository}/>

        <div className="wrapper">
            <div className="showWhoIsLogin">
                <div className="p1">
                    <img src={req.avatar_url}/>
                    <h6>{nameOfRepository}</h6>
                    <button onClick={() => {
                        setClick()
                    }}>alo</button>
                </div>
                <div className="p2"></div>
            </div>
        {res2.map((e) => {
            
            
          return <InsideRepositoriesComponent path = {e.path}/>  
            
        })}
        </div>
        
          
        
        
        </>
    )
}