import React from 'react'
import PropTypes from 'prop-types'
import { pathFromBezierCurve } from "../../utils/formulas"


const CannonPipe = ({ rotation }) => {
    const style = {
        fill: '#AAA',
        stroke: '#777',
        strokeWidth: '2px'
    }
    const transform = `rotate(${rotation}, 0, 0)`
    const width = 40
    const halfWidth = width / 2
    const height = 100
    const yBasis = 70
    const cubicBezierCurve = {
        initialAxis: {
            x: -halfWidth,
            y: -yBasis
        },
        initialControlPoint: {
            x: -40,
            y: height * 1.7
        },
        endingControlPoint: {
            x: width * 2,
            y: height * 1.7
        },
        endingAxis: {
            x: width,
            y: 0
        }
    }

    return (
        <g transform={transform}>
            <path
               style={style}
               d={pathFromBezierCurve(cubicBezierCurve)}
            />
            <line
                style={style}
                x1={-halfWidth}
                y1={-yBasis}
                x2={halfWidth}
                y2={-yBasis}
            />

        </g>
    )
}

CannonPipe.propTypes = {
            rotation: PropTypes.number.isRequired
}

export default CannonPipe