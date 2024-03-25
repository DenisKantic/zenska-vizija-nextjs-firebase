import { notFound } from "next/navigation"

export default function error404(){
    return(
            notFound()
    )
}