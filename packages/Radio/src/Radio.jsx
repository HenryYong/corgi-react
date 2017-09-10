/**
 *  Radio Component
 *  Created @ 2017-08-11 20:07:08
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'

class Radio extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isChecked: this.getChecked(props)
        }
    }

    componentWillReceiveProps (nextProps) {
        let $isChecked = this.getChecked(nextProps)

        if ($isChecked !== this.setState.isChecked) {
            this.setState({
                isChecked: $isChecked
            })
        }

    }

    onChanged (e) {
        let status = e.target.checked
        let {
            disabled,
            onChanged,
            value
        } = this.props
        let {
            groupDisabled
        } = this.context

        if (disabled || groupDisabled) return
        if (status) {
            onChanged && onChanged(value)
        }

        this.setState({isChecked: status})
    }

    getChecked (props) {
        return props.curValue === props.value || props.isChecked
    }

    render () {
        let libName = this.getLibName()
        let formatClsNames = this.formatClsNames
        let {
            curValue,
            value,
            disabled,
            name,
            children
        } = this.props
        let {
            isChecked
        } = this.state
        let {
            groupDisabled
        } = this.context

        return <label className={ `${ libName }-radio` }>
                    <span className={ formatClsNames(
                            `${ libName }-radio__selector`,
                            `${ isChecked ? 'is-checked' : '' }`,
                            `${ disabled || groupDisabled ? `disabled` : '' }`
                        ) }>
                        <input type="radio"
                            name={ name }
                            value={ value }
                            checked={ isChecked }
                            disabled={ disabled || groupDisabled }
                            className={ `${ libName }-origin-el` }
                            onChange={ this.onChanged.bind(this) }/>
                    </span>
                    <span className={ `${ libName }-radio__label` }>
                        { children }
                    </span>
                </label>
    }
}

Radio.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChanged: PropTypes.func
}

Radio.defaultProps = {
    isChecked: false,
    disabled: false,
    onChanged: () => {}
}

Radio.contextTypes = {
    radioGroup: PropTypes.any,
    groupDisabled: PropTypes.bool
}

export default Radio
