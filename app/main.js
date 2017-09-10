/**
 *  Created @ 2017-07-19 00:23:56
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import AppHeader from 'pages/header'
import AppNav from 'pages/LeftNav'
import AppDetail from 'pages/Detail'

ReactDOM.render(
    <article className="app">
        <AppHeader />
        <HashRouter hashType="noslash">
            <section className="app-content">
                <AppNav />
                <AppDetail />
            </section>
        </HashRouter>
    </article>,
    document.getElementById('app')
)
