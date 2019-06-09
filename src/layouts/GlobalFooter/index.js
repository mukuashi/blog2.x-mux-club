/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Footer
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2019-06-09 15:59:07
*/
import React, { PureComponent } from 'react';
import { Select, Skeleton, Icon, notification, Tooltip, Card, Badge, BackTop } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Link from 'umi/link';
import Texty from 'rc-texty';
import Iconfont from "@/components/Iconfont";
import app from '@/locales/zh-CN';
import defaultSettings from '../../../config/settings.config';
import './index.scss';

const { logo, version, block, copyright, info } = app.footer;
const { Option } = Select;

export default class GlobalFooter extends PureComponent {
  static defaultProps = {
    className: 'footer',
  };

  componentDidMount() {
    this.openNotification()
  }

  handleToggleVersion = value => {
    if (value && value.includes('4.x')) {
      debugger
      notification.warning({
        duration: 6,
        placement: 'bottomLeft',
        message: '友情提示 🐿',
        description: '亲，4.x版本作者还在整理中，稍后就会开源哦，建议您先去浏览其他模块哈，比如我的摄影、设计作品啥的 . . . 欢迎来访！',
        icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
      })
    } else {
      window.location.href = value
    }
  }

  // version notice
  openNotification = () => {
    //
    const versionOptions = (
      <Select
        defaultValue={version.list[1].path}
        style={{ minWidth: 180 }}
        placeholder="请选择切换版本"
        optionFilterProp="children"
        onChange={(value) => this.handleToggleVersion(value)}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {
          version.list.slice(0, 4).map(row => (
            <Option
              key={row.id}
              value={row.path}
              disabled={row.path.includes('2.x')}
            >
              {row.name}
            </Option>
          ))
        }
      </Select>
    )
    //
    const text = (
      <div>
        <Badge status="processing" text="Hey，欢迎访问 PhotoArtLife。" />
        <br />
        <Badge status="success" text="MUX VF-Studio | 3.x也上线啦 😘" />
        <br />
        <Badge status="warning" text="当前版本：2.x，2017（5秒后自动关闭），博客最后更新时间：2018年6月。" />
      </div>
    )
    notification.open({
      message: text,
      description: '',
      icon: <Icon type="smile" theme="filled" style={{ color: '#108ee9' }} />,
      duration: 5,
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
                  <p key={row.id} onClick={() => this.handleToggleVersion(row.path)}>
                    <Badge status={row.status} />
                    {
                      row.path ? (
                        row.path.includes(defaultSettings.version)
                          ? <Link to={row.path} className="actived">{row.name}</Link>
                          : <a>{row.name}</a>
                      )
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
                        <a
                          href={second.path}
                          target={second.target ? '_self' : '_blank'}
                          rel="noopener noreferrer nofollow"
                        >
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
              <Link to="//reactjs.org" target="_blank" rel="noopener noreferrer nofollow"> Facebook React </Link>
            | Powered By
              <Link to="//photoartlife.lofter.com" target="_blank" rel="noopener noreferrer nofollow"> PhotoArtLife</Link>
          </p>
          <p>
            Design For Life By
            <Link to="../1.x/contact" target="_blank" rel="noopener noreferrer nofollow"> MUX VF-Studio</Link>
          </p>
          <Icon type="smile" theme="filled" style={{ color: '#52c41a', marginRight: '.6rem' }} />
          <Icon type="heart" theme="filled" style={{ color: '#f43e55' }} />
        </TweenOne>
      </OverPack>
    );
  }
}
