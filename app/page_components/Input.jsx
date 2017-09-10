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
                    desc: 'input框的原生属性',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'defaultValue',
                    desc: '默认值',
                    type: 'Any',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'value',
                    desc: '当前显示的值',
                    type: 'Any',
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
                    cbvar: '当前输入的值'
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
                                <Input size='large'/>
                            </div>
                        }
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
