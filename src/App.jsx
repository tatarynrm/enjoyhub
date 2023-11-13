import axios from "axios";
import { useEffect, useState } from "react";
const tele = window.Telegram.WebApp

function App() {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    tele.ready()
  },[])
useEffect(()=>{
const usersCount = async (req,res) =>{
  try {
    const data = await axios.get('https://api.noris.tech/statistic/statistic-users')
    // const data = await axios.get('http://localhost:5005/statistic/statistic-users')
    console.log(data);
    setUsers(data.data)
  } catch (error) {
    console.log(error);
  }
}
usersCount()
},[])

  return (
 <>
 <header>
  <h1>Enjoy <span>Hub</span></h1>
 </header>
 <main>
<div className="about">
  <a style={{display:"flex",gap:"20px",alignItems:"center"}}><h3>Subscribers:</h3> <span>{users[0]?.total_users}</span></a>
 <div className="sex" style={{display:"flex",alignItems:"center",gap:"20px",justifyContent:"center"}}>
 <a style={{display:"flex",gap:"20px",alignItems:"center"}}><h3>Boys: </h3> <span>{users[0]?.boys_count}</span></a>
 <a style={{display:"flex",gap:"20px",alignItems:"center"}}><h3>Girls:</h3> <span>{users[0]?.girls_count}</span></a>
 </div>
</div>
 </main>
 <footer>
  <h3>Enjoy <span>Hub</span></h3>
 </footer>
 </>
  );
}

export default App;
