import { useState, useEffect } from "react"
import MockComponent from "./MockComponent"



const HighOrder = ( MyComponent ) => {
  
    /* eslint-disable */
    return (props)=>{

        const [data, setData] = useState([])
        useEffect(()=>{
            const dataFetch  = fetch(props.endpoint)
            dataFetch.then(res => res.json()).then(res => setData(res))
        }, [])


        return <MyComponent {...data} /> 
    }
}

export const ComponentWithData = HighOrder(MockComponent)

