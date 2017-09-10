/**
 *  Row
 *  Created @ 2017-07-28 00:11:38
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

/**
 *  @param gap {Number} - 子元素之间的间距
 *  @param isFlex {Boolean} - 是否启用flex布局
 *  @param justify {String} - 启用flex布局时，子元素水平方向的排列方式
 *  @param align {String} - 启用flex布局时，子元素垂直方向的排列方式
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'

class Row extends Component {
    getChildContext () {
        return {
            gap: this.props.gap
        }
    }

    // 返回是否启用flex布局
    calcIsFlex () {
        return this.props.isFlex ? `${ this.getLibName() }-row__flex` : ''
    }

    // 返回是否启用justify布局
    calcJustify () {
        let justify = this.props.justify

        return this.props.isFlex && justify ? `justify-${ justify }` : ''
    }

    // 返回是否启用align-items布局
    calcAlign () {
        let align = this.props.align

        return this.props.isFlex && align ? `align-${ align }` : ''
    }

    // 返回组件两侧的margin值
    calcMargin () {
        let gap = this.props.gap

        return gap ? `-${ gap / 2 }px` : ''
    }

    render () {
        return <div
                    className={ this.formatClsNames(
                        `${ this.getLibName() }-row`,
                        this.calcIsFlex(),
                        this.calcJustify(),
                        this.calcAlign()) }
                    style={{ marginLeft: this.calcMargin(), marginRight: this.calcMargin() }}>
                    { this.props.children }
                </div>
    }
}

Row.propTypes = {
    gap: PropTypes.number,
    isFlex: PropTypes.bool,
    justify: PropTypes.string,
    align: PropTypes.string
}

Row.defaultProps = {
    gap: 0,
    isFlex: false
}

Row.childContextTypes = {
    gap: PropTypes.number
}

export default Row
