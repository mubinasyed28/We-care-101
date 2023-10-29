import React from 'react'

import styles from './frame40.module.css'

const Frame40 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['frame40']}>
        <span className={styles['text']}>
          <span>
            <span>After Confirming, an Alert notification</span>
            <br></br>
            <span>will be send to your Added Connections</span>
          </span>
        </span>
        <img
          src="/rectangle626710-n3wq-200h.png"
          alt="Rectangle626710"
          className={styles['rectangle62']}
        />
        <img
          src="/rectangle636710-712-200h.png"
          alt="Rectangle636710"
          className={styles['rectangle63']}
        />
        <img
          src="/line96710-kmub.svg"
          alt="Line96710"
          className={styles['line9']}
        />
        <img
          src="/line106710-v32.svg"
          alt="Line106710"
          className={styles['line10']}
        />
        <span className={styles['text5']}>
          <span>Cancel</span>
        </span>
        <span className={styles['text7']}>
          <span>Confirm</span>
        </span>
      </div>
    </div>
  )
}

export default Frame40