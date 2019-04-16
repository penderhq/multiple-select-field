import React from 'react'
import {css} from 'emotion'
import colors from '@cmds/colors'
import Button from '@cmds/button'
import OptionList from '@cmds/select/lib/OptionList'
import Option from '../../Option'



export default class MultipleSelectField extends React.Component {

    state = {
        open: false
    }

    optionRenderer = ({option}) => {

        const color = colors[option.colorId] || defaultColor

        return (
            <div
                className={css`
                    background-color: ${color.backgroundColor};
                    color: ${color.color};
                    min-width: 18px;
                    height: 18px;
                    font-size: 13px;
                    font-weight: 400;
                    max-width: 100%;
                    align-items: center;
                    display: inline-flex;
                    padding-left: 8px;
                    padding-right: 8px;
                    line-height: 1.5;
                    -webkit-print-color-adjust: exact;
                    border-radius: 9999px;
                    flex: 0 0 auto;
                `}
            >
                {option.name}
            </div>
        )
    }

    render() {

        const optionsById = this.props.options.reduce((result, option) => {
            result[option.id] = option
            return result
        }, {})

        const options = this.props.options.filter(option => {
            return this.props.optionIds.includes(option.id) === false
        })

        return (
            <div>
                <div
                    className={css`
                        margin-bottom: 24px;
                    `}
                >
                    <div
                        className={css`
                            position: relative;
                        `}
                    >
                        <Button
                            onClick={() => this.setState({open: true})}
                        >
                            Select an option
                        </Button>
                        {this.state.open ? (
                            <OptionList
                                className={css`
                                    margin-top: -21px;
                                `}
                                alignLeft={true}
                                options={options}
                                optionRenderer={this.optionRenderer}
                                onOptionClick={this.handleOptionLink}
                                onClickOutside={() => this.setState({open: false})}
                            />
                        ) : null}
                    </div>
                </div>
                {this.props.optionIds && this.props.optionIds.length ? this.props.optionIds.map(id => {

                    const option = optionsById[id]

                    return (
                        <div
                            key={option.id}
                            className={css`
                                max-width: 100%;
                                cursor: pointer;
                                align-items: center;
                                display: inline-flex;
                                flex: none;
                                margin-top: 4px;
                                margin-bottom: 4px;
                                margin-right: 4px;
                            `}
                        >
                            <Option
                                option={option}
                                onRemove={this.handleOptionUnlink}
                            />
                        </div>

                    )
                }) : (
                    <div className={css`opacity: 0.7;`}>
                        No options selected
                    </div>
                )}
            </div>
        )
    }

    handleOptionLink = ({id}) => {

        this.setState({open: false})

        if (this.props.onOptionLink) {
            this.props.onOptionLink({
                id: this.props.id,
                optionId: id
            })
        }
    }

    handleOptionUnlink = ({id}) => {

        if (this.props.onOptionUnlink) {
            this.props.onOptionUnlink({
                id: this.props.id,
                optionId: id
            })
        }
    }
}