import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import MultipleSelectField from '../../src'
import {Canvas, Heading, Paragraph, Box} from '@cmds/demo-utils'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

const Context = ({contextId, roleId}) => (
    <div
        className={css`
            margin-top: 32px;
            margin-bottom: 24px;
        `}
    >
        <strong>Context:</strong> {contextId}, <strong>Role:</strong> {roleId}
    </div>
)

const FIELD_OPTIONS = [
    {
        id: 'opt1',
        colorId: 'blue.base',
        name: 'Blue'
    },
    {
        id: 'opt2',
        colorId: 'green.base',
        name: 'Green'
    },
    {
        id: 'opt3',
        colorId: 'red.base',
        name: 'Red'
    },
    {
        id: 'opt4',
        colorId: 'yellow.base',
        name: 'Yellow'
    },
    {
        id: 'opt5',
        colorId: 'indigo.base',
        name: 'Indigo'
    },
    {
        id: 'opt6',
        colorId: 'purple.base',
        name: 'Purple'
    },
    {
        id: 'opt7',
        colorId: 'blue.lighter',
        name: 'Blue'
    },
    {
        id: 'opt8',
        colorId: 'green.lighter',
        name: 'Green'
    },
    {
        id: 'opt9',
        colorId: 'red.lighter',
        name: 'Red'
    },
    {
        id: 'opt10',
        colorId: 'yellow.lighter',
        name: 'Yellow'
    },
    {
        id: 'opt11',
        colorId: 'indigo.lighter',
        name: 'Indigo'
    },
    {
        id: 'opt12',
        colorId: 'purple.lighter',
        name: 'Purple'
    }
]

class Demo extends Component {

    state = {
        optionIds: []
    }

    handleOptionLink = ({optionId}) => {

        const optionIds = [].concat(this.state.optionIds)

        optionIds.push(optionId)

        this.setState({
            optionIds
        })
    }

    handleOptionUnlink = ({optionId}) => {

        const optionIds = this.state.optionIds.filter(id => {
            return optionId !== id
        })

        this.setState({
            optionIds
        })
    }

    render() {
        return <Canvas>
            <Heading>
                Record Detail Context
            </Heading>
            <Paragraph>
                Without options selected and editor role
            </Paragraph>
            <Box>
                <MultipleSelectField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    optionIds={this.state.optionIds}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                    onOptionLink={this.handleOptionLink}
                    onOptionUnlink={this.handleOptionUnlink}
                />
            </Box>
            <Paragraph>
                Without options selected and read only role
            </Paragraph>
            <Box>
                <MultipleSelectField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    optionIds={this.state.optionIds}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </Box>
            <Paragraph>
                With options selected and read only role
            </Paragraph>
            <Box>
                <MultipleSelectField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    optionIds={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6', 'opt7', 'opt8', 'opt9', 'opt10', 'opt11', 'opt12']}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </Box>
            <Heading>
                Record Gallery Card Context
            </Heading>
            <Paragraph>
                Without options selected and read only role
            </Paragraph>
            <Box>
                <MultipleSelectField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    optionIds={this.state.optionIds}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </Box>
            <Paragraph>
                With options selected and read only role
            </Paragraph>
            <Box>
                <MultipleSelectField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    optionIds={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </Box>
            <Heading>
                Record List Item Context
            </Heading>
            <Paragraph>
                Without options selected and read only role
            </Paragraph>
            <Box>
                <MultipleSelectField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    optionIds={this.state.optionIds}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </Box>
            <Paragraph>
                With options selected and read only role
            </Paragraph>
            <Box>
                <MultipleSelectField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    optionIds={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </Box>
        </Canvas>
    }
}

render(<Demo/>, document.querySelector('#demo'))
