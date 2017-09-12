/**
 *  Form.Row Component
 *  Created @ 2017-09-07 00:18:36
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'

class FormRow extends Component {
    render () {
        let formatClsNames = this.formatClsNames
        let libName = this.getLibName()
        let {
            label,
            required,
            children
        } = this.props
        let {
            labelWidth,
            labelAlign,
            inlineWidth
        } = this.context

        return <section className={ formatClsNames(
                            `${ libName }-form__row`
                        ) }
                        style={{ width: `${ typeof inlineWidth === 'number' ? `${ inlineWidth }px` : `${ inlineWidth }` }` }}>
                    <div className={ formatClsNames(
                            `${ libName }-form__label`,
                            `${ required ? `${ libName }-form__label-required` : '' }`
                        ) }
                        style={{ width: labelWidth }}>
                            { label }
                    </div>
                    <div className={ formatClsNames(
                            `${ libName }-form__content`
                        ) }
                        style={{ marginLeft: (labelAlign === 'top' ? 0 : labelWidth) }}>
                        { children }
                    </div>
                </section>
    }
}

FormRow.propTypes = {
    label: function (props, propName, componentName) { // allow string or jsx
        let cur = props[propName]
        let isString = typeof cur === 'string'
        let isObject = cur instanceof Object
        let error = 0

        if (cur !== undefined) {
            if (!isString && !isObject) {
                error++
            }

            if (isObject && !cur.hasOwnProperty('$$typeof')) {
                error++
            }

            if (error) {
                return new Error(`Invalid Props: ${propName} in ${componentName}`)
            }
        }
    },
    required: PropTypes.bool
}

FormRow.contextTypes = {
    labelWidth: PropTypes.number,
    labelAlign: PropTypes.string,
    inlineWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

export default FormRow
