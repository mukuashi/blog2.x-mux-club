import React, { PureComponent } from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import Iconfont from "@/components/Iconfont";
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import app from '@/locales/zh-CN';

const { text, block } = app.content3;
const { TabPane } = Tabs;

export default class Content3 extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: 'content3',
    };

    state = {
        numberLine: 4,
    };

    onChange = (key) => {
        this.setState({
            numberLine: parseInt(key, 10),
        })
    }

    getBlockChildren = (item, i) => {
        const { tab, img, body } = item;
        const { className } = this.props;
        const { numberLine } = this.state;
        return (
            <TabPane
                key={i}
                tab={(
                    <span className={`${className}-tag`}>
                        <Iconfont type={tab.icon} />
                        {tab.tag}
                    </span>
                )}
            >
                <TweenOne.TweenOneGroup
                    enter={{ y: 30, delay: 300, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
                    leave={null}
                    component=""
                >
                    {
                        numberLine === i && (
                            <div key="content">
                                <div className={`${className}-img`}>
                                    <img alt="article-img" src={img} />
                                </div>
                                <div
                                    className={`${className}-text`}
                                    dangerouslySetInnerHTML={{ __html: body }}
                                />
                            </div>)
                    }
                </TweenOne.TweenOneGroup>
            </TabPane>
        );
    };

    render() {
        const props = { ...this.props };
        const { numberLine } = this.state;
        const tabsChildren = block.map(this.getBlockChildren);
        return (
            <section {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
                <OverPack
                    location={props.id}
                    className={`content-template ${props.className}`}
                >
                    <TweenOne
                        key="a"
                        animation={{ y: '+=30', opacity: 0, type: 'from' }}
                        component="h1"
                        reverseDelay={200}
                    >
                        {text.title}
                    </TweenOne>
                    <TweenOne
                        key="b"
                        animation={{ y: '+=30', opacity: 0, type: 'from', delay: 100 }}
                        component="p"
                        reverseDelay={100}
                    >
                        {text.subtitle}
                    </TweenOne>
                    <TweenOne.TweenOneGroup
                        key="c"
                        enter={{ y: 30, opacity: 0, delay: 200, type: 'from' }}
                        leave={{ y: 30, opacity: 0 }}
                        className={`${props.className}-tabs`}
                    >
                        <Tabs
                            key="d"
                            onChange={this.onChange}
                            activeKey={`${numberLine}`}
                        >
                            {tabsChildren}
                        </Tabs>
                    </TweenOne.TweenOneGroup>
                </OverPack>
            </section>
        );
    }
}