import { useEffect, useState } from "react"; 
import Person from './Person'


function App() {
  const[data, setData] = useState([]);
  const [fetched, setFetched] = useState(false)

  useEffect(()=>{
    const getData = async (url)=>{
    let response = await fetch(url);
    let dataGotten = await response.json()
    console.log(dataGotten);
    setData(dataGotten)
    setFetched(true)
  }
  getData('https://random-data-api.com/api/v2/users?size=20&is_xml=true')
  // getData("https://randomuser.me/api/");
  // console.log(data);
}, [])


return <div className="App">
  {fetched && <Person data={data} />}
  
  </div>;
}

export default App;
