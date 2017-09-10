/**
 *  Title of Doc
 *  Created @ 2017-07-29 23:41:32
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'

class DocTitle extends React.Component {
    render () {
        return <div className="doc-title">
                    <h2 className="main-title"> { this.props.title } </h2>
                    <h5 className="sub-title"> { this.props.subtitle } </h5>
                </div>
    }
}

export default DocTitle
