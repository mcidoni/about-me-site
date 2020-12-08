import React from 'react'

const NotFound = () => {
  return (
    <>
      <h1 className="white">Looking for something?</h1>
      <p>
        <span className="i">{window.location.href}</span> cannot be found
      </p>
    </>
  )
}

export default NotFound
