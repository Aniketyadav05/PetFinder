
import Hero from './Components/Hero'
import Header from './Components/Header'


import { Outlet } from 'react-router'
import FadeInWrapper from './Components/FadeInWrapper'

import ShinyText from './Components/ShinyText'

const App = () => {
  
  return  (
    <>
    <FadeInWrapper>

      <Header/>
      <Outlet/>
    </FadeInWrapper>
    </>
  ) 
  
}

export default App