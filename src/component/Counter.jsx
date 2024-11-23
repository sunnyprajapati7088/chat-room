

import React, { useEffect, useState } from 'react'
function Counter() {
    const [val, setVal] = useState(0);
    useEffect(() => {
        console.log("hello")
        return (()=>console.log("0"))
    }, [val])
    useEffect(() => {
      console.log("mount");
      
    }, []);
    return (
        <div>
            {val}
            <button onClick={()=>setVal(val+1)}>increase</button>
        </div>
    )
}

export default Counter;