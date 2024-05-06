import {useState, useEffect } from 'react'

import HxHSplash from './HxHSplash.jsx'


function App() {
  const [altered, setAltered] = useState(false)


  // on render, or some other condition, trigger the animated state
  useEffect(() => {
    setTimeout(() => {
      setAltered(true)
    }, 1000);
  }, [])

  // I tried to componentize it as much as i could
  
  return (
    <div className='app'>
      <HxHSplash altered={altered} setAltered={setAltered}/>
    </div>
  )
}

export default App
