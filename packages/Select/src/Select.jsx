/**
 *  Select Component
 *  Created @ 2017-08-30 13:22:32
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import ClickOutside from 'react-click-outside'
import { Component } from 'libs'
import { Selector, Input } from 'packages'
import SelectOption from './SelectOption'

class Select extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isShowList: false,
            showText: this.props.multiple ? '' : this.props.value,
            showArr: this.props.multiple ? this.props.value : [],
            calcMultipleSelected: null,     // tpl of multiple selected
            calcMultipleWrapper: null,
            calcEditorSize: '36px',
            curItem: null,       // in single select mode - obj; in multiple select mode - arr
            localChildren: this.props.children,
            calcList: null,
            calcFilter: null
        }
    }

    componentWillMount () {
        if (this.props.multiple) {
            this.generateMultipleSelected()
        }
        this.generateList()
    }

    // reset filter input and list
    resetFilterInput () {
        if (!this.$filter) return
        this.$filter.$input.value = ''      // empty filter input
        this.setState({
            localChildren: this.props.children
        })
    }

    // toggle show/hide of selector
    handleSelectorToggle () {
        let {
            onShown,
            onCollapsed,
            disabled,
            enableFilter,
            children
        } = this.props

        if (disabled) return

        this.setState({
            isShowList: !this.state.isShowList
        }, () => {
            if (this.state.isShowList) {       // show list
                this.generateList()
                if (enableFilter) {     // focus on input if enable filter
                    this.$filter.$input.focus()
                }
                onShown && onShown()
            } else {                         // collapse list
                if (enableFilter) {
                    this.resetFilterInput()
                }

                onCollapsed && onCollapsed()
            }
        })
    }

    // handle option click event
    handleOptionOnClick (obj) {
        event.stopPropagation()

        let {
            onSelected,
            multiple
        } = this.props
        let isShowList = false
        let showText = '', curItem = null

        if (multiple) {     // multiple select
            isShowList = true

            let isInArr = this.isInArrayComplex(this.state.showArr, 'value', obj.value)
            let arr = []

            if (!isInArr.result) {
                arr.push(obj)
                arr = this.state.showArr.concat(arr)
            } else {
                arr = this.state.showArr
                arr.splice(isInArr.index, 1)
            }

            this.setState({
                isShowList,
                showText,
                showArr: arr
            }, () => {
                this.generateMultipleSelected()
                this.generateList()
                onSelected && onSelected(obj)
            })
        } else {
            showText = obj.label
            curItem = obj

            this.setState({
                isShowList,
                showText,
                curItem
            }, () => {
                this.resetFilterInput()
                onSelected && onSelected(obj)
            })
        }
    }

    // empty selected options
    clearEditor (e) {
        let {
            onClear,
            multiple
        } = this.props

        if (multiple) {

        } else {
            this.setState({
                showText: '',
                curItem: null
            }, () => {
                onClear && onClear()
            })
        }

        e.stopPropagation()
    }

    // callback when click outside of component
    handleClickOutside () {
        if (this.state.isShowList) {
            this.handleSelectorToggle()
        }
    }

    // calc size of editor
    getEditorSize () {
        let calcHeight = getComputedStyle(this.$multiple).height

        return `${Math.max(this.convertToNum(calcHeight), 36)}px`
    }

    // generate DOM of selected list
    generateMultipleWrapper () {
        this.setState({
            calcMultipleWrapper: <div ref={ multiple => this.$multiple = multiple }
                                    className={ this.formatClsNames(
                                        `${ this.getLibName() }-select__multiple-wrapper`
                                    ) }
                                    onClick={ this.handleSelectorToggle.bind(this) }>
                                    { this.state.calcMultipleSelected }
                                </div>
        }, () => {
            let _height = this.getEditorSize()

            this.$selector.$editor.$input.style.height = _height
            this.setState({
                calcEditorSize: _height
            })
        })
    }

    // generate multiple selected list in selector
    generateMultipleSelected () {
        let {
            showArr: arr
        } = this.state

        let libName = this.getLibName()
        let formatClsNames = this.formatClsNames
        let tpl = arr.map((v, k) => {
            return <span
                className={ formatClsNames(
                    `${ libName }-tag`,
                    'primary'
                ) }
                key={ v.value }
                onClick={ this.handleSelectorToggle.bind(this) }>
                { v.label }
            </span>
        })

        this.setState({
            calcMultipleSelected: tpl
        }, () => {
            this.generateMultipleWrapper()
        })
    }

    // assembly options
    generateList () {
        let {
            multiple,
            enableFilter,
            render
        } = this.props
        let {
            curItem,
            localChildren,
            showArr
        } = this.state
        let optionsTpl

        optionsTpl = localChildren && localChildren.map((v, k) => {
            let {
                value,
                label
            } = v.props

            return <SelectOption
                        key={ v.key }
                        selected={ (curItem && curItem.value === value) || this.isInArrayComplex(showArr, 'value', value).result }
                        multiple={ multiple }
                        onClick={ this.handleOptionOnClick.bind(this) }
                        render={ render }
                        { ...v.props }
                    />
        })

        this.setState({
            calcList: optionsTpl
        })

        if (enableFilter) { // add filter area if enable filter
            this.generateFilter()
        }
    }

    generateFilter () {
        let libName = this.getLibName()
        let formatClsNames = this.formatClsNames
        let filter = React.createElement(Input, {
                ref: filter => this.$filter = filter,
                key: 'filter',
                className: formatClsNames(
                    `${ libName }-select__filter`,
                    `${ libName }-input__el`
                ),
                icon: 'check',
                iconFloat: 'left',
                onChange: this.handleFilter.bind(this)
            })

        this.setState({
            calcFilter: filter
        })
    }

    // callback function for filter
    handleFilter (input) {
        let arr = []
        let {
            filterRule,
            onFilter
        } = this.props

        this.props.children.map((v, k) => {
            let {
                value,
                label
            } = v.props

            if ((filterRule && filterRule(input, {
                value: value,
                label: label
            })) || v.props.label.includes(input)) {
                arr.push(v)
            }
        })

        this.setState({
            localChildren: arr
        }, () => {
            onFilter && onFilter(input)
            this.generateList()
        })
    }

    render () {
        let libName = this.getLibName()
        let formatClsNames = this.formatClsNames
        let {
            children,
            enableFilter,
            enableClear,
            placeholder,
            disabled,
            multiple
        } = this.props
        let {
            showArr,
            isShowList,
            showText,
            curItem,
            calcEditorSize,
            calcMultipleWrapper,
            calcList,
            calcFilter
        } = this.state

        return <div
                    className={ formatClsNames(
                        `${ libName }-select`,
                        `${ disabled ? `${ libName }-select__disabled` : '' }`,
                        `${ multiple ? `${ libName }-select__multiple` : '' }`
                    ) }
                    style={{ height: this.state.calcEditorSize }}>
                    <Selector ref={ selector => this.$selector = selector }
                        placeholder={ multiple && showArr.length ? '' : placeholder }
                        readOnly={ true }
                        expanded={ isShowList }
                        selectorIcon='triangle'
                        extraIcon='close'
                        enableExtraIcon={ enableClear }
                        value={ showText }
                        disabled={ disabled }
                        enableClear={ enableClear }
                        onClick={ this.handleSelectorToggle.bind(this) }
                        extraIconOnClick={ this.clearEditor.bind(this) }
                    />
                    { multiple ? calcMultipleWrapper : '' }
                    <div className={ formatClsNames(
                            `${ libName }-select__list`
                        ) }
                        style={{
                            display: `${ isShowList ? 'block' : 'none'}`,
                            top: `${ this.convertToNum(calcEditorSize) + 4 }px`
                        }}>
                        { calcFilter }
                        <ul>
                            { calcList }
                        </ul>
                    </div>
                </div>
    }
}

Select.propTypes = {
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    // input相关属性
    placeholder: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    value: PropTypes.oneOfType([    // current display value
        PropTypes.string,
        PropTypes.number,
        PropTypes.array
    ]),
    enableFilter: PropTypes.bool,
    filterRule: PropTypes.func,   // custom filter rule, accept two variables
    enableClear: PropTypes.bool,
    render: PropTypes.func,         // custom render function for options
    // callbacks
    onSelected: PropTypes.func,     // when selected item
    onShown: PropTypes.func,        // when show list
    onCollapsed: PropTypes.func,    // when collapse list
    onClear: PropTypes.func,        // when clear result
    onFilter: PropTypes.func         // when input filter content
}

Select.defaultProps = {
    value: '',
    children: []
}

export default ClickOutside(Select)
