
import useFetch from "./utils/hooks/useFetch";

const FetchTres = () => {
  const users = useFetch("https://jsonplaceholder.typicode.com/users", []);

  console.log("users: ", users);
  return <div>FetchTres</div>;
};

export default FetchTres;
