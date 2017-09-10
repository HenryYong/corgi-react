/**
 *  Layout文档页
 *  Created @ 2017-07-20 16:50:28
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import DocTitle from 'doc_components/DocTitle'
import Usage from 'doc_components/Usage'
import ColorBlock from 'doc_components/ColorBlock'
import { Row, Col } from 'packages'

class Layout extends React.Component {
    render () {
        return <section className='layout-wrapper'>
                    <DocTitle
                        title='布局'
                        subtitle='基础的页面布局组件，基于12列分栏'
                    />
                    <Usage
                        title='基础用法'
                        description='基础的单行布局'
                        demo={
                            <section>
                                <div className='demo-code-row'>
                                    <Row>
                                        <Col>
                                            <ColorBlock clsName='odd' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className='demo-code-row'>
                                    <Row>
                                        <Col occupied={ 6 }>
                                            <ColorBlock clsName='odd' />
                                        </Col>
                                        <Col occupied={ 6 }>
                                            <ColorBlock clsName='even' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className='demo-code-row'>
                                    <Row>
                                        <Col occupied={ 4 }>
                                            <ColorBlock clsName='odd' />
                                        </Col>
                                        <Col occupied={ 4 }>
                                            <ColorBlock clsName='even' />
                                        </Col>
                                        <Col occupied={ 4 }>
                                            <ColorBlock clsName='odd' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className='demo-code-row'>
                                    <Row>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='odd' />
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='even' />
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='odd' />
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='even' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className='demo-code-row'>
                                    <Row>
                                        <Col occupied={ 2 }>
                                            <ColorBlock clsName='odd' />
                                        </Col>
                                        <Col occupied={ 2 }>
                                            <ColorBlock clsName='even' />
                                        </Col>
                                        <Col occupied={ 2 }>
                                            <ColorBlock clsName='odd' />
                                        </Col>
                                        <Col occupied={ 2 }>
                                            <ColorBlock clsName='even' />
                                        </Col>
                                        <Col occupied={ 2 }>
                                            <ColorBlock clsName='odd' />
                                        </Col>
                                        <Col occupied={ 2 }>
                                            <ColorBlock clsName='even' />
                                        </Col>
                                    </Row>
                                </div>
                            </section>
                        }
                        code="<Row>
                                    <Col>
                                        <ColorBlock clsName='odd' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col occupied={ 6 }>
                                        <ColorBlock clsName='odd' />
                                    </Col>
                                    <Col occupied={ 6 }>
                                        <ColorBlock clsName='even' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col occupied={ 4 }>
                                        <ColorBlock clsName='odd' />
                                    </Col>
                                    <Col occupied={ 4 }>
                                        <ColorBlock clsName='even' />
                                    </Col>
                                    <Col occupied={ 4 }>
                                        <ColorBlock clsName='odd' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='odd' />
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='even' />
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='odd' />
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='even' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col occupied={ 2 }>
                                        <ColorBlock clsName='odd' />
                                    </Col>
                                    <Col occupied={ 2 }>
                                        <ColorBlock clsName='even' />
                                    </Col>
                                    <Col occupied={ 2 }>
                                        <ColorBlock clsName='odd' />
                                    </Col>
                                    <Col occupied={ 2 }>
                                        <ColorBlock clsName='even' />
                                    </Col>
                                    <Col occupied={ 2 }>
                                        <ColorBlock clsName='odd' />
                                    </Col>
                                    <Col occupied={ 2 }>
                                        <ColorBlock clsName='even' />
                                    </Col>
                                </Row>"
                    />
                    <Usage
                        title='子元素间隔'
                        description='子元素之间有间隔'
                        demo={
                            <section>
                                <div className='demo-code-row'>
                                    <Row gap={ 20 }>
                                        <Col occupied={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                    </Row>
                                </div>

                                <div className='demo-code-row'>
                                    <Row gap={ 20 }>
                                        <Col occupied={ 3 } space={ 30 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 } space={ 40 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 } space={ 50 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 } space={ 60 }>
                                            <ColorBlock />
                                        </Col>
                                    </Row>
                                </div>
                            </section>
                        }
                        code="<Row gap={ 20 }>
                                    <Col occupied={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                </Row>
                                <Row gap={ 20 }>
                                    <Col occupied={ 3 } space={ 30 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 } space={ 40 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 } space={ 50 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 } space={ 60 }>
                                        <ColorBlock />
                                    </Col>
                                </Row>"
                    />
                    <Usage
                        title='混合布局'
                        description='任意组合栅格形成更复杂的布局'
                        demo={
                            <section>
                                <div className='demo-code-row'>
                                    <Row gap={ 20 }>
                                        <Col occupied={ 8 }>
                                            <ColorBlock/>
                                        </Col>
                                        <Col occupied={ 4 }>
                                            <ColorBlock/>
                                        </Col>
                                    </Row>
                                </div>

                                <div className='demo-code-row'>
                                    <Row gap={ 20 }>
                                        <Col occupied={ 1 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 8 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                    </Row>
                                </div>

                                <div className='demo-code-row'>
                                    <Row gap={ 20 }>
                                        <Col occupied={ 2 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 6 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 1 }>
                                            <ColorBlock />
                                        </Col>
                                    </Row>
                                </div>
                            </section>
                        }
                        code="<Row gap={ 20 }>
                                    <Col occupied={ 8 }>
                                        <ColorBlock/>
                                    </Col>
                                    <Col occupied={ 4 }>
                                        <ColorBlock/>
                                    </Col>
                                </Row>
                                <Row gap={ 20 }>
                                    <Col occupied={ 1 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 8 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                </Row>
                                <Row gap={ 20 }>
                                    <Col occupied={ 2 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 6 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 1 }>
                                        <ColorBlock />
                                    </Col>
                                </Row>"
                    />
                    <Usage
                        title='分栏偏移'
                        description='支持偏移指定的列数'
                        demo={
                            <section>
                                <div className='demo-code-row'>
                                    <Row>
                                        <Col occupied={ 4 } offset={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 2 } offset={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                    </Row>
                                </div>

                                <div className='demo-code-row'>
                                    <Row>
                                        <Col occupied={ 9 } offset={ 2 }>
                                            <ColorBlock />
                                        </Col>
                                    </Row>
                                </div>

                                <div className='demo-code-row'>
                                    <Row>
                                        <Col occupied={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 } offset={ 4 }>
                                            <ColorBlock />
                                        </Col>
                                    </Row>
                                </div>
                            </section>
                        }
                        code="<Row>
                                    <Col occupied={ 4 } offset={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 2 } offset={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col occupied={ 9 } offset={ 2 }>
                                        <ColorBlock />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col occupied={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 } offset={ 4 }>
                                        <ColorBlock />
                                    </Col>
                                </Row>"
                    />
                    <Usage
                        title='布局方式'
                        description='支持flex布局及其对齐方式'
                        demo={
                            <section>
                                <div className='demo-code-row'>
                                    <Row isFlex={ true }>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='odd'/>
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='odd'/>
                                        </Col>
                                    </Row>
                                </div>

                                <div className='demo-code-row'>
                                    <Row isFlex={ true } justify='center'>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='odd'/>
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='odd'/>
                                        </Col>
                                    </Row>
                                </div>

                                <div className='demo-code-row'>
                                    <Row isFlex={ true } justify='end'>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='odd'/>
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='odd'/>
                                        </Col>
                                    </Row>
                                </div>

                                <div className='demo-code-row'>
                                    <Row isFlex={ true } justify='space-around'>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='odd'/>
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='odd'/>
                                        </Col>
                                    </Row>
                                </div>

                                <div className='demo-code-row'>
                                    <Row isFlex={ true } justify='space-between'>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='odd'/>
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock />
                                        </Col>
                                        <Col occupied={ 3 }>
                                            <ColorBlock clsName='odd'/>
                                        </Col>
                                    </Row>
                                </div>
                            </section>
                        }
                        code="<Row isFlex={ true }>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='odd'/>
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='odd'/>
                                    </Col>
                                </Row>
                                <Row isFlex={ true } justify='center'>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='odd'/>
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='odd'/>
                                    </Col>
                                </Row>
                                <Row isFlex={ true } justify='end'>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='odd'/>
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='odd'/>
                                    </Col>
                                </Row>
                                <Row isFlex={ true } justify='space-around'>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='odd'/>
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='odd'/>
                                    </Col>
                                </Row>
                                <Row isFlex={ true } justify='space-between'>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='odd'/>
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock />
                                    </Col>
                                    <Col occupied={ 3 }>
                                        <ColorBlock clsName='odd'/>
                                    </Col>
                                </Row>"
                    />
                </section>
    }
}

export default Layout
