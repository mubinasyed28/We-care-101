import React from 'react'

import styles from './i-phone1415-pro-max9.module.css'

const IPhone1415ProMax9 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['i-phone1415-pro-max9']}>
        <img
          src="/rectangle65044-4kbw-200h.png"
          alt="Rectangle65044"
          className={styles['rectangle6']}
        />
        <div className={styles['group4']}>
          <img
            src="/rectangle7i679-klu-200h.png"
            alt="Rectangle7I679"
            className={styles['rectangle7']}
          />
          <img
            src="/rectangle8i679-jxll-200h.png"
            alt="Rectangle8I679"
            className={styles['rectangle8']}
          />
          <img
            src="/rectangle9i679-vrpd-200h.png"
            alt="Rectangle9I679"
            className={styles['rectangle9']}
          />
        </div>
        <span className={styles['text']}>
          <span>CUSTOM TRACKING</span>
        </span>
        <div className={styles['group10']}>
          <span className={styles['text02']}>
            <span>
              <span>
                Your Phone will check on you and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Activate SOS if you don’t</span>
              <br></br>
              <span>mark yourself safe</span>
            </span>
          </span>
          <img
            src="/rectangle375045-h8zg-200h.png"
            alt="Rectangle375045"
            className={styles['rectangle37']}
          />
          <span className={styles['text09']}>
            <span>Cancel Check-in</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default IPhone1415ProMax9
