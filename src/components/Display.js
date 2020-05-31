import React, { Component } from 'react'
import './css_files/Display.css';
class Display extends Component {
    render() {
        if (!this.props.test) {
            return (
                <div className="display-panel">
                    <div className="disp">
                        <h1>0</h1>
                    </div>
                </div>
            )
        }
        return (
            <React.Fragment>
                <div className="display-panel">
                    <div className="disp">
                        <h1>{this.props.test}</h1>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Display
