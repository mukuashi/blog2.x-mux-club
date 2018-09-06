import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Content4 from './components/Content4';
import './index.scss';

class Home extends PureComponent {
  render() {
    const { ismobile } = this.props;
    return (
      <article className="home-content-list">
        <Content1 id="content1" />
        <Content2 id="content2" ismobile={ismobile.toString()} />
        <Content3 id="content3" />
        <Content4 id="content4" ismobile={ismobile.toString()} />
      </article>
    );
  }
}

export default connect(({ global }) => ({
  ismobile: global.ismobile,
}))(Home);