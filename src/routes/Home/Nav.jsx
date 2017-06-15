import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import TweenOne from 'rc-tween-one';
import { Menu, Icon } from 'antd';

const Item = Menu.Item;
const SubMenu = Menu.SubMenu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const navData = {
      menu1: 'http://kquanr.com/1|代码篇(2016年之前)',
      menu2: 'http://kquanr.com/2|背景篇',
      menu3: 'http://kquanr.com/3|摄影篇',
      menu4: 'http://kquanr.com/4|文患篇'
    };
    const navChildren = Object.keys(navData).map((key, i) => (<Item key={i}>
      <Link to={navData[key].split('|')[0]} target="_blank">{navData[key].split('|')[1]}</Link>
    </Item>));
    const userTitle = (<div>
      <span className="img">
        <img
          src="https://zos.alipayobjects.com/rmsportal/iXsgowFDTJtGpZM.png"
          width="30"
          height="30"
        />
      </span>
      <span>Mich</span>
    </div>);
    navChildren.push((<Item className="help" key="help">
        <Icon type="aliwangwang" />
        <span>联系</span>
      </Item>),
      (<SubMenu className="user" title={userTitle} key="user">
        <Item key="a">用户中心</Item>
        <Item key="b">修改密码</Item>
        <Item key="c">登出</Item>
      </SubMenu>));
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <img width="100%" src="http://kquanr.com/images/header_nav.png" />
      </TweenOne>
      {isMode ? (<div
          className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
          id={`${this.props.id}-menu`}
        >
          <div
            className={`${this.props.className}-phone-nav-bar`}
            onClick={() => {
              this.phoneClick();
            }}
          >
            <em />
            <em />
            <em />
          </div>
          <div
            className={`${this.props.className}-phone-nav-text`}
          >
            <Menu
              defaultSelectedKeys={['0']}
              mode="inline"
              theme="dark"
            >
              {navChildren}
            </Menu>
          </div>
        </div>) :
        <TweenOne
          animation={{ x: 30, delay: 100, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          className={`${this.props.className}-nav`}
        >
          <Menu
            mode="horizontal" defaultSelectedKeys={['0']}
            id={`${this.props.id}-menu`}
          >
            {navChildren}
          </Menu>
        </TweenOne>
      }
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  isMode: PropTypes.bool,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header1',
};

export default Header;