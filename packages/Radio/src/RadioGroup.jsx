/**
 *  Radio Group Component
 *  Created @ 2017-08-17 23:11:20
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'

class RadioGroup extends Component {
    constructor(props) {
        super(props)
    }

    getChildContext () {
        return {
            radioGroup: this,
            groupDisabled: this.props.disabled
        }
    }

    onChanged (value) {
        !this.props.disabled && this.props.onChanged && this.props.onChanged(value)
    }

    render () {
        let libName = this.getLibName()
        let formatClsNames = this.formatClsNames
        let {
            size,
            disabled,
            curValue
        } = this.props

        return <div
                    className={ formatClsNames(
                            `${ libName }-radio__group`,
                            `${ size ? `${ libName }-radio__group-${ size }` : '' }`,
                            `${ disabled ? `${ libName }-radio__group-disabled` : '' }`
                        ) }>
                    {
                        React.Children.map(this.props.children, element => {
                            return React.cloneElement(element, Object.assign({}, element.props, {
                                curValue: curValue,
                                onChanged: this.onChanged.bind(this),
                                groupDisabled: disabled
                            }))
                        })
                    }
                </div>
    }
}

RadioGroup.propTypes = {
    curValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    disabled: PropTypes.bool,
    onChanged: PropTypes.func,
    size: PropTypes.string
}

RadioGroup.childContextTypes = {
    radioGroup: PropTypes.any,
    groupDisabled: PropTypes.bool
}

export default RadioGroup
