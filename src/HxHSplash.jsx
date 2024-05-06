import "./HxHSplash.css"

export default function HxHSplash({altered, setAltered}) {
    return (
        <div className='hxh-splash'>
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