/**
 *  Title Component in Docs
 *  Created @ 2017-07-31 18:06:01
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'

class UsageTitle extends React.Component {
    render () {
        return <div className="usage-title-wrapper">
                    <h4 className="usage-title"> { this.context.title || this.props.title } </h4>
                    <h5 className="usage-desc"> { this.context.description || this.props.description } </h5>
                </div>
    }
}

UsageTitle.PropTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

UsageTitle.contextTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default UsageTitle
