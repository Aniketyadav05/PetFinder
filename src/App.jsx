
import Hero from './Components/Hero'
import Header from './Components/Header'


import { Outlet } from 'react-router'
import FadeInWrapper from './Components/FadeInWrapper'

import ShinyText from './Components/ShinyText'
import Footer from './Components/Footer'

const App = () => {
  
  return  (
    <>
    <FadeInWrapper>

      <Header/>
      <Outlet/>
      <Footer/>
    </FadeInWrapper>
    </>
  ) 
  
}

export default App