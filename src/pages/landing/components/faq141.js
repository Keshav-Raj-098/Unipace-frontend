import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './faq141.css'

const FAQ141 = (props) => {
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  return (
    <div className="faq141-faq8 thq-section-padding">
      <div className="faq141-max-width thq-section-max-width">
        <div className="faq141-container thq-flex-column">
          <div className="faq141-section-title thq-flex-column">
            <h2 className="faq141-text thq-heading-2">{props.heading1}</h2>
          </div>
          <div className="faq141-list thq-flex-column">
            <div className="thq-divider-horizontal"></div>
            <div className="faq141-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="faq141-trigger"
              >
                <p className="faq141-faq1-question thq-body-large">
                  {props.faq1Question}
                </p>
                <div className="faq141-icons-container">
                  {!faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq141-icon">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq141-icon02">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="faq141-container03">
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
            <div className="faq141-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="faq141-trigger1"
              >
                <p className="faq141-faq2-question thq-body-large">
                  {props.faq2Question}
                </p>
                <div className="faq141-icons-container1">
                  {!faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq141-icon04">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq141-icon06">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="faq141-container06">
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
            <div className="faq141-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="faq141-trigger2"
              >
                <p className="faq141-faq2-question1 thq-body-large">
                  {props.faq3Question}
                </p>
                <div className="faq141-icons-container2">
                  {!faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq141-icon08">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq141-icon10">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="faq141-container09">
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
            <div className="faq141-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="faq141-trigger3"
              >
                <p className="faq141-faq2-question2 thq-body-large">
                  {props.faq4Question}
                </p>
                <div className="faq141-icons-container3">
                  {!faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq141-icon12">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq141-icon14">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="faq141-container12">
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
            <div className="faq141-faq5">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="faq141-trigger4"
              >
                <p className="faq141-faq1-question1 thq-body-large">
                  {props.faq5Question}
                </p>
                <div className="faq141-icons-container4">
                  {!faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq141-icon16">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq141-icon18">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq5Visible && (
                <div className="faq141-container15">
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
        <div className="faq141-content thq-flex-column">
          <div className="faq141-content1">
            <h2 className="faq141-text6 thq-heading-2">{props.heading2}</h2>
            <span className="faq141-text7 thq-body-large">
              {props.content2}
            </span>
          </div>
          <button type="button" className="thq-button-filled faq141-button">
            {props.action2}
          </button>
        </div>
      </div>
    </div>
  )
}

FAQ141.defaultProps = {
  content2: 'Still have a question?',
  heading1: 'FAQs',
  faq3Question:
    'How does unipace cater to startups with niche hiring requirements?',
  action2: 'Email us',
  faq5Question:
    'How does Unipace facilitate communication between colleges and startups?',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  faq4Question:
    'What support does Unipace provide for conducting technical interviews?',
  faq2Question:
    'What measures does Unipace take to ensure fair and transparent recruitment processes?',
  action1: 'Contact',
  faq1Question:
    'How can I ensure that the talent I hire through unipace is reliable and skilled',
  heading2: '',
}

FAQ141.propTypes = {
  content2: PropTypes.string,
  heading1: PropTypes.string,
  faq3Question: PropTypes.string,
  action2: PropTypes.string,
  faq5Question: PropTypes.string,
  content1: PropTypes.string,
  faq4Question: PropTypes.string,
  faq2Question: PropTypes.string,
  action1: PropTypes.string,
  faq1Question: PropTypes.string,
  heading2: PropTypes.string,
}

export default FAQ141
