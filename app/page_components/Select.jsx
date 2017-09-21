/**
 *  Select Docs
 *  Created @ 2017-08-30 13:23:55
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import DocTitle from 'doc_components/DocTitle'
import Usage from 'doc_components/Usage'
import Config from 'doc_components/ConfigTable'
import { Select } from 'packages'

class PageSelect extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            basicConfig: {
                list: [
                    {
                        value: 'Beijing',
                        label: '北京'
                    },
                    {
                        value: 'Shanghai',
                        label: '上海'
                    },
                    {
                        value: 'Guangzhou',
                        label: '广州'
                    },
                    {
                        value: 'Shenzhen',
                        label: '深圳'
                    }
                ],
                value: '深圳'
            },
            disabledOptionConfig: {
                list: [
                    {
                        value: 'Beijing',
                        label: '北京'
                    },
                    {
                        value: 'Shanghai',
                        disabled: true,
                        label: '上海'
                    },
                    {
                        value: 'Guangzhou',
                        label: '广州'
                    },
                    {
                        value: 'Shenzhen',
                        label: '深圳'
                    }
                ]
            },
            groupConfig: {
                list: [
                    {
                        group: true,
                        label: '热门城市'
                    },
                    {
                        value: 'Beijing',
                        label: '北京'
                    },
                    {
                        value: 'Shanghai',
                        label: '上海'
                    },
                    {
                        value: 'Guangzhou',
                        label: '广州'
                    },
                    {
                        value: 'Shenzhen',
                        label: '深圳'
                    },
                    {
                        group: true,
                        label: '城市名'
                    },
                    {
                        value: 'Changsha',
                        label: '长沙'
                    },
                    {
                        value: 'Dalian',
                        label: '大连'
                    },
                    {
                        value: 'Taiwan',
                        label: '台湾'
                    },
                    {
                        value: 'HongKong',
                        label: '香港'
                    }
                ]
            },
            multipleConfig: {
                value: [
                    {
                        value: 'Shenzhen',
                        label: '深圳'
                    },
                    {
                        value: 'Guangzhou',
                        label: '广州'
                    }
                ]
            },
            selectAttrs: [
                {
                    props: 'disabled',
                    desc: '组件是否禁用',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'multiple',
                    desc: '是否多选',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'placeholder',
                    desc: '未选择内容时显示的提示文字',
                    type: 'String/Number',
                    available: '——',
                    defaultValue: '请选择'
                },
                {
                    props: 'value',
                    desc: '当前显示的值',
                    type: 'String/Number/Array',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'enableFilter',
                    desc: '是否开启过滤',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'filterRule',
                    desc: '自定义过滤规则',
                    type: 'Function',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'enableClear',
                    desc: '是否开启清空当前已选的项',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'render',
                    desc: '自定义渲染模板，函数的参数是一个包含当前项的value和label值的对象',
                    type: 'Function',
                    available: '——',
                    defaultValue: '——'
                }
            ],
            selectEvents: [
                {
                    name: 'onSelected',
                    desc: '选中某项时的回调函数',
                    cbvar: '当前选中的项'
                },
                {
                    name: 'onShown',
                    desc: '显示列表时的回调函数',
                    cbvar: '——'
                },
                {
                    name: 'onCollapsed',
                    desc: '关闭列表时的回调函数',
                    cbvar: '——'
                },
                {
                    name: 'onClear',
                    desc: '清空当前选中项的回调函数',
                    cbvar: '——'
                },
                {
                    name: 'onInput',
                    desc: '过滤时输入字符时的回调函数',
                    cbvar: '当前输入框中的值'
                }
            ],
            optionAttrs: [
                {
                    props: 'value',
                    desc: '当前项的value值',
                    type: 'String/Number',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'label',
                    desc: '当前项被显示的字段',
                    type: 'String/Number',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'selected',
                    desc: '当前项是否被选中',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'group',
                    desc: '当前项是不是分组标题',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: '——'
                }
            ]
        }
    }

    basicOnSelected (v) {
        console.log(v, this.state.basicConfig.value)
    }

    onShown () {
        console.log('onShown')
    }

    onCollapsed () {
        console.log('onCollapsed')
    }

    onSelected () {
        console.log('onSelected')
    }

    onClear () {
        console.log('clear')
    }

    filterRule (input, item) {
        if (item.value.includes('h')) {
            return true
        }
    }

    onFilter (v, k) {
        console.log(v, k)
    }

    customRender (item) {
        return <div className='demo-clearfix'>
                    <p className='demo-fl'>{ item.label }</p>
                    <p className='demo-fr' style={{ fontSize: '12px', color: '#ccc' }}>{ item.value }</p>
                </div>
    }

    render () {
        return <section className='select-wrapper'>
                    <DocTitle
                        title='下拉列表'
                        subtitle='选项较多时，使用本组件模拟原生下拉列表'
                    />
                    <Usage
                        title='基础用法'
                        description='默认配置的基础单选'
                        demo={
                            <Select
                                placeholder='请选择城市'
                                value={ this.state.basicConfig.value }>
                                {
                                    this.state.basicConfig.list.map((v) => {
                                        return <Select.Option
                                                    key={ v.value }
                                                    value={ v.value }
                                                    label={ v.label }
                                                />
                                    })
                                }
                            </Select>
                        }
                    />

                    <Usage
                        title='有禁用选项'
                        demo={
                            <Select placeholder='请选择城市'>
                                {
                                    this.state.disabledOptionConfig.list.map((v) => {
                                        return <Select.Option
                                                    key={ v.value }
                                                    value={ v.value }
                                                    label={ v.label }
                                                    disabled={ v.disabled }
                                                />
                                    })
                                }
                            </Select>
                        }
                    />

                    <Usage
                        title='禁用组件'
                        demo={
                            <Select
                                disabled={true}
                            />
                        }
                    />

                    <Usage
                        title='可清空选项'
                        description='鼠标移入组件时出现清空按钮，将组件重置成初始化状态'
                        demo={
                            <Select
                                placeholder='请选择城市'
                                enableClear={ true }
                                onClear={ this.onClear }>
                                {
                                    this.state.basicConfig.list.map((v) => {
                                        return <Select.Option
                                                    key={ v.value }
                                                    value={ v.value }
                                                    label={ v.label }
                                                />
                                    })
                                }
                            </Select>
                        }
                    />

                    <Usage
                        title='支持多选'
                        description='可选择多个选项，选中内容使用Tag组件'
                        demo={
                            <Select
                                placeholder='请选择城市'
                                multiple={ true }
                                value={ this.state.multipleConfig.value }>
                                {
                                    this.state.basicConfig.list.map((v) => {
                                        return <Select.Option
                                                    key={ v.value }
                                                    value={ v.value }
                                                    label={ v.label }
                                                />
                                    })
                                }
                            </Select>
                        }
                    />

                    <Usage
                        title='可筛选选项'
                        description='在组件中筛选内容'
                        demo={
                            <Select
                                placeholder='请选择城市'
                                enableFilter={true}
                                filterRule={ this.filterRule }
                                onFilter={ this.onFilter.bind(this) }
                            >
                                {
                                    this.state.basicConfig.list.map((v) => {
                                        return <Select.Option
                                                    key={ v.value }
                                                    value={ v.value }
                                                    label={ v.label }
                                                />
                                    })
                                }
                            </Select>
                        }
                    />

                    <Usage
                        title='自定义模板'
                        description='可根据需要生成模板'
                        demo={
                            <Select
                                placeholder='请选择城市'
                                render={ this.customRender }
                            >
                                {
                                    this.state.basicConfig.list.map((v) => {
                                        return <Select.Option
                                                    key={ v.value }
                                                    value={ v.value }
                                                    label={ v.label }
                                                />
                                    })
                                }
                            </Select>
                        }
                    />

                    <Usage
                        title='选项分组'
                        description='将选项根据某一个维度分组'
                        demo={
                            <Select
                                placeholder='请选择城市'
                                render={ this.customRender }
                            >
                                {
                                    this.state.groupConfig.list.map((v) => {
                                        return <Select.Option
                                                    key={ v.value || v.label }
                                                    value={ v.value }
                                                    label={ v.label }
                                                    group={ v.group }
                                                />
                                    })
                                }
                            </Select>
                        }
                    />

                    <Config type='attr'
                        title='Select'
                        data={ this.state.selectAttrs }
                    />

                    <Config type='event'
                        title='Select'
                        data={ this.state.selectEvents }
                    />

                    <Config type='attr'
                        title='Select.Option'
                        data={ this.state.optionAttrs }
                    />
                </section>
    }
}

export default PageSelect
