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

class Input extends Component {
    constructor (props) {
        super(props)

        this.state = {
            textareaStyle: null,
            $lineHeight: 0
        }
    }

    componentDidMount () {
        this.calcTextareaStyle()
    }

    calcTextareaStyle () {
        let { setSize } = this.props
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
            if (setSize === true) {
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
        this.calcTextareaStyle()
        onChange && onChange(this.$input.value)
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
            setSize,
            preaddon,
            postaddon,
            ...moreProps
        } = this.props

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
                                `${ textareaCls }__${ resize }`
                            ) }
                            style={ this.state.textareaStyle }
                            rows={ rows }
                            { ...moreProps }
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
    resize: PropTypes.string,
    setSize: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
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
    defaultValue: PropTypes.any,
    value: PropTypes.any,
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
    cols: 8
}

export default Input
