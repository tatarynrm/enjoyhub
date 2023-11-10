import { useEffect } from "react";
const tele = window.Telegram.WebApp

function App() {
  useEffect(()=>{
    tele.ready()
  },[])
  return (
 <>
 <header>
  <h1>Enjoy <span>Hub</span></h1>
 </header>
 <main>
<div className="about">
  <a>Тут буде статистика</a>
  <a>Реферальна система</a>
</div>
 </main>
 <footer>
  <h3>Enjoy <span>Hub</span></h3>
 </footer>
 </>
  );
}

export default App;
