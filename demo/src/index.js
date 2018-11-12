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

class Demo extends Component {
    render() {
        return <div>
            <h1>MultipleSelectField Demo</h1>
            <p>Used for selecting multiple options from a list.</p>
            <h2>Context based</h2>
            <p>The behaviour of the component changes based on the context in which it is rendered.</p>
            <h3>
                MultipleSelectField context
            </h3>
            <p>Used for displaying selected options in a record gallery card.</p>
            <h4>
                Read only role
            </h4>
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
                        options={{
                            options: [{
                                id: 'opt1',
                                colorId: 'blue.base',
                                name: 'Blue'
                            }, {
                                id: 'opt2',
                                colorId: 'green.base',
                                name: 'Green'
                            }, {
                                id: 'opt3',
                                colorId: 'red.base',
                                name: 'Red'
                            }, {
                                id: 'opt4',
                                colorId: 'yellow.base',
                                name: 'Yellow'
                            }, {
                                id: 'opt5',
                                colorId: 'indigo.base',
                                name: 'Indigo'
                            }, {
                                id: 'opt6',
                                colorId: 'purple.base',
                                name: 'Purple'
                            }]
                        }}
                    />
                </div>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
