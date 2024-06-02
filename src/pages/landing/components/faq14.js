import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './faq14.css'

const FAQ14 = (props) => {
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  return (
    <div className={`faq14-faq8 thq-section-padding ${props.rootClassName} `}>
      <div className="faq14-max-width thq-section-max-width">
        <div className="faq14-container thq-flex-column">
          <div className="faq14-section-title thq-flex-column">
            <h2 className="faq14-text thq-heading-2">{props.heading1}</h2>
          </div>
          <div className="faq14-list thq-flex-column">
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="faq14-trigger"
              >
                <p className="faq14-faq1-question thq-body-large">
                  {props.faq1Question}
                </p>
                <div className="faq14-icons-container">
                  {!faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon02">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="faq14-container03">
                  <span className="thq-body-small">
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                    sunt aut deleniti illum non repudiandae voluptatem. Aut
                    praesentium doloribus qui distinctio neque ut unde
                    temporibus. Cum exercitationem eveniet in omnis animi in
                    corporis nulla. Sed tempora excepturi et voluptatem modi et
                    exercitationem voluptate cum illum quisquam 33 quia
                    blanditiis eos minus consequatur.Ut neque quam qui
                    dignissimos voluptates ut voluptate totam aut consequuntur
                    quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                    eum earum tenetur? Est esse harum et Quis officiis et enim
                    amet.Et minima tempore et neque voluptatem eos amet officiis
                    et temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="faq14-trigger1"
              >
                <p className="faq14-faq2-question thq-body-large">
                  {props.faq2Question}
                </p>
                <div className="faq14-icons-container1">
                  {!faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon04">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon06">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="faq14-container06">
                  <span className="thq-body-small">
                    Et minima tempore et neque voluptatem eos amet officiis et
                    temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="faq14-trigger2"
              >
                <p className="faq14-faq2-question1 thq-body-large">
                  {props.faq3Question}
                </p>
                <div className="faq14-icons-container2">
                  {!faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon08">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon10">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="faq14-container09">
                  <span className="thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="faq14-trigger3"
              >
                <p className="faq14-faq2-question2 thq-body-large">
                  {props.faq4Question}
                </p>
                <div className="faq14-icons-container3">
                  {!faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon12">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon14">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="faq14-container12">
                  <span className="thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq5">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="faq14-trigger4"
              >
                <p className="faq14-faq1-question1 thq-body-large">
                  {props.faq5Question}
                </p>
                <div className="faq14-icons-container4">
                  {!faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon16">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon18">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq5Visible && (
                <div className="faq14-container15">
                  <span className="thq-body-small">
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                    sunt aut deleniti illum non repudiandae voluptatem. Aut
                    praesentium doloribus qui distinctio neque ut unde
                    temporibus. Cum exercitationem eveniet in omnis animi in
                    corporis nulla. Sed tempora excepturi et voluptatem modi et
                    exercitationem voluptate cum illum quisquam 33 quia
                    blanditiis eos minus consequatur.Ut neque quam qui
                    dignissimos voluptates ut voluptate totam aut consequuntur
                    quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                    eum earum tenetur? Est esse harum et Quis officiis et enim
                    amet.Et minima tempore et neque voluptatem eos amet officiis
                    et temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
          </div>
        </div>
        <div className="faq14-content thq-flex-column">
          <div className="faq14-content1">
            <h2 className="faq14-text6 thq-heading-2">{props.heading2}</h2>
          </div>
          <a
            href="mailto:support@unipace.in?subject="
            className="faq14-link thq-button-filled"
          >
            {props.action2}
          </a>
        </div>
      </div>
    </div>
  )
}

FAQ14.defaultProps = {
  rootClassName: '',
  heading2: 'Still have a question?',
  faq3Question: 'How can I customize my hiring process on Unipace?',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  heading1: 'FAQs',
  faq2Question:
    'What features does Unipace offer to simplify the hiring process?',
  faq4Question:
    'What support does Unipace provide for conducting technical interviews?',
  faq1Question: 'How does Unipace help startups find college talent?',
  action2: 'Email us',
  faq5Question:
    'How does Unipace facilitate communication between colleges and startups?',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  action1: 'Contact',
}

FAQ14.propTypes = {
  rootClassName: PropTypes.string,
  heading2: PropTypes.string,
  faq3Question: PropTypes.string,
  content2: PropTypes.string,
  heading1: PropTypes.string,
  faq2Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq1Question: PropTypes.string,
  action2: PropTypes.string,
  faq5Question: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default FAQ14
