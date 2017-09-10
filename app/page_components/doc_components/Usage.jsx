/**
 *  Demo Usage of Component in Docs
 *  Created @ 2017-07-29 23:31:42
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import UsageTitle from './UsageTitle'
import PropTypes from 'prop-types'
import jsBeautify from 'js-beautify'
// import diff from 'prettydiff'
import highlight from 'highlight.js'
import style from './../../../node_modules/highlight.js/styles/atom-one-light.css'

class Usage extends React.Component {
    constructor (props) {
        super(props)
        this.state = { isToggleOn: false }
    }

    getChildContext () {
        return {
            title: this.props.title,
            description: this.props.description
        }
    }

    toggleBar = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    componentDidUpdate () {
        highlight.initHighlighting.called = false
        highlight.initHighlighting()
    }

    componentDidMount () {
        highlight.initHighlightingOnLoad()
    }

    render () {
        let icon = null
        let beautify = jsBeautify.js_beautify
        let {
            isToggleOn
        } = this.state
        let {
            title,
            description,
            demo,
            code,
            explain
        } = this.props
        let args = {
            mode: 'beautify',
            source: code
        }

        if (isToggleOn) {
            icon = <i className="iconfont icon-corgi-up"></i>
        } else {
            icon = <i className="iconfont icon-corgi-up down"></i>
        }

        return <div className="component-usage">
                    <UsageTitle
                        title={ title }
                        description = { description }
                    />
                    <div className="usage-content">
                        <div className="usage-demo">
                            { demo }
                        </div>
                        <div className="usage-detail"
                            style={{ display: isToggleOn ? 'block' : 'none' }}>
                            <div className="usage-code">
                                <pre>
                                    <code className="javascript">
                                        { beautify(this.props.code, {indent_size: 4}) }
                                    </code>
                                </pre>
                            </div>
                            <div className="usage-explain">
                                { explain }
                            </div>
                        </div>
                        <div className="usage-bar" onClick={ this.toggleBar }>
                            { icon } { isToggleOn ? '隐藏' : '显示' }代码
                        </div>
                    </div>
                </div>
    }
}

Usage.defaultProps = {
    title: '',
    description: '',
    code: ''
}

Usage.childContextTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default Usage
