/**
 *  Input Component
 *  Created @ 2017-08-22 00:54:39
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'

let isOnComposition = false
let isChrome = !!window.chrome && !!window.chrome.webstore  // detect browser

class Input extends Component {
    constructor (props) {
        super(props)

        this.state = {
            textareaStyle: null,
            $lineHeight: 0,
            $value: this.props.value
        }
    }

    componentDidMount () {
        this.calcTextareaStyle()
    }

    calcTextareaStyle () {
        let { autoSize } = this.props
        let target = this.$textarea

        if (!target) return

        let style = getComputedStyle(target)
        let $height = this.convertToNum(style.height)
        let $borderTopWidth =  this.convertToNum(style.borderTopWidth)
        let $borderBottomWidth = this.convertToNum(style.borderBottomWidth)
        let $innerHeight = $height - $borderTopWidth - $borderBottomWidth
        let $scrollHeight = target.scrollHeight
        let $calcHeight

        if ($scrollHeight > $innerHeight) {
            if (autoSize === true) {
                $calcHeight = $scrollHeight
            }
        }

        this.setState({
            textareaStyle: {
                height: $calcHeight + 'px'
            }
        })
    }

    changeHandler (e) {
        let {
            onChange
        } = this.props
        let newValue = e.target.value
        let len = newValue.length

        if (!e.target instanceof HTMLInputElement || isOnComposition) return

        this.calcTextareaStyle()
        this.setState({
            $value: newValue
        }, () => {
            onChange && onChange(newValue)
        })
    }

    // filter all unnecessary onChange callball when using IME
    compositionHandler (e) {
        let type = e.type

        if (type === 'compositionend') {
            isOnComposition = false
            if (e.target instanceof HTMLInputElement && !isOnComposition && isChrome) {
                this.changeHandler(e)
            }
        } else {
            isOnComposition = true
        }
    }

    focusHandler (e) {
        let {
            onFocus: handler
        } = this.props

        handler && handler(e)
    }

    blurHandler (e) {
        let {
            onBlur: handler
        } = this.props

        handler && handler(e)
    }

    render () {
        let libName = this.getLibName()
        let formatClsNames = this.formatClsNames
        let inputCls = `${ libName }-input`
        let textareaCls = `${ libName }-textarea`
        let {
            mode,
            extCls,
            type,
            size,
            icon,
            iconFloat,
            rows,
            resize,
            autoSize,
            preaddon,
            postaddon,
            ...moreProps
        } = this.props
        let {
            $value
        } = this.state

        let hasAddon = preaddon || postaddon ? `${ libName }-input__wrapper ${ libName }-wrapper__${ postaddon ? 'postaddon' : '' }` : ''

        if ('value' in this.props) {
            // if there is no onChange and readOnly, use defaultValue instead of value
            if (!('onChange' in this.props) && !('readOnly' in this.props)) {
                moreProps.defaultValue = this.props.value

                delete moreProps.value
            }
        }

        if (mode === 'textarea') {
            return <div className={ formatClsNames(
                    `${ textareaCls }`,
                    extCls
                ) }>
                        <textarea
                            ref={ (el) => this.$textarea = el }
                            className={ formatClsNames(
                                `${ textareaCls }__el`,
                                `${ resize ? `${ textareaCls }__${ resize }` : '' }`
                            ) }
                            style={ this.state.textareaStyle }
                            rows={ rows }
                            { ...moreProps }
                            value={ $value }
                            onCompositionStart={ this.compositionHandler.bind(this) }
                            onCompositionUpdate={ this.compositionHandler.bind(this) }
                            onCompositionEnd={ this.compositionHandler.bind(this) }
                            onChange={ this.changeHandler.bind(this) }
                            onFocus={ this.focusHandler.bind(this) }
                            onBlur={ this.blurHandler.bind(this) }
                        ></textarea>
                    </div>
        } else {
            return <div className={ formatClsNames(
                    `${ libName }-input`,
                    hasAddon,
                    `${ size ? `${ libName }-input__${ size }` : '' }`,
                    extCls
                ) }>
                        {
                            preaddon && <div className={ formatClsNames(
                                `${ libName }-input__addon`,
                                `${ libName }-preaddon`
                            ) }>
                                { preaddon }
                            </div>
                        }
                        {
                            typeof icon === 'string' && <i className={ formatClsNames(
                                    'iconfont',
                                    `icon-${ libName }-${ icon }`,
                                    `${ inputCls }__icon`,
                                    `icon-${ iconFloat }`
                                ) }></i>
                        }

                        <input
                            ref={ (el) => this.$input = el }
                            className={ formatClsNames(
                                `${ inputCls }__el`
                            ) }
                            type={ type }
                            { ...moreProps }
                            onCompositionStart={ this.compositionHandler.bind(this) }
                            onCompositionUpdate={ this.compositionHandler.bind(this) }
                            onCompositionEnd={ this.compositionHandler.bind(this) }
                            onChange={ this.changeHandler.bind(this) }
                            onFocus={ this.focusHandler.bind(this) }
                            onBlur={ this.blurHandler.bind(this) }
                        />

                        {
                            postaddon && <div className={ formatClsNames(
                                `${ libName }-input__addon`,
                                `${ libName }-postaddon`
                            ) }>
                                { postaddon }
                            </div>
                        }
                    </div>
        }
    }
}

Input.propTypes = {
    mode: PropTypes.string,
    extCls: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    iconFloat: PropTypes.string,
    // textarea
    rows: PropTypes.number,
    cols: PropTypes.number,
    resize: PropTypes.string,     // direction of resize textarea
    autoSize: PropTypes.oneOfType([
        PropTypes.bool,         // not perfect
        PropTypes.object        // not supported now
    ]),
    // input
    preaddon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
    ]),
    postaddon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
    ]),
    // origin attrs
    type: PropTypes.string,
    placeholder: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    readOnly: PropTypes.bool,
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    // event callback
    onChange: PropTypes.func
}

Input.defaultProps = {
    mode: 'input',
    type: 'text',
    iconFloat: 'right',
    rows: 3,
    cols: 8,
    placeholder: '请输入内容'
}

export default Input
