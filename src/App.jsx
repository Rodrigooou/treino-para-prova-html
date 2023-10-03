import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Rodape from "./components/Rodape"

function App() {


  return (
    <>
      <Header/>
      <Outlet/>
      <Rodape/>
    </>
  )
}


export default App


