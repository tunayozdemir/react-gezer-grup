import React from 'react'
import PropTypes from "prop-types";
import { Label, Input as CustomInput } from 'reactstrap';

import './Input.scss'

const Input = (props) => {
  const { id, name, placeholder, type, label } = props
  return (
    <div>
      <Label for={name}>{label}</Label>
      <CustomInput
        {...props}
        id={id}
        name={name}
        className='custum-input'
        placeholder={placeholder}
        type={type}
      />
    </div>

  )
}

Input.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string
}

export default Input