import useFetch from "./utils/hooks/useFetch"


const FetchUno = () => {

    let comments = useFetch("https://jsonplaceholder.typicode.com/comments", [])
    console.log("comments: ", comments)

  return (
    <div>FetchUno</div>
  )
}

export default FetchUno