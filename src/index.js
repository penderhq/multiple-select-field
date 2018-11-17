import React from 'react'
import PropTypes from 'prop-types'
import RecordDetailReadOnly from './contexts/recordDetail/readOnly'
import RecordGalleryCard from './contexts/recordGalleryCard'
import RecordListItem from './contexts/recordListItem'

export default class MultipleSelectField extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        contextId: PropTypes.oneOf(['recordDetail', 'recordGridRow', 'recordGalleryCard', 'recordListItem']),
        roleId: PropTypes.oneOf(['editor', 'readOnly']),
        optionIds: PropTypes.arrayOf(PropTypes.string.isRequired),
        coloredOptions: PropTypes.bool.isRequired,
        options: PropTypes.object.isRequired,
        optionOrder: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        onLink: PropTypes.func,
        onUnlink: PropTypes.func,
        onClear: PropTypes.func,
        onSort: PropTypes.func
    }

    render() {

        const {contextId, roleId} = this.props

        if (contextId === 'recordDetail' && roleId === 'readOnly') {

            return (
                <RecordDetailReadOnly
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordGalleryCard') {

            return (
                <RecordGalleryCard
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordListItem') {

            return (
                <RecordListItem
                    {...this.props}
                />
            )
        }

        return (
            <div>
                Not supported
            </div>
        )
    }
}