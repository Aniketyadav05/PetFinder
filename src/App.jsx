
import Hero from './Components/Hero'
import Header from './Components/Header'


import { Outlet } from 'react-router'

const App = () => {
  
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App