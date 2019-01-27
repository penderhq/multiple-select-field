import React from 'react'
import {css, cx} from 'emotion'
import get from 'lodash/get'
import colors from '@cmds/colors'
import icons from './icons'

export default ({className, option, onRemove}) => (
    <div
        className={cx(
            css`
            min-width: 18px;
            height: 18px;
            font-size: 13px;
            font-weight: 400;
            background-color: ${get(colors, [option.colorId, 'backgroundColor'])};
            color: ${get(colors, [option.colorId, 'color'])};
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
        `, className
        )}
    >
        <div
            className={css`
                display: flex;
                align-items: center;
            `}
        >
            {option.name}
            {onRemove ?
                icons.close({
                    height: 12,
                    className: css`
                        cursor: pointer;
                        margin-left: 4px;
                        display: flex;
                        &:active {
                            opacity: 0.75;
                        }
                    `,
                    onClick: () => onRemove({id: option.id})
                })
                : null
            }
        </div>
    </div>
)