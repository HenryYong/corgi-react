/**
 *  Form Component
 *  Created @ 2017-09-07 00:18:05
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'

class Form extends Component {
    getChildContext () {
        let {
            labelWidth,
            labelAlign,
            inlineWidth
        } = this.props

        return {
            labelWidth: labelWidth,
            labelAlign: labelAlign,
            inlineWidth: inlineWidth
        }
    }

    submitHandler () {
        let {
            onSubmit
        } = this.props

        onSubmit && onSubmit()
    }

    render () {
        let formatClsNames = this.formatClsNames
        let libName = this.getLibName()
        let {
            labelAlign,
            inline
        } = this.props

        return <form className={ formatClsNames(
                        `${ libName }-form`,
                        `${ labelAlign ? `${ libName }-form__label-${ labelAlign }` : '' }`,
                        `${ inline ? `${ libName }-form__inline` : '' }`
                    ) }
                    onSubmit={ this.submitHandler.bind(this) }>
                    { this.props.children }
                </form>
    }
}

Form.propTypes = {
    inline: PropTypes.bool,
    onSubmit: PropTypes.func
}

Form.childContextTypes = {
    labelWidth: PropTypes.number,
    labelAlign: PropTypes.string,
    inlineWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

export default Form
