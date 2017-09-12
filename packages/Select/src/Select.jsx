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
import { Input } from 'packages'

class Select extends Component {
    constructor (props) {
        super(props)

        this.state = {
            showList: false,
            showText: this.props.value,
            showArr: [],
            selectList: null,
            calcMultipleSelected: null,
            calcEditorSize: '36px',
            editorIcon: 'triangle'
        }
    }

    componentWillMount () {
        this.generateList()
    }

    // 鼠标点击组件
    handleWrapperClick () {
        let isShowList = this.state.showList
        let {
            disabled,
            onShown,
            onCollapsed
        } = this.props

        if (disabled) return

        this.setState({
            showList: !isShowList
        }, () => {
            if (this.state.showList) {
                onShown && onShown()
            } else {
                onCollapsed && onCollapsed()
            }
        })
    }

    // 鼠标指向组件
    handleWrapperHover () {
        let {
            enableClear
        } = this.props
        let {
            showText,
            showArr
        } = this.state
        let icon

        if (enableClear && (showText || showArr.length)) {
            icon = 'close clear-icon'
        } else {
            icon = 'triangle'
        }

        this.setState({
            editorIcon: icon
        })
    }

    // 鼠标离开组件
    handleWrapperLeave () {
        this.setState({
            editorIcon: 'triangle'
        })
    }

    // 选中选项的回调函数
    handleOptionClick (index) {
        let {
            list,
            displayKey,
            onSelected,
            multiple
        } = this.props
        let {
            showArr: curShowArr
        } = this.state
        let curItem = list[index]
        let isShowList, curShowText

        if (curItem.disabled) return

        if (multiple) {     // 多选
            let isInArray = this.isInArrayComplex(curShowArr, displayKey, curItem[displayKey])

            isShowList = multiple
            curShowText = ''
            if (!isInArray.result) {
                curShowArr.push(curItem)
            } else {
                curShowArr.splice(isInArray.index, 1)
            }
        } else {            // 单选
            isShowList = false
            curShowText = curItem[displayKey]
        }

        this.setState({
            showList: isShowList,
            showText: curShowText,
            showArr: curShowArr
        }, () => {
            this.generateList()

            if (multiple) {
                this.generateMultipleSelected()
            }
        })
        onSelected && onSelected(multiple ? curShowArr : curShowText)
    }

    // 清空已选项
    clearEditor (e) {
        let {
            onClear
        } = this.props

        if (this.props.multiple) {
            this.setState({
                showArr: [],
                showList: false
            }, () => {
                this.generateMultipleSelected()
                this.generateList()
                this.handleWrapperLeave()
                onClear && onClear()
            })
        } else {
            this.setState({
                showText: ''
            }, () => {
                this.handleWrapperLeave()
                onClear && onClear()
            })
        }

        e.stopPropagation()
    }

    // 计算实时的editor的高度
    getEditorSize () {
        let calcHeight = getComputedStyle(this.$multiple).height

        return `${Math.max(this.convertToNum(calcHeight), 36)}px`
    }

    // 根据state中的showArr生成多选的值
    generateMultipleSelected () {
        let {
            showArr: arr
        } = this.state
        let {
            displayKey
        } = this.props
        let libName = this.getLibName()
        let tpl = arr.map((item, index) =>
            <span
                className={ this.formatClsNames(
                    `${ libName }-tag`,
                    'primary'
                ) }
                key={ item[displayKey] }>
                { item[displayKey] }
            </span>
        )
        // tag的关闭按钮
        // <i className={ this.formatClsNames(
        //         `${ libName }-tag__icon`,
        //         'iconfont',
        //         `icon-${ libName }-close`
        //     ) }
        //     onClick={ this.removeMultipleItem(event, item) }/>

        this.setState({
            calcMultipleSelected: tpl
        }, () => {
            this.setState({
                calcEditorSize: this.getEditorSize()
            })
        })
    }

    // 删除多选选项
    removeMultipleItem (e, item) {
        let {
            displayKey
        } = this.props
        let isInArray = this.isInArrayComplex(this.state.showArr, displayKey, item[displayKey])

        if (isInArray.result) {
            this.setState({
                showArr: this.state.showArr.splice(isInArray.index, 1)
            })
        }
        e.stopPropagation()
    }

