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

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

const stringifyJSON = (args) => {
    try {
        return JSON.stringify(args, null, 2)
    } catch (e) {
        return null
    }
}

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${stringifyJSON(args)}
    `)
}

const FIELD_OPTIONS = {
    'opt1': {
        id: 'opt1',
        colorId: 'blue.base',
        name: 'Blue'
    },
    'opt2': {
        id: 'opt2',
        colorId: 'green.base',
        name: 'Green'
    },
    'opt3': {
        id: 'opt3',
        colorId: 'red.base',
        name: 'Red'
    },
    'opt4': {
        id: 'opt4',
        colorId: 'yellow.base',
        name: 'Yellow'
    },
    'opt5': {
        id: 'opt5',
        colorId: 'indigo.base',
        name: 'Indigo'
    },
    'opt6': {
        id: 'opt6',
        colorId: 'purple.base',
        name: 'Purple'
    },
    'opt7': {
        id: 'opt7',
        colorId: 'blue.lighter',
        name: 'Blue'
    },
    'opt8': {
        id: 'opt8',
        colorId: 'green.lighter',
        name: 'Green'
    },
    'opt9': {
        id: 'opt9',
        colorId: 'red.lighter',
        name: 'Red'
    },
    'opt10': {
        id: 'opt10',
        colorId: 'yellow.lighter',
        name: 'Yellow'
    },
    'opt11': {
        id: 'opt11',
        colorId: 'indigo.lighter',
        name: 'Indigo'
    },
    'opt12': {
        id: 'opt12',
        colorId: 'purple.lighter',
        name: 'Purple'
    },
}

class Demo extends Component {
    render() {
        return <div>
            <h1>MultipleSelectField Demo</h1>
            <p>Used for selecting multiple options from a list.</p>
            <h2>Context based</h2>
            <p>The behaviour of the component changes based on the context in which it is rendered.</p>
            <h3>
                RecordDetail context
            </h3>
            <p>Used for displaying selected options in a record detail.</p>
            <h4>
                Read only role
            </h4>
            <h5>
                With options
            </h5>
            <Viewport>
                <div
                    className={css`
                        width: 460px;
                        background-color: #fff;
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
            </Viewport>
            <h5>
                With no options
            </h5>
            <Viewport>
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
                        optionIds={null}
                        coloredOptions={true}
                        optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                        options={FIELD_OPTIONS}
                    />
                </div>
            </Viewport>
            <h3>
                RecordGalleryCard context
            </h3>
            <p>Used for displaying selected options in a record gallery card.</p>
            <h4>
                Read only role
            </h4>
            <h5>
                With options
            </h5>
            <Viewport>
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
            </Viewport>
            <h5>
                With no options
            </h5>
            <Viewport>
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
                        optionIds={null}
                        coloredOptions={true}
                        optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                        options={FIELD_OPTIONS}
                    />
                </div>
            </Viewport>
            <h3>
                RecordListItem context
            </h3>
            <p>Used for displaying selected options in a record list item.</p>
            <h4>
                Read only role
            </h4>
            <h5>
                With options
            </h5>
            <Viewport>
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
            </Viewport>
            <h5>
                With no options
            </h5>
            <Viewport>
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
                        optionIds={null}
                        coloredOptions={true}
                        optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                        options={FIELD_OPTIONS}
                    />
                </div>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
