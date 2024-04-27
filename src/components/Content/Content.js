import React from 'react'
import PropTypes from "prop-types";
import './Content.scss'

const Content = ({ children }) => {
  return (
    <div className='contnet'>
      {children}
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.any
}

export default Content