/**
 *  Radio Doc
 *  Created @ 2017-08-11 20:11:47
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import DocTitle from 'doc_components/DocTitle'
import Usage from 'doc_components/Usage'
import Config from 'doc_components/ConfigTable'
import { Radio } from 'packages'

class PageRadio extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            basicChecked: 1,
            disabledChecked: 1,
            groupValue: 'JavaScript',
            groupButtonValue: 'JavaScript',
            groupButtonDisabledValue: 'Java',
            RadioAttrs: [
                {
                    props: 'value',
                    desc: 'Radio的值，必选',
                    type: 'String/Number',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'isChecked',
                    desc: '当前Radio是否选中',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'disabled',
                    desc: '当前Radio是否禁用',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'name',
                    desc: '当前Radio的name值',
                    type: 'String/Number',
                    available: '——',
                    defaultValue: '——'
                }
            ],
            RadioButtonAttrs: [
                {
                    props: 'disabled',
                    desc: '当前Radio.Button是否被禁用',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'value',
                    desc: 'Radio.Button的值',
                    type: 'String/Number',
                    available: '——',
                    defaultValue: '——'
                }
            ],
            RadioGroupAttrs: [
                {
                    props: 'curValue',
                    desc: '当前Radio.Group被选中的值',
                    type: 'String/Number',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'disabled',
                    desc: 'Radio.Group是否被禁用',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'size',
                    desc: 'Radio.Group的大小',
                    type: 'String',
                    available: 'xs/s/x/xl',
                    defaultValue: '——'
                }
            ],
            RadioEvents: [
                {
                    name: 'onChanged',
                    desc: '状态改变后的回调函数',
                    cbvar: '下一个选中的元素的value'
                }
            ],
            RadioGroupEvents: [
                {
                    name: 'onChanged',
                    desc: '一组Radio中每个Radio被点击后的回调函数，该方法会覆盖单个Radio的onChanged方法',
                    cbvar: '下一个选中的元素的value'
                }
            ]
        }
    }

    basicChange (value) {
        this.setState({
            basicChecked: value
        })
    }

    groupChange (value) {
        this.setState({
            groupValue: value
        })
    }

    groupButtonChange (value) {
        this.setState({
            groupButtonValue: value
        })
    }

    render () {
        return <section className="radio-wrapper">
                    <DocTitle
                        title='单选框'
                        subtitle='一组选项中仅可选择一个'
                    />

                    <Usage
                        title='基础用法'
                        description='一组默认初始化的组件实例'
                        demo={
                            <div className="demo-code-row">
                                <Radio
                                    value={ 1 }
                                    isChecked={ this.state.basicChecked === 1 }
                                    onChanged={ this.basicChange.bind(this) }>
                                    正确
                                </Radio>
                                <Radio
                                    value={ 2 }
                                    isChecked={ this.state.basicChecked === 2 }
                                    onChanged={ this.basicChange.bind(this) }>
                                    错误
                                </Radio>
                            </div>
                        }
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
                                        basicChecked: 1
                                    }
                                }

                                basicChange () {
                                    this.setState({
                                        basicChecked: value
                                    })
                                }

                                render () {
                                    return <div>
                                        <Radio
                                            value={ 1 }
                                            isChecked={ this.state.basicChecked === 1 }
                                            onChanged={ this.basicChange.bind(this) }>
                                            正确
                                        </Radio>
                                        <Radio
                                            value={ 2 }
                                            isChecked={ this.state.basicChecked === 2 }
                                            onChanged={ this.basicChange.bind(this) }>
                                            错误
                                        </Radio>
                                    </div>
                                }"
                        explain='需配置value、isChecked和onChanged回调函数'
                    />

                    <Usage
                        title='禁用状态'
                        description='当前组件不可用'
                        demo={
                            <div className="demo-code-row">
                                <Radio
                                    value={ 1 }
                                    disabled={ true }
                                    isChecked={ this.state.disabledChecked === 1 }>
                                    正确
                                </Radio>
                                <Radio
                                    value={ 2 }
                                    disabled={ true }
                                    isChecked={ this.state.disabledChecked === 2 }>
                                    错误
                                </Radio>
                            </div>
                        }
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
                                        disabledChecked: 1
                                    }
                                }

                                render () {
                                    return <div>
                                        <Radio
                                            value={ 1 }
                                            disabled={ true }
                                            isChecked={ this.state.disabledChecked === 1 }>
                                            正确
                                        </Radio>
                                        <Radio
                                            value={ 2 }
                                            disabled={ true }
                                            isChecked={ this.state.disabledChecked === 2 }>
                                            错误
                                        </Radio>
                                    </div>
                                }"
                        explain='配置disabled为true即可'
                    />

                    <Usage
                        title='单选框组'
                        description='根据需求配置一组同类型的单选选项'
                        demo={
                            <div className="demo-code-row">
                                <Radio.Group
                                    curValue={ this.state.groupValue }
                                    onChanged={ this.groupChange.bind(this) }>
                                    <Radio
                                        value='JavaScript'>
                                        JavaScript
                                    </Radio>
                                    <Radio
                                        value='Java'>
                                        Java
                                    </Radio>
                                    <Radio
                                        value='C++'>
                                        C++
                                    </Radio>
                                </Radio.Group>
                            </div>
                        }
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
                                        groupValue: 'JavaScript'
                                    }
                                }

                                groupChange (val) {
                                    this.setState({
                                        groupValue: val
                                    })
                                }

                                render () {
                                    return <div>
                                                <Radio.Group
                                                    curValue={ this.state.groupValue }
                                                    onChanged={ this.groupChange.bind(this) }>
                                                    <Radio
                                                        value='JavaScript'>
                                                        JavaScript
                                                    </Radio>
                                                    <Radio
                                                        value='Java'>
                                                        Java
                                                    </Radio>
                                                    <Radio
                                                        value='C++'>
                                                        C++
                                                    </Radio>
                                                </Radio.Group>
                                            </div>
                                }"
                        explain='用<Radio.Group>配置一组选项，curValue为当前选中的选项的值'
                    />

                    <Usage
                        title='单选按钮组'
                        description='根据需求配置一组同类型的按钮样式的单选选项'
                        demo={
                            <div className="demo-code-row">
                                <Radio.Group
                                    curValue={ this.state.groupButtonValue }
                                    onChanged={ this.groupButtonChange.bind(this) }>
                                    <Radio.Button
                                        value='JavaScript'/>
                                    <Radio.Button
                                        value='Java'/>
                                    <Radio.Button
                                        value='C++'/>
                                </Radio.Group>
                            </div>
                        }
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
                                        groupButtonValue: 'JavaScript'
                                    }
                                }

                                groupButtonChange (val) {
                                    this.setState({
                                        groupButtonValue: val
                                    })
                                }

                                render () {
                                    return <div>
                                                <Radio.Group
                                                    curValue={ this.state.groupButtonValue }
                                                    onChanged={ this.groupButtonChange.bind(this) }>
                                                    <Radio.Button
                                                        value='JavaScript'/>
                                                    <Radio.Button
                                                        value='Java'/>
                                                    <Radio.Button
                                                        value='C++'/>
                                                </Radio.Group>
                                            </div>
                                }"
                        explain='用<Radio.Group>配置一组选项，curValue为当前选中的选项的值'
                    />

                    <Usage
                        title='禁用组'
                        description='禁用整组Radio.Group'
                        demo={
                            <div className="demo-code-row">
                                <Radio.Group
                                    curValue={ this.state.groupButtonDisabledValue }
                                    disabled={true}>
                                    <Radio.Button
                                        value='JavaScript'/>
                                    <Radio.Button
                                        value='Java'/>
                                    <Radio.Button
                                        value='C++'/>
                                </Radio.Group>
                            </div>
                        }
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
                                        groupButtonValue: 'Java'
                                    }
                                }

                                render () {
                                    return <Radio.Group
                                                curValue={ this.state.groupButtonValue }
                                                disabled={true}>
                                                <Radio.Button
                                                    value='JavaScript'/>
                                                <Radio.Button
                                                    value='Java'/>
                                                <Radio.Button
                                                    value='C++'/>
                                            </Radio.Group>
                                }"
                        explain='配置Radio.Group的disabled参数可直接禁用所有Radio'
                    />

                    <Config type='attr'
                        title='Radio'
                        data={ this.state.RadioAttrs }
                    />

                    <Config type='events'
                        title='Radio'
                        data={ this.state.RadioEvents }
                    />

                    <Config type='attr'
                        title='Radio.Button'
                        data={ this.state.RadioButtonAttrs }
                    />

                    <Config type='attr'
                        title='Radio.Group'
                        data={ this.state.RadioGroupAttrs }
                    />

                    <Config type='events'
                        title='Radio.Group'
                        data={ this.state.RadioGroupEvents }
                    />
                </section>
    }
}

export default PageRadio
