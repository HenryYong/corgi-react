/**
 *  utility tools
 *  Created @ 2017-08-04 22:59:01
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import PropTypes from 'prop-types'

class Component extends React.Component {
    // UI库的名字
    getLibName () {
        return 'corgi'
    }

    // 格式化函数名
    formatClsNames (...args) {
        return args.join(' ').replace(/\s{2,}/g, ' ').trim()
    }

    // 去掉字符串中指定子串并将结果转成数字
    convertToNum (str, delimeter = 'px') {
        let reg = new RegExp(delimeter, 'g')

        return Number(str.replace(reg, ''))
    }

    /**
     *  根据指定的key值判断某个值是否存在于数组中的某一项（Object）中
     *  @param arr {Array} - 待循环的数组
     *  @param key {String} - 待寻找的key值
     *  @param value {String/Number} - 待比对的value值
     */
    isInArrayComplex (arr, key, value) {
        let result = {
            result: false
        }

        for (let [index, item] of arr.entries()) {
            if (item[key] === value) {
                result.result = true
                result.index = index
                break
            }
        }

        return result
    }

    // 判断节点是否是由createElement生成的
    isVNode (node) {
        return node instanceof Object && node.hasOwnProperty('$$typeof')
    }
}

export default Component
