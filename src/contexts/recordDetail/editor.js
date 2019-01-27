import React from 'react'
import {css} from 'emotion'
import OptionList from '@cmds/select/es/OptionList'
import Option from '../../Option'

export default class MultipleSelectField extends React.Component {

    state = {
        open: false
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
                        <button
                            type={'button'}
                            className={css`
                                padding-top: 4px;
                                padding-bottom: 4px;
                                padding-left: 16px;
                                padding-right: 16px;
                                border-radius: 3px;
                                background-color: hsla(0,0%,0%,0.05);
                                font-weight: 500;
                                color: #111;
                                border: none;
                            `}
                            onClick={() => this.setState({open: true})}
                        >
                            Select an option
                        </button>
                        {this.state.open ? (
                            <OptionList
                                className={css`
                                margin-top: -21px;
                            `}
                                alignLeft={true}
                                options={options}
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