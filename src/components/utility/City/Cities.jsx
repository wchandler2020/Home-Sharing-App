import React from 'react'
import City from "./City"
import SlickSlider from "../Slider/Slider";

function Cities(props){
    const cities = props.cities.map((city, i) => {    
       return(
        <div className="col s3" key={i}>
            <City city = {city} key={i}/>
        </div>
        )
    })
    return (
    <div className="cities-wrapper">
        <h1 className="main-header-text">{props.header}</h1>
        <SlickSlider elements={cities} />
    </div>
    )
}
export default Cities
