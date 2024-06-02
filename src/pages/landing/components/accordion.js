import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './accordion.css'

const Accordion = (props) => {
  useEffect(() => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; // Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
          accordionContent.style.display = "none"; // Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
          accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        accordionContents[index].style.display = "flex"; // Shows accordion content
        accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
      });
    });
  }, []);

  return (
    <div className="accordion-accordion">
      <div data-role="accordion-container" className="accordion-element">
        <div className="accordion-details">
          <span className="accordion-text">{props.text}</span>
          <span data-role="accordion-content" className="accordion-text1">
            {props.text1}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element1 accordion-element"
      >
        <div className="accordion-details1">
          <span className="accordion-text2">{props.text2}</span>
          <span data-role="accordion-content" className="accordion-text3">
            {props.text3}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon2"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element2 accordion-element"
      >
        <div className="accordion-details2">
          <span className="accordion-text4">{props.text4}</span>
          <span data-role="accordion-content" className="accordion-text5">
            {props.text5}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon4"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
    </div>
  );
}

Accordion.defaultProps = {
  text1:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  text3:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  text: 'Aliquam quaerat voluptatem',
  text5:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  text2: 'Nemo enim ipsam voluptatem quia voluptas',
  text4: 'Magnam aliquam quaerat voluptatem',
}

Accordion.propTypes = {
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
}

export default Accordion
