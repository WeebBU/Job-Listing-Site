import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
const override = {
    display: "block",
    margin:"auto 100px",
    display: "flex"
}

const Spinner = ({loading}) => {
  return (
    <div>
        <ClipLoader
        color='4338ca'
        loading = {loading}
        cssOverride={override}
        
        size={150}
        />
    </div>
  )
}

export default Spinner