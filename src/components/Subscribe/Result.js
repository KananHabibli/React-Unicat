import React from 'react'

const Result = ({ message }) => (
  <div className="alert alert-danger mt-4" role="alert">
    {message}
  </div>
)

export default Result