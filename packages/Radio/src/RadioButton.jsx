/**
 *  Radio Buuton Component
 *  Created @ 2017-09-08 13:02:33
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'
import Radio from './Radio'

class RadioButton extends Radio {
    render () {
        let libName = this.getLibName()
        let formatClsNames = this.formatClsNames
        let {
            disabled,
            value,
            curValue,
            children
        } = this.props
        let {
            isChecked
        } = this.state
        let {
            groupDisabled
        } = this.context

        return <label className={ formatClsNames(
                        `${ libName }-radio__button`,
                        `${ isChecked ? 'is-checked' : '' }`,
                        `${ disabled || groupDisabled ? 'disabled' : '' }`
                    ) }>
                    <input type="radio"
                        className={ `${ libName }-radio__button-el` }
                        disabled={ disabled || groupDisabled }
                        checked={ isChecked }
                        onChange={ this.onChanged.bind(this) }
                    />
                    <span className={ formatClsNames(
                            `${ libName }-radio__button-text`
                        ) }>
                        { children || value }
                    </span>
                </label>
    }
}

RadioButton.propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

RadioButton.contextTypes = {
    radioGroup: PropTypes.any,
    groupDisabled: PropTypes.bool
}

export default RadioButton
