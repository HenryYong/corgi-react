/**
 *  Switch Doc
 *  Created @ 2017-09-08 18:59:55
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import DocTitle from 'doc_components/DocTitle'
import Usage from 'doc_components/Usage'
import Config from 'doc_components/ConfigTable'
import { Switch, Table } from 'packages'
import { Utils } from 'libs'

class PageSwitch extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            attrs: [
                {
                    props: 'status',
                    desc: '初始化时组件的状态',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'size',
                    desc: '可改变组件的大小',
                    type: 'String',
                    available: 'small',
                    defaultValue: '——'
                },
                {
                    props: 'shape',
                    desc: '可改变组件的形状',
                    type: 'String',
                    available: 'square',
                    defaultValue: '——'
                },
                {
                    props: 'hasText',
                    desc: '是否显示文本',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'true'
                },
                {
                    props: 'onText',
                    desc: '状态为开时的文本，接受字符串或JSX模板',
                    type: 'String/JSX',
                    available: '——',
                    defaultValue: 'ON'
                },
                {
                    props: 'offText',
                    desc: '状态为关时的文本，接受字符串或JSX模板',
                    type: 'String/JSX',
                    available: '——',
                    defaultValue: 'OFF'
                },
                {
                    props: 'onIcon',
                    desc: '状态为开时，设置图标；优先级高于onText',
                    type: 'String',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'offIcon',
                    desc: '状态为关时，设置图标；优先级高于offText',
                    type: 'String',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'onValue',
                    desc: '将组件状态改为开时，回调函数返回的值',
                    type: 'String/Number/Boolean',
                    available: '——',
                    defaultValue: 'true'
                },
                {
                    props: 'offValue',
                    desc: '将组件状态改为关时，回调函数返回的值',
                    type: 'String/Number/Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'onColor',
                    desc: '自定义状态为开时，组件的颜色',
                    type: 'String',
                    available: '——',
                    defaultValue: '#5bd18b'
                },
                {
                    props: 'offColor',
                    desc: '自定义状态为关时，组件的颜色',
                    type: 'String',
                    available: '——',
                    defaultValue: '#e6e6e6'
                }
            ],
            events: [
                {
                    name: 'onChanged',
                    desc: '状态改变后的回调函数',
                    cbvar: 'onValue/offValue'
                }
            ]
        }
    }

    render () {
        return <section className='switch-wrapper'>
                    <DocTitle
                        title='开关'
                        subtitle='两种状态的切换，多用于触发开/关'
                    />
                    <Usage
                        title='基础用法'
                        description='默认配置的开关'
                        demo={
                            <div className="demo-block">
                                <Switch/>
                            </div>
                        }
                        code="render () {
                            return <Switch/>
                        }"
                    />

                    <Usage
                        title='自定义尺寸'
                        demo={
                            <div className="demo-block">
                                <Switch/>
                                <Switch size='small'/>
                            </div>
                        }
                        code="render () {
                            return <Switch size='small'/>
                        }"
                        explain='配置size参数，可生成不同大小的开关实例'
                    />

                    <Usage
                        title='自定义形状'
                        demo={
                            <div className="demo-block">
                                <Switch shape='square'/>
                            </div>
                        }
                        code="render () {
                            return <Switch shape='square'/>
                        }"
                        explain='配置shape参数，可生成不同形状的开关实例'
                    />

                    <Usage
                        title='自定义填充'
                        demo={
                            <div className="demo-block">
                                <Switch hollow={true} status={true}/>
                            </div>
                        }
                        code="render () {
                            return <Switch hollow={true} status={true}/>
                        }"
                        explain='配置hollow参数，可选择是否镂空的开关实例'
                    />

                    <Usage
                        title='自定义背景色'
                        demo={
                            <div className="demo-block">
                                <Switch onColor='#57a3f1' offColor='#ff0000'/>
                            </div>
                        }
                        code="render () {
                            return <Switch onColor='#57a3f1' offColor='#ff0000'/>
                        }"
                        explain='配置onColor和offColor参数，设置不同状态的背景色'
                    />

                    <Usage
                        title='自定义内容'
                        demo={
                            <div className="demo-block">
                                <Switch onText='开' offText='关' status={true}/>
                            </div>
                        }
                        code="render () {
                            return <Switch onText='开' offText='关' status={true}/>
                        }"
                        explain='配置onText和offTex参数，设置不同状态的文字'
                    />

                    <Config type='attr'
                        title='Switch'
                        data={ this.state.attrs }
                    />

                    <Config type='event'
                        title='Switch'
                        data={ this.state.events }
                    />
                </section>
    }
}

export default PageSwitch
