/**
 *  Table for describe Attrs or Events
 *  Created @ 2017-09-09 18:16:43
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import Title from './UsageTitle'
import { Table } from 'packages'
import { Utils } from 'libs'

class ConfigTable extends React.Component {
    render () {
        let {
            type,
            title,
            data
        } = this.props

        return <section className='config-table'>
                    <Title title={ `${ title } ${ type === 'attr' ? 'Attributes' : 'Events' }` }/>
                    <Table
                        headers={ type === 'attr' ? Utils.getAttrsHeader : Utils.getEventsHeader }
                        data={ data }
                        hoverEffect={ false }
                    />
                </section>
    }
}

ConfigTable.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.array
}

export default ConfigTable
