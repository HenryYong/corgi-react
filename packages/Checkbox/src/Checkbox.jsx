/**
 *  Checkbox Component
 *  Created @ 2017-08-11 20:00:42
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'

class Checkbox extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isChecked: props.isChecked,
            indeterminate: props.indeterminate
        }
    }

    componentWillMount () {
        // length attribute in parent component will plus 1 if current instance is checked
        if (this.state.isChecked) {
            this.context.cbGroup.state.length += 1
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            isChecked: nextProps.isChecked,
            indeterminate: nextProps.indeterminate
        })
    }

    onChecked (e) {
        let group = this.context.cbGroup
        let curChecked = e.target.checked
        let {
            onChecked
        } = this.props
        let {
            isChecked
        } = this.state

        // if (group) {
        //     let {
        //         min,
        //         max
        //     } = group.props
        //     let {
        //         length
        //     } = group.state
        //     console.log(curChecked, isChecked)
        //     let len = length + (curChecked ? 1 : -1)
        //
        //     if (min !== undefined && len < min) return
        //     if (max !== undefined && len > max) return
        //
        //     length = len
        // }

        this.setState({
            isChecked: !isChecked
        }, () => {
            onChecked && onChecked(isChecked)
        })
    }

    render () {
        let libName = this.getLibName()
        let formatClsNames = this.formatClsNames
        let {
            isChecked,
            indeterminate
        } = this.state
        let {
            disabled,
            children
        } = this.props

        return <label className={ `${ libName }-checkbox` }>
                    <span className={ formatClsNames(
                            `${ libName }-checkbox__selector`,
                            isChecked ? `checked` : '',
                            indeterminate ? `indeterminate` : '',
                            disabled ? `disabled` : ''
                        ) }>
                        <input type="checkbox"
                                checked={ isChecked }
                                disabled={ disabled }
                                className={ `${ libName }-origin-el` }
                                onChange={ this.onChecked.bind(this) } />
                    </span>
                    <span className={ `${ libName }-checkbox__label` }>
                        { children }
                    </span>
                </label>
    }
}

Checkbox.propTypes = {
    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChecked: PropTypes.func
}

Checkbox.defaultProps = {
    isChecked: false,
    disabled: false,
    indeterminate: false,
    onChecked: () => {}
}

Checkbox.contextTypes = {
    cbGroup: PropTypes.any
}

export default Checkbox
