import React from 'react'

const Warning = ({ message }) => (
  <div className="alert alert-danger mt-4" role="alert">
    {message}
  </div>
)

export default Warning