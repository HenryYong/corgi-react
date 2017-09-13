/**
 *  Table Component
 *  Created @ 2017-08-28 20:26:19
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'

class Table extends Component {
    constructor(props) {
        super(props)

        let tempExpandRow = []
        let length = props.data.length

        if (length && props.headers[0].type) {
            for (let i = 0; i < length; i++) {
                tempExpandRow.push({
                    expanded: false
                })
            }
        }

        this.state = {
            expandRow: tempExpandRow
        }
    }

    generateTable (headers, data) {
        let headerTpl = []
        let dataTpl = []
        let localHeaders
        let timestamp = +new Date()
        let h = React.createElement
        let hasType = headers[0].type
        let libName = this.getLibName()

        // 拼接thead
        for (let [index, headerItem] of headers.entries()) {
            headerTpl.push(
                h(
                    'th',
                    {
                        key: headerItem.id || `${ timestamp }-expand`
                    },
                    headerItem.type ? '' : headerItem.label
                )
            )
        }

        if (hasType) {
            localHeaders = headers.concat([])
            headers.shift()
        }

        if (data.length) {
            // 拼接tbody
            for (let [index, dataItem] of data.entries()) {
                let rowTpl = []
                let expandTpl
                let length = Object.keys(dataItem).length
                let rowExtCls = this.props.rowExtCls
                let extCls = rowExtCls ? this.props.rowExtCls(index) : ''

                // 循环获取每一行的数据
                for (let i = 0; i < length; i++) {
                    let curHeader = headers[i]
                    let key = curHeader.id
                    let curItem = dataItem[key]

                    if (!curHeader.type) {
                        rowTpl.push(
                            h(
                                'td',
                                {
                                    key: timestamp + key
                                },
                                !curHeader.type && curHeader.render ? curHeader.render(dataItem) : curItem  // 是否是自定义列
                            )
                        )
                    }
                }

                if (hasType) {
                    // 拼接icon
                    rowTpl.unshift(
                        h(
                            'td',
                            {
                                key: `${ timestamp }-expand${ index }`,
                                className: `${ libName }-table__expand-icon`,
                                onClick: (e) => {
                                    this.state.expandRow[index].expanded = !this.state.expandRow[index].expanded
                                }
                            },
                            h(
                                'i',
                                {
                                    className: 'iconfont icon-corgi-up right'
                                }
                            )
                        )
                    )

                    // 拼接展开行
                    expandTpl = localHeaders[0].render && h(
                        'td',
                        {
                            colSpan: localHeaders.length
                        },
                        localHeaders[0].render(dataItem)
                    )
                }

                // 拼接行数据
                dataTpl.push(
                    h(
                        'tr',
                        {
                            key: `${ timestamp }-row${ index }`,
                            className: extCls
                        },
                        rowTpl
                    )
                )

                if (expandTpl) {
                    dataTpl.push(
                        h(
                            'tr',
                            {
                                key: `${ timestamp }-expand-row${ index }`,
                                className: `${ libName }-table__expand-row ${ !this.state.expandRow[index].expanded ? 'hidden' : '' }`
                            },
                            expandTpl
                        )
                    )
                }
            }
        } else {
            // 内容为空
            dataTpl.push(
                h(
                    'tr',
                    {
                        key: timestamp
                    },
                    h(
                        'td',
                        {
                            colSpan: headers.length
                        },
                        this.props.emptyContent
                    )
                )
            )
        }

        return {
            headerTpl: h('tr', {}, headerTpl),
            dataTpl
        }
    }

    render () {
        let libName = this.getLibName()
        let {
            headers,
            data,
            hasBorder,
            hasStripe,
            hoverEffect
        } = this.props
        let tpl = this.generateTable(headers, data)

        return <table className={ this.formatClsNames(
                    `${ libName }-table`,
                    `${ hasBorder ? `${ libName }-table__bordered` : '' }`,
                    `${ hasStripe ? `${ libName }-table__stripe` : '' }`,
                    `${ hoverEffect ? `${ libName }-table__hover` : '' }`
                ) }>
                    <thead className={ this.formatClsNames(
                            `${ libName }-table__header`
                        ) }>
                        { tpl.headerTpl }
                    </thead>
                    <tbody className={ this.formatClsNames(
                            `${ libName }-table__body`,
                            `${ data.length ? '' : `${ libName }-table__empty` }`
                        ) }>
                        { tpl.dataTpl }
                    </tbody>
                </table>
    }
}

Table.propTypes = {
    headers: PropTypes.array,
    data: PropTypes.array,
    hasBorder: PropTypes.bool,
    hasStripe: PropTypes.bool,
    rowExtCls: PropTypes.func,
    emptyContent: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    hoverEffect: PropTypes.bool
}

Table.defaultProps = {
    hoverEffect: true,
    emptyContent: '内容为空'
}

export default Table
