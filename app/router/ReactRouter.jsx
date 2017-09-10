/**
 *  路由配置
 *  Created @ 2017-07-20 16:36:36
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Installation from 'pages/Installation'
import Guide from 'pages/Guide'
import Layout from 'pages/Layout'
import Colors from 'pages/Colors'
import Transition from 'pages/Transition'
import Button from 'pages/Button'
import Radio from 'pages/Radio'
import Checkbox from 'pages/Checkbox'
import Input from 'pages/Input'
import Table from 'pages/Table'
import Select from 'pages/Select'
import Form from 'pages/Form'
import Switch from 'pages/Switch'

class ReactRouter extends React.Component{
    render () {
        return  <div>
                    <Route exact path="/" render={() => (
                        <Redirect to="/installation" />
                    )} />
                    <Route path="/installation" component={ Installation } />
                    <Route path="/guide" component={ Guide } />
                    <Route path="/layout" component={ Layout } />
                    <Route path="/colors" component={ Colors } />
                    <Route path="/transition" component={ Transition } />
                    <Route path="/button" component={ Button } />
                    <Route path="/radio" component={ Radio } />
                    <Route path="/checkbox" component={ Checkbox } />
                    <Route path="/input" component={ Input } />
                    <Route path="/table" component={ Table } />
                    <Route path="/select" component={ Select } />
                    <Route path="/form" component={ Form } />
                    <Route path="/switch" component={ Switch } />
                </div>
    }
}

export default ReactRouter
