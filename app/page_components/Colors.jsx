/**
 *  Colors文档页
 *  Created @ 2017-07-20 16:53:29
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import DocTitle from 'doc_components/DocTitle'
import UsageTitle from 'doc_components/UsageTitle'
import ColorBlock from 'doc_components/ColorBlock'
import { Row, Col } from 'packages'

class Colors extends React.Component {
    render () {
        return <section className="colors-wrapper">
                    <DocTitle
                        title='颜色'
                        subtitle='组件库的常用颜色，基于腾讯蓝鲸智云MagicBox设计规范'
                    />
                    <UsageTitle
                        title='重要颜色'
                        description='组件库的主要颜色'
                    />
                    <Row gap={ 10 }>
                        <Col occupied={ 3 }>
                            <ColorBlock
                                clsName='primary-bg'
                                title='Primary'
                                subtitle='#57a3f1'
                            />
                        </Col>
                        <Col occupied={ 3 }>
                            <ColorBlock
                                clsName='important-dark-bg'
                                title='Important Dark'
                                subtitle='#4491e1'
                            />
                        </Col>
                        <Col occupied={ 3 }>
                            <ColorBlock
                                clsName='info-bg'
                                title='Info'
                                subtitle='#88c3ff'
                            />
                        </Col>
                        <Col occupied={ 3 }>
                            <ColorBlock
                                clsName='important-light-bg dark-text'
                                title='Important Light'
                                subtitle="#e4edf7"
                            />
                        </Col>
                    </Row>
                    <UsageTitle
                        title='信息展示色'
                        description='在不同场景和信息类型下的颜色'
                    />
                    <Row gap={ 10 }>
                        <Col occupied={ 3 }>
                            <ColorBlock
                                clsName='success-bg'
                                title='Success'
                                subtitle='#5bd18b'
                            />
                        </Col>
                        <Col occupied={ 3 }>
                            <ColorBlock
                                clsName='warning-bg'
                                title='Warning'
                                subtitle='#ffc349'
                            />
                        </Col>
                        <Col occupied={ 3 }>
                            <ColorBlock
                                clsName='attention-bg'
                                title='Attention'
                                subtitle='#ffa65f'
                            />
                        </Col>
                        <Col occupied={ 3 }>
                            <ColorBlock
                                clsName='error-bg'
                                title='Error'
                                subtitle='#ff7979'
                            />
                        </Col>
                    </Row>
                    <UsageTitle
                        title='辅助颜色'
                        description='辅助颜色用于字体，边框，阴影等'
                    />
                    <Row gap={ 10 }>
                        <Col occupied={ 3 }>
                            <Row>
                                <Col>
                                    <ColorBlock
                                        clsName='black-bg upper-no-border'
                                        title='Black'
                                        subtitle='#333'
                                    />
                                </Col>
                                <Col>
                                    <ColorBlock
                                        clsName='black-light-bg lower-no-border'
                                        title='Black Light'
                                        subtitle='#666'
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col occupied={ 3 }>
                            <Row>
                                <Col>
                                    <ColorBlock
                                        clsName='grey-bg upper-no-border'
                                        title='Grey'
                                        subtitle='#999'
                                    />
                                </Col>
                                <Col>
                                    <ColorBlock
                                        clsName='grey-light-bg lower-no-border'
                                        title='Grey Light'
                                        subtitle='#ccc'
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col occupied={ 3 }>
                            <Row>
                                <Col>
                                    <ColorBlock
                                        clsName='white-dark-bg upper-no-border dark-text'
                                        title='White Dark'
                                        subtitle='#e6e6e6'
                                    />
                                </Col>
                                <Col>
                                    <ColorBlock
                                        clsName='white-bg lower-no-border dark-text color-block-white-border'
                                        title='White'
                                        subtitle='#fff'
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col occupied={ 3 }>
                            <Row>
                                <Col>
                                    <ColorBlock
                                        clsName='supplementary-dark-bg upper-no-border dark-text'
                                        title='Supplementary Dark'
                                        subtitle='#b2beca'
                                    />
                                </Col>
                                <Col>
                                    <ColorBlock
                                        clsName='supplementary-light-bg lower-no-border dark-text'
                                        title='Supplementary Light'
                                        subtitle='#f5f5f5'
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
    }
}

export default Colors
