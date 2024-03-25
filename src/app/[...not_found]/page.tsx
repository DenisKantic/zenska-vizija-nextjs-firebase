import { notFound } from "next/navigation"

export async function generateStaticParams() {
    // Generate static paths here, if needed
    return [];
  }

export default function error404(){
    return(
            notFound()
    )
}