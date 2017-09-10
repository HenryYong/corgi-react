/**
 *  文档内容
 *  Created @ 2017-07-20 15:26:47
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import ReactRouter from './../router/ReactRouter'

class AppDetail extends React.Component {
    render () {
        return <section className="app-detail">
                    <ReactRouter />
                </section>
    }
}

export default AppDetail
