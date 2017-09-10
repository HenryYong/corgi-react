/**
 *  utils functions
 *  Created @ 2017-09-09 17:07:09
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

/**
 *  判断参数是否是字符串或通过creatElement生成的节点
 *  @param 参数请参考PropTypes自定义验证的参数
 */
function checkStrAndObj (props, propName, componentName) {
    let curProp = props[propName]
    let isString = typeof curProp === 'string'
    let isObject = curProp instanceof Object
    let error = 0

    if (!isString && !isObject) {
        error++
    }

    if (isObject && !curProp.hasOwnProperty('$$typeof')) {
        error++
    }

    if (curProp !== undefined && error) {
        return false
    } else {
        return true
    }
}

// 文档中属性表头
const getAttrsHeader = [
    {
        label: '参数',
        id: 'props'
    },
    {
        label: '说明',
        id: 'desc'
    },
    {
        label: '类型',
        id: 'type'
    },
    {
        label: '可选值',
        id: 'available'
    },
    {
        label: '默认值',
        id: 'defaultValue'
    }
]

// 文档中事件表头
const getEventsHeader = [
    {
        label: '事件名称',
        id: 'name'
    },
    {
        label: '说明',
        id: 'desc'
    },
    {
        label: '回调参数',
        id: 'cbvar'
    }
]

module.exports = {
    checkStrAndObj,
    getAttrsHeader,
    getEventsHeader
}
