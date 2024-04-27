import React from 'react'
import PropTypes from "prop-types";

import { Select } from 'antd';

import './AntdSelect.scss'

const data = [
  { value: 'jack', label: 'Jack', },
  { value: 'lucy', label: 'Lucy', },
  { value: 'disabled', disabled: false, label: 'Disabled', },
  { value: 'Yiminghe', label: 'yiminghe', },
]

const AntdSelect = (props) => {

  const { options, onChange } = props

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    onChange(value)
  };

  return (
    <Select
      {...props}
      onChange={handleChange}
      options={options}
    />
  )
}

AntdSelect.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.any
};
AntdSelect.defaultPros = {
  options: data,
}

export default AntdSelect