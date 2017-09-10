/**
 *  Checkbox Doc
 *  Created @ 2017-08-11 19:43:11
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import DocTitle from 'doc_components/DocTitle'
import Usage from 'doc_components/Usage'
import Config from 'doc_components/ConfigTable'
import { Checkbox } from 'packages'

class PageCheckbox extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            isIndeterminate: false,
            indeterminateChecked: false,
            arr: [
                {
                    value: 'JavaScript',
                    checked: false
                },
                {
                    value: 'Java',
                    checked: false
                },
                {
                    value: 'C++',
                    checked: false
                },
                {
                    value: 'C',
                    checked: false
                }
            ],
            checkboxAttrs: [
                {
                    props: 'isChecked',
                    desc: '当前组件是否已勾选',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'disabled',
                    desc: '当前组件是否被禁用',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'indeterminate',
                    desc: '当前组件是否显示为部分选中',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                }
            ],
            checkboxEvents: [
                {
                    name: 'onChecked',
                    desc: '勾选状态变化时调用的回调函数',
                    cbvar: '组件状态变化后的状态值'
                }
            ],
            checkboxGroupAttrs: [
                {
                    props: 'max',
                    desc: 'checkbox组最多可选中的个数',
                    type: 'Number',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'min',
                    desc: 'checkbox组最少需要被选中的个数',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: '——'
                }
            ]
        }
    }

    // check all
    indeterminateChecked (checked) {
        let tmpArr = []

        for (let $arr of this.state.arr) {
            tmpArr.push({
                value: $arr.value,
                checked: checked
            })
        }

        this.setState({
            arr: tmpArr,
            indeterminateChecked: checked,
            isIndeterminate: false
        })
    }

    // callback function of item under indeterminate status demo
    indeterminateItemChecked (index, checked) {
        let arr = this.state.arr
        let tmpArr = []
        let count = 0

        arr.map(($arr, $index) => {
            let obj = {}

            if (index === $index) {
                obj.checked = checked
            } else {
                obj.checked = $arr.checked
            }

            obj.checked ? count++ : ''
            obj.value = $arr.value
            tmpArr.push(obj)
        })

        this.setState({
            arr: tmpArr,
            indeterminateChecked: count === arr.length,
            isIndeterminate: count > 0 && count < arr.length
        })
    }

    render () {
        return <section className="checkbox-wrapper">
                    <DocTitle
                        title='多选框'
                        subtitle='可选择多个选项'
                    />

                    <Usage
                        title='基础用法'
                        description='单个使用时可表示状态切换'
                        demo={
                            <div className="demo-code-row">
                                <Checkbox>同意注册协议</Checkbox>
                            </div>
                        }
                        code="render () {
                                    return <Checkbox>同意注册协议</Checkbox>
                                }"
                        explain='直接使用标签即可初始化一个表示状态切换的选框'
                    />

                    <Usage
                        title='禁用状态'
                        description='当前组件不可用'
                        demo={
                            <div className="demo-code-row">
                                <Checkbox disabled={ true }>同意注册协议</Checkbox>
                            </div>
                        }
                        code="render () {
                                    return <Checkbox disabled={ true }>同意注册协议</Checkbox>
                                }"
                        explain='配置disabled参数为true即可'
                    />

                    <Usage
                        title='多选框组'
                        description='根据需求配置一组同类型的单选选项'
                        demo={
                            <div className="demo-code-row">
                                <Checkbox.Group>
                                    <Checkbox isChecked={ true }>JavaScript</Checkbox>
                                    <Checkbox>Java</Checkbox>
                                    <Checkbox>C++</Checkbox>
                                    <Checkbox disabled={ true }>C</Checkbox>
                                </Checkbox.Group>
                            </div>
                        }
                        code="render () {
                                    return <Checkbox.Group>
                                                <Checkbox isChecked={ true }>JavaScript</Checkbox>
                                                <Checkbox>Java</Checkbox>
                                                <Checkbox>C++</Checkbox>
                                                <Checkbox disabled={ true }>C</Checkbox>
                                            </Checkbox.Group>
                                }"
                        explain='将一组checkbox当做Checkbox.Group的子组件传入，即可得到一组同类的选框'
                    />

                    <Usage
                        title='部分勾选状态'
                        description='多用于全选的情况下，在部分选项勾选的时候显示'
                        demo={
                            <section>
                                <div className="demo-code-row">
                                    <Checkbox
                                        isChecked={ this.state.indeterminateChecked }
                                        indeterminate={ this.state.isIndeterminate }
                                        onChecked={ this.indeterminateChecked.bind(this) }>全选</Checkbox>
                                </div>
                                <div className="demo-code-row">
                                    <Checkbox.Group>
                                        {
                                            this.state.arr.map(($arr, index) =>
                                                <Checkbox
                                                    isChecked={ $arr.checked }
                                                    key={ $arr.value.toString() }
                                                    onChecked={ this.indeterminateItemChecked.bind(this, index) }>
                                                        { $arr.value }
                                                    </Checkbox>
                                            )
                                        }
                                    </Checkbox.Group>
                                </div>
                            </section>
                        }
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
                                        indeterminateChecked: false,
                                        isIndeterminate: false,
                                        arr: [
                                            {
                                                value: 'JavaScript',
                                                checked: false
                                            },
                                            {
                                                value: 'Java',
                                                checked: false
                                            },
                                            {
                                                value: 'C++',
                                                checked: false
                                            },
                                            {
                                                value: 'C',
                                                checked: false
                                            }
                                        ]
                                    }
                                }

                                // check all
                                indeterminateChecked (checked) {
                                    let tmpArr = []

                                    for (let $arr of this.state.arr) {
                                        tmpArr.push({
                                            value: $arr.value,
                                            checked: checked
                                        })
                                    }

                                    this.setState({
                                        arr: tmpArr,
                                        indeterminateChecked: checked,
                                        isIndeterminate: false
                                    })
                                }

                                // callback function of item under indeterminate status demo
                                indeterminateItemChecked (index, checked) {
                                    let arr = this.state.arr
                                    let tmpArr = []
                                    let count = 0

                                    arr.map(($arr, $index) => {
                                        let obj = {}

                                        if (index === $index) {
                                            obj.checked = checked
                                        } else {
                                            obj.checked = $arr.checked
                                        }

                                        obj.checked ? count++ : ''
                                        obj.value = $arr.value
                                        tmpArr.push(obj)
                                    })

                                    this.setState({
                                        arr: tmpArr,
                                        indeterminateChecked: count === arr.length,
                                        isIndeterminate: count > 0 && count < arr.length
                                    })
                                }

                                render () {
                                    return <div>
                                                <Checkbox
                                                    isChecked={ this.state.indeterminateChecked }
                                                    indeterminate={ this.state.isIndeterminate }
                                                    onChecked={ this.indeterminateChecked.bind(this) }>全选</Checkbox>
                                                <Checkbox.Group>
                                                    {
                                                        this.state.arr.map(($arr, index) =>
                                                            <Checkbox
                                                                isChecked={ $arr.checked }
                                                                key={ $arr.value.toString() }
                                                                onChecked={ this.indeterminateItemChecked.bind(this, index) }>
                                                                    { $arr.value }
                                                                </Checkbox>
                                                        )
                                                    }
                                                </Checkbox.Group>
                                            </div>
                                }"
                        explain='配置多选框的indeterminate参数可获得部分选择的样式，具体逻辑需要自行编写'
                    />

                    <Usage
                        title='限制可选项的数量'
                        description='配置指定参数可限制选项数量'
                        demo={
                            <div className="demo-code-row">
                                <Checkbox.Group max={ 2 } min={ 1 }>
                                    <Checkbox isChecked={ true }>JavaScript</Checkbox>
                                    <Checkbox>Java</Checkbox>
                                    <Checkbox>C++</Checkbox>
                                    <Checkbox>C</Checkbox>
                                </Checkbox.Group>
                            </div>
                        }
                        code="render () {
                                    return <Checkbox.Group max={ 2 } min={ 1 }>
                                                <Checkbox isChecked={ true }>JavaScript</Checkbox>
                                                <Checkbox>Java</Checkbox>
                                                <Checkbox>C++</Checkbox>
                                                <Checkbox>C</Checkbox>
                                            </Checkbox.Group>
                                }"
                        explain='通过配置max和min参数，可以限制最大和最少被勾选的数量'
                    />

                    <Config type='attr'
                        title='Checkbox'
                        data={ this.state.checkboxAttrs }
                    />

                    <Config type='event'
                        title='Checkbox'
                        data={ this.state.checkboxEvents }
                    />

                    <Config type='attr'
                        title='Checkbox.Group'
                        data={ this.state.checkboxGroupAttrs }
                    />
                </section>
    }
}

export default PageCheckbox
