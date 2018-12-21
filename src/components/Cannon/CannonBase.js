import React from 'react'
import { pathFromBezierCurve } from "../../utils/formulas"

const CannonBase = () => {
    const style = {
        fill: '#a16012',
        stroke: '#75450e',
        strokeWidth: '2px'
    }
    const baseWidth = 80
    const halfBase = baseWidth / 2
    const height = 60
    const negativeHeight = height * -1
    const cubicBezierCurve = {
        initialAxis: {
            x: -halfBase,
            y: height
        },
        initialControlPoint: {
            x: halfBase / 2,
            y: negativeHeight
        },
        endingControlPoint: {
            x: halfBase * 1.5,
            y: negativeHeight
        },
        endingAxis: {
            x: baseWidth,
            y: 0
        }
    }

    return (
        <g>
            <path
                style={style}
                d={pathFromBezierCurve(cubicBezierCurve)}
            />
            <line
                x1={-halfBase}
                y1={height}
                x2={halfBase}
                y2={height}
                style={style}
            />
        </g>
    )
}

export default CannonBase