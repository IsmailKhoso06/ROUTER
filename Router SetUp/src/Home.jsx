import React, { useState } from 'react'

function Home() {

  const [count, setCount] = useState(0)

  const handleOnClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      Hello I am Home <br/>
      You Clicked <button onClick={handleOnClick} >{count}</button> Times
    </div>
  )
}

export default Home
