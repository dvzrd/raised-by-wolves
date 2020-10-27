import React from 'react';
import classNames from 'classnames';

import styles from "./Loader.module.scss";

export const Loader = ({ className }) => (
  <div className={classNames(styles.loader, className)}>
    <h1 className="text-6xl">L O A D I N G</h1>
  </div>
);
