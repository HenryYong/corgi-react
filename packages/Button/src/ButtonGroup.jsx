/**
 *  Button Group组件
 *  Created @ 2017-08-06 00:15:30
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import { Component } from 'libs'

class ButtonGroup extends Component {
    render () {
        return <div className={ `${ this.getLibName() }-btn-group` }>
                    { this.props.children }
                </div>
    }
}

export default ButtonGroup
