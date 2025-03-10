"use client"
import { useRouter } from "next/navigation"

export default function About(){
    const router = useRouter()
    
    
    return(<>
    <h1>About Us</h1>

    <button onClick={()=>router.push("/")} className="bg-blue-200 text-black p-2 rounded-md" >Go home</button>
    </>
)
}