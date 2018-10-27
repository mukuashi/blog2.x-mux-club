/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Footer
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-10-27 14:27:15
*/
import React, { PureComponent } from 'react';
import { Select, Skeleton, Button, Icon, notification, Tooltip, Card, Badge, BackTop } from 'antd';
// import router from 'umi/router';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Link from 'umi/link';
import Texty from 'rc-texty';
import Iconfont from "@/components/Iconfont";
import systemData from '@/locales/zh-CN';
import defaultSettings from '../../../config/settings.config';
import './index.scss';

const { logo, version, block, copyright, info } = systemData.footer;
const Option = Select.Option;

export default class GlobalFooter extends PureComponent {
  static defaultProps = {
    className: 'footer',
  };

  componentDidMount() {
    this.openNotification()
  }
  handleChangeVersion(value) {
    //fix umi router not refresh
    // router.push(value)
    window.location.href = value
  }

  // version notice
  openNotification = () => {
    const versionOptions = (
      <Select
        defaultValue={version.list[1].path}
        style={{ minWidth: 180 }}
        placeholder="请选择切换版本"
        optionFilterProp="children"
        onChange={this.handleChangeVersion}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {
          version.list.slice(0, 4).map(row => (
            <Option key={row.id} value={row.path}>{row.name}</Option>
          ))
        }
      </Select>
    )
    notification.open({
      message: 'Hey，欢迎访问 PhotoArtLife，3.x MUX VF-Studio近期也上线啦 ✨✈️',
      description: '当前版本：2.x，2017版（5秒后自动关闭），博客最后更新时间：2018年6月。',
      icon: <Icon type="smile" theme="filled" style={{ color: '#108ee9' }} />,
      duration: 6,
      btn: versionOptions,
    });
  }

  render() {
    const props = { ...this.props };
    return (
      <OverPack
        {...props}
        playScale="0.1"
      >
        <QueueAnim key="a" type="bottom" component="ul" leaveReverse>
          <li key="b">
            <p className="logo">
              {!logo.img && <Skeleton avatar />}
              <img src={logo.img} alt="footer-logo" />
            </p>
            <Texty type='scale' mode="smooth">{logo.content}</Texty>
            <Card title={version.title} bordered={false}>
              {
                version.list.map(row => (
                  <p key={row.id}>
                    <Badge status={row.status} />
                    {
                      row.path ? (row.path.includes(defaultSettings.version)
                        ? <Link to={row.path} className="actived">{row.name}</Link>
                        : <a href={row.path}>{row.name}</a>)
                        : <span>{row.name}</span>
                    }
                  </p>
                ))
              }
            </Card>
          </li>
          {
            block.map(row => (
              <li key={row.id}>
                <h2>{row.title}</h2>
                <ul>
                  {
                    row.content.map(second => (
                      <li key={second.id}>
                        <a href={second.path} target={second.target ? '_self' : '_blank'}>
                          {
                            second.icon
                              ? <Tooltip
                                title={second.name}
                                placement="top"
                              >
                                <Iconfont
                                  size="1x-bg"
                                  type={second.icon}
                                />
                              </Tooltip>
                              : second.name
                          }
                        </a>

                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </QueueAnim>

        <BackTop>
          <TweenOne
            key="c"
            animation={{ y: '-=28', yoyo: true, repeat: -1, duration: 1600 }}
            className="footer-up"
            style={{ bottom: 0 }}
          >
            <a>
              <Icon type="up-circle" theme="filled" />
            </a>
          </TweenOne>
        </BackTop>
        <TweenOne
          key="d"
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          className="copyright"
        >
          <Texty>
            {copyright.number}
          </Texty>
          <p>
            <a onClick={this.openNotification}>{info.version}</a>
            {copyright.reserved} | Referenced By
              <Link to="//reactjs.org" target="_blank"> Facebook React </Link>
            | Powered By
              <Link to="//photoartlife.lofter.com" target="_blank"> PhotoArtLife</Link>
          </p>
          <Texty delay={400} type='scaleBig' mode='reverse'>
            Design For Life By MUKUASHI | MUX VF-Studio
          </Texty>
          <Icon type="smile" theme="filled" style={{ color: '#52c41a', marginRight: '.6rem' }} />
          <Icon type="heart" theme="filled" style={{ color: '#f43e55' }} />
        </TweenOne>
      </OverPack>
    );
  }
}
