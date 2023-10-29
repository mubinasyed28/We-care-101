import React from 'react'

import styles from './i-phone1415-pro-max2.module.css'

const IPhone1415ProMax2 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['i-phone1415-pro-max2']}>
        <span className={styles['text']}>
          <span>
            <span>
              Verify your
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
          <span>Enter OTP sent to +919082366763</span>
        </span>
        <span className={styles['text07']}>
          <span className={styles['text08']}>
            Didn’t Receive Code?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Resend Code</span>
        </span>
        <img
          src="/rectangle11318-ozgm-200h.png"
          alt="Rectangle11318"
          className={styles['rectangle1']}
        />
        <span className={styles['text10']}>
          <span>VERIFY</span>
        </span>
        <img
          src="/rectangle21320-fouu-200h.png"
          alt="Rectangle21320"
          className={styles['rectangle2']}
        />
        <img
          src="/rectangle31324-cjx-200h.png"
          alt="Rectangle31324"
          className={styles['rectangle3']}
        />
        <img
          src="/rectangle41325-gvr-200h.png"
          alt="Rectangle41325"
          className={styles['rectangle4']}
        />
        <img
          src="/rectangle51326-g5hh-200h.png"
          alt="Rectangle51326"
          className={styles['rectangle5']}
        />
      </div>
    </div>
  )
}

export default IPhone1415ProMax2