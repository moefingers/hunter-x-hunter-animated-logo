import './App.css'
import {useRef,useState } from 'react'


const animationKeyFrames = [
  
]

function App() {
  const [altered, setAltered] = useState(false)


  return (
    <div className='app'>
      <div className="primary-wrapper example-one" onClick={() => setAltered(!altered)}>
        <div className="drop-shadow-wrapper">
          <div className={`x ${altered ? 'left-x' : "shmedium-x"}`}></div>
          <div className={`x ${altered ? 'right-x-transform' : "shmedium-x"}`}></div>
        </div>
          <div className={`diamond ${altered ? 'visible-by-expansion' : ""}`}></div>
      </div>
      <div className="primary-wrapper example-two" onClick={() => setAltered(!altered)}>
        <div className="drop-shadow-wrapper">
          <div className={`x ${altered ? 'left-x' : "shmedium-x"}`}></div>
          <div className={`x ${altered ? 'left-x flip-to-right' : "shmedium-x"}`}></div>
        </div>
          <div className={`diamond ${altered ? 'visible-fade-after' : ""}`}></div>
      </div>
    </div>
  )
}

export default App
