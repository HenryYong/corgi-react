/**
 *  左侧导航一级子块
 *  Created @ 2017-07-21 00:03:47
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import ListBlock from './ListBlock'

class SubList extends React.Component {
    render () {
        let tpl = this.props.blocks.map((item) =>
            <li key={ item.title ? item.title.toString() : item.components.toString() }>
                <ListBlock title={ item.title } components={ item.components } />
            </li>
        )

        return (
            <ul className="block-list">
                { tpl }
            </ul>
        )
    }
}

export default SubList
