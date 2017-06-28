import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import TweenOne from 'rc-tween-one';
import { Menu, Icon, Popover } from 'antd';

const Item = Menu.Item;
const SubMenu = Menu.SubMenu;

const styles = {
    avatarSet: {
      color: 'rgba(108, 93, 231, 0.89)',
      fontSize: '0.85rem'
    }
}

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
    const contactAuthor = (
      <div>
        <p>
          <img title="微信平台" src="http://kquanr.com/arts/images/photoartlife.jpg" width="140px"/>
          <img title="作者微信" src="http://kquanr.com/arts/images/private-wechat.jpg" width="140px"/>
        </p>
      </div>
    );
    const navData = {
      menu1: 'http://kquanr.com/arts|代码篇(2016年之前)',
      menu2: 'http://kquanr.com/project|背景篇',
      menu3: 'http://photoartlife.lofter.com|摄影篇',
      menu4: 'http://kquanr.com/project/works/|文患篇'
    };
    const navChildren = Object.keys(navData).map((key, i) => (
      <Item key={i}>
        <a href={navData[key].split('|')[0]} target="_blank">
            {navData[key].split('|')[1]}
        </a>
    </Item>));
    const userTitle = (<div>
      <span className="img">
        <img
          src="http://kquanr.com/images/now1.png"
          width="36"
          height="36"
        />
      </span>
      <span>Mich</span>
    </div>);
    navChildren.push((<Item className="help" key="help">
        <Popover content={contactAuthor} title="微信公共平台 + 约片投稿微信 >>> 技术交流等" trigger="hover" placement="bottom" arrowPointAtCenter>
          <i className="micon micon-wechat micon-1x-md"></i>
          <span>联系作者</span>
        </Popover>
      </Item>),
      (<SubMenu className="user" title={userTitle} key="user">
        <Item key="a">用户：mukuashi</Item>
        <Item key="b">
          <a href="http://t.cn/Rt1xb42" target="_blank" style={styles.avatarSet}>微信专栏</a>
        </Item>
        <Item key="c">
          <a href="http://kquanr.com" style={styles.avatarSet}>回到旧版</a>
        </Item>
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