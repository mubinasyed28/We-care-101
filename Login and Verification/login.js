import React from 'react'

import styles from './i-phone1415-pro-max1.module.css'

const IPhone1415ProMax1 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['i-phone1415-pro-max1']}>
        <span className={styles['text']}>
          <span>
            <span>
              Enter your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Phone Number</span>
          </span>
        </span>
        <span className={styles['text05']}>
          <span>Tap Continue to receive OTP via SMS to Login</span>
        </span>
        <img
          src="/rectangle1129-rpbx-200h.png"
          alt="Rectangle1129"
          className={styles['rectangle1']}
        />
        <span className={styles['text07']}>
          <span>CONTINUE</span>
        </span>
        <div className={styles['group19']}>
          <img
            src="/rectangle386710-vs1e-200w.png"
            alt="Rectangle386710"
            className={styles['rectangle38']}
          />
          <img
            src="/rectangle396710-6sih-200h.png"
            alt="Rectangle396710"
            className={styles['rectangle39']}
          />
          <span className={styles['text09']}>
            <span>Phone Number</span>
          </span>
          <span className={styles['text11']}>
            <span>+91</span>
          </span>
          <img
            src="/vector16710-usws.svg"
            alt="Vector16710"
            className={styles['vector1']}
          />
        </div>
      </div>
    </div>
  )
}

export default IPhone1415ProMax1