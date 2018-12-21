import React from 'react'
import { gameWidth } from "../utils/constants"

const Sky = () => {
    const skyStyle = {
        fill: '#30abef'
    }
    const gameHeight = 1200

    return (
        <rect
            style={skyStyle}
            x={gameWidth / -2}
            y={100 - gameHeight}
            width={gameWidth}
            height={gameHeight}
        />
    )
}

export default Sky