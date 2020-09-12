import React from 'react'

const Required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger mt-4" role="alert">
          This field is required!
        </div>
      );
    }
  };

export default Required