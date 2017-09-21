/**
 *  Select Options
 *  Created @ 2017-09-16 22:13:51
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'

class SelectOption extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isHover: false
        }
    }

    componentWillReceiveProps (v, k) {
        // console.log(v, k)
    }

    handleOnMouseEnter () {
        this.setState({
            isHover: true
        })
    }

    handleOnMouseLeave () {
        this.setState({
            isHover: false
        })
    }

    handleOnClick () {
        let {
            onClick,
            value,
            label,
            multiple,
            disabled
        } = this.props

        if (disabled) return

        onClick && onClick({
            value,
            label
        })
    }

    render () {
        let libName = this.getLibName()
        let formatClsNames = this.formatClsNames
        let {
            value,
            label,
            selected,
            disabled,
            multiple,
            group,
            render
        } = this.props
        let {
            isHover
        } = this.state

        if (!group) {
            return <li className={ formatClsNames(
                            `${ libName }-select__option`,
                            `${ isHover ? 'is-hover' : '' }`,
                            `${ selected ? 'selected' : '' }`,
                            `${ disabled ? 'disabled' : '' }`
                        ) }
                        onMouseEnter={ this.handleOnMouseEnter.bind(this) }
                        onMouseLeave={
                            this.handleOnMouseLeave.bind(this)
                        }
                        onClick={ this.handleOnClick.bind(this) }>
                        { render ? render({
                            value: value,
                            label: label
                        }) : label }
                    </li>
        } else {
            return <li className={ formatClsNames(
                            `${ libName }-select__option`,
                            `${ libName }-select__group`
                        ) }>
                        { label }
                    </li>
        }
    }
}

SelectOption.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    group: PropTypes.bool,
    selected: PropTypes.bool
}

export default SelectOption
