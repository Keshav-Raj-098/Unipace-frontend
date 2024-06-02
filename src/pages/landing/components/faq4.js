import React from 'react'

import PropTypes from 'prop-types'

import './faq4.css'

const FAQ4 = (props) => {
  return (
    <div className="faq4-faq12 thq-section-padding">
      <div className="faq4-max-width thq-section-max-width">
        <div className="faq4-section-title thq-flex-column">
          <h2 className="faq4-text thq-heading-2">{props.heading1}</h2>
          <p className="faq4-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-row">
          <div className="thq-flex-column">
            <div className="faq4-list-item1">
              <p className="faq4-faq1-question thq-body-large">
                {props.faq1Question}
              </p>
              <span className="thq-body-small">{props.faq1Answer}</span>
            </div>
            <p className="faq4-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <div className="faq4-list-item2">
              <span className="thq-body-small">{props.faq2Answer}</span>
            </div>
            <div className="faq4-list-item3">
              <p className="faq4-faq3-question thq-body-large">
                {props.faq3Question}
              </p>
              <span className="thq-body-small">{props.faq3Answer}</span>
            </div>
            <div className="faq4-list-item4">
              <p className="faq4-faq4-question thq-body-large">
                {props.faq4Question}
              </p>
              <span className="thq-body-small">{props.faq4Answer}</span>
            </div>
            <div className="faq4-list-item5">
              <p className="faq4-faq5-question thq-body-large">
                {props.faq5Question}
              </p>
              <span className="thq-body-small">{props.faq5Answer}</span>
            </div>
          </div>
          <div className="faq4-list1 thq-flex-column"></div>
        </div>
        <div className="faq4-content1 thq-flex-column">
          <div className="faq4-content2">
            <h2 className="thq-heading-2 faq4-text2">{props.heading2}</h2>
            <p className="thq-body-large faq4-text3">{props.content2}</p>
          </div>
          <button className="thq-button-outline">
            <span className="thq-body-small">{props.action1}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

FAQ4.defaultProps = {
  faq3Question:
    'How does unipace cater to startups with niche hiring requirements?',
  faq2Question:
    'What measures does Unipace take to ensure fair and transparent recruitment processes?',
  faq7Answer:
    "Yes, startups can communicate directly with college talent through the platform's messaging system. This feature enables seamless interaction between startups and potential hires.",
  faq4Answer:
    'Startups can sign up and use basic features of the platform for free. Additional premium features may be available at a cost.',
  faq5Question:
    'How does Unipace facilitate communication between colleges and startups?',
  faq10Question:
    'Is there a limit to the number of hires a startup can make through the platform?',
  faq4Question:
    'What support does Unipace provide for conducting technical interviews?',
  faq2Answer:
    'unipace ensures fairness and transparency by implementing invigilation by college professors.This on-ground monitoring ensures integrity and fairness in the hiring process.',
  action1: 'Contact',
  faq9Answer:
    'Yes, the platform has facilitated successful matches between startups and college talent, resulting in productive collaborations and valuable contributions to startup teams.',
  faq6Answer:
    'The platform offers resources and guidance to help startups conduct effective technical interviews with college talent. This support aims to ensure a smooth and efficient interview process.',
  faq3Answer:
    'unipace offers a dedicated hiring manager associate who spealizes in meeting your unique needs. They recommend  the best colleges and roles tailored to your requirements, guiding you through each stage of the hiring process.',
  heading2: 'Still have a question?',
  faq10Answer:
    'There is no set limit to the number of hires a startup can make through the platform. Startups can engage with multiple candidates simultaneously based on their hiring needs.',
  faq7Question:
    'Can startups directly contact college talent through the platform?',
  faq8Answer:
    "Based on the startup's preferences and requirements, the platform generates tailored suggestions for roles and stipends that align with the desired criteria. Startups can then review and select suitable options.",
  faq1Answer:
    'unipace ensure talent quality by partnering with colleges for skill and academic checks of students providing access to candidate profiles for informed hiring descisions.',
  faq6Question: 'What type of support is provided for technical interviews?',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  heading1: 'FAQs',
  faq1Question:
    'How can I ensure that the talent I hire through unipace is reliable and skilled',
  faq9Question:
    'Are there any success stories of startups hiring through the platform?',
  faq8Question:
    'How are roles and stipends suggested to startups on the platform?',
  faq5Answer:
    'Startups can create an account, set up their hiring preferences, and start browsing through potential candidates from partnered colleges. They can then initiate communication and interview processes through the platform.',
}

FAQ4.propTypes = {
  faq3Question: PropTypes.string,
  faq2Question: PropTypes.string,
  faq7Answer: PropTypes.string,
  faq4Answer: PropTypes.string,
  faq5Question: PropTypes.string,
  faq10Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq2Answer: PropTypes.string,
  action1: PropTypes.string,
  faq9Answer: PropTypes.string,
  faq6Answer: PropTypes.string,
  faq3Answer: PropTypes.string,
  heading2: PropTypes.string,
  faq10Answer: PropTypes.string,
  faq7Question: PropTypes.string,
  faq8Answer: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq6Question: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  heading1: PropTypes.string,
  faq1Question: PropTypes.string,
  faq9Question: PropTypes.string,
  faq8Question: PropTypes.string,
  faq5Answer: PropTypes.string,
}

export default FAQ4
