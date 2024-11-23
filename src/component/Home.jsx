import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const [value, setValue] = useState();
    console.log(value)
  return (
    <div>
      <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder='enter id'></input>
      <Link to={`/room/${value}`}>join</Link>
      </div>
  )
}

export default Home
