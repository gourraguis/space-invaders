import React from 'react'
import { gameWidth } from "../utils/constants"

const Ground = () => {
    const groundStyle = {
        fill: '#59a941'
    }
    const division = {
        stroke: '#458232',
        strokeWidth: '3px'
    }

    return (
       <g id="ground">
           <rect
               id="lower-ground"
               data-name="ground"
               style={groundStyle}
               x={gameWidth / -2}
               y={0}
               width={gameWidth}
               height={100}
           />
           <line
               x1={gameWidth / -2}
               y1={0}
               x2={gameWidth / 2}
               y2={0}
               style={division}
           />
       </g>
    )
}

export default Ground