import React from 'react'

import PropTypes from 'prop-types'

import './contact1.css'

const Contact1 = (props) => {
  return (
    <div className="contact1-contact20 thq-section-padding">
      <div className="contact1-max-width thq-section-max-width">
        <form className="contact1-form"></form>
      </div>
    </div>
  )
}

Contact1.defaultProps = {
  content1: 'Have a question or need assistance?',
  button: 'Button',
  content3: 'We are here to assist you.',
  button1: 'Button',
  address1: '123 Main Street, City, Country',
  content2: 'Contact our support team for help with your project.',
  heading: 'Heading',
  email1: 'support@example.com',
  phone1: '+1-123-456-7890',
}

Contact1.propTypes = {
  content1: PropTypes.string,
  button: PropTypes.string,
  content3: PropTypes.string,
  button1: PropTypes.string,
  address1: PropTypes.string,
  content2: PropTypes.string,
  heading: PropTypes.string,
  email1: PropTypes.string,
  phone1: PropTypes.string,
}

export default Contact1
