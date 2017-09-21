/**
 *  Selector - sub component
 *  Created @ 2017-09-15 16:23:09
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import ClickOutside from 'react-click-outside'
import { Component } from 'libs'
import { Input } from 'packages'

class Selector extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isExpand: this.props.expanded,
            calcSelectorIcon: this.props.selectorIcon
        }
    }

    // update state
    componentWillReceiveProps (nextProps) {
        this.setState({
            isExpand: nextProps.expanded
        })
    }

    handleOnClick (e) {
        let {
            onClick,
            selectorIcon,
            disabled
        } = this.props

        if (disabled) return

        onClick && onClick(e)
        selectorIcon && (
            this.setState({
                isExpand: !this.state.isExpand
            })
        )
    }

    handleOnMouseEnter () {
        let {
            onMouseEnter,
            enableClear,
            value,
            extraIcon
        } = this.props

        if (enableClear && value) {
            this.setState({
                calcSelectorIcon: extraIcon
            })
        }

        onMouseEnter && onMouseEnter(e)
    }

    handleOnMouseLeave () {
        let {
            onMouseLeave,
            selectorIcon
        } = this.props

        this.setState({
            calcSelectorIcon: selectorIcon
        })

        onMouseLeave && onMouseLeave(e)
    }

    // handle value change event
    handleOnChange (val) {
        let {
            onChange
        } = this.props

        onChange && onChange(val)
    }

    // handle click event of icon
    handleExtraIconOnClick (e) {
        let {
            extraIconOnClick,
            enableExtraIcon,
            selectorIcon
        } = this.props
        let {
            calcSelectorIcon
        } = this.state

        // something selected
        if (selectorIcon !== calcSelectorIcon) {
            enableExtraIcon && extraIconOnClick && extraIconOnClick(e)

            this.setState({
                calcSelectorIcon: this.props.selectorIcon
            })

            e.stopPropagation()
        }
    }

    render () {
        let libName = this.getLibName()
        let formatClsNames = this.formatClsNames
        let {
            placeholder,
            readOnly,
            enableExtraIcon,
            value,
            disabled,
            onChange
        } = this.props
        let {
            isExpand,
            calcSelectorIcon
        } = this.state

        return <div className={ formatClsNames(
                        `${ libName }-selector`,
                        `${ enableExtraIcon ? `${ libName }-selector__extra` : '' }`,
                        `${ disabled ? `${ libName }-selector__disabled` : '' }`
                    ) }
                    onClick={ this.handleOnClick.bind(this) }
                    onMouseEnter={ this.handleOnMouseEnter.bind(this) }
                    onMouseLeave={ this.handleOnMouseLeave.bind(this) }>
                    <i className={ formatClsNames(
                            'iconfont',
                            `${ calcSelectorIcon ? `icon-${ libName }-${ calcSelectorIcon }` : '' }`,
                            `${ libName }-selector__icon`,
                            `${ isExpand ? 'expanded' : '' }`
                        ) }
                        onClick={ this.handleExtraIconOnClick.bind(this) }
                    />
                    <Input
                        ref={ editor => this.$editor = editor }
                        placeholder={ placeholder }
                        readOnly={ readOnly }
                        value={ value }
                        disabled={ disabled }
                        onChange={ this.handleOnChange.bind(this) }
                    />
                </div>
    }
}

Selector.propTypes = {
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    expanded: PropTypes.bool,
    disabled: PropTypes.bool,
    selectorIcon: PropTypes.oneOfType([     // default icon, can set to false
        PropTypes.bool,
        PropTypes.string
    ]),
    extraIcon: PropTypes.string,            // display when mouseover
    enableExtraIcon: PropTypes.bool,        // extra icon, e.g.: display this icon when mouse over component
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    extraIconOnClick: PropTypes.func        // handle extra icon click
}

Selector.defaultProps = {
    placeholder: '请选择',
    readOnly: true,
    expanded: false
}

export default Selector
