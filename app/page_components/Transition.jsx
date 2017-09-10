/**
 *  Transition文档页
 *  Created @ 2017-07-20 16:52:17
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import DocTitle from 'doc_components/DocTitle'
import Usage from 'doc_components/Usage'

class Transition extends React.Component {
    render () {
        return <section className="transition-wrapper">
                    <DocTitle
                        title='内置过渡动画'
                        subtitle='组件库内置的过渡动画，开发者在开发时亦可使用在自己的组件上'
                    />
                    <Usage
                        title='fade 淡入淡出'
                    />
                </section>
    }
}

export default Transition
