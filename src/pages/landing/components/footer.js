import React from 'react'

import PropTypes from 'prop-types'

import Social from './social'
import './footer.css'
import insta from "../../../assets/insta.svg"
import whatsapp from "../../../assets/whatsapp.svg"
import linkedin from "../../../assets/linkedin.svg"

const Footer = (props) => {
  return (
    <div className="footer-footer">
      <div className="footer-content">
        <div className="footer-information">
          <div className="footer-heading">
            <img
              alt={props.pastedImageAlt}
              src={props.pastedImageSrc}
              className="footer-pasted-image"
            />
            <span className="footer-text">{props.text1}</span>
          </div>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/company/unipace2024/?viewAsMember=true"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
              >
              <Social
                rootClassName="social-root-class-name"
                className="footer-component"
                insiderSrc={linkedin}
              ></Social>
            </a>
            <a
              href="https://www.instagram.com/unipace2024/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <Social
                rootClassName="social-root-class-name"
                className="footer-component"
                insiderSrc={insta}

              ></Social>
            </a>
            <a
              href="http://wa.me/9717538010"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <Social
                rootClassName="social-root-class-name"
                className="footer-component"
                insiderSrc={whatsapp}
              ></Social>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <span className="footer-header">{props.header1}</span>
            <span className="footer-link1">{props.link5}</span>
            <span className="footer-link2">{props.link6}</span>
            <span className="footer-link3">{props.link7}</span>
            <span className="footer-link4">{props.link8}</span>
            <span className="footer-link5">{props.link9}</span>
          </div>
        </div>
      </div>
      <span className="footer-text1">{props.text}</span>
    </div>
  )
}

Footer.defaultProps = {
  link9: 'Careers',
  link1: 'Responsive Prototypes',
  link: 'Responsive Web Design',
  link8: 'Partners',
  link3: 'Static Website Builder',
  link10: 'Press & Media',
  text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  header1: 'Company',
  pastedImageSrc: '/unipace%20white%20-200h.png',
  pastedImageAlt: 'pastedImage',
  link7: 'News',
  link2: 'Design to Code',
  link5: 'About',
  text: 'Unipace. All Rights Reserved.',
  header: 'Solutions',
  link6: 'Team',
  link4: 'Static Website Generator',
}

Footer.propTypes = {
  link9: PropTypes.string,
  link1: PropTypes.string,
  link: PropTypes.string,
  link8: PropTypes.string,
  link3: PropTypes.string,
  link10: PropTypes.string,
  text1: PropTypes.string,
  header1: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  link7: PropTypes.string,
  link2: PropTypes.string,
  link5: PropTypes.string,
  text: PropTypes.string,
  header: PropTypes.string,
  link6: PropTypes.string,
  link4: PropTypes.string,
}

export default Footer
