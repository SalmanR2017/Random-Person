import React from 'react'
import { useState } from 'react';


// import React from 'react'
// import { useState } from 'react';

const Person = ({data}) => {
    // const [index, setIndex] = useState(0)
  // console.log(data[0]);
  const {id, avatar, first_name, last_name} = data[0]
  return (
    <div>
      <p>{first_name}</p>
    </div>
  )
}

export default Person
