/**
 *  Button Doc
 *  Created @ 2017-08-01 23:02:20
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import DocTitle from 'doc_components/DocTitle'
import Usage from 'doc_components/Usage'
import Config from 'doc_components/ConfigTable'
import { Button } from 'packages'

class PageButton extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            attrs: [
                {
                    props: 'type',
                    desc: '按钮的样式类型',
                    type: 'String',
                    available: 'default/text/status',
                    defaultValue: 'default'
                },
                {
                    props: 'theme',
                    desc: '按钮的主题色',
                    type: 'String',
                    available: 'primary/info/success/warning/error/颜色的十六进制值',
                    defaultValue: 'primary'
                },
                {
                    props: 'size',
                    desc: '按钮的大小',
                    type: 'String',
                    available: 'xs/s/l/xl',
                    defaultValue: '——'
                },
                {
                    props: 'loading',
                    desc: '按钮是否处在加载状态',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'disabled',
                    desc: '按钮是否被禁用',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'icon',
                    desc: '按钮的图标，参考Corgi图标',
                    type: 'String',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'originType',
                    desc: '按钮的原生类型',
                    type: 'String',
                    available: 'submit/button',
                    defaultValue: 'button'
                }
            ],
            events: [
                {
                    name: 'onClicked',
                    desc: '按钮的点击事件',
                    cbvar: '——'
                }
            ]
        }
    }

    render () {
        return <section className="button-wrapper">
                    <DocTitle
                        title='按钮'
                        subtitle='常用的公用按钮组件'
                    />
                    <Usage
                        title='基础用法'
                        description='使用默认配置的基础用法'
                        demo={
                            <div className="demo-code-row">
                                <Button>基础按钮</Button>
                            </div>
                        }
                        code="render () {
                            return <Button>基础按钮</Button>
                        }"
                        explain='可以在不传任何参数的情况下生成一个组件实例'
                    />

                    <Usage
                        title='不同类型'
                        description='多种类型的按钮实例'
                        demo={
                            <div className="demo-code-row">
                                <Button type='status'>主题色按钮</Button>
                                <Button type='text'>文字按钮</Button>
                            </div>
                        }
                        code="render () {
                            return <div className='demo-code-row'>
                                        <Button type='status'>主题色按钮</Button>
                                        <Button type='text'>文字按钮</Button>
                                    </div>
                        }"
                        explain='通过配置type参数实现不同的按钮类型'
                    />

                    <Usage
                        title='不同状态'
                        description='多种内置状态的按钮实例'
                        demo={
                            <section>
                                <div className="demo-code-row">
                                    <Button type='status'>主题色按钮</Button>
                                    <Button type='status' theme='info'>信息按钮</Button>
                                    <Button type='status' theme='success'>成功按钮</Button>
                                    <Button type='status' theme='warning'>警告按钮</Button>
                                    <Button type='status' theme='error'>错误按钮</Button>
                                </div>
                                <div className="demo-code-row">
                                    <Button theme='primary'>主题色按钮</Button>
                                    <Button theme='info'>信息按钮</Button>
                                    <Button theme='success'>成功按钮</Button>
                                    <Button theme='warning'>警告按钮</Button>
                                    <Button theme='error'>错误按钮</Button>
                                </div>
                                <div className="demo-code-row">
                                    <Button type='status' theme='#ff6f39'>自定义主题色</Button>
                                    <Button theme='#ff6f39'>自定义主题色</Button>
                                    <Button type='text' theme='#ff6f39'>自定义主题色</Button>
                                </div>
                            </section>
                        }
                        code="render () {
                            return <div>
                                        <Button type='status'>主题色按钮</Button>
                                        <Button type='status' theme='info'>信息按钮</Button>
                                        <Button type='status' theme='success'>成功按钮</Button>
                                        <Button type='status' theme='warning'>警告按钮</Button>
                                        <Button type='status' theme='error'>错误按钮</Button>
                                        <Button theme='primary'>主题色按钮</Button>
                                        <Button theme='info'>信息按钮</Button>
                                        <Button theme='success'>成功按钮</Button>
                                        <Button theme='warning'>警告按钮</Button>
                                        <Button theme='error'>错误按钮</Button>
                                    </div>
                        }"
                        explain='通过配置type和theme参数实现不同的状态按钮'
                    />

                    <Usage
                        title='不同尺寸'
                        description='多种尺寸的按钮以适应不同大小的页面需求'
                        demo={
                            <div className="demo-code-row">
                                <Button type='status' theme='primary' size='xs'>xs号按钮</Button>
                                <Button type='status' theme='primary' size='s'>s号按钮</Button>
                                <Button type='status' theme='primary'>正常按钮</Button>
                                <Button type='status' theme='primary' size='l'>l号按钮</Button>
                                <Button type='status' theme='primary' size='xl'>xl号按钮</Button>
                            </div>

                        }
                        code="render () {
                            return <div>
                                        <Button type='status' theme='primary' size='xs'>xs号按钮</Button>
                                        <Button type='status' theme='primary' size='s'>s号按钮</Button>
                                        <Button type='status' theme='primary'>正常按钮</Button>
                                        <Button type='status' theme='primary' size='l'>l号按钮</Button>
                                        <Button type='status' theme='primary' size='xl'>xl号按钮</Button>
                                    </div>
                        }"
                        explain='通过配置size参数实现不同尺寸的按钮实例'
                    />

                    <Usage
                        title='加载状态'
                        description='加载中的按钮'
                        demo={
                            <div className="demo-code-row">
                                <Button loading={ true } type='status' theme='primary'>表单提交中</Button>
                            </div>
                        }
                        code="render () {
                            return <Button loading={ true } type='status' theme='primary'>表单提交中</Button>
                        }"
                        explain='通过配置loading参数实现'
                    />

                    <Usage
                        title='禁用状态'
                        description='按钮当前不可用'
                        demo={
                            <div className="demo-code-row">
                                <Button disabled={ true }>禁用按钮</Button>
                                <Button disabled={ true } type='status' theme='success'>禁用按钮</Button>
                                <Button disabled={ true } type='text'>禁用按钮</Button>
                            </div>
                        }
                        code="render () {
                            return <div>
                                        <Button disabled={ true }>禁用按钮</Button>
                                        <Button disabled={ true } type='status' theme='#dcb345'>禁用按钮</Button>
                                        <Button disabled={ true } type='text'>禁用按钮</Button>
                                    </div>
                        }"
                        explain='通过配置disabled参数实现'
                    />

                    <Usage
                        title='按钮图标'
                        description='添加图标更清楚地表达出按钮的含义'
                        demo={
                            <section>
                                <div className="demo-code-row">
                                    <Button type='status' theme='error' icon='delete'>删除</Button>
                                    <Button type='status' theme='success' icon='check'>完成</Button>
                                    <Button type='status' theme='primary' icon='share'>分享</Button>
                                </div>
                                <div className="demo-code-row">
                                    <Button type='status' theme='error' icon='delete'></Button>
                                    <Button type='status' theme='success' icon='check'></Button>
                                    <Button type='status' theme='primary' icon='share'></Button>
                                </div>
                            </section>
                        }
                        code="render () {
                            return <div>
                                        <Button type='status' theme='error' icon='delete'>删除</Button>
                                        <Button type='status' theme='success' icon='check'>完成</Button>
                                        <Button type='status' theme='primary' icon='share'>分享</Button>
                                        <Button type='status' theme='error' icon='delete'></Button>
                                        <Button type='status' theme='success' icon='check'></Button>
                                        <Button type='status' theme='primary' icon='share'></Button>
                                    </div>
                        }"
                        explain='通过配置icon参数可以获得带图标的按钮；若受限于页面大小，也可以不传文字，获得仅有图标的按钮'
                    />

                    <Usage
                        title='按钮组'
                        description='可用于一组操作'
                        demo={
                            <section>
                                <div className="demo-code-row">
                                    <Button.Group>
                                        <Button type='status' theme='primary'>新建</Button>
                                        <Button type='status' theme='primary'>编辑</Button>
                                        <Button type='status' theme='primary'>历史</Button>
                                    </Button.Group>
                                </div>
                                <div className="demo-code-row">
                                    <Button.Group>
                                        <Button type='status' theme='#ff6f39' icon='edit'></Button>
                                        <Button type='status' theme='#ff6f39' icon='upload'></Button>
                                        <Button type='status' theme='#ff6f39' icon='delete'></Button>
                                    </Button.Group>
                                </div>
                            </section>
                        }
                        code="render () {
                            return <div>
                                        <Button.Group>
                                            <Button type='status' theme='primary'>新建</Button>
                                            <Button type='status' theme='primary'>编辑</Button>
                                            <Button type='status' theme='primary'>历史</Button>
                                        </Button.Group>
                                        <Button.Group>
                                            <Button type='status' theme='#ff6f39' icon='edit'></Button>
                                            <Button type='status' theme='#ff6f39' icon='upload'></Button>
                                            <Button type='status' theme='#ff6f39' icon='delete'></Button>
                                        </Button.Group>
                                    </div>
                        }"
                        explain='使用Button.Group生成一组同类型的按钮'
                    />

                    <Config type='attr'
                        title='Button'
                        data={ this.state.attrs }
                    />

                    <Config type='event'
                        title='Button'
                        data={ this.state.events }
                    />
                </section>
    }
}

export default PageButton
