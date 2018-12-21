import React, { Component } from 'react'
import Canvas from './components/Canvas'
import PropTypes from 'prop-types'
import { getCanvasPosition } from "./utils/formulas"

class App extends Component {
    state = {
        mousePosition: null
    }

    componentDidMount() {
        const { moveObjects } = this.props

        setInterval(() => {
            const { mousePosition } = this.state
            moveObjects(mousePosition)
        }, 10)
    }

    trackMouse = event => {
        this.setState({
            mousePosition: getCanvasPosition(event)
        })
    }

    render() {
        const { angle } = this.props

        return (
            <Canvas
                angle={angle}
                trackMouse={this.trackMouse}
            />
    )
  }
}

App.propTypes = {
    angle: PropTypes.number.isRequired,
    moveObjects: PropTypes.func.isRequired
}

export default App;
