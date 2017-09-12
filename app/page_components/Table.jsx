/**
 *  Table Doc
 *  Created @ 2017-08-28 20:20:05
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import DocTitle from 'doc_components/DocTitle'
import Usage from 'doc_components/Usage'
import Config from 'doc_components/ConfigTable'
import { Table, Button } from 'packages'

class PageTable extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            basicConfig: {
                headers: [
                    {
                        label: '序号',
                        id: 'id'
                    },
                    {
                        label: '任务',
                        id: 'task'
                    },
                    {
                        label: '进度',
                        id: 'progress'
                    },
                    {
                        label: '开发者',
                        id: 'developer'
                    },
                    {
                        label: '结束时间',
                        id: 'end'
                    }
                ],
                data: [
                    {
                        id: 1,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 2,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 3,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 4,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 5,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    }
                ]
            },
            statusConfig: {
                data: [
                    {
                        id: 1,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 2,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 3,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 4,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 5,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 6,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 7,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 8,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 9,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 10,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    }
                ]
            },
            emptyConfig: {
                data: []
            },
            rowTplConfig: {
                headers: [
                    {
                        label: '序号',
                        id: 'id'
                    },
                    {
                        label: '任务',
                        id: 'task'
                    },
                    {
                        label: '进度',
                        id: 'progress'
                    },
                    {
                        label: '开发者',
                        id: 'developer',
                        render: (item) => {
                            return <span className="demo-table-item demo-tag">
                                { item.developer }
                            </span>
                        }
                    },
                    {
                        label: '操作',
                        id: 'operation',
                        render: (item) => {
                            return <span className="demo-table-item">
                                        <Button type='status' theme='warning'>修改</Button>
                                        <Button type='status' theme='error'>删除</Button>
                                    </span>
                        }
                    }
                ],
                data: [
                    {
                        id: 1,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        operation: '修改/删除'
                    },
                    {
                        id: 2,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        operation: '修改/删除'
                    },
                    {
                        id: 3,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        operation: '修改/删除'
                    },
                    {
                        id: 4,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        operation: '修改/删除'
                    },
                    {
                        id: 5,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        operation: '修改/删除'
                    }
                ]
            },
            expandConfig: {
                headers: [
                    {
                        type: 'expand',
                        render: (item) => {
                            return <div>
                                        <p>序号：{ item.id }</p>
                                        <p>任务：{ item.task }</p>
                                        <p>进度：{ item.progress }</p>
                                        <p>开发者：{ item.developer }</p>
                                        <p>结束时间：{ item.end }</p>
                                    </div>
                        }
                    },
                    {
                        label: '序号',
                        id: 'id'
                    },
                    {
                        label: '任务',
                        id: 'task'
                    },
                    {
                        label: '进度',
                        id: 'progress'
                    },
                    {
                        label: '开发者',
                        id: 'developer'
                    },
                    {
                        label: '结束时间',
                        id: 'end'
                    }
                ],
                data: [
                    {
                        id: 1,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 2,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 3,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 4,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    },
                    {
                        id: 5,
                        task: '版本更新',
                        progress: '完成',
                        developer: '管理员',
                        end: '2017-09-01'
                    }
                ]
            },
            attrs: [
                {
                    props: 'headers',
                    desc: '表格的头部标签内容',
                    type: 'Array',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'data',
                    desc: '表格内容',
                    type: 'Array',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'hasBorder',
                    desc: '表格列之间是否有边框',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'hasStripe',
                    desc: '表格行是否是斑马条背景',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'rowExtCls',
                    desc: '表格每一行的额外的类；渲染每一行时会执行该函数，且每次执行时的参数是当前行的index值',
                    type: 'Function',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'emptyContent',
                    desc: '表格内容（data参数）为空时显示的内容；可以是普通字符串，也可以是JSX',
                    type: 'String/JSX',
                    available: '——',
                    defaultValue: '内容为空'
                },
                {
                    props: 'hoverEffect',
                    desc: '鼠标悬浮在表格行时，行的背景色是否有highlight',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
            ]
        }
    }

    calcRowCls (index) {
        let result

        switch (index) {
            case 0:
                result = 'warning'
                break
            case 2:
                result = 'success'
                break
            case 4:
                result = 'error'
                break
            case 6:
                result = 'primary'
                break
            case 8:
                result = 'info'
                break
        }

        return result
    }

    emptyGenerator () {
        return <p style={{ color: 'red' }}>内容为空</p>
    }

    render () {
        return <section className="table-wrapper">
                    <DocTitle
                        title='表格'
                        subtitle='适用于大量数据展示'
                    />
                    <Usage
                        title='基础用法'
                        description='普通的表格'
                        demo={
                            <div className="demo-code-row">
                                <Table
                                    headers={ this.state.basicConfig.headers }
                                    data={ this.state.basicConfig.data }
                                />
                            </div>
                        }
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
                                        basicConfig: {
                                            headers: [
                                                {
                                                    label: '序号',
                                                    id: 'id'
                                                },
                                                {
                                                    label: '任务',
                                                    id: 'task'
                                                },
                                                {
                                                    label: '进度',
                                                    id: 'progress'
                                                },
                                                {
                                                    label: '开发者',
                                                    id: 'developer'
                                                },
                                                {
                                                    label: '结束时间',
                                                    id: 'end'
                                                }
                                            ],
                                            data: [
                                                {
                                                    id: 1,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 2,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 3,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 4,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 5,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                }
                                            ]
                                        }
                                    }
                                }

                                render () {
                                    return <Table
                                                headers={ this.state.basicConfig.headers }
                                                data={ this.state.basicConfig.data }
                                            />
                                }"
                        explain='传入headers和data即可获得基础表格'
                    />

                    <Usage
                        title='带边框的表格'
                        demo={
                            <div className="demo-code-row">
                                <Table
                                    headers={ this.state.basicConfig.headers }
                                    data={ this.state.basicConfig.data }
                                    hasBorder={true}
                                />
                            </div>
                        }
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
                                        basicConfig: {
                                            headers: [
                                                {
                                                    label: '序号',
                                                    id: 'id'
                                                },
                                                {
                                                    label: '任务',
                                                    id: 'task'
                                                },
                                                {
                                                    label: '进度',
                                                    id: 'progress'
                                                },
                                                {
                                                    label: '开发者',
                                                    id: 'developer'
                                                },
                                                {
                                                    label: '结束时间',
                                                    id: 'end'
                                                }
                                            ],
                                            data: [
                                                {
                                                    id: 1,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 2,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 3,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 4,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 5,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                }
                                            ]
                                        }
                                    }
                                }

                                render () {
                                    return <Table
                                                headers={ this.state.basicConfig.headers }
                                                data={ this.state.basicConfig.data }
                                            />
                                }"
                        explain='配置hasBorder可生成带边框的表格'
                    />

                    <Usage
                        title='斑马条表格'
                        demo={
                            <div className="demo-code-row">
                                <Table
                                    headers={ this.state.basicConfig.headers }
                                    data={ this.state.basicConfig.data }
                                    hasStripe={true}
                                />
                            </div>
                        }
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
                                        basicConfig: {
                                            headers: [
                                                {
                                                    label: '序号',
                                                    id: 'id'
                                                },
                                                {
                                                    label: '任务',
                                                    id: 'task'
                                                },
                                                {
                                                    label: '进度',
                                                    id: 'progress'
                                                },
                                                {
                                                    label: '开发者',
                                                    id: 'developer'
                                                },
                                                {
                                                    label: '结束时间',
                                                    id: 'end'
                                                }
                                            ],
                                            data: [
                                                {
                                                    id: 1,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 2,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 3,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 4,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 5,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                }
                                            ]
                                        }
                                    }
                                }

                                render () {
                                    return <Table
                                                headers={ this.state.basicConfig.headers }
                                                data={ this.state.basicConfig.data }
                                            />
                                }"
                        explain='配置hasStripe可生成背景斑马条的表格'
                    />

                    <Usage
                        title='有不同状态的表格'
                        description='高亮整行，可以区分成功、警告、错误、信息等状态'
                        demo={
                            <div className="demo-code-row">
                                <Table
                                    headers={ this.state.basicConfig.headers }
                                    data={ this.state.statusConfig.data }
                                    rowExtCls={ this.calcRowCls.bind(this) }
                                />
                            </div>
                        }
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
                                        basicConfig: {
                                            headers: [
                                                {
                                                    label: '序号',
                                                    id: 'id'
                                                },
                                                {
                                                    label: '任务',
                                                    id: 'task'
                                                },
                                                {
                                                    label: '进度',
                                                    id: 'progress'
                                                },
                                                {
                                                    label: '开发者',
                                                    id: 'developer'
                                                },
                                                {
                                                    label: '结束时间',
                                                    id: 'end'
                                                }
                                            ]
                                        },
                                        statusConfig: {
                                            data: [
                                                {
                                                    id: 1,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 2,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 3,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 4,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 5,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 6,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 7,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 8,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 9,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                },
                                                {
                                                    id: 10,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    end: '2017-09-01'
                                                }
                                            ]
                                        }
                                    }
                                }

                                calcRowCls (index) {
                                    let result

                                    switch (index) {
                                        case 0:
                                            result = 'warning'
                                            break
                                        case 2:
                                            result = 'success'
                                            break
                                        case 4:
                                            result = 'error'
                                            break
                                        case 6:
                                            result = 'primary'
                                            break
                                        case 8:
                                            result = 'info'
                                            break
                                    }

                                    return result
                                }

                                render () {
                                    return <Table
                                                headers={ this.state.basicConfig.headers }
                                                data={ this.state.statusConfig.data }
                                                rowExtCls={ this.calcRowCls.bind(this) }
                                            />
                                }"
                        explain='通过rowExtCls配置每一行的状态'
                    />

                    <Usage
                        title='内容为空的表格'
                        description='当没有数据时显示的内容'
                        demo={
                            <div className="demo-code-row">
                                <Table
                                    headers={ this.state.basicConfig.headers }
                                    data={ this.state.emptyConfig.data }
                                    emptyContent={ this.emptyGenerator() }
                                />
                            </div>
                        }
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
                                        basicConfig: {
                                            headers: [
                                                {
                                                    label: '序号',
                                                    id: 'id'
                                                },
                                                {
                                                    label: '任务',
                                                    id: 'task'
                                                },
                                                {
                                                    label: '进度',
                                                    id: 'progress'
                                                },
                                                {
                                                    label: '开发者',
                                                    id: 'developer'
                                                },
                                                {
                                                    label: '结束时间',
                                                    id: 'end'
                                                }
                                            ]
                                        },
                                        emptyConfig: {
                                            data: []
                                        }
                                    }
                                }

                                emptyGenerator () {
                                    return <p style={{ color: 'red' }}>内容为空</p>
                                }

                                render () {
                                    return <Table
                                                headers={ this.state.basicConfig.headers }
                                                data={ this.state.emptyConfig.data }
                                                emptyContent={ this.emptyGenerator() }
                                            />
                                }"
                        explain='通过emptyContent可以配置内容为空时显示的提示信息，可以是字符串，也可以是JSX'
                    />

                    <Usage
                        title='自定义列模板的表格'
                        description='自定义列的内容，可以组合其它组件使用'
                        demo={
                            <div className="demo-code-row">
                                <Table
                                    headers={ this.state.rowTplConfig.headers }
                                    data={ this.state.rowTplConfig.data }
                                />
                            </div>
                        }
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
                                        rowTplConfig: {
                                            headers: [
                                                {
                                                    label: '序号',
                                                    id: 'id'
                                                },
                                                {
                                                    label: '任务',
                                                    id: 'task'
                                                },
                                                {
                                                    label: '进度',
                                                    id: 'progress'
                                                },
                                                {
                                                    label: '开发者',
                                                    id: 'developer',
                                                    render: (item) => {
                                                        return <span className='demo-table-item demo-tag'>
                                                            { item.developer }
                                                        </span>
                                                    }
                                                },
                                                {
                                                    label: '操作',
                                                    id: 'operation',
                                                    render: (item) => {
                                                        return <span className='demo-table-item'>
                                                                    <Button type='status' theme='warning'>修改</Button>
                                                                    <Button type='status' theme='error'>删除</Button>
                                                                </span>
                                                    }
                                                }
                                            ],
                                            data: [
                                                {
                                                    id: 1,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    operation: '修改/删除'
                                                },
                                                {
                                                    id: 2,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    operation: '修改/删除'
                                                },
                                                {
                                                    id: 3,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    operation: '修改/删除'
                                                },
                                                {
                                                    id: 4,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    operation: '修改/删除'
                                                },
                                                {
                                                    id: 5,
                                                    task: '版本更新',
                                                    progress: '完成',
                                                    developer: '管理员',
                                                    operation: '修改/删除'
                                                }
                                            ]
                                        }
                                    }
                                }

                                render () {
                                    return <Table
                                                headers={ this.state.rowTplConfig.headers }
                                                data={ this.state.rowTplConfig.data }
                                            />
                                }"
                        explain='在传入的headers参数中，若给某一项增加render函数，该列会以render函数返回的JSX模板渲染'
                    />

                    <Config type='attr'
                        title='Table'
                        data={ this.state.attrs }
                    />
                </section>
    }
}

export default PageTable
