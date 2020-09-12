import React from 'react'
import { isEmail } from "validator";

const ValidEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger mt-4" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };

export default ValidEmail