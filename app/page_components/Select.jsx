/**
 *  Select文档
 *  Created @ 2017-08-30 13:23:55
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import DocTitle from 'doc_components/DocTitle'
import Usage from 'doc_components/Usage'
import { Select } from 'packages'

class PageSelect extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            basicConfig: {
                list: [
                    {
                        id: 1,
                        text: '北京'
                    },
                    {
                        id: 2,
                        text: '上海'
                    },
                    {
                        id: 3,
                        text: '广州'
                    },
                    {
                        id: 4,
                        text: '深圳'
                    },
                    {
                        id: 5,
                        text: '香港'
                    },
                    {
                        id: 6,
                        text: '澳门'
                    }
                ],
                value: '深圳'
            },
            disabledOptionConfig: {
                list: [
                    {
                        id: 1,
                        text: '北京'
                    },
                    {
                        id: 2,
                        text: '上海'
                    },
                    {
                        id: 3,
                        text: '广州'
                    },
                    {
                        id: 4,
                        text: '深圳',
                        disabled: true
                    },
                    {
                        id: 5,
                        text: '香港'
                    },
                    {
                        id: 6,
                        text: '澳门'
                    }
                ]
            }
        }
    }

    basicOnSelected (v) {
        console.log(v, this.state.basicConfig.value)
    }

    render () {
        return <section className='select-wrapper'>
                    <DocTitle
                        title='数据选择'
                        subtitle='选项较多时，使用本组件模拟原生下拉选择框'
                    />
                    <Usage
                        title='基础用法'
                        description='默认配置的基础单选'
                        demo={
                            <Select
                                extCls='demo-select'
                                list={this.state.basicConfig.list}
                                placeholder='请选择城市'
                            />
                        }
                    />

                    <Usage
                        title='有禁用选项'
                        demo={
                            <Select
                                extCls='demo-select'
                                list={this.state.disabledOptionConfig.list}
                                placeholder='请选择城市'
                            />
                        }
                    />

                    <Usage
                        title='禁用组件'
                        demo={
                            <Select
                                extCls='demo-select'
                                list={this.state.disabledOptionConfig.list}
                                placeholder='请选择城市'
                                disabled={true}
                            />
                        }
                    />

                    <Usage
                        title='可清空选项'
                        description='鼠标移入组件时出现清空按钮，将组件重置成初始化状态'
                        demo={
                            <Select
                                extCls='demo-select'
                                list={this.state.disabledOptionConfig.list}
                                placeholder='请选择城市'
                                enableClear={true}
                            />
                        }
                    />

                    <Usage
                        title='支持多选'
                        description='可选择多个选项，选中内容使用Tag组件'
                        demo={
                            <Select
                                extCls='demo-select'
                                list={this.state.disabledOptionConfig.list}
                                placeholder='请选择城市'
                                multiple={true}
                            />
                        }
                    />

                    <Usage
                        title='可筛选选项'
                        description='在组件中筛选内容'
                        demo={
                            <Select
                                extCls='demo-select'
                                list={this.state.basicConfig.list}
                                placeholder='请选择城市'
                                enableSearch={true}
                            />
                        }
                    />
                </section>
    }
}

export default PageSelect
