/**
 *  Switch
 *  Created @ 2017-09-08 19:02:45
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Component, Utils } from 'libs'

class Switch extends Component {
    constructor (props) {
        super(props)

        let {
            status
        } = this.props

        this.state = {
            switchStatus: status,
            label: this.assembleLabel()
        }
    }

    changeHandler () {
        let {
            switchStatus
        } = this.state
        let {
            onValue,
            offValue,
            onChanged
        } = this.props
        let $status = !switchStatus

        this.setState({
            switchStatus: $status
        }, () => {
            let onVal = onValue === undefined ? true : onValue
            let offVal = offValue === undefined ? false : offValue

            this.setState({
                label: this.assembleLabel()
            })
            onChanged && onChanged($status ? onVal : offVal)
        })
    }

    assembleLabel () {
        let {
            size,
            shape,
            status,
            hasText,
            onText,
            offText,
            onIcon,
            offIcon
        } = this.props
        let tmpLabel = null
        let withLabel = null
        let curStatus = this.state ? this.state.switchStatus : status
        let libName = this.getLibName()
        let formatClsNames = this.formatClsNames
        let onTxt = onText || 'ON'
        let offTxt = offText || 'OFF'

        if (hasText && size !== 'small') {
            if (curStatus) {
                if (onIcon) {
                    tmpLabel = <i className={ formatClsNames(
                                    'iconfont',
                                    `icon-${ libName }-${ onIcon }`
                                ) }></i>
                } else {
                    tmpLabel = onTxt
                }
            } else {
                if (offIcon) {
                    tmpLabel = <i className={ formatClsNames(
                                    'iconfont',
                                    `icon-${ libName }-${ offIcon }`
                                ) }></i>
                } else {
                    tmpLabel = offTxt
                }
            }

            withLabel = tmpLabel ? <span className={ formatClsNames(
                                            `${ libName }-switch__label`
                                        ) }>
                                        { tmpLabel }
                                    </span> : null
        }

        return withLabel
    }

    render () {
        let libName = this.getLibName()
        let formatClsNames = this.formatClsNames
        let {
            switchStatus,
            label
        } = this.state
        let {
            size,
            shape,
            hollow,
            onColor,
            offColor
        } = this.props
        let bgc = `${ switchStatus ? onColor : offColor }`

        return <label className={ formatClsNames(
                        `${ libName }-switch`,
                        `${ libName }-switch__${ switchStatus ? 'on' : 'off' }`,
                        `${ size ? `${ libName }-switch__${ size }` : '' }`,
                        `${ shape ? `${ libName }-switch__${ shape }` : '' }`,
                        `${ hollow ? `${ libName }-switch__hollow` : '' }`
                    ) }>
                    <input type="checkbox"
                        checked={ switchStatus }
                        className={ formatClsNames(
                            `${ libName }-switch__el`
                        ) }
                        onChange={ this.changeHandler.bind(this) }
                    />
                    <span className={ formatClsNames(
                            `${ libName }-switch__trigger`
                        ) }
                        style={{
                            backgroundColor: bgc,
                            borderColor: bgc
                        }}>
                        <span className={ formatClsNames(
                                `${ libName }-switch__slider`
                            ) }>
                        </span>
                    </span>
                    { label }
                </label>
    }
}

Switch.propTypes = {
    status: PropTypes.bool,
    size: PropTypes.string,
    shape: PropTypes.string,
    hasText: PropTypes.bool,
    onText: function (props, propName, componentName) {
        if (!Utils.checkStrAndObj(props, propName, componentName)) {
            return new Error(`Invalid Props: ${propName} in ${componentName}`)
        }

    },
    offText: function (props, propName, componentName) {
        if (!Utils.checkStrAndObj(props, propName, componentName)) {
            return new Error(`Invalid Props: ${propName} in ${componentName}`)
        }
    },
    onIcon: PropTypes.string,
    offIcon: PropTypes.string,
    onValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]),
    offValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]),
    onColor: PropTypes.string,
    offColor: PropTypes.string,
    onChanged: PropTypes.func
}

Switch.defaultProps = {
    status: false,
    hasText: true
}

export default Switch
