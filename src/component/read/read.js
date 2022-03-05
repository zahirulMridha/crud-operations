import { useParams } from "react-router-dom"

export default function Read(){
   let params = useParams();
   
   return(
      <div>
         this is read
      </div>
   )
}