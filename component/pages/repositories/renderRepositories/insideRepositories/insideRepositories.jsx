import { useEffect, useState } from "react"
import { insideRepositories } from "../../../../../api/insideRepositoriesApi"
import { useParams } from "react-router-dom"
import { pushFilesJs } from "../../../../../api/pushFiles"

export default function InsideRepositories() {

let obj = {
    name1: "pedaret1" , 
    name2: "pedaret2" , 
    name3: "pedaret3" , 
    name4: "pedaret4" , 
    name5: "pedaret5" , 
}

    let param = useParams()
    let username  = param.username
    let nameOfRepository = param.nameOfRepository
    
    const [res , setRes] = useState({})
    const [res2 , setRes2] = useState("")
    let default_branch = res.default_branch
    useEffect(() => {
        insideRepositories(username , nameOfRepository).then((e) => {
            setRes(e)
        })


        pushFilesJs( username , nameOfRepository , default_branch ).then((e) => {
            setRes2(e)
            
        })
        
    } , [])
    return (
        <>
        

           
        
        
        </>
    )
}