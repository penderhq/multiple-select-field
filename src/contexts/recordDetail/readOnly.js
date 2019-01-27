import React from 'react'
import {css} from 'emotion'
import colors from '@cmds/colors'
import get from 'lodash/get'

const Option = ({option}) => (
    <div
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
        <span
            className={css`
                background-color: ${get(colors, [option.colorId, 'backgroundColor'])};
                color: ${get(colors, [option.colorId, 'color'])};
                min-width: 18px;
                height: 18px;
                font-size: 13px;
                font-weight: 400;
                    border-radius: 9999px;
                    max-width: 100%;
                    flex: none;
                    align-items: center;
                    display: inline-flex;
                    padding-left: 8px;
                    padding-right: 8px;
                    line-height: 1.5;
                        -webkit-print-color-adjust: exact;
                        cursor: pointer;
            `}
        >
            <div
                className={css`
                    flex: 1 1 auto;
                    min-width: 0;
                    min-height: 0;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                `}
            >
                {option.name}
            </div>
        </span>
    </div>
)

const OptionList = ({children}) => (
    <div
        className={css`
            font-size: 13px;
            padding: 0;
            margin: 0;
            color: #111111;
            cursor: default;
            outline: none;
            display: flex;
            flex-wrap: wrap;
            vertical-align: middle;
            position: relative;
            white-space: normal;
            line-height: 12px;
            overflow: visible;
            background-color: transparent;
            width: 100%;
            height: auto;
        `}
    >
        <div
            className={css`
                display: flex;
                flex: 1 1 auto;
                min-width: 0;
                min-height: 0;
            `}
        >
            <div
                className={css`
                    flex: 1 1 auto;
                    min-width: 0;
                    min-height: 0;
                `}
            >
                <div
                    className={css`
                        display: flex;
                        position: relative;
                        overflow: auto;
                        align-content: flex-start;
                        align-items: flex-start;
                        flex-wrap: wrap;
                    `}
                >
                    {children}
                </div>
            </div>
        </div>
    </div>
)

export default class RecordListItem extends React.Component {

    render() {

        const {optionIds, options} = this.props

        const optionsById = options.reduce((result, option) => {
            result[option.id] = option
            return result
        }, {})

        if (!optionIds) return null

        return (
            <OptionList>
                {optionIds.map(id => {

                    const option = optionsById[id]

                    return (
                        <Option
                            key={id}
                            id={id}
                            option={option}
                        />
                    )
                })}
            </OptionList>
        )
    }
}