import React from 'react'

const page = ( {params}  : {params : {id: string}} ) => {

    const {id} = params;

  return (
    <div>
      <h1>
        Welcome dashboard, { id }
      </h1>
    </div>
  )
}

export default page
