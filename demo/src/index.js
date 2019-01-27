import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import MultipleSelectField from '../../src'

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
        return <div>
            <h1>MultipleSelectField Demo</h1>
            <p>Used for selecting multiple options from a list.</p>
            <h2>
                Without options selected
            </h2>
            <Context contextId={'recordDetail'} roleId={'editor'}/>
            <div
                className={css`
                    width: 240px;
                `}
            >
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
            </div>
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <div
                className={css`
                    width: 240px;
                    height: 22px;
                `}
            >
                <MultipleSelectField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    optionIds={this.state.optionIds}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </div>
            <Context contextId={'recordGalleryCard'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 240px;
                        height: 22px;
                    `}
            >
                <MultipleSelectField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    optionIds={this.state.optionIds}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </div>
            <Context contextId={'recordListItem'} roleId={'readOnly'}/>
            <div
                className={css`
                    width: 240px;
                    height: 22px;
                `}
            >
                <MultipleSelectField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    optionIds={this.state.optionIds}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </div>
            <h2>
                With options selected
            </h2>
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <div
                className={css`
                    width: 460px;
                    min-height: 18px;
                    position: relative;
                    overflow: visible;
                    display: block;
                `}
            >
                <MultipleSelectField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    optionIds={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6', 'opt7', 'opt8', 'opt9', 'opt10', 'opt11', 'opt12']}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </div>
            <Context contextId={'recordGalleryCard'} roleId={'readOnly'}/>
            <div
                className={css`
                    width: 240px;
                    height: 22px;
                `}
            >
                <MultipleSelectField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    optionIds={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </div>
            <Context contextId={'recordListItem'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 240px;
                        height: 22px;
                    `}
            >
                <MultipleSelectField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    optionIds={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </div>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
