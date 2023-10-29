import React from 'react'

import styles from './i-phone1415-pro-max8.module.css'

const IPhone1415ProMax8 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['i-phone1415-pro-max8']}>
        <img
          src="/rectangle65042-835k-200h.png"
          alt="Rectangle65042"
          className={styles['rectangle6']}
        />
        <div className={styles['group4']}>
          <img
            src="/rectangle7i607-04bk-200h.png"
            alt="Rectangle7I607"
            className={styles['rectangle7']}
          />
          <img
            src="/rectangle8i607-kgg-200h.png"
            alt="Rectangle8I607"
            className={styles['rectangle8']}
          />
          <img
            src="/rectangle9i607-68yc-200h.png"
            alt="Rectangle9I607"
            className={styles['rectangle9']}
          />
        </div>
        <span className={styles['text']}>
          <span>CUSTOM TRACKING</span>
        </span>
        <div className={styles['group9']}>
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
            src="/rectangle375044-2zq-200h.png"
            alt="Rectangle375044"
            className={styles['rectangle37']}
          />
          <span className={styles['text09']}>
            <span>Set Check-in Time</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default IPhone1415ProMax8
