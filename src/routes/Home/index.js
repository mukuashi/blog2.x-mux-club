import React, { PureComponent } from 'react';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import './index.scss';

export default class Home extends PureComponent {
  render() {
    const { isMobile } = this.props;
    return (
      <article className="home-content-list">
        <Content1 id="content1" />
        <Content2 id="content2" isMobile={isMobile} />
        <Content3 id="content3" />
      </article>
    );
  }
}