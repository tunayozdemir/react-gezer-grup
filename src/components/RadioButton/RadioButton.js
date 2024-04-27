import React from 'react'
import PropTypes from "prop-types";
import { Radio } from 'antd'
import { Label } from 'reactstrap';

import './RadioButton.scss'

const RadioButton = (props) => {

  const { options, label, onChange } = props

  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className='custom-radio-button'>
      <Label for="gender">{label}</Label>
      <Radio.Group onChange={handleChange}>
        {options &&
          options.map((items, index) => (
            <Radio key={index} value={items.value}>{items.label}</Radio>
          ))
        }
      </Radio.Group>
    </div>
  )
}

RadioButton.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  label: PropTypes.string
}

export default RadioButton