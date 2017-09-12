/**
 *  Form Doc
 *  Created @ 2017-09-07 00:19:18
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

import React from 'react'
import DocTitle from 'doc_components/DocTitle'
import Usage from 'doc_components/Usage'
import Config from 'doc_components/ConfigTable'
import { Form, Input, Radio, Select, Button } from 'packages'

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
            },
            formAttrs: [
                {
                    props: 'labelAlign',
                    desc: '表单中标签的对齐方式',
                    type: 'String',
                    available: 'left/right/center/top',
                    defaultValue: 'left'
                },
                {
                    props: 'inline',
                    desc: '表单行是否为内联布局',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                },
                {
                    props: 'labelWidth',
                    desc: '标签的宽度',
                    type: 'number',
                    available: '——',
                    defaultValue: '80'
                },
                {
                    props: 'inlineWidth',
                    desc: '内联表单布局时，每个Form.Row子组件的宽度',
                    type: 'Number/String',
                    available: '——',
                    defaultValue: '——'
                }
            ],
            formEvents: [
                {
                    name: 'onSubmit',
                    desc: '提交表单的方法',
                    cbvar: '——'
                }
            ],
            formRowAttrs: [
                {
                    props: 'label',
                    desc: '表单行的标签',
                    type: 'String/JSX',
                    available: '——',
                    defaultValue: '——'
                },
                {
                    props: 'required',
                    desc: '当前行是否必填',
                    type: 'Boolean',
                    available: '——',
                    defaultValue: 'false'
                }
            ]
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
                                    <Form.Row>
                                        <Button type='status'>提交</Button>
                                        <Button>取消</Button>
                                    </Form.Row>
                                </Form>
                            </div>
                        }
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
                                        basicConfig: {
                                            gender: 'male'
                                        },
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
                                        ]
                                    }
                                }

                                basicConfigGender (val) {
                                    this.setState({
                                        basicConfig: {
                                            gender: val
                                        }
                                    })
                                }

                                render () {
                                    return <Form labelWidth={100} labelAlign='right'>
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
                                }"
                        explain="每个表单域由一个Form.Row组成，Form.Row内可以使用任何类型的表单控件"
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
                        code="constructor (props) {
                                    super(props)

                                    this.state = {
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

                                changeLabelAlign (val) {
                                    this.setState({
                                        alignLabel: val,
                                        align: this.state.alignMap[val]
                                    })
                                }

                                render () {
                                    return <div>
                                                <Radio.Group curValue={ this.state.alignLabel }
                                                        onChanged={ this.changeLabelAlign.bind(this) }>
                                                    <Radio.Button value='左对齐' />
                                                    <Radio.Button value='居中对齐' />
                                                    <Radio.Button value='右对齐' />
                                                    <Radio.Button value='顶部对齐' />
                                                </Radio.Group>
                                                <div style={{ paddingTop: '20px' }}>
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
                                }"
                        explain='通过配置align参数可以实现标签的对齐方式'
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
                        code="constructor (props) {
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
                                        ]
                                    }
                                }

                                render () {
                                    return <Form inline={true} labelAlign='center' inlineWidth={300}>
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
                                }"
                        explain='若页面大小受限，配置inline可实现内联表单，配置inlineWidth可控制每一项的宽度'
                    />

                    <Config type='attr'
                        title='Form'
                        data={ this.state.formAttrs }
                    />

                    <Config type='event'
                            title='Form'
                            data={ this.state.formEvents }
                    />

                    <Config type='attr'
                            title='Form.Row'
                            data={ this.state.formRowAttrs }
                    />
                </section>
    }
}

export default PageForm
