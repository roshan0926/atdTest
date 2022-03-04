import React from 'react'
import './loader.css'

const Loader = () => {
  return (
    <div className='loader'>
      <div>
      Fetching data
      </div>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader