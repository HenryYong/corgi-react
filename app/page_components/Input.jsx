/**
 *  Input Doc
 *  Created @ 2017-08-22 00:57:06
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import DocTitle from 'doc_components/DocTitle'
import Usage from 'doc_components/Usage'
import Config from 'doc_components/ConfigTable'
import { Input } from 'packages'

class PageInput extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            attrs: [
                {
                    props: 'mode',
                    desc: '组件的类型，input框或textarea',
                    type: 'String',
                    available: 'input/textarea',
                    defaultValue: 'input'
                },
                {
                    props: 'size',
                    desc: '组件的大小',
                    type: 'String',
                    available: 'xs/s/l/xl',
                    defaultValue: '——'
                },
                {
                    props: 'icon',
                    desc: 'input框内的图标',
                    type: 'String',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'iconFloat',
                    desc: 'input框内图标出现的位置',
                    type: 'String',
                    available: 'left/right',
                    defaultValue: 'right'
                },
                {
                    props: 'icon',
                    desc: 'input框内的图标',
                    type: 'String',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'rows',
                    desc: 'textarea框的初始行数',
                    type: 'Number',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'col',
                    desc: 'textarea框的初始列数',
                    type: 'Number',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'setSize',
                    desc: '设置textarea是否高度自适应',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'preaddon',
                    desc: 'input框内的前置内容，可以传入JSX',
                    type: 'String/Number/Object',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'postaddon',
                    desc: 'input框内的后置内容，可以传入JSX',
                    type: 'String/Number/Object',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'type',
                    desc: 'input框的原生属性',
                    type: 'String',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'placeholder',
                    desc: '原生属性',
                    type: 'String',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'max',
                    desc: 'input框的原生属性',
                    type: 'Number',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'min',
                    desc: 'input框的原生属性',
                    type: 'Number',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'step',
                    desc: 'input框的原生属性',
                    type: 'Number',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'readOnly',
                    desc: '原生属性',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'name',
                    desc: '原生属性',
                    type: 'String/Number',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'disabled',
                    desc: '是否禁用组件',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'value',
                    desc: '当前显示的值',
                    type: 'String/Number',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'maxLength',
                    desc: 'input框内容的最长长度',
                    type: 'Number',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'minLength',
                    desc: 'input框内容的最小长度',
                    type: 'Number',
                    available: '——',
                    defaultValue: '——'
                }
            ],
            events: [
                {
                    name: 'onChange',
                    desc: '改变值时的回调函数',
                    cbvar: '1、当前输入的值。2、输入后输入框/文本框中的值'
                },
                {
                    name: 'onFocus',
                    desc: '组件获得焦点时的回调函数',
                    cbvar: '当前事件'
                },
                {
                    name: 'onBlur',
                    desc: '组件失去焦点时的回调函数',
                    cbvar: '当前事件'
                }
            ]
        }
    }

    render () {
        return <section className="input-wrapper">
                    <DocTitle
                        title='输入框'
                        subtitle='不同类型的文本输入框'
                    />
                    <Usage
                        title='基础用法'
                        description='普通的输入框'
                        demo={
                            <div className="demo-code-row">
                                <Input />
                            </div>
                        }
                        code="render () {
                                    return <Input/>
                                }"
                        explain='不用任何参数即可生成一个简单的输入框实例'
                    />

                    <Usage
                        title='禁用状态'
                        demo={
                            <div className="demo-code-row">
                                <Input disabled={ true }/>
                            </div>
                        }
                        code="render () {
                                    return <Input disabled={ true }/>
                                }"
                        explain='配置disabled参数来禁用组件'
                    />

                    <Usage
                        title='内置icon的输入框'
                        demo={
                            <div className="demo-code-row">
                                <Input icon='check' iconFloat='left'/>
                                <Input icon='delete' iconFloat='right'/>
                            </div>
                        }
                        code="render () {
                                    return <div>
                                                <Input icon='check' iconFloat='left'/>
                                                <Input icon='delete' iconFloat='right'/>
                                            </div>
                                }"
                        explain='配置icon参数可添加图标，配置iconFloat参数可控制图标出现的位置'
                    />

                    <Usage
                        title='有附加内容的输入框'
                        description='带有前置或后置内容，一般是标签或按钮'
                        demo={
                            <div className="demo-code-row">
                                <Input preaddon='$'/>
                                <Input postaddon='个'/>
                                <Input preaddon='http://' postaddon='.com'/>
                            </div>
                        }
                        code="render () {
                                    return <div>
                                                <Input preaddon='$'/>
                                                <Input postaddon='个'/>
                                                <Input preaddon='http://' postaddon='.com'/>
                                            </div>
                                }"
                        explain='配置preaddon或postaddon即可，同时也支持传入JSX'
                    />

                    <Usage
                        title='不同尺寸'
                        demo={
                            <div className="demo-code-row size">
                                <Input size='large'/>
                                <Input/>
                                <Input size='small'/>
                                <Input size='mini'/>
                            </div>
                        }
                        code="render () {
                                    return <div>
                                                <Input size='large'/>
                                                <Input/>
                                                <Input size='small'/>
                                                <Input size='mini'/>
                                            </div>
                                }"
                        explain='配置size即可获得不同大小的输入框'
                    />

                    <Usage
                        title='多行文本'
                        demo={
                            <div className="demo-code-row basic-textarea">
                                <Input mode='textarea'/>
                            </div>
                        }
                        code="render () {
                                    return <Input mode='textarea'/>
                                }"
                        explain='配置mode为textarea'
                    />

                    <Usage
                        title='自定义初始行数'
                        demo={
                            <div className="demo-code-row basic-textarea">
                                <Input mode='textarea' rows={1}/>
                            </div>
                        }
                        code="render () {
                                    return <Input mode='textarea' rows={1}/>
                                }"
                        explain='配置rows参数即可'
                    />

                    <Usage
                        title='自适应高度的文本框'
                        demo={
                            <div className="demo-code-row basic-textarea">
                                <Input mode='textarea' autoSize={true}/>
                            </div>
                        }
                        code="render () {
                                    return <Input mode='textarea' autoSize={true}/>
                                }"
                        explain='配置autoSize为true，可以使文本框根据输入行数自适应高度'
                    />

                    <Usage
                        title='有状态的输入框'
                        demo={
                            <div className="demo-code-row">
                                <Input status='primary' />
                                <Input status='info' />
                                <Input status='warning' />
                                <Input status='success' />
                                <Input status='error' />
                                <Input status='#123456' />
                            </div>
                        }
                        code="render () {
                                    return <Input mode='textarea' autoSize={true}/>
                                }"
                        explain='配置autoSize为true，可以使文本框根据输入行数自适应高度'
                    />

                    <Config type='attr'
                        title='Input'
                        data={ this.state.attrs }
                    />

                    <Config type='event'
                        title='Input'
                        data={ this.state.events }
                    />
                </section>
    }
}

export default PageInput
