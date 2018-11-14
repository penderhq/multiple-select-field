import React from 'react'
import {css} from 'emotion'
import colors from '@cmds/colors'
import get from 'lodash/get'

const Option = ({option}) => (
    <div
        className={css`
            min-width: 18px;
            height: 18px;
            font-size: 13px;
            font-weight: 400;
            background-color: ${get(colors, [option.colorId, 'backgroundColor'])};
            color: ${get(colors, [option.colorId, 'color'])};
            margin-right: 4px;
            border-radius: 9999px;
            line-height: 1.5;
            -webkit-flex: 1 1 auto;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            min-width: 0;
            min-height: 0;
            padding-left: 8px;
            padding-right: 8px;
            display: inline-block;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            -webkit-print-color-adjust: exact;
        `}
    >
        {option.name}
    </div>
)

const OptionList = ({children}) => (
    <div
        className={css`
            position: relative;
            font-size: 13px;
            padding: 0;
            margin: 0;
            vertical-align: top;
            background: #fff;
            color: #000;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            width: 100%;
            overflow: hidden;
        `}
    >
        <div
            className={css`
            position: relative;
        `}
        >
            <div
                className={css`
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex: 1 1 auto;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            min-width: 0;
            min-height: 0;
            overflow: hidden;
            max-width: 100%;
        `}
            >
                {children}
            </div>
        </div>
    </div>
)

export default class RecordGalleryCard extends React.Component {

    render() {

        const {optionIds, options} = this.props

        if (!optionIds) return null

        return (
            <OptionList>
                {optionIds.map(id => {

                    const option = options.options[id]

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