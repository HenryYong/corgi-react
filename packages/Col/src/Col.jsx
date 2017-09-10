/**
 *  Col Component
 *  Created @ 2017-07-29 13:19:31
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

/**
 *  @param occupied {Number} - 占据的列数
 *  @param offset {Number} - 偏移的列数
 *  @param push {Number} - 栅格右移的列数
 *  @param pull {Number} - 栅格左移的列数
 *  @param space {Number} - 元素之间的间距，优先级高于gap
 *  @context gap {Number} - 元素之间的间距
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'

class Col extends Component {
    calcOccupied () {
        let occupied = this.props.occupied
        return occupied ? `${ this.getLibName() }-col-${ occupied }` : ''
    }

    calcOffset () {
        let offset = this.props.offset
        return offset ? `${ this.getLibName() }-offset-${ offset }` : ''
    }

    calcPush () {
        let push = this.props.push
        return push ? `${ this.getLibName() }-push-${ push }` : ''
    }

    calcPull () {
        let pull = this.props.pull
        return pull ? `${ this.getLibName() }-pull-${ pull }` : ''
    }

    calcGap () {
        let gap = this.props.space || this.context.gap
        return gap ? `${ gap / 2 }px` : ''
    }

    render () {
        return <div
                    className={ this.formatClsNames(
                        `${ this.getLibName() }-col`,
                        this.calcOccupied(),
                        this.calcOffset(),
                        this.calcPush(),
                        this.calcPull()) }
                    style={{ paddingLeft: this.calcGap(), paddingRight: this.calcGap() }}>
                    { this.props.children }
                </div>
    }
}

Col.propTypes = {
    occupied: PropTypes.number,
    offset: PropTypes.number,
    push: PropTypes.number,
    pull: PropTypes.number,
    space: PropTypes.number
}

Col.defaultProps = {
    occupied: 12,
    offset: 0,
    push: 0,
    pull: 0,
    space: 0
}

Col.contextTypes = {
    gap: PropTypes.number
}

export default Col
