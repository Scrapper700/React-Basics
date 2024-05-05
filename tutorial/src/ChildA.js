// import React from 'react';
// import ChildB from './ChildB';

// function ChildA({name}) {
//   return (
//     <div>
//       <ChildB name={name} />
//     </div>
//   );
// }

// export default ChildA;

import React from "react";
import { useState } from "react";

function ChildA(props) {
    const [name, setName] = useState("")
    function solve(e) {
        e.preventDefault()
        props.getData(name)
    }

    return (
        <>
            <form onSubmit={solve}>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                <button>Submit</button>
            </form>
        </>
    )
}

export default ChildA