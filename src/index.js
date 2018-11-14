import React from 'react'
import PropTypes from 'prop-types'
import RecordGalleryCard from './contexts/recordGalleryCard'

export default class MultipleSelectField extends React.Component {

    static propTypes = {
        optionIds: PropTypes.arrayOf(PropTypes.string.isRequired),
        options: PropTypes.shape({
            coloredOptions: PropTypes.bool.isRequired,
            optionsById: PropTypes.object.isRequired,
            options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        })
    }

    render() {

        const {contextId} = this.props

        if (contextId === 'recordGalleryCard') {

            return (
                <RecordGalleryCard
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