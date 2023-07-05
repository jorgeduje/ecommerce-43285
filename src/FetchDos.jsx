
import useFetch from "./utils/hooks/useFetch"

const FetchDos = () => {
    
    const albums = useFetch("https://jsonplaceholder.typicode.com/albums", [])
    console.log("Albums", albums)
  return (
    <div>FetchDos</div>
  )
}

export default FetchDos