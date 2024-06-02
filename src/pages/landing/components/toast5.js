import React from 'react'

import PropTypes from 'prop-types'

import './toast5.css'

const Toast5 = (props) => {
  return (
    <div className="toast5-container">
      <div className="toast5-header">
        <div className="toast5-content">
          <h3 className="thq-heading-3 toast5-title">{props.bannerTitle}</h3>
        </div>
        <button type="button" className="thq-button-filled toast5-button">
          {props.button1}
        </button>
      </div>
      <button type="button" aria-label="Close" className="toast5-close-button">
        <svg viewBox="0 0 804.5714285714286 1024" className="toast5-icon">
          <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
        </svg>
      </button>
    </div>
  )
}

Toast5.defaultProps = {
  bannerTitle: 'Register for 2024 Internship Drive Today',
  button1: 'Get Started',
  bannerSubtitle: 'Creating stunning websites tailored to your needs',
  logoAlt: 'Company Logo',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
}

Toast5.propTypes = {
  bannerTitle: PropTypes.string,
  button1: PropTypes.string,
  bannerSubtitle: PropTypes.string,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
}

export default Toast5
