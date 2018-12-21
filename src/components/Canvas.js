import React from 'react'
import Sky from './Sky'
import Ground from './Ground'
import Cannon from './Cannon'
import PropTypes from 'prop-types'

const Canvas = ({angle, trackMouse}) => {
    const viewBox = [
        window.innerWidth / -2,
        100 - window.innerHeight,
        window.innerWidth,
        window.innerHeight
    ]
    return (
        <svg
            id="canvas"
            perserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
            onMouseMove={trackMouse}
        >
            <Sky />
            <Ground />
            <Cannon rotation={angle}/>
        </svg>
    )
}

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired
}

export default Canvas