    // 根据传入的数据生成列表
    generateList (list = this.props.list) {
        let displayKey = this.props.displayKey
        let libName = this.getLibName()
        let isInArrayComplex = this.isInArrayComplex
        let {
            showText,
            showArr
        } = this.state
        let {
            multiple
        } = this.props

        let tpl = list.map((item, index) => {
            let curItem = item[displayKey]

            return <div className={ this.formatClsNames(
                    `${ libName }-select__item`,
                    `${ item.disabled ? 'disabled' : '' }`,
                    `${ showText === curItem || isInArrayComplex(showArr, displayKey, item[displayKey]).result ? 'selected' : '' }`
                ) }
                key={ curItem }
                onClick={ this.handleOptionClick.bind(this, index) }>
                { curItem }
                {
                    multiple ? <i className={ this.formatClsNames(
                                        'iconfont',
                                        `icon-${ libName }-check`
                                    ) }/> : ''
                }
            </div>
        })

        this.setState({
            selectList: tpl
        })
    }

    // 配置可筛选时，input框输入的回调函数
    changeHandler (val) {
        this.setState({
            showText: val
        }, () => {
            let {
                list,
                displayKey,
                searchMethod,
                onInput
            } = this.props
            let inputValue = this.state.showText
            let resultArr = []

            // 当前是否配置了搜索规则函数
            if (!searchMethod) {
                for (let item of list) {
                    if (item[displayKey].indexOf(inputValue) > -1) {
                        resultArr.push(item)
                    }
                }
            } else {
                resultArr = searchMethod(inputValue)
            }

            this.generateList(resultArr)
            onInput && onInput(inputValue, resultArr)
        })
    }

    // 鼠标点击组件外时的回调函数
    handleClickOutside () {
        if (this.state.showList) {
            this.setState({
                showList: false
            })
        }
    }

    render () {
        let libName = this.getLibName()
        let {
            list,
            enableSearch,
            enableClear,
            placeholder,
            disabled,
            multiple
        } = this.props
        let {
            showArr
        } = this.state
        let formatClsNames = this.formatClsNames

        return <div ref={ (root) => this.$root = root }
                    className={ formatClsNames(
                        `${ libName }-select`,
                        `${ disabled ? `${ libName }-select__disabled` : '' }`,
                        `${ multiple ? `${ libName }-select__multiple` : '' }`
                    ) }
                    style={{ height: this.state.calcEditorSize }}>
                    <div className={ formatClsNames(
                            `${ libName }-select__wrapper`,
                            `${ enableClear ? `${ libName }-select__clear` : '' }`
                        ) }
                        onClick={ this.handleWrapperClick.bind(this) }
                        onMouseEnter={ this.handleWrapperHover.bind(this) }
                        onMouseLeave={ this.handleWrapperLeave.bind(this) }>
                        <Input
                            ref={ (editor) => this.$editor = editor }
                            mode='input'
                            placeholder={ multiple && showArr.length ? '' : placeholder }
                            extCls={ `${ libName }-select__el` }
                            readOnly={ !enableSearch }
                            value={ this.state.showText }
                            disabled={ disabled }
                            style={{ height: this.state.calcEditorSize }}
                            onChange={ this.changeHandler.bind(this) }
                        />
                        <i className={ formatClsNames(
                                'iconfont',
                                `icon-${ libName }-${ this.state.editorIcon }`,
                                `${ libName }-select__icon`,
                                `${ this.state.showList ? 'expanded' : '' }`
                            ) }
                            onClick={ this.clearEditor.bind(this) }
                        />
                    <div ref={(multiple) => this.$multiple = multiple}
                            className={ this.formatClsNames(
                                `${ libName }-select__multiple-wrapper`
                            ) }>
                            { this.state.calcMultipleSelected }
                        </div>
                    </div>
                    <div className={ formatClsNames(
                            `${ libName }-select__list`
                        ) }
                        style={{
                            display: this.state.showList ? 'block' : 'none',
                            top: `${this.convertToNum(this.state.calcEditorSize) + 4}px`
                        }}>
                            { this.state.selectList }
                    </div>
                </div>
    }
}

Select.propTypes = {
    list: PropTypes.array,
    displayKey: PropTypes.string,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    // input相关属性
    placeholder: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    enableSearch: PropTypes.bool,
    searchMethod: PropTypes.func,   // 自定义搜索规则，需返回一个结果数组
    enableClear: PropTypes.bool,
    // 各种回调函数
    onSelected: PropTypes.func,     // 选中选项时
    onShown: PropTypes.func,        // 显示结果列表时
    onCollapsed: PropTypes.func,    // 隐藏结果列表时
    onClear: PropTypes.func,        // 清空选项时
    onInput: PropTypes.func         // 搜索输入时
}

Select.defaultProps = {
    displayKey: 'text',
    value: ''
}

export default ClickOutside(Select)
