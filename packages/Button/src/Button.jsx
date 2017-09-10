/**
 *  Button Component
 *  Created @ 2017-08-01 23:08:31
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

/**
 *  @param type {String}
 *  @param theme {String}
 *  @param size {String}
 *  @param loading {Boolean}
 *  @param disabled {Boolean}
 *  @param icon {String}
 *  @param autofocus {Boolean}
 *  @param originType {String}
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'

class Button extends Component {
    // 点击事件
    click (e) {
        this.props.onClicked && this.props.onClicked(e)
    }

    // 返回按钮类型
    calcType () {
        let $type = this.props.type

        return $type ? `${ this.getLibName() }-btn__${ $type }` : ''
    }

    // 返回主题色
    calcTheme () {
        let $theme = this.props.theme

        return $theme && !$theme.startsWith('#') ? `${ this.getLibName() }-btn__${ $theme }` : ''
    }

    // 返回是否使用的是自定义主题色
    calcCustom () {
        return this.calcHex() ? `${ this.getLibName() }-btn__custom` : ''
    }

    // 返回颜色值
    calcHex () {
        let $theme = this.props.theme

        return $theme && $theme.startsWith('#') ? `${ $theme }` : ''
    }

    // 是否处于loading状态
    calcLoading () {
        return this.props.loading ? `${ this.getLibName() }-btn__loading` : ''
    }

    // 返回按钮的大小
    calcSize () {
        let $size = this.props.size

        return $size ? `${ this.getLibName() }-btn__${$size}` : ''
    }

    // 返回组件背景色
    calcStyleBGC () {
        let type = this.props.type
        let result

        switch (type) {
            case 'text':
                result = ''
                break
            case 'status':
                result = this.calcHex()
                break
            case 'default':
                result = '#fff'
                break
        }

        return result
    }

    // 返回组件字体颜色
    calcStyleColor () {
        let type = this.props.type
        let result

        switch (type) {
            case 'text':
                result = this.calcHex()
                break
            case 'status':
                result = '#fff'
                break
            case 'default':
                result = this.calcHex()
                break
        }

        return result
    }

    // 返回组件边框颜色
    calcStyleBorderColor () {
        let type = this.props.type
        let result

        switch (type) {
            case 'text':
                result = ''
                break
            case 'status':
                result = this.calcHex()
                break
            case 'default':
                result = this.calcHex()
                break
        }

        return result
    }

    render () {
        let $children = this.props.children
        let $icon = this.props.icon
        let $loading = this.props.loading

        let _slot = null
        let _icon = null
        let _loading = null

        if ($icon) {
            _icon = <i className={ `iconfont icon-${ this.getLibName() }-${ $icon }` } />
        }

        if ($loading) {
            _icon = <i className={ `iconfont icon-${ this.getLibName() }-quarter-loading loading` } />

            if (!$children) {
                _slot = <span>加载中</span>
            }
        }

        if ($children) {
            _slot = <span>
                        { $children }
                    </span>
        }

        return <button
                    className={ this.formatClsNames(
                        `${ this.getLibName() }-btn`,
                        `${ this.getLibName() }-btn__${ this.props.type }`,
                        this.calcTheme(),
                        this.calcCustom(),
                        this.calcLoading(),
                        this.calcSize()) }
                    style={{
                        backgroundColor: this.calcStyleBGC(),
                        borderColor: this.calcStyleBorderColor(),
                        color: this.calcStyleColor() }}
                    disabled={ this.props.disabled }
                    type={ this.props.originType }
                    onClick={ this.click.bind(this) }>
                    { _icon }
                    { _slot }
                </button>
    }
}

Button.propTypes = {
    type: PropTypes.string,
    theme: PropTypes.string,
    size: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    originType: PropTypes.string,
    onClicked: PropTypes.func
}

Button.defaultProps = {
    type: 'default',    // default, text, status
    loading: false,
    disabled: false,
    originType: 'button'
}

export default Button
