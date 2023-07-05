import { useEffect, useState } from "react"

const useFetch = (endpoint, initial)=>{

    const [data, setData] = useState(initial)

    useEffect(()=>{
        const dataFetch = fetch(endpoint)
        dataFetch.then(res => res.json()).then(res => setData(res))
    }, [endpoint])

    return data
}

export default useFetch

