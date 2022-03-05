import React,{ useContext, useState } from "react";

const Authcontext = React.createContext();

export function useAuth(){
   return useContext(Authcontext);
}

let Initdata = [
   {id : 1, name: "Asraful", position: "Font End Dev", salary: 20000 },
   {id : 2, name: "Nayeem", position: "Back End Dev", salary: 30000 },
   {id : 3, name: "Khabir", position: "Full End Dev", salary: 50000 }
];
export function ContextProvider (props){ 
   const [datas,setData] = useState(Initdata);

   const obj ={
      datas,
      setData,
   }
return (

   <Authcontext.Provider value={obj}>
      {props.children}
   </Authcontext.Provider>
)
}