import React, { Component } from 'react';
import {Link} from "react-router-dom"

class City extends Component {
    render() {
        const { cityName, image, price, id} = this.props.city;
        return(
            <div className="city col s12">
                <Link to={`/city/${id}`}>
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                    <div className="city-name">
                        {cityName}
                    </div>
                    <div className="price">${price}/per night</div>
                </Link>
            </div>
        )
    }
}

export default City
