/**
 *  Checkbox Group Component
 *  Created @ 2017-08-13 18:38:57
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'

class CheckboxGroup extends Component {
    constructor (props) {
        super(props)
        this.state = {
            length: 0
        }
    }

    getChildContext () {
        return {
            cbGroup: this
        }
    }

    render () {
        return <div className={ `${this.getLibName()}-checkbox__group` }>
                    { this.props.children }
                </div>
    }
}

CheckboxGroup.propTypes = {
    max: PropTypes.number,
    min: PropTypes.number
}

CheckboxGroup.childContextTypes = {
    cbGroup: PropTypes.any
}

export default CheckboxGroup
