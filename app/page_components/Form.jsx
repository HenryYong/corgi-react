/**
 *  Form文档
 *  Created @ 2017-09-07 00:19:18
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import DocTitle from 'doc_components/DocTitle'
import Usage from 'doc_components/Usage'
import { Form, Input, Radio, Select } from 'packages'

class PageForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            cities: [
                {
                    text: '北京'
                },
                {
                    text: '上海'
                },
                {
                    text: '广州'
                },
                {
                    text: '深圳'
                }
            ],
            basicConfig: {
                gender: 'male'
            },
            alignLabel: '左对齐',
            align: 'left',
            alignMap: {
                '左对齐': 'left',
                '居中对齐': 'center',
                '右对齐': 'right',
                '顶部对齐': 'top'
            }
        }
    }

    basicConfigGender (val) {
        this.setState({
            basicConfig: {
                gender: val
            }
        })
    }

    changeLabelAlign (val) {
        this.setState({
            alignLabel: val,
            align: this.state.alignMap[val]
        })
    }

    render () {
        return <section className="form-wrapper">
                    <DocTitle
                        title='表单'
                        subtitle='由各种表单元素组合而成'
                    />
                    <Usage
                        title='基础用法'
                        description='默认配置的基础单选'
                        demo={
                            <div className="demo-block">
                                <Form labelWidth={100} labelAlign='right'>
                                    <Form.Row label='手机号码' required={true}>
                                        <Input
                                            placeholder='请输入手机号码'
                                        />
                                    </Form.Row>
                                    <Form.Row label='昵称'>
                                        <Input
                                            placeholder='请输入昵称'
                                        />
                                    </Form.Row>
                                    <Form.Row label='性别'>
                                        <Radio.Group curValue={ this.state.basicConfig.gender }
                                            onChanged={ this.basicConfigGender.bind(this) }
                                        >
                                            <Radio value='male'>男</Radio>
                                            <Radio value='female'>女</Radio>
                                            <Radio value='unknown'>保密</Radio>
                                        </Radio.Group>
                                    </Form.Row>
                                    <Form.Row label='城市' required={true}>
                                        <Select
                                            list={ this.state.cities }
                                            placeholder='请选择城市' />
                                    </Form.Row>
                                    <Form.Row label='简介'>
                                        <Input
                                            mode='textarea'
                                            rows={6}
                                        />
                                    </Form.Row>
                                </Form>
                            </div>
                        }
                    />

                    <Usage
                        title='对齐方式'
                        description='根据页面大小可配置左侧标签不同的对齐方式'
                        demo={
                            <div className="form-align">
                                <Radio.Group curValue={ this.state.alignLabel }
                                        onChanged={ this.changeLabelAlign.bind(this) }>
                                    <Radio.Button value='左对齐' />
                                    <Radio.Button value='居中对齐' />
                                    <Radio.Button value='右对齐' />
                                    <Radio.Button value='顶部对齐' />
                                </Radio.Group>
                                <div className="demo-block" style={{ paddingTop: '20px' }}>
                                    <Form labelAlign={ this.state.align }>
                                        <Form.Row label='姓名'>
                                            <Input/>
                                        </Form.Row>
                                        <Form.Row label='地址'>
                                            <Input/>
                                        </Form.Row>
                                        <Form.Row label='留言'>
                                            <Input/>
                                        </Form.Row>
                                    </Form>
                                </div>
                            </div>
                        }
                    />

                    <Usage
                        title='内联表单'
                        description='当页面大小受限制时，可使用内联表单'
                        demo={
                            <Form inline={true} labelAlign='center' inlineWidth={300}>
                                <Form.Row label='城市'>
                                    <Select
                                        list={ this.state.cities }
                                        placeholder='请选择城市'
                                    />
                                </Form.Row>
                                <Form.Row label='详细地址'>
                                    <Input
                                        placeholder='请输入详细地址'
                                    />
                                </Form.Row>
                            </Form>
                        }
                    />
                </section>
    }
}

export default PageForm
