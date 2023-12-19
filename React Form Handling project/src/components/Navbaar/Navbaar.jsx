import React from 'react';
import styles from './Navbaar.module.css'

const Navbaar = () => {
  return (
    <div className={styles.navigation}>
      <div className="logo">
        <img src="./public/images/Frame 2 1.png" alt="logo" />
      </div>
      <div className={styles.menuList}>
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbaar;
