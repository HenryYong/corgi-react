/**
 *  文档左侧导航
 *  Created @ 2017-07-20 15:26:01
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import list from './../components.conf'
import SubList from './SubList'

const tpl = list.navs.map((item) =>
    <li key={ item.blockName.toString() } className="nav-list-block">
        <h5 className="block-title">{ item.blockName }</h5>
        <SubList blocks={ item.blocks } />
    </li>
)

class LeftNav extends React.Component {
    render () {
        return <section className="app-nav">
                    <ul className="nav-list">
                        { tpl }
                    </ul>
                </section>
    }
}

export default LeftNav
