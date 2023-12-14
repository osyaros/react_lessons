import { useEffect, useState } from "react"

export const DisplyaValue = ({value,children}) =>
{
    const [clowns, setClowns] = useState([]);
    const [showClowns, setShowClowns] = useState(true);
    useEffect(() =>{
       
    

    for (let i = 0; i < value;i++)
    {
        setClowns([
            ...clowns,
            <h2>🃏</h2>
        ])
        
    }}, [value])

    return(
        <div>
            {
               clowns   
            }
        </div>
    )
}