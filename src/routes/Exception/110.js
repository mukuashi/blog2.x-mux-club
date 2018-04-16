/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 捕捉渲染error => error
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2018-03-05 16:00:27
 * @version 0.1 | 2018-03-05 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-04-16 21:18:21
*/
import React, { PureComponent } from 'react';
import Exception from 'components/Exception';

export default class ErrorPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    return (
      !hasError ? <Exception type="110" style={{}} /> : ''
    );
  }
}
