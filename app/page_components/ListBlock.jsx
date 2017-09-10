/**
 *  左侧列表中的导航block组件
 *  Created @ 2017-07-20 23:36:46
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import { NavLink } from 'react-router-dom'

class ListBlock extends React.Component {
    render () {
        let props = this.props
        let titleTpl = null
        let title = props.title

        if (title) {
            titleTpl = <p className="item-title">{ this.props.title }</p>
        }

        let blocks = this.props.components.map((item) =>
            <li key={ item.name.toString() }>
                <NavLink
                    to={ item.id }
                    activeStyle={{
                        color: 'red'
                    }}
                    className="item-link">
                    { item.name }
                </NavLink>
            </li>
        )

        return (
            <div className="block-list-item">
                { titleTpl }
                <ul className="item-list">
                    { blocks }
                </ul>
            </div>
        )
    }
}

export default ListBlock
