import React, { PureComponent } from 'react';
import Content1 from './components/Content1';
// import Content2 from './components/Content2';
// import Content3 from './components/Content3';
// import Content4 from './components/Content4';
// import Content5 from './components/Content5';
// import Content6 from './components/Content6';
import './index.scss';

export default class Home extends PureComponent {
  static propTypes = {
  };
  static defaultProps = {
  };
  render() {
    return (
      <article className="home-content-list">
        <Content1 />
      </article>
    );
  }
}