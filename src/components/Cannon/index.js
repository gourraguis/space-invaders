import React from 'react'
import CannonBase from './CannonBase'
import CannonPipe from './CannonPipe'
import PropTypes from 'prop-types'

const Cannon = ({ rotation }) => (
    <>
        <CannonBase/>
        <CannonPipe rotation={rotation}/>
    </>
)

Cannon.propTypes = {
    rotation: PropTypes.number.isRequired
}

export default Cannon