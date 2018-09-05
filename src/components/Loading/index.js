import React from 'react';
import { Spin } from 'antd';
import styles from './index.scss';

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => (
  <div className={styles.homeLoading}>
    <Spin size="large" />
  </div>
);