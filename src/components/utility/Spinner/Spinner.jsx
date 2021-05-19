import React, { Component } from 'react';
import loadin_image from "../../../images/loading.gif"

class Spinner extends Component {
    render() {
        return (
            <div className="spinner">
                <img src={loadin_image} alt="LOADING..."/>
            </div>
        )
    }
}

export default Spinner
