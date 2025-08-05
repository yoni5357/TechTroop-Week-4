import './App.css'

function Ex2() {
  const getClassName = (temperature) => {
    if(temperature < 15){
        return "freezing";
    }
    else if(temperature < 30){
        return "fair";
    }
    else{
        return "hell-scape";
    }
   }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id="weatherBox" className={getClassName(10)}></div>
      </div>
    </div>
  )
}

export default Ex2