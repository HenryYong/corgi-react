/**
 *  Color Block Component in Docs
 *  Created @ 2017-07-31 00:11:45
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'libs'

class ColorBlock extends Component {
    render () {
        let $title = this.props.title
        let $subtitle = this.props.subtitle

        let _title = null
        let _subtitle = null

        _title = $title ? <h4 className='demo-color-title'>
                            { this.props.title }
                        </h4> : ''
        _subtitle = $subtitle ? <h6 className='demo-color-subtitle'>
                                    { this.props.subtitle }
                                </h6> : ''

        return <div className={ this.formatClsNames(
                                    `demo-color-block`,
                                    this.props.clsName) }>
                    { _title }
                    { _subtitle }
                </div>
    }
}

ColorBlock.PropTypes = {
    clsName: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
}

ColorBlock.defaultProps = {
    clsName: 'even'
}

export default ColorBlock